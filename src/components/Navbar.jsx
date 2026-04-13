import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">B.B</NavLink>
      <div className="navbar-links">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/portfolio">Portfólio</NavLink>
      </div>
    </nav>
  )
}

export default Navbar