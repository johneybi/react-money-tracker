import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Html from "./pages/Html"
import Css from "./pages/Css"
import Javascript from "./pages/Javascript"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Javascript />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
