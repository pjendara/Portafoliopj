import React from 'react'
import "./enlaces.css"
import lin from "../../../media/lin.png"
import git from "../../../media/git.png"
import mail from "../../../media/mail.png"
import wa from "../../../media/wa.png"

export const Enlaces = () => {
  return (
    <div className="contEnl">
      <a href="https://www.linkedin.com/in/pjendara/" target="_blank">
        <button class="enl-btn btn-12"><span>Linkedin</span><span><img className="enlace" src={lin} alt={lin} /></span></button>
      </a>
      <a href="https://github.com/pjendara" target="_blank">  
        <button class="enl-btn btn-12"><span>Github</span><span><img className="enlace" src={git} alt={git} /></span></button>
      </a>
      <a href="mailto:pjendara@gmail.com?Subject=From%20your%20page" target="_blank">
        <button class="enl-btn btn-12"><span>Email me</span><span><img className="enlace" src={mail} alt={mail} /></span></button>
      </a>
      <a href="https://wa.me/593983319966/?text=Hi,%20I%20am%20contacting%20you%20from%20your%20page" target="_blank">  
        <button class="enl-btn btn-12"><span>Text me</span><span><img className="enlace" src={wa} alt={wa} /></span></button>
      </a>  
    </div>
  )
}
