import { Link } from 'react-router-dom'
import { GraduationCap, Code2, Building2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: GraduationCap,
    title: '科研算力解决方案',
    target: '高校与科研机构',
    desc: '弹性算力支撑，满足实验高峰期资源需求。经费预算可控，支持灵活的计费方式。',
    href: '/solutions/research',
  },
  {
    icon: Code2,
    title: '开发者算力解决方案',
    target: '开发者与技术团队',
    desc: '高性能 GPU 资源，支撑模型训练与推理。预配置开发环境，减少环境搭建时间。',
    href: '/solutions/developer',
  },
  {
    icon: Building2,
    title: '企业级 AI 基础设施',
    target: '企业客户',
    desc: '稳定可靠的推理服务，保障业务连续性。高并发处理能力，应对流量波动。',
    href: '/solutions/enterprise',
  },
]

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            解决方案
          </h1>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            针对不同场景的专业解决方案，深入理解您的业务需求
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.href} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all h-full">
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <solution.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-sm text-primary-600 font-medium mb-2">{solution.target}</div>
                  <h3 className="text-2xl font-bold text-dark-800 mb-4">{solution.title}</h3>
                  <p className="text-dark-500 mb-6">{solution.desc}</p>
                  <div className="inline-flex items-center text-primary-600 font-medium group-hover:translate-x-1 transition-transform">
                    了解详情 <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
