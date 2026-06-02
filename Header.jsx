import "../../styles/Raina.css"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { FaBars, FaHome, FaTimes } from "react-icons/fa"
import { useEffect, useState } from "react"
import "../../styles/Raina.css"

function Header() {
  const [scroll, setScroll]= useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(()=>{
    const handleScroll= ()=>{
      if(window.scrollY > 50){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return ()=> removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  };

  const closeMenu = ()=>{
    setMenuOpen(false)
  }
const Liststyle = {
  textDecoration:"none",
  color:scroll ? "#111" : "#fff", 
  fontSize:"22px",
  zIndex:999,
}
  return (
    
      <div className={`header ${scroll ? "scroll" : ""}`}>
        <div className="left">
        <Link to="./">
        <img src={Logo} alt="Raina institute" />
        </Link>
        </div>

        <div className="menu-icon d-lg-none d-md-none d-block" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={28}/> : <FaBars size={28}/>}
        </div>

        <div className={`right ${menuOpen ? "show" : ""}`}>
          <ul>
            <li onClick={closeMenu}><Link to="/" style={Liststyle} id="link"><FaHome size={28} />  Home</Link></li>
            <li onClick={closeMenu}><Link to="/about" style={Liststyle} id="link">About</Link></li>
            <li onClick={closeMenu}><Link to="/courses" style={Liststyle} id="link">Courses</Link></li>
            <li onClick={closeMenu}><Link to="/contact" style={Liststyle} id="link">Contact</Link></li>
          </ul>
        </div>
      </div>

      
  
  )
}

export default Header
