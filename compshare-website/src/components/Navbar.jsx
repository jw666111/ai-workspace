import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Cpu, Zap, Box, Palette } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { name: 'GPU 云实例', href: '/products/gpu', icon: Cpu, desc: '弹性 GPU 算力服务' },
  { name: '模型 API', href: '/products/api', icon: Zap, desc: '统一模型接入' },
  { name: '镜像社区', href: '/products/images', icon: Box, desc: '开箱即用环境' },
  { name: 'ComfyUI 云端', href: '/products/comfyui', icon: Palette, desc: '云端 AI 创作' },
]

const solutions = [
  { name: '科研机构', href: '/solutions/research', desc: '高校与科研团队专属方案' },
  { name: '开发者', href: '/solutions/developer', desc: '个人与技术团队方案' },
  { name: '企业客户', href: '/solutions/enterprise', desc: '企业级 AI 基础设施' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold text-white">优云智算</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="px-4 py-2 text-dark-300 hover:text-white flex items-center space-x-1 transition-colors">
                <span>产品服务</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 glass-card rounded-2xl py-3 mt-2"
                  >
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center px-4 py-3 hover:bg-white/5 transition-colors rounded-xl mx-2"
                      >
                        <div className="w-11 h-11 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                          <item.icon className="w-5 h-5 text-accent-blue" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-sm text-dark-400">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="px-4 py-2 text-dark-300 hover:text-white flex items-center space-x-1 transition-colors">
                <span>解决方案</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-72 glass-card rounded-2xl py-3 mt-2"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-5 py-3 hover:bg-white/5 transition-colors rounded-xl mx-2"
                      >
                        <div className="text-white font-medium">{item.name}</div>
                        <div className="text-sm text-dark-400">{item.desc}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/pricing" className={`px-4 py-2 transition-colors ${location.pathname === '/pricing' ? 'text-accent-blue' : 'text-dark-300 hover:text-white'}`}>
              定价
            </Link>
            <Link to="/docs" className={`px-4 py-2 transition-colors ${location.pathname === '/docs' ? 'text-accent-blue' : 'text-dark-300 hover:text-white'}`}>
              文档中心
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-dark-300 hover:text-white transition-colors">
              登录
            </button>
            <button className="btn-neon px-5 py-2.5 rounded-xl text-white font-medium">
              <span>免费注册</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-6">
              <div>
                <div className="text-sm font-medium text-dark-400 mb-3">产品服务</div>
                {products.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center py-2.5 text-dark-200 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3 text-accent-blue" />
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-dark-400 mb-3">解决方案</div>
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2.5 text-dark-200 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link to="/pricing" className="block py-2.5 text-dark-200 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                定价
              </Link>
              <Link to="/docs" className="block py-2.5 text-dark-200 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                文档中心
              </Link>
              <div className="pt-4 border-t border-white/10 flex space-x-3">
                <button className="flex-1 py-2.5 border border-white/20 rounded-xl text-dark-200 hover:text-white hover:border-white/40 transition-colors">
                  登录
                </button>
                <button className="flex-1 py-2.5 btn-neon rounded-xl text-white font-medium">
                  <span>免费注册</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
