import { Link } from 'react-router-dom'
import { 
  Building2, Shield, TrendingUp, DollarSign, Headphones,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const needs = [
  { icon: Shield, text: '稳定可靠的推理服务，保障业务连续性' },
  { icon: TrendingUp, text: '高并发处理能力，应对流量波动' },
  { icon: DollarSign, text: '可预测的成本结构，支撑商业决策' },
  { icon: Headphones, text: '专业的技术支持，快速响应问题' },
]

const solutions = [
  {
    title: '高可用架构',
    desc: '服务可用性 99.9%，保障业务稳定运行',
  },
  {
    title: '弹性扩容',
    desc: '支持自动扩缩容，从容应对流量高峰',
  },
  {
    title: '透明计费',
    desc: '模型 API 按调用量计费，成本清晰可控',
  },
  {
    title: '专属服务',
    desc: '7×24 小时技术支持，提供一对一服务',
  },
]

const features = [
  '99.9% 服务可用性',
  '7×24 专属技术支持',
  '企业级 SLA 保障',
  '定制化解决方案',
]

const cases = [
  {
    quote: '平台的资源储备充足，响应速度快，技术支持团队也很专业，帮助我们快速解决了部署中的问题。',
    author: '某 AI 科技企业 · 技术负责人',
  },
]

export default function Enterprise() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark-800 to-dark-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            企业级 AI 基础设施方案
          </h1>
          <p className="text-xl text-dark-400 text-center max-w-2xl mx-auto">
            为企业客户提供稳定可靠的 AI 算力与服务
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center text-white">
                <CheckCircle2 className="w-5 h-5 text-primary-200 mr-2" />
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
            企业级应用的核心需求
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

      {/* Case */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            客户评价
          </h2>
          {cases.map((item, index) => (
            <div key={index} className="bg-dark-800 rounded-2xl p-8">
              <p className="text-lg text-white mb-6 italic">"{item.quote}"</p>
              <p className="text-primary-400 font-medium">— {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            联系商务团队了解企业方案
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              联系我们
            </button>
            <button className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors font-medium">
              预约演示
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
