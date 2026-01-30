# Cursor + 外部 Agent 编排实战教程

> 目标：让 Cursor 通过 MCP 或 n8n 调用多个专业 Agent 协作完成复杂任务

---

## 一、架构概览

### 方式 A：Cursor + Claude MCP

```
┌─────────────┐      ┌─────────────────────────────────────┐
│   Cursor    │      │         MCP Server                  │
│   (IDE)     │─────▶│  ┌─────────┐  ┌─────────┐          │
│             │      │  │Designer │  │Developer│  ...     │
│             │◀─────│  │ Agent   │  │ Agent   │          │
└─────────────┘      │  └─────────┘  └─────────┘          │
                     └─────────────────────────────────────┘
```

### 方式 B：Cursor + n8n + 多模型

```
┌─────────────┐      ┌──────────┐      ┌─────────────────────┐
│   Cursor    │─────▶│  n8n     │─────▶│  GPT-4 (需求分析)   │
│             │      │ Workflow │─────▶│  Claude (代码生成)  │
│             │◀─────│          │─────▶│  GPT-4 (代码审查)   │
└─────────────┘      └──────────┘      └─────────────────────┘
```

---

## 二、方式 A：Cursor + MCP 实现

### 2.1 前置准备

**需要安装：**
- Node.js 18+
- Cursor IDE（已支持 MCP）
- Claude API Key

### 2.2 创建 MCP Server

**项目结构：**
```
cursor-mcp-agents/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts          # MCP 服务入口
│   ├── agents/
│   │   ├── designer.ts   # UI 设计 Agent
│   │   ├── developer.ts  # 开发 Agent
│   │   ├── reviewer.ts   # 审查 Agent
│   │   └── writer.ts     # 文档 Agent
│   └── prompts/
│       ├── designer.md
│       ├── developer.md
│       ├── reviewer.md
│       └── writer.md
└── README.md
```

**package.json:**
```json
{
  "name": "cursor-mcp-agents",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0",
    "@anthropic-ai/sdk": "^0.30.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
```

**src/index.ts:**
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const anthropic = new Anthropic();

// 加载 Agent Prompts
function loadPrompt(name: string): string {
  return readFileSync(join(__dirname, "prompts", `${name}.md`), "utf-8");
}

const AGENTS = {
  designer: {
    name: "designer",
    description: "UI/UX 设计 Agent - 负责组件设计、样式方案、交互流程",
    prompt: loadPrompt("designer"),
  },
  developer: {
    name: "developer", 
    description: "前端开发 Agent - 负责代码实现、状态管理、API 对接",
    prompt: loadPrompt("developer"),
  },
  reviewer: {
    name: "reviewer",
    description: "代码审查 Agent - 负责代码质量、性能优化、安全检查",
    prompt: loadPrompt("reviewer"),
  },
  writer: {
    name: "writer",
    description: "技术文档 Agent - 负责文档撰写、注释、README",
    prompt: loadPrompt("writer"),
  },
};

// 调用指定 Agent
async function callAgent(
  agentName: string,
  task: string,
  context?: string
): Promise<string> {
  const agent = AGENTS[agentName as keyof typeof AGENTS];
  if (!agent) {
    throw new Error(`Unknown agent: ${agentName}`);
  }

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: agent.prompt,
    messages: [
      {
        role: "user",
        content: context 
          ? `## 上下文\n${context}\n\n## 任务\n${task}`
          : task,
      },
    ],
  });

  return message.content[0].type === "text" 
    ? message.content[0].text 
    : "";
}

// 编排多 Agent 工作流
async function orchestrateWorkflow(
  task: string,
  workflow: string[]
): Promise<string> {
  let context = "";
  const results: string[] = [];

  for (const agentName of workflow) {
    const result = await callAgent(agentName, task, context);
    results.push(`## ${agentName.toUpperCase()} Agent 输出\n\n${result}`);
    context += `\n\n---\n${agentName} 的输出:\n${result}`;
  }

  return results.join("\n\n---\n\n");
}

// 创建 MCP Server
const server = new Server(
  { name: "cursor-mcp-agents", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

// 注册工具列表
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    // 单个 Agent 调用
    ...Object.values(AGENTS).map((agent) => ({
      name: `call_${agent.name}`,
      description: agent.description,
      inputSchema: {
        type: "object" as const,
        properties: {
          task: { type: "string", description: "要执行的任务描述" },
          context: { type: "string", description: "可选的上下文信息" },
        },
        required: ["task"],
      },
    })),
    // 工作流编排
    {
      name: "run_workflow",
      description: "按顺序执行多个 Agent，后一个 Agent 可以看到前面的输出",
      inputSchema: {
        type: "object" as const,
        properties: {
          task: { type: "string", description: "任务描述" },
          agents: {
            type: "array",
            items: { type: "string" },
            description: "Agent 执行顺序，如 ['designer', 'developer', 'reviewer']",
          },
        },
        required: ["task", "agents"],
      },
    },
    // 预设工作流
    {
      name: "new_feature_workflow",
      description: "新功能开发完整流程：设计 → 开发 → 审查 → 文档",
      inputSchema: {
        type: "object" as const,
        properties: {
          feature: { type: "string", description: "功能需求描述" },
        },
        required: ["feature"],
      },
    },
  ],
}));

// 处理工具调用
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  // 单个 Agent 调用
  if (name.startsWith("call_")) {
    const agentName = name.replace("call_", "");
    const result = await callAgent(
      agentName,
      args.task as string,
      args.context as string | undefined
    );
    return { content: [{ type: "text", text: result }] };
  }

  // 自定义工作流
  if (name === "run_workflow") {
    const result = await orchestrateWorkflow(
      args.task as string,
      args.agents as string[]
    );
    return { content: [{ type: "text", text: result }] };
  }

  // 预设：新功能开发流程
  if (name === "new_feature_workflow") {
    const result = await orchestrateWorkflow(args.feature as string, [
      "designer",
      "developer", 
      "reviewer",
      "writer",
    ]);
    return { content: [{ type: "text", text: result }] };
  }

  throw new Error(`Unknown tool: ${name}`);
});

// 启动服务
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Agents Server running...");
}

main().catch(console.error);
```

### 2.3 Agent Prompts

**src/prompts/designer.md:**
```markdown
# UI/UX Designer Agent

你是一位资深 UI/UX 设计师，精通：
- React + Tailwind CSS 组件设计
- 响应式布局和移动端适配
- 设计系统和组件规范
- 交互动效设计

## 工作原则

1. **先理解需求**：明确用户场景、目标用户、核心功能
2. **组件结构设计**：用 ASCII 或伪代码描述组件结构
3. **样式方案**：配色、间距、字体、动效
4. **响应式策略**：桌面、平板、手机的适配方案
5. **边界情况**：空状态、加载状态、错误状态

## 输出格式

1. 需求理解摘要
2. 组件结构图（ASCII）
3. 样式方案（Tailwind 类名）
4. 交互说明
5. 需要开发 Agent 注意的要点
```

**src/prompts/developer.md:**
```markdown
# Frontend Developer Agent

你是一位资深前端开发工程师，精通：
- React 18 + TypeScript
- 状态管理（Zustand/Jotai）
- API 对接和数据处理
- 性能优化

## 工作原则

1. **代码质量优先**：类型安全、可维护、可测试
2. **遵循设计稿**：严格还原设计 Agent 的方案
3. **错误处理**：考虑各种边界情况
4. **性能意识**：避免不必要的渲染

## 输出格式

1. 实现思路说明
2. 完整代码（带类型定义）
3. 使用示例
4. 需要审查 Agent 关注的点
```

**src/prompts/reviewer.md:**
```markdown
# Code Reviewer Agent

你是一位严格的代码审查专家，关注：
- 代码质量和可维护性
- 性能问题和优化机会
- 安全漏洞
- 最佳实践

## 审查维度

1. **代码结构**：是否清晰、模块化
2. **类型安全**：TypeScript 类型是否完善
3. **性能**：是否有性能隐患
4. **安全**：是否有 XSS、注入等风险
5. **可维护性**：是否易于理解和修改

## 输出格式

1. 总体评价（✅ 通过 / ⚠️ 需修改 / ❌ 重写）
2. 具体问题列表（按严重程度排序）
3. 优化建议
4. 修改后的代码（如有必要）
```

**src/prompts/writer.md:**
```markdown
# Technical Writer Agent

你是一位技术文档专家，擅长：
- 组件文档和 API 文档
- README 和使用指南
- 代码注释

## 文档原则

1. **清晰简洁**：避免冗余，直达重点
2. **示例驱动**：提供可运行的代码示例
3. **结构化**：使用标题、列表、表格组织内容
4. **面向用户**：考虑读者的知识背景

## 输出格式

1. 组件概述
2. Props/API 说明（表格形式）
3. 使用示例（多个场景）
4. 注意事项
5. 相关链接
```

### 2.4 配置 Cursor

**在 Cursor 设置中添加 MCP Server：**

1. 打开 Cursor Settings → MCP
2. 添加新的 MCP Server：

```json
{
  "mcpServers": {
    "cursor-agents": {
      "command": "node",
      "args": ["/path/to/cursor-mcp-agents/dist/index.js"],
      "env": {
        "ANTHROPIC_API_KEY": "your-api-key"
      }
    }
  }
}
```

### 2.5 使用方式

在 Cursor 中直接使用：

```
// 调用单个 Agent
@mcp call_designer 设计一个数据统计卡片组件

// 自定义工作流
@mcp run_workflow 
  task: "实现一个用户列表页面，支持搜索和分页"
  agents: ["designer", "developer", "reviewer"]

// 使用预设工作流
@mcp new_feature_workflow 
  feature: "实现一个文件上传组件，支持拖拽、预览、进度显示"
```

---

## 三、方式 B：n8n + 多模型编排

### 3.1 架构说明

```
Cursor (HTTP 请求)
    ↓
n8n Webhook 接收
    ↓
┌─────────────────────────────────────┐
│  n8n Workflow                        │
│  ┌─────────┐                        │
│  │ GPT-4   │ → 需求分析、拆解任务   │
│  └────┬────┘                        │
│       ↓                             │
│  ┌─────────┐                        │
│  │ Claude  │ → 代码生成            │
│  └────┬────┘                        │
│       ↓                             │
│  ┌─────────┐                        │
│  │ GPT-4   │ → 代码审查            │
│  └────┬────┘                        │
│       ↓                             │
│  合并结果返回                        │
└─────────────────────────────────────┘
    ↓
Cursor 接收结果
```

### 3.2 部署 n8n

**Docker 部署：**
```bash
docker run -d \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  -e GENERIC_TIMEZONE="Asia/Shanghai" \
  n8nio/n8n
```

### 3.3 创建 Workflow

**n8n Workflow JSON（导入即可使用）：**

```json
{
  "name": "Multi-Agent Code Pipeline",
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": {
        "path": "agent-pipeline",
        "httpMethod": "POST",
        "responseMode": "responseNode"
      }
    },
    {
      "name": "GPT-4 需求分析",
      "type": "n8n-nodes-base.openAi",
      "position": [450, 300],
      "parameters": {
        "resource": "chat",
        "model": "gpt-4o",
        "messages": {
          "values": [
            {
              "role": "system",
              "content": "你是一位产品经理，负责分析需求并拆解成具体的开发任务。输出格式：\n1. 需求理解\n2. 功能点列表\n3. 技术要点\n4. 验收标准"
            },
            {
              "role": "user", 
              "content": "={{ $json.body.task }}"
            }
          ]
        }
      }
    },
    {
      "name": "Claude 代码生成",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 300],
      "parameters": {
        "url": "https://api.anthropic.com/v1/messages",
        "method": "POST",
        "headers": {
          "x-api-key": "={{ $env.ANTHROPIC_API_KEY }}",
          "anthropic-version": "2023-06-01",
          "content-type": "application/json"
        },
        "body": {
          "model": "claude-sonnet-4-20250514",
          "max_tokens": 4096,
          "system": "你是一位资深前端开发工程师，根据需求分析生成高质量的 React + TypeScript 代码。",
          "messages": [
            {
              "role": "user",
              "content": "基于以下需求分析，生成完整的代码实现：\n\n{{ $node['GPT-4 需求分析'].json.message.content }}"
            }
          ]
        }
      }
    },
    {
      "name": "GPT-4 代码审查",
      "type": "n8n-nodes-base.openAi",
      "position": [850, 300],
      "parameters": {
        "resource": "chat",
        "model": "gpt-4o",
        "messages": {
          "values": [
            {
              "role": "system",
              "content": "你是一位代码审查专家。审查以下代码，指出问题并给出优化建议。输出格式：\n1. 总体评价\n2. 问题列表\n3. 优化建议\n4. 修改后的代码（如需要）"
            },
            {
              "role": "user",
              "content": "={{ $node['Claude 代码生成'].json.content[0].text }}"
            }
          ]
        }
      }
    },
    {
      "name": "合并结果",
      "type": "n8n-nodes-base.set",
      "position": [1050, 300],
      "parameters": {
        "values": {
          "string": [
            {
              "name": "analysis",
              "value": "={{ $node['GPT-4 需求分析'].json.message.content }}"
            },
            {
              "name": "code",
              "value": "={{ $node['Claude 代码生成'].json.content[0].text }}"
            },
            {
              "name": "review",
              "value": "={{ $node['GPT-4 代码审查'].json.message.content }}"
            }
          ]
        }
      }
    },
    {
      "name": "Response",
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [1250, 300],
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ JSON.stringify($json) }}"
      }
    }
  ],
  "connections": {
    "Webhook": { "main": [[{ "node": "GPT-4 需求分析" }]] },
    "GPT-4 需求分析": { "main": [[{ "node": "Claude 代码生成" }]] },
    "Claude 代码生成": { "main": [[{ "node": "GPT-4 代码审查" }]] },
    "GPT-4 代码审查": { "main": [[{ "node": "合并结果" }]] },
    "合并结果": { "main": [[{ "node": "Response" }]] }
  }
}
```

### 3.4 在 Cursor 中调用

**创建一个脚本 `agent-pipeline.sh`：**

```bash
#!/bin/bash
# agent-pipeline.sh

TASK="$1"
N8N_URL="http://localhost:5678/webhook/agent-pipeline"

curl -s -X POST "$N8N_URL" \
  -H "Content-Type: application/json" \
  -d "{\"task\": \"$TASK\"}" | jq .
```

**在 Cursor 终端中使用：**
```bash
./agent-pipeline.sh "实现一个带搜索功能的用户列表组件"
```

---

## 四、推荐的 Skills 搭配

### 4.1 Anthropic 官方 Skills

| Skill | 用途 | 安装命令 |
|-------|------|---------|
| `frontend-design` | UI 设计，避免 AI 通用风格 | 已安装 ✅ |
| `mcp-builder` | MCP 服务开发指南 | 已安装 ✅ |
| `webapp-testing` | Playwright 测试 | 已安装 ✅ |
| `doc-coauthoring` | 文档协作工作流 | 已安装 ✅ |

### 4.2 建议补充的 Skills

| Skill | 来源 | 用途 |
|-------|------|------|
| `code-review` | 自定义 | 代码审查清单和规范 |
| `react-patterns` | 社区 | React 最佳实践和模式 |
| `api-design` | 自定义 | RESTful API 设计规范 |
| `git-workflow` | 自定义 | Git 提交规范和工作流 |

### 4.3 完整的 Agent Skills 配置

```
.cursor/
├── rules/
│   ├── agents.md           # Agent 角色定义
│   └── workflow.md         # 工作流编排
├── skills/
│   ├── frontend-design/    # UI 设计规范
│   ├── mcp-builder/        # MCP 开发指南
│   ├── webapp-testing/     # 测试规范
│   └── doc-coauthoring/    # 文档写作指南
└── notepads/
    ├── designer.md         # 设计师 prompt
    ├── developer.md        # 开发者 prompt
    ├── reviewer.md         # 审查者 prompt
    └── writer.md           # 文档 prompt
```

---

## 五、实战案例

### 案例：开发一个数据看板组件

**1. 启动工作流：**
```
@mcp new_feature_workflow 
  feature: "数据看板组件，包含：
    - 4个统计卡片（数字+趋势）
    - 折线图（近7天数据）
    - 表格（最近记录）
    要求：响应式、深色主题、有加载状态"
```

**2. Agent 协作过程：**

```
Designer Agent:
├── 分析布局结构（Grid 布局）
├── 设计统计卡片样式
├── 确定配色方案（深色主题）
└── 输出组件结构图

Developer Agent:
├── 实现 StatCard 组件
├── 实现 LineChart 组件（Recharts）
├── 实现 DataTable 组件
├── 组合成 Dashboard 页面
└── 添加加载状态和错误处理

Reviewer Agent:
├── 检查类型定义完整性
├── 审查性能（memo、useMemo）
├── 检查无障碍支持
└── 输出优化建议

Writer Agent:
├── 生成组件 README
├── 编写 Props 文档
├── 提供使用示例
└── 添加 Storybook stories
```

**3. 最终输出：**
- 完整的组件代码
- 代码审查报告
- 使用文档

---

## 六、进阶优化

### 6.1 添加缓存层

```typescript
// 缓存相似任务的结果
import { createHash } from "crypto";

const cache = new Map<string, { result: string; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 30; // 30 分钟

function getCacheKey(agent: string, task: string): string {
  return createHash("md5").update(`${agent}:${task}`).digest("hex");
}
```

### 6.2 添加并行执行

```typescript
// 某些 Agent 可以并行执行
async function parallelAgents(task: string): Promise<string[]> {
  const [designResult, researchResult] = await Promise.all([
    callAgent("designer", task),
    callAgent("researcher", task),
  ]);
  return [designResult, researchResult];
}
```

### 6.3 添加人工审核节点

```typescript
// 在关键步骤暂停等待确认
{
  name: "confirm_design",
  description: "展示设计方案，等待用户确认后继续",
  // ...
}
```

---

## 七、总结

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|---------|
| MCP | 集成度高、响应快 | 需要开发 MCP Server | 日常开发、频繁使用 |
| n8n | 可视化编排、易修改 | 需要额外部署 | 复杂流程、多模型混用 |

**推荐路径：**
1. 先用方案 5（组合式工作流）熟悉多 Agent 协作
2. 需求复杂后升级到 MCP 方案
3. 需要多模型时引入 n8n

---

*文档版本：v1.0*
*更新日期：2026-01-29*
