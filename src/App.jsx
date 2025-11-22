import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header style={{marginBottom:12}}>
          <h1 className="title">React Multi-Page App</h1>
          <nav style={{display:'flex',gap:8,justifyContent:'center',marginBottom:12}}>
            <NavLink to="/" end style={({isActive}) => ({ color: isActive ? '#60a5fa' : '#94a3b8' })}>Home</NavLink>
            <NavLink to="/about" style={({isActive}) => ({ color: isActive ? '#60a5fa' : '#94a3b8' })}>About</NavLink>
            <NavLink to="/contact" style={({isActive}) => ({ color: isActive ? '#60a5fa' : '#94a3b8' })}>Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
