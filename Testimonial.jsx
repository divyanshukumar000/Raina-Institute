import first from "../../assets/img-2.jpeg"
import second from "../../assets/img-4.jpeg"
import third from "../../assets/img-5.jpeg"
import { Link } from "react-router-dom"
const Students = [
  {
    id:1,
    name:"Jyoti Kumari",
    course:"Graphic Designing",
    image:first,
    rating:""
  },

  {
    id:2,
    name:"Satyam Kumar",
    course:"Graphic Designing",
    image:second,
    rating:""
  },

  {
    id:3,
    name:"Rupesh Kumar",
    course:"Video Editing",
    image:third,
    rating:""
  },

]
function Testimonial() {
  return (
    <div> 
      <h2 style={{textAlign:"center", color:"#F35B04", marginTop:"10px"}}>___ Trusted by 5000+ students ___</h2>
    <div className="testimonal mt-4">
      <div className="container">
        <div className="row">
                 
          {Students.map((index)=>(
            <div className="col-lg-4 col-md-6 col-12 mt-3" key={index.id}>
            <div className="card">
              <img src={index.image} alt="" />
              <h3>{index.name}</h3>
              <h4>{index.course}</h4>
              <p> {"★".repeat(5)}</p>
            </div>
          </div>
          ))}
         
        </div>
      </div>
    </div>
 
    <div className="skill mt-2">
  
      <div className="text">
      <h3>Skills: <span>The New Currency of Success</span></h3>
      <p>"In today's fast-paced digital era, skill development is no longer optional – it's essential. Whether you're a student, a professional, or a homemaker, learning a new skill not only enhances your career opportunities but also sharpens your mind, boosts creativity, and builds confidence. From coding and graphic design to digital marketing and data analytics, every skill you learn rewires your brain to think better, solve problems faster, and adapt to challenges easily. At Raina Computer Institute, we believe that upskilling is the key to unlocking your true potential. Don't just earn – learn. Because the best investment you can ever make is in yourself."</p>
      <Link to="./about" className="btn btn-lg">Learn More</Link>
      </div>
    </div>
    </div>
  )
}

export default Testimonial
