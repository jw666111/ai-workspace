import { Link } from 'react-router-dom'
import { 
  Book, Code, Zap, Box, Settings, FileText,
  ArrowRight, Search 
} from 'lucide-react'

const categories = [
  {
    icon: Zap,
    title: '快速入门',
    desc: '5 分钟上手优云智算',
    links: [
      { name: '注册与认证', href: '#' },
      { name: '创建第一个实例', href: '#' },
      { name: '使用模型 API', href: '#' },
    ],
  },
  {
    icon: Box,
    title: 'GPU 云实例',
    desc: '实例管理与使用指南',
    links: [
      { name: '实例类型介绍', href: '#' },
      { name: '创建与管理实例', href: '#' },
      { name: '数据存储与传输', href: '#' },
    ],
  },
  {
    icon: Code,
    title: '模型 API',
    desc: 'API 接入与使用',
    links: [
      { name: 'API 概述', href: '#' },
      { name: '认证与鉴权', href: '#' },
      { name: '支持的模型列表', href: '#' },
    ],
  },
  {
    icon: Settings,
    title: '镜像使用',
    desc: '镜像部署与配置',
    links: [
      { name: '镜像选择指南', href: '#' },
      { name: 'Stable Diffusion 部署', href: '#' },
      { name: 'ComfyUI 使用教程', href: '#' },
    ],
  },
  {
    icon: FileText,
    title: '计费说明',
    desc: '价格与账单管理',
    links: [
      { name: '计费规则', href: '#' },
      { name: '充值与支付', href: '#' },
      { name: '发票申请', href: '#' },
    ],
  },
  {
    icon: Book,
    title: '常见问题',
    desc: 'FAQ 与问题排查',
    links: [
      { name: '账号相关', href: '#' },
      { name: '实例相关', href: '#' },
      { name: '网络与存储', href: '#' },
    ],
  },
]

const popularDocs = [
  '如何创建 GPU 实例',
  '模型 API 快速接入',
  'Stable Diffusion WebUI 部署教程',
  'ComfyUI 使用指南',
  '数据持久化设置',
  'SSH 远程连接教程',
]

export default function Docs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            文档中心
          </h1>
          <p className="text-xl text-dark-500 mb-8">
            查找使用指南、API 文档和教程
          </p>
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="搜索文档..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-2">{category.title}</h3>
                <p className="text-dark-500 mb-4">{category.desc}</p>
                <ul className="space-y-2">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="flex items-center text-dark-600 hover:text-primary-600 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark-800 text-center mb-8">
            热门文档
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {popularDocs.map((doc, index) => (
              <a key={index} href="#" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <span className="text-dark-700">{doc}</span>
                <ArrowRight className="w-4 h-4 text-dark-400" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark-800 mb-4">
            没有找到答案？
          </h2>
          <p className="text-dark-500 mb-6">
            联系我们的技术支持团队获取帮助
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              提交工单
            </button>
            <button className="px-6 py-3 bg-white text-dark-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              联系客服
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
