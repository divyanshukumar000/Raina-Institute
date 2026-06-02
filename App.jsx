import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect } from "react"           
import emailjs from "@emailjs/browser" 
import Header from "./component/layout/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Courses from "./Pages/Courses"
import NotFound from "./component/layout/NotFound"
import Footer from "./component/layout/Footer"
import "../src/styles/Raina.css"
function App() {
    useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
