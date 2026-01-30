import { Link } from 'react-router-dom'
import { Cpu, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'GPU 云实例', href: '/products/gpu' },
    { name: '模型 API', href: '/products/api' },
    { name: '镜像社区', href: '/products/images' },
    { name: 'ComfyUI 云端', href: '/products/comfyui' },
  ],
  solutions: [
    { name: '科研机构', href: '/solutions/research' },
    { name: '开发者', href: '/solutions/developer' },
    { name: '企业客户', href: '/solutions/enterprise' },
  ],
  support: [
    { name: '文档中心', href: '/docs' },
    { name: '帮助中心', href: '#' },
    { name: '服务状态', href: '#' },
    { name: '提交工单', href: '#' },
  ],
  about: [
    { name: '公司介绍', href: '#' },
    { name: '联系我们', href: '#' },
    { name: '加入我们', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-white/5">
      {/* 装饰性渐变 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl blur-lg opacity-40"></div>
              </div>
              <span className="text-xl font-bold text-white">优云智算</span>
            </Link>
            <p className="text-dark-400 text-sm mb-6 leading-relaxed">
              一站式 AI 云服务平台<br />
              为高校科研与企业创新提供稳定可靠的算力基础设施
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-dark-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent-blue" />
                contact@compshare.cn
              </div>
              <div className="flex items-center text-dark-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent-blue" />
                400-xxx-xxxx
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品服务</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-dark-400 hover:text-accent-blue text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">解决方案</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-dark-400 hover:text-accent-blue text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">支持与帮助</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-dark-400 hover:text-accent-blue text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">关于我们</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-dark-400 hover:text-accent-blue text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              © 2026 优云智算 · 版权所有
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                服务协议
              </Link>
              <Link to="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                隐私政策
              </Link>
              <Link to="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">
                备案信息
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
