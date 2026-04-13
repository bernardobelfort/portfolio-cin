import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App