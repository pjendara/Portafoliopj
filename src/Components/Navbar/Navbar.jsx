import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./navbar.css"
import pjotalab from "../../media/pjotalab.png"

export const Navbar = ({refAbout, refProj}) => {

    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
        top: elementRef.current.offsetTop - 140,
        behavior: "smooth",
      });
    };

  return (
    <>
      <Nav className="fixed-top justify-content-end" activeKey="/home">
        <div className="bar">
          <div className="contimgLogo">
            <img className="imgLogo" src={pjotalab} alt="pjotalab"/>
          </div>
          <div className="botonera">
            <button className="but" onClick={() => scrollToSection(refAbout) }>
            <span>About Me</span>
            </button>
            <button className="but" onClick={() => scrollToSection(refProj) }>
            <span>Projects</span>
            </button>
          </div>
        </div>    
          
      </Nav>
    </>
  )
}
