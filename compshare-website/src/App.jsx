import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SolutionResearch from './pages/solutions/Research'
import SolutionDeveloper from './pages/solutions/Developer'
import SolutionEnterprise from './pages/solutions/Enterprise'
import ProductGPU from './pages/products/GPU'
import ProductAPI from './pages/products/API'
import ProductImages from './pages/products/Images'
import ProductComfyUI from './pages/products/ComfyUI'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/research" element={<SolutionResearch />} />
        <Route path="solutions/developer" element={<SolutionDeveloper />} />
        <Route path="solutions/enterprise" element={<SolutionEnterprise />} />
        <Route path="products/gpu" element={<ProductGPU />} />
        <Route path="products/api" element={<ProductAPI />} />
        <Route path="products/images" element={<ProductImages />} />
        <Route path="products/comfyui" element={<ProductComfyUI />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="docs" element={<Docs />} />
      </Route>
    </Routes>
  )
}

export default App
