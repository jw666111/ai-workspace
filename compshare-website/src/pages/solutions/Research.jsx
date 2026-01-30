import { Link } from 'react-router-dom'
import { 
  GraduationCap, Server, Wallet, FileCheck, Database,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const needs = [
  { icon: Server, text: '弹性算力支撑，满足实验高峰期资源需求' },
  { icon: Wallet, text: '经费预算可控，支持灵活的计费方式' },
  { icon: FileCheck, text: '合规的财务流程，提供正规增值税发票' },
  { icon: Database, text: '多人协作场景下的数据管理与共享' },
]

const solutions = [
  {
    title: '弹性资源调度',
    desc: '超万卡 GPU 储备，按需申请，即时启用',
  },
  {
    title: '成本优化',
    desc: '按量计费，校企认证享 95 折优惠',
  },
  {
    title: '财务合规',
    desc: '支持增值税普通/专用发票，满足报销需求',
  },
  {
    title: '数据管理',
    desc: '200G 免费存储空间，支持数据持久化',
  },
]

const cases = [
  {
    quote: '优云智算为我们实验室提供了稳定的算力支持，弹性的计费方式也很好地适应了我们的科研经费管理需求。',
    author: '北京交通大学 · 计算机与信息技术学院',
  },
]

export default function Research() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            科研算力解决方案
          </h1>
          <p className="text-xl text-primary-100 text-center max-w-2xl mx-auto">
            为高校与科研机构提供专业的算力服务
          </p>
        </div>
      </section>

      {/* Needs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            科研场景的核心需求
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
            <div key={index} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <p className="text-lg text-dark-700 mb-6 italic">"{item.quote}"</p>
              <p className="text-primary-600 font-medium">— {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            开始您的科研算力之旅
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              立即体验
            </button>
            <button className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors font-medium">
              联系我们
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
