import { Link } from 'react-router-dom'
import { 
  Palette, Cloud, Zap, Save, Image, Video,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Cloud,
    title: '无需本地 GPU',
    desc: '通过浏览器即可使用',
  },
  {
    icon: Zap,
    title: '模型 API 集成',
    desc: '集成优云智算模型 API 节点',
  },
  {
    icon: Save,
    title: '云端保存',
    desc: '工作流云端保存，随时继续',
  },
  {
    icon: Palette,
    title: '丰富工作流',
    desc: '支持图生图、文生图等多种流程',
  },
]

const workflows = [
  {
    icon: Image,
    name: '文生图',
    desc: '文字描述生成图片',
  },
  {
    icon: Image,
    name: '图生图',
    desc: '参考图片风格转换',
  },
  {
    icon: Video,
    name: '图生视频',
    desc: '静态图片生成动态视频',
  },
  {
    icon: Palette,
    name: '风格迁移',
    desc: '艺术风格转换',
  },
]

const highlights = [
  '无需安装，浏览器直接使用',
  '云端算力，无需本地 GPU',
  '工作流云端同步',
  '集成模型 API 节点',
]

export default function ComfyUI() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Palette className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            ComfyUI 云端服务
          </h1>
          <p className="text-xl text-primary-100 text-center max-w-2xl mx-auto mb-8">
            云端 AI 创作平台，无需本地 GPU，浏览器即可使用
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              立即体验
            </button>
          </div>
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

      {/* Workflows */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            支持的工作流
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <workflow.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{workflow.name}</h3>
                <p className="text-dark-500 text-sm">{workflow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            界面预览
          </h2>
          <div className="bg-dark-800 rounded-xl p-4 aspect-video flex items-center justify-center">
            <div className="text-center text-dark-400">
              <Palette className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>ComfyUI 工作流编辑器</p>
              <p className="text-sm">节点式可视化 AI 创作界面</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            开始您的 AI 创作之旅
          </h2>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            立即体验
          </button>
        </div>
      </section>
    </div>
  )
}
