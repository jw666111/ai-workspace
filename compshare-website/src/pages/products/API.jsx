import { Link } from 'react-router-dom'
import { 
  Zap, Globe, Code, Image, MessageSquare, Video,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: '一键接入全球模型',
    desc: '支持 GPT、Claude、Gemini 及国产大模型',
  },
  {
    icon: Code,
    title: 'OpenAI 兼容格式',
    desc: '无需修改代码，便捷迁移',
  },
  {
    icon: Image,
    title: '多模态支持',
    desc: '覆盖文本、图像、视频等能力',
  },
  {
    icon: Zap,
    title: '按量计费',
    desc: '用多少付多少，成本可控',
  },
]

const models = [
  { name: 'GPT-4o', provider: 'OpenAI', type: '文本/视觉' },
  { name: 'Claude 3.5', provider: 'Anthropic', type: '文本/视觉' },
  { name: 'Gemini Pro', provider: 'Google', type: '多模态' },
  { name: 'DeepSeek V3', provider: 'DeepSeek', type: '文本' },
  { name: 'Qwen Max', provider: '阿里云', type: '文本' },
  { name: 'DALL·E 3', provider: 'OpenAI', type: '图像生成' },
]

const scenes = [
  { icon: MessageSquare, name: '智能客服' },
  { icon: Code, name: '代码生成' },
  { icon: Image, name: '图像生成' },
  { icon: Video, name: '视频理解' },
]

const codeExample = `import openai

client = openai.OpenAI(
    api_key="your-api-key",
    base_url="https://api.compshare.cn/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)`

export default function API() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 text-center mb-6">
            模型 API 服务
          </h1>
          <p className="text-xl text-dark-500 text-center max-w-2xl mx-auto mb-8">
            一个 API Key 接入全球主流模型，OpenAI 兼容格式
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              获取 API Key
            </button>
            <Link to="/docs" className="px-8 py-3 bg-white text-dark-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              查看文档
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{feature.title}</h3>
                <p className="text-dark-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            支持的模型
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-dark-800 mb-2">{model.name}</h3>
                <p className="text-dark-500 text-sm mb-2">{model.provider}</p>
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                  {model.type}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-dark-500 mt-8">
            更多模型持续接入中...
          </p>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            快速接入
          </h2>
          <div className="bg-dark-800 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
              <code>{codeExample}</code>
            </pre>
          </div>
          <p className="text-center text-dark-500 mt-4">
            兼容 OpenAI SDK，无需修改现有代码
          </p>
        </div>
      </section>

      {/* Scenes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            适用场景
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {scenes.map((scene, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <scene.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-dark-700 font-medium">{scene.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            立即获取 API Key
          </h2>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            免费注册
          </button>
        </div>
      </section>
    </div>
  )
}
