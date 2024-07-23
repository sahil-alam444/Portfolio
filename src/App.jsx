import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./assets/pages/components/Navbar"
import Home from "./assets/pages/Home"
import Gallery from "./assets/pages/Gallery"
import Projects from "./assets/pages/Projects"
import Footer from "./assets/pages/components/Footer"

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
