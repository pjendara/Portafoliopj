import React from 'react'
import "./LandingPage.css"
import backvid from "../../media/back-vid.mp4"
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { Intro } from '../Intro/Intro'
import { AboutMe } from '../AboutMe/AboutMe'
import { Projects } from '../Projects/Projects'
import { useRef } from 'react'

export const LandingPage = () => {

  const aboutMe = useRef(null);
  const projects = useRef(null);

  return (
    <div className="mainCont">
        <video className="video" preload="auto" autoPlay loop muted webkit-playsinline playsinline>
        <source src={backvid} type="video/mp4" />
        </video>
        <Navbar className="fixed-top" refAbout={aboutMe} refProj={projects}/>
        <div><Intro/></div>
        <div ref={aboutMe}><AboutMe/></div> 
        <div ref={projects}><Projects/></div> 
        <Footer/>    
   
    </div>
  )
}
