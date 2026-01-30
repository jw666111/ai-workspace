import { Link } from 'react-router-dom'
import { CheckCircle2, HelpCircle } from 'lucide-react'

const gpuPricing = [
  { gpu: '3090', memory: '24G', price: 1.08, scene: '入门学习、轻量推理' },
  { gpu: '4090', memory: '24G', price: 1.5, scene: '模型训练、AI 绘画', popular: true },
  { gpu: '4090D', memory: '24G', price: 1.3, scene: '国内优化版' },
  { gpu: 'L20', memory: '48G', price: 3.5, scene: '中等算力需求' },
  { gpu: 'L40', memory: '48G', price: 4.2, scene: '推理优化' },
  { gpu: 'A100', memory: '80G', price: 9.68, scene: '大模型训练、企业推理' },
  { gpu: 'H20', memory: '96G', price: 6.75, scene: '高性能计算' },
  { gpu: 'H100', memory: '80G', price: 18.0, scene: '顶级算力' },
]

const apiPricing = [
  { model: 'GPT-4o', input: '¥0.03/1K', output: '¥0.09/1K' },
  { model: 'GPT-4 Turbo', input: '¥0.06/1K', output: '¥0.18/1K' },
  { model: 'Claude 3.5 Sonnet', input: '¥0.018/1K', output: '¥0.09/1K' },
  { model: 'DeepSeek V3', input: '¥0.001/1K', output: '¥0.002/1K' },
  { model: 'Qwen Max', input: '¥0.02/1K', output: '¥0.06/1K' },
]

const benefits = [
  '校企认证用户享 95 折优惠',
  '按小时计费，灵活控制成本',
  '支持增值税普通/专用发票',
  '无隐藏费用，价格透明',
]

const faqs = [
  {
    q: '如何获得校企优惠？',
    a: '注册后在个人中心进行校企认证，审核通过后自动享受 95 折优惠。',
  },
  {
    q: '计费方式是怎样的？',
    a: 'GPU 云实例按小时计费，模型 API 按调用量计费。费用从账户余额中实时扣除。',
  },
  {
    q: '支持哪些支付方式？',
    a: '支持支付宝、微信支付、银行卡等多种支付方式。企业客户支持对公转账。',
  },
  {
    q: '如何开具发票？',
    a: '在控制台提交开票申请，支持增值税普通发票和增值税专用发票。',
  },
]

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
            透明的价格体系
          </h1>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            按需付费，成本清晰可控
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center text-white">
                <CheckCircle2 className="w-5 h-5 text-primary-200 mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-4">
            GPU 云实例价格
          </h2>
          <p className="text-dark-500 text-center mb-12">
            按小时计费，无最低消费
          </p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-dark-600">GPU 型号</th>
                  <th className="text-left py-4 px-4 font-medium text-dark-600">显存</th>
                  <th className="text-left py-4 px-4 font-medium text-dark-600">价格</th>
                  <th className="text-left py-4 px-4 font-medium text-dark-600 hidden md:table-cell">适用场景</th>
                </tr>
              </thead>
              <tbody>
                {gpuPricing.map((item, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${item.popular ? 'bg-primary-50' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <span className="font-bold text-dark-800">{item.gpu}</span>
                        {item.popular && (
                          <span className="ml-2 px-2 py-0.5 bg-primary-600 text-white text-xs rounded-full">
                            热门
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-dark-600">{item.memory}</td>
                    <td className="py-4 px-4">
                      <span className="text-xl font-bold text-primary-600">¥{item.price}</span>
                      <span className="text-dark-500">/小时</span>
                    </td>
                    <td className="py-4 px-4 text-dark-500 hidden md:table-cell">{item.scene}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* API Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-4">
            模型 API 价格
          </h2>
          <p className="text-dark-500 text-center mb-12">
            按 Token 计费，用多少付多少
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-dark-600">模型</th>
                  <th className="text-left py-4 px-6 font-medium text-dark-600">输入价格</th>
                  <th className="text-left py-4 px-6 font-medium text-dark-600">输出价格</th>
                </tr>
              </thead>
              <tbody>
                {apiPricing.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-dark-800">{item.model}</td>
                    <td className="py-4 px-6 text-dark-600">{item.input}</td>
                    <td className="py-4 px-6 text-dark-600">{item.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-dark-500 text-sm mt-4">
            价格可能随市场波动调整，以控制台实际显示为准
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-800 text-center mb-12">
            常见问题
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-dark-800 mb-2">{faq.q}</h3>
                    <p className="text-dark-500">{faq.a}</p>
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
          <p className="text-dark-400 mb-8">
            新用户注册即可获得体验额度
          </p>
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            免费注册
          </button>
        </div>
      </section>
    </div>
  )
}
