import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { Link } from "react-router-dom"
import "../../styles/Raina.css"
function Footer() {
  const style = {
    textDecoration:"none",
    color:"#ffffffb8",
    margin:"8px"
  }
  return (
    <div className="footer mt-5">
      <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <h2>Raina Computer</h2>
          <p>"Empowering careers through quality IT education. Learn from industry experts, work on live projects, and get 100% placement assistance."</p>
          <ul className="icon">
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
            <li><FaX/></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 col-6">
          <h2>Usefull Links</h2>
          <ul className="link">
            <li ><Link style={style} id="hover-link" to="/">Home</Link></li>
            <li><Link style={style} id="hover-link" to="/about">About</Link></li>
            <li><Link style={style} id="hover-link" to="/courses">Courses</Link></li>
            <li><Link style={style} id="hover-link" to="/contact">Contact</Link></li>
            <li><Link style={style} id="hover-link" to="#">Carrer</Link></li>
            <li><Link style={style} id="hover-link" to="#">Pricing plans</Link></li>
          </ul>
        </div>

         <div className="col-lg-3 col-md-6 col-6">
          <h2>More Info</h2>
          <ul className="link">
            <li><Link style={style} to="#">Profile</Link></li>
            <li><Link style={style} to="#">Vision & Values</Link></li>
            <li><Link style={style} to="#">History</Link></li>
            <li><Link style={style} to="#">Leadership</Link></li>
            <li><Link style={style} to="#">Help</Link></li>
            <li><Link style={style} to="#">Support</Link></li>
          </ul>
        </div>

        
         <div className="col-lg-3 col-md-6 col-12">
          <h2>Contact Info</h2>
          <ul className="link">
            <li style={{margin:"12px"}}>Address:  Rajendra Nagar road no.1, <br />
          Opp- Electricity office, Patna-1</li>
            <li style={{margin:"12px"}}>Phone:  +9279730770</li>
            <li style={{margin:"12px"}}>rainainfotech2012@gmail.com</li>
          </ul>
        </div>
        </div>
      </div>
        <hr style={{color:"#fff"}}/>
        <p style={{textAlign:"center", color:"#fff"}}>© 2026 <span style={{color:"#F35B04"}}>Raina Infotech</span>. All rights reserved.</p>
    </div>
  
  )
}

export default Footer
