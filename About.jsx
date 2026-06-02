import about from "../../src/assets/about.jpg"
import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa6"
import Image from "../assets/img-3.jpeg"
import Image2 from "../assets/img-6.jpeg"
import learn from "../assets/learn.jpg"
function About() {
  return (
    <div className="about-page">
     <img src={about} alt="" />
     <div className="a-text">
      <h2><Link to="/" style={{color:"#F35B04", textDecoration:"none"}}>Home</Link> <span><FaChevronRight/> About</span></h2>
     </div>

     <div className="row container-fluid mt-5">
    
      <div className="col-lg-6 col-md-6 col-12">
        <img src={Image} alt="" />
      </div>

      <div className="col-lg-6 col-md-6 col-12">
        <h2>___ About us __</h2>
        <p>At our institute, we believe in empowering students with industry-relevant skills that truly matter. 
          We offer a comprehensive range of professional courses including Graphic Design, Digital Marketing, Video Editing, Data Science
          & Analytics, and Artificial Intelligence & Machine Learning. All our courses are taught in a proper, structured, and
          practical manner – ensuring you don't just learn, but master the subject. From fundamentals to advanced concepts,
          every topic is covered step by step with real-world projects. And upon successful completion of your course, 
          you will receive a recognized certificate that adds value to your resume and helps you stand out in the job market. 
          Join us to turn your passion into a profession!
`        </p>
          <Link to="/about" className="btn btn-lg">Learn More</Link>
      </div>
     </div>

     <div className="row container-fluid sec-2 mt-5">

       <div className="col-lg-6 col-md-6 col-12 mt-4">
        <h2>___ Why Choose us</h2>
        <p>At our institute, we believe in empowering students with industry-relevant skills that truly matter. 
          We offer a comprehensive range of professional courses including Graphic Design, Digital Marketing, Video Editing, Data Science
          & Analytics, and Artificial Intelligence & Machine Learning. All our courses are taught in a proper, structured, and
          practical manner – ensuring you don't just learn, but master the subject. From fundamentals to advanced concepts,
          every topic is covered step by step with real-world projects. And upon successful completion of your course, 
          you will receive a recognized certificate that adds value to your resume and helps you stand out in the job market. 
          Join us to turn your passion into a profession!
`        </p>
      </div>

      <div className="col-lg-6 col-md-6 col-12">
        <img src={Image2} alt="" />
      </div>

     </div>

     <div className="sec-3">
      <img src={learn} alt="" />
      <div className=" text">
        <h3>The greatest choice of courses</h3>
        <Link to="/courses" className="btn btn-lg">Join Now..</Link>
      </div>
     </div>
    </div>
  )
}

export default About
