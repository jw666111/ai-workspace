import { Link } from 'react-router-dom'
import { 
  Code2, Cpu, Box, Globe, Wallet,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const needs = [
  { icon: Cpu, text: '高性能 GPU 资源，支撑模型训练与推理' },
  { icon: Box, text: '预配置开发环境，减少环境搭建时间' },
  { icon: Globe, text: '稳定的网络环境，保障数据传输效率' },
  { icon: Wallet, text: '灵活的资源配置，适应不同项目需求' },
]

const solutions = [
  {
    title: '丰富算力选择',
    desc: '覆盖 4090、A100、H20 等主流型号',
  },
  {
    title: '镜像社区',
    desc: '提供预装主流框架的开发环境，支持一键部署',
  },
  {
    title: '网络优化',
    desc: '国内节点加速，提升模型与数据集下载速度',
  },
  {
    title: '按需付费',
    desc: '按小时计费，4090 低至 ¥1.5/小时',
  },
]

const highlights = [
  '4090 低至 ¥1.5/小时',
  '秒级启动，即开即用',
  '200G 免费系统盘',
  '主流框架预装',
]

export default function Developer() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            开发者算力解决方案
          </h1>
          <p className="text-xl text-primary-100 text-center max-w-2xl mx-auto">
            为开发者与技术团队提供高效的 AI 开发环境
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center text-white">
                <CheckCircle2 className="w-5 h-5 text-primary-400 mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Needs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            开发者的核心需求
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((need, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <need.icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-dark-700">{need.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            我们的解决方案
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 mb-2">{solution.title}</h3>
                    <p className="text-dark-500">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            立即开始使用
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              免费注册
            </button>
            <Link to="/docs" className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors font-medium">
              查看文档
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
