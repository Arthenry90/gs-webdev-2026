// src/App.jsx
import { Link, Route, Routes, useParams } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App