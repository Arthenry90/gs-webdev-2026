// src/App.jsx
import { Link, Route, Routes, useParams } from 'react-router-dom'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>Sobre</h1>
}

function User() {
  const { id } = useParams()
  return <h1>Usuário {id}</h1>
}

function NotFound() {
  return <h1>Página não encontrada</h1>
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link> | <Link to="/usuario/123">Usuário</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/usuario/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App