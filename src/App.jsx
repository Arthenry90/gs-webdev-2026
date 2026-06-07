// src/App.jsx
import { Link, Route, Routes, useParams } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Problema from './pages/Problema'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problema" element={<Problema />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App