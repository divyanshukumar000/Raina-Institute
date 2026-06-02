import Heros from "../../assets/Hero.jpg"
import Hero2 from "../../assets/hero-2.jpg"
import Hero3 from "../../assets/hero-3.jpg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import "../../styles/Raina.css"

function Hero() {

  const slides = [
    {
      id: 1,
      image: Heros,
      title: "Raina Computer Institute",
      description: "Learn from Industry Experts • Real-time Projects • Placement Support",
      buttonText: "Explore Courses",
      buttonLink: "/courses"
    },
    {
      id: 2,
      image: Hero2,
      title: "Industry Ready Courses",
      description: "Web Development • Python • Data Science • Cloud Computing",
      buttonText: "View All Courses",
      buttonLink: "/courses"
    },
    {
      id: 3,
      image: Hero3,
      title: "100% Job Assistance",
      description: "5000+ Students Placed • Top MNC Companies • Career Guidance",
      buttonText: "Get Free Consultation",
      buttonLink: "/contact"
    }
  ]

  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoplay] = useState(true)

    const nextSlide = () => {
    setIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();  // ✅ Yahan () lagana tha
    }, 3000);

    return () => clearInterval(interval)
  }, )  



  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const gotoSlide = (slideIndex) => {
    setIndex(slideIndex);  // ✅ parameter sahi karo
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);  // ✅ setAutoplay(true)
  }

  const currentSlide = slides[index];

  return (
    <div className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${currentSlide.image})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h2>{currentSlide.title}</h2>
          <p>{currentSlide.description}</p>
          <button>{currentSlide.buttonText}</button>
        </div>

        <button className="nav-btn prev-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="nav-btn next-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="dots-container">
          {slides.map((_, Cindex) => (
            <button
              key={Cindex}
              className={`dot ${index === Cindex ? "active" : ""}`}
              onClick={() => gotoSlide(Cindex)}  
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero