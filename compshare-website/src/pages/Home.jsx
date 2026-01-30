import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Cpu, Zap, Box, Palette, Server, Shield, Clock, Users,
  ArrowRight, CheckCircle2, Building2, GraduationCap, Code2,
  TrendingUp, Layers, Headphones, Sparkles, ChevronRight
} from 'lucide-react'

// Animated counter component
const AnimatedNumber = ({ value, suffix = '' }) => {
  return (
    <span className="tabular-nums">{value}{suffix}</span>
  )
}

export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      {/* Hero Section - Full Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_70%)]" />
        </div>

        {/* Floating GPU Chips Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 border border-blue-500/30 rounded-lg bg-blue-500/5"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-16 h-16 border border-purple-500/30 rounded-lg bg-purple-500/5"
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 left-20 w-24 h-24 border border-cyan-500/30 rounded-lg bg-cyan-500/5"
            animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">已服务 100+ 高校与企业</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              一站式
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI 云服务平台
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            从开发测试到生产部署，为高校科研与企业创新
            <br className="hidden md:block" />
            提供稳定可靠的算力基础设施
          </motion.p>

          {/* Price Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                ¥1.5<span className="text-xl text-gray-400">/小时起</span>
              </div>
              <div className="text-sm text-blue-300">4090 GPU 实例</div>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                10,000<span className="text-xl text-gray-400">+</span>
              </div>
              <div className="text-sm text-purple-300">GPU 算力储备</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="https://console.compshare.cn"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-105"
            >
              立即体验
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all"
            >
              查看定价
            </Link>
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-500 mb-4">已为众多知名高校提供服务</p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <span className="text-lg font-medium">北京交通大学</span>
              <span className="text-lg font-medium">上海交通大学</span>
              <span className="text-lg font-medium">新疆大学</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Big Numbers */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-blue-950/20 to-[#0a0a0f]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000', suffix: '+', label: 'GPU 算力储备', color: 'blue' },
              { value: '100', suffix: '+', label: '高校及企业客户', color: 'purple' },
              { value: '99.9', suffix: '%', label: '服务可用性', color: 'cyan' },
              { value: '7×24', suffix: '', label: '技术支持', color: 'green' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                  {stat.value}<span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Visual Cards */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              全面的产品与服务
            </h2>
            <p className="text-xl text-gray-400">覆盖 AI 开发全流程</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Cpu,
                title: 'GPU 云实例',
                desc: '超万卡规模，4090/A100/H20 全系列，秒级启动',
                features: ['容器/虚机双模式', '200G 免费存储', '按秒计费'],
                gradient: 'from-blue-600 to-cyan-600',
                href: '/products/gpu',
              },
              {
                icon: Zap,
                title: '模型 API',
                desc: '一个 Key 接入 GPT/Claude/Gemini 等全球主流模型',
                features: ['多模态支持', 'OpenAI 兼容', '低延迟高并发'],
                gradient: 'from-purple-600 to-pink-600',
                href: '/products/api',
              },
              {
                icon: Box,
                title: '镜像社区',
                desc: '预装 SD/ComfyUI/LLaMA 等，一键部署开箱即用',
                features: ['海量镜像', '社区贡献', '官方维护'],
                gradient: 'from-orange-600 to-red-600',
                href: '/products/images',
              },
              {
                icon: Palette,
                title: 'ComfyUI 云端',
                desc: '无需本地 GPU，浏览器直接使用 ComfyUI',
                features: ['云端渲染', '工作流保存', 'API 集成'],
                gradient: 'from-green-600 to-emerald-600',
                href: '/products/comfyui',
              },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={product.href}
                  className="group block h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.gradient} mb-6`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-gray-400 mb-6">{product.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300">
                    了解详情 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Big Visual */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 to-purple-950/50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              为什么选择优云智算
            </h2>
            <p className="text-xl text-gray-400">我们的核心优势</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '成本优势',
                highlight: '低至 ¥1.5/小时',
                desc: '自建数据中心，成本直接让利',
                points: ['4090 ¥1.5/小时', 'A100 ¥9.68/小时', '校企认证 95 折'],
              },
              {
                icon: Server,
                title: '资源充足',
                highlight: '10,000+ GPU',
                desc: '超万卡储备，无需排队等待',
                points: ['即时获取算力', '多机房部署', '秒级启动'],
              },
              {
                icon: Layers,
                title: '开箱即用',
                highlight: '一键部署',
                desc: '丰富镜像，告别环境配置',
                points: ['主流框架预装', '社区镜像库', '国内网络优化'],
              },
              {
                icon: Headphones,
                title: '专业服务',
                highlight: '7×24 小时',
                desc: '全天候技术支持，快速响应',
                points: ['平均响应 <10分钟', '企业专属通道', 'SLA 保障'],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">{item.highlight}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-3">{item.desc}</p>
                  <ul className="space-y-1">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              场景解决方案
            </h2>
            <p className="text-xl text-gray-400">针对不同需求的专业方案</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: '高校科研',
                desc: '弹性算力 · 经费可控 · 财务合规',
                color: 'blue',
                href: '/solutions/research',
              },
              {
                icon: Code2,
                title: '开发者',
                desc: '低价 GPU · 开箱即用 · 网络优化',
                color: 'purple',
                href: '/solutions/developer',
              },
              {
                icon: Building2,
                title: '企业客户',
                desc: '高可用 · 弹性扩容 · 专属服务',
                color: 'cyan',
                href: '/solutions/enterprise',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="group block p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-${item.color}-600/20 mb-6`}>
                    <item.icon className={`w-10 h-10 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                  <div className="mt-6 text-blue-400 group-hover:text-blue-300">
                    了解方案 <ChevronRight className="inline w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-blue-950/20 to-[#0a0a0f]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              透明定价
            </h2>
            <p className="text-xl text-gray-400">按需付费，成本可控</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '3090', mem: '24G', price: '1.08', scene: '入门学习' },
              { name: '4090', mem: '24G', price: '1.5', scene: '模型训练', popular: true },
              { name: 'A100', mem: '80G', price: '9.68', scene: '大模型' },
            ].map((gpu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${gpu.popular ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50' : 'bg-white/5 border-white/10'}`}
              >
                {gpu.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium text-white">
                    最受欢迎
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">{gpu.name}</h3>
                  <p className="text-gray-400 mb-4">{gpu.mem} 显存</p>
                  <div className="text-5xl font-bold text-white mb-2">
                    ¥{gpu.price}
                    <span className="text-lg text-gray-400">/小时</span>
                  </div>
                  <p className="text-gray-400 mb-6">适合{gpu.scene}</p>
                  <Link
                    to="/pricing"
                    className={`block w-full py-3 rounded-xl font-semibold transition-all ${gpu.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    立即使用
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="text-blue-400 hover:text-blue-300">
              查看完整价格表 <ChevronRight className="inline w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              开启您的 AI 算力之旅
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              立即注册，体验高性价比的 GPU 云服务
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="https://console.compshare.cn"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-105"
              >
                免费注册
              </Link>
              <Link
                to="/docs"
                className="px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-lg text-white hover:bg-white/10 transition-all"
              >
                查看文档
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
