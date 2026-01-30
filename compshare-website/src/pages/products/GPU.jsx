import { Link } from 'react-router-dom'
import { 
  Cpu, Server, HardDrive, Zap, Monitor,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Server,
    title: '超万卡规模',
    desc: '覆盖 4090、A100、H20 等主流型号',
  },
  {
    icon: Monitor,
    title: '双模式支持',
    desc: '支持容器与虚拟机双模式，兼容 Windows/Ubuntu',
  },
  {
    icon: HardDrive,
    title: '免费存储',
    desc: '单实例配备 200G 免费系统盘',
  },
  {
    icon: Zap,
    title: '秒级启动',
    desc: '即开即用，无需等待',
  },
]

const gpuTypes = [
  { name: '3090', memory: '24G', price: '¥1.08/小时', tag: '入门' },
  { name: '4090', memory: '24G', price: '¥1.5/小时', tag: '热门', popular: true },
  { name: 'A100', memory: '80G', price: '¥9.68/小时', tag: '高性能' },
  { name: 'H20', memory: '96G', price: '¥6.75/小时', tag: '最新' },
  { name: 'L20', memory: '48G', price: '¥3.5/小时', tag: '均衡' },
  { name: 'L40', memory: '48G', price: '¥4.2/小时', tag: '推理' },
]

const scenes = [
  '模型训练',
  '推理部署',
  '科学计算',
  'AI 绘画',
  '大模型微调',
  '数据处理',
]

export default function GPU() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 text-center mb-6">
            GPU 云实例
          </h1>
          <p className="text-xl text-dark-500 text-center max-w-2xl mx-auto mb-8">
            弹性 GPU 算力服务，超万卡规模，即开即用
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              立即使用
            </button>
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

      {/* GPU Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            丰富的 GPU 型号选择
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gpuTypes.map((gpu, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border-2 ${gpu.popular ? 'border-primary-600' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-800">{gpu.name}</h3>
                    <p className="text-dark-500">{gpu.memory} 显存</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${gpu.popular ? 'bg-primary-600 text-white' : 'bg-gray-100 text-dark-600'}`}>
                    {gpu.tag}
                  </span>
                </div>
                <div className="text-2xl font-bold text-primary-600">{gpu.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
              查看完整价格 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            适用场景
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {scenes.map((scene, index) => (
              <div key={index} className="px-6 py-3 bg-gray-100 rounded-full text-dark-700 font-medium">
                {scene}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            立即开始使用 GPU 云实例
          </h2>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            免费注册
          </button>
        </div>
      </section>
    </div>
  )
}
