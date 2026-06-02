import course from "../assets/course.jpg"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Video from "../assets/Video Editing.png"
import Digital from "../assets/digital marketing.png"
import Ui from "../assets/ai.png"
import Graphic from "../assets/grapahics.png"
import Data from "../assets/Data Science and analtic.png"
import Cyber from "../assets/cyber secority.png"
import Office from "../assets/office pro.png"
import Cad from "../assets/auto cad.png"
import Tally from "../assets/tally 2.png"
function Courses() {
  return (
    <div className="courses-page">
      <img src={course} alt="" />

      <div className="co-text">
      <h2><Link to="/" style={{color:"#F35B04", textDecoration:"none"}}>Home</Link> <span><FaChevronRight/> Courses</span></h2>
      </div>

      <h3 style={{textAlign:"center", color:"#F35B04", fontSize:"32px"}}>___ Our Top Courses ___</h3>

      <div className="course-card">
         <div className="card container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Video} alt="" />
          </div>

          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become a Professional Video Editor</h2>
            <p>Learn video editing the right way! Our comprehensive course covers Adobe Premiere Pro, After Effects, DaVinci Resolve, and more. From basic cuts to advanced VFX, color grading, and motion graphics – everything is taught in a proper, systematic manner with practical projects. Whether you want to create YouTube videos, reels, short films, or corporate content, we've got you covered. Certificate provided after course completion. Join now and turn your creativity into a career!</p>
          </div>
          </div>
        
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become a Digital Marketing Expert</h2>
          <p>Learn digital marketing the right way! Our comprehensive course covers SEO, Social Media Marketing, Google Ads, Email Marketing, Content Marketing, YouTube Marketing, and Google Analytics. From basics to advanced – everything is taught in a proper, systematic manner with live projects and case studies. Whether you want to grow your own business or build a career in marketing, we've got you covered. Certificate provided after course completion. Join now and start your digital marketing journey!</p>          
        </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Digital} alt="" />
          </div>
          </div>
        </div>

         <div className="card container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Ui} alt="" />
          </div>

          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become an AI & Machine Learning Expert</h2>
            <p>Learn AI and Machine Learning the right way! Our comprehensive course covers Python, Data Science, Supervised & Unsupervised Learning, Deep Learning, Neural Networks, NLP, Computer Vision, and Generative AI. From basics to advanced – everything is taught in a proper, systematic manner with real-world projects and hands-on coding. Build AI models, create chatbots, and work on live projects. Certificate provided after course completion. Join now and shape the future with AI!</p>
          </div>
          </div>
        
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become a Professional Graphic Designer</h2>
            <p>Learn graphic design the right way! Our comprehensive course covers Adobe Photoshop, Illustrator, InDesign, CorelDRAW, and Figma. From design fundamentals to advanced techniques – typography, color theory, logo design, branding, social media graphics, and UI/UX basics. Everything is taught in a proper, systematic manner with real-world projects. Build a stunning portfolio and showcase your skills. Certificate provided after course completion. Join now and start creating amazing designs!</p>
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Graphic} alt="" />
          </div>
          </div>
        </div>

      <div className="card container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Data} alt="" />
          </div>

          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become a Data Science & Analytics Expert</h2>
            <p>Learn data science and analytics the right way! Our comprehensive course covers Python, SQL, Statistics, Data Visualization, Machine Learning, Power BI, Tableau, and Excel Analytics. From data cleaning to advanced analytics – everything is taught in a proper, systematic manner with real-world projects and datasets. Turn raw data into valuable insights. Certificate provided after course completion. Join now and start your journey as a data scientist</p>
          </div>
          </div>
        
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become an Ethical Hacker & Cyber Security Expert</h2>
            <p>Learn cyber security and ethical hacking the right way! Our comprehensive course covers Network Security, Penetration Testing, Kali Linux, Metasploit, Burp Suite, Web Security, Cryptography, and Incident Response. From beginner to advanced – everything is taught in a proper, systematic manner with live labs and real-world scenarios. Think like a hacker, defend like a pro. Certificate provided after course completion. Join now and start your journey as a cyber security professional!</p>
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Cyber} alt="" />
          </div>
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Office} alt="" />
          </div>

          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Master Office Pro AI – Boost Your Productivity with AI</h2>
            <p>Learn how to use AI-powered Microsoft Office tools to work faster and smarter. Our course covers Word with AI, Excel with AI, PowerPoint with AI, Outlook with AI, and Teams with AI – including Copilot, ChatGPT integration, smart automation, and intelligent data analysis. Save hours every day and stand out at work. Certificate provided after course completion. Join now and become an AI-powered professional!</p>
          </div>
          </div>
        
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-6 col-md-6 col-12">
            <div className="text">
            <h2>Become an AutoCAD Expert – Design the Future</h2>
            <p>Learn AutoCAD the right way! Our comprehensive course covers 2D Drafting, 3D Modeling, Architectural Drawings, Mechanical Designs, Electrical Schematics, and Civil Plans. From basic commands to advanced techniques – everything is taught in a proper, systematic manner with real-world projects. Create professional drawings and build an impressive portfolio. Certificate provided after course completion. Join now and start your design journey!</p>
           </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Cad} alt="" />
          </div>
          </div>
        </div>

        <div className="card container mt-5">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={Tally} alt="" />
          </div>

          <div className="col-6 col-md-6 col-12">
            <div className="text">
              <h2>Become a Tally Prime Expert – Master Accounting with Ease</h2>
              <p>Learn Tally Prime the right way! Our comprehensive course covers Company Creation, Accounting Vouchers, GST Filing, TCS & TDS, Payroll, Inventory Management, Bank Reconciliation, and Financial Reporting. From basic data entry to advanced business reports – everything is taught in a proper, systematic manner with real-world practice. Certificate provided after course completion. Join now and start your career in accounting!</p>
          </div>
          </div>
        
          </div>
        </div>
        
      </div>
    </div>

      
  )
}

export default Courses
