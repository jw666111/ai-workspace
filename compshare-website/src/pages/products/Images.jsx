import { Link } from 'react-router-dom'
import { 
  Box, Download, Layers, Zap, Search,
  CheckCircle2, ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Box,
    title: '丰富的镜像资源',
    desc: '社区贡献的优质镜像',
  },
  {
    icon: Layers,
    title: '主流框架预装',
    desc: 'PyTorch、TensorFlow 等开箱即用',
  },
  {
    icon: Download,
    title: '一键部署',
    desc: '选择镜像后秒级启动',
  },
  {
    icon: Zap,
    title: '持续更新',
    desc: '紧跟社区最新进展',
  },
]

const categories = [
  { name: 'AI 绘画', count: 50 },
  { name: '大语言模型', count: 30 },
  { name: '深度学习框架', count: 20 },
  { name: '数据处理', count: 15 },
  { name: '视频生成', count: 10 },
  { name: '语音处理', count: 8 },
]

const popularImages = [
  {
    name: 'Stable Diffusion WebUI',
    desc: 'AI 绘画必备，支持多种模型和插件',
    tags: ['AI 绘画', 'SDXL'],
    downloads: '10K+',
  },
  {
    name: 'ComfyUI',
    desc: '节点式 AI 绘画工作流',
    tags: ['AI 绘画', '工作流'],
    downloads: '8K+',
  },
  {
    name: 'LLaMA Factory',
    desc: '大模型微调训练平台',
    tags: ['LLM', '微调'],
    downloads: '5K+',
  },
  {
    name: 'PyTorch 2.0',
    desc: '深度学习框架，CUDA 预装',
    tags: ['框架', 'CUDA'],
    downloads: '20K+',
  },
]

export default function Images() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
              <Box className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 text-center mb-6">
            镜像社区
          </h1>
          <p className="text-xl text-dark-500 text-center max-w-2xl mx-auto mb-8">
            开箱即用的开发环境，丰富的社区镜像资源
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              浏览镜像
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

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            镜像分类
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-primary-600 cursor-pointer transition-colors">
                <p className="text-dark-800 font-medium mb-1">{category.name}</p>
                <p className="text-dark-500 text-sm">{category.count}+ 镜像</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            热门镜像
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-800 mb-2">{image.name}</h3>
                    <p className="text-dark-500">{image.desc}</p>
                  </div>
                  <span className="text-sm text-dark-500">{image.downloads} 部署</span>
                </div>
                <div className="flex gap-2">
                  {image.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-dark-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            探索更多镜像
          </h2>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            进入镜像社区
          </button>
        </div>
      </section>
    </div>
  )
}
