import React, { useState, useEffect } from 'react'
import "./LandingPage.css"
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { Intro } from '../Intro/Intro'
import { AboutMe } from '../AboutMe/AboutMe'
import { Projects } from '../Projects/Projects'
import { useRef } from 'react'
import { VideoBack } from '../VideoBack/VideoBack'
import { Loader } from '../Loader/Loader'

export const LandingPage = () => {

  const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }, [])

  const aboutMe = useRef(null);
  const projects = useRef(null);

  return (
    <div className="mainCont">
        {loader? <Loader/>:
        <div className="backcont">
        <VideoBack/>
        <Navbar className="fixed-top" refAbout={aboutMe} refProj={projects}/>
        <div><Intro/></div>
        <div ref={aboutMe}><AboutMe/></div> 
        <div ref={projects}><Projects/></div> 
        <Footer/>
        </div>    
        }
    </div>
  )
}
