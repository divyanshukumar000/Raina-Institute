import contact from "../assets/contact.jpg"
import { FaChevronRight, FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import banner from "../assets/imgg.jpeg"
import image from "../assets/img-1.jpeg"
import { useRef,useState } from "react"
import emailjs from "@emailjs/browser"
function Contact() {

  const form = useRef();
  const[loading,setLoading] = useState(false);
  const[status,setStatus]= useState({ type: "", message: "" })

  const sendEmail = async(e)=>{
    e.preventDefault();
    setLoading(true)

    try{
       await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus({ type: "success", message: "Message sent successfully!" });
    form.current.reset();
    }
    catch{
       setStatus({ type: "error", message: "Failed to send. Try again!" });
    }
     finally {
    setLoading(false);
  }

  }

  return (
    <div className="contact">
    <img src={contact} alt="" />

    <div className="c-text">
      <h2><Link to="/" style={{color:"#F35B04", textDecoration:"none"}}>Home</Link> <span><FaChevronRight/> Contact</span></h2>
    </div>
    <div className="details container mt-4">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-12">
        <h2>Additional Information</h2>
        <p>"Have questions about our courses? Need career guidance? Our team is here to help you 24/7. Get in touch with us for free consultation, course details, or any assistance you need. Let's start your learning journey together!"</p>
        <ul className="list">
          <h4>Phone:</h4>
          <li>
            <span><FaPhone size={22}/></span>+9279730770</li>
          <h4>Institute Address</h4>
          <li> <span><FaLocationArrow size={22}/></span>Rajendra Nagar road no.1, <br />
          Opp- Electricity office, Patna-16</li>
          <h4>Email:</h4>
          <li><span><FaEnvelope size={22}/></span>rainainfotech2012@gmail.com</li>
        </ul>
      </div>

      <form ref={form} onSubmit={sendEmail} className="col-lg-6">
        <h2>Fill out the Form</h2>
        <p>"We're just a message away! Contact us for any queries about courses, fees, or admission process."</p>
        <div className="input-box">
          <input type="text"  name="user_name" placeholder="Enter Name" required/>
          <input type="email"  name="user_email" placeholder="Enter Email"required/> <br />
          <input type="text"  name="course" placeholder="Courses" required /> <br />
          <textarea type="text"  name="message" placeholder="Message" required /> <br />
          <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
          </button>
          {status.message && <div className={`alert ${status.type}`}>{status.message}</div>}
        </div>
      </form>
      </div>
    </div>
    <div className="banner container mt-2">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 mt-2">
          <img src={banner} alt="" />
        </div>
          <div className="col-lg-6 col-md-12 col-12 mt-2">
          <img src={image} alt="" />
        </div>
      </div>
  
    </div>
    </div>
  )
}

export default Contact
