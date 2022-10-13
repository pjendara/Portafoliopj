import React from 'react'
import fotoport from "../../media/fotoport.png"
import cvI from "../../media/Pedro_Endara_di.pdf"
import cvE from "../../media/Pedro_Endara_de.pdf"
import "../AboutMe/aboutMe.css"
import { Enlaces } from './Enlaces/Enlaces'
import { Icons } from './Icons'


export const AboutMe = () => {
  return (
    <div className="contabt">
      <div className="conRow">
          <div className="coninf">
            <img className="fot" alt="fotoperfil" src={fotoport}/>
              <div className="contlet">
                <h2 className="tit">Pedro Endara</h2>
                <h4 className="subtit">Frontend Developer - Graphic Designer</h4>
                <p className="par">With training and background in communication and graphic design.
                   Experienced in projects working with React, Redux, Js, HTML, CSS, NodeJS, SQL among others technologies.
                   With creative thinking, great curiosity that drives me to find and understand how things work.
                   Communication, adaptability and good eye to recognize relevant information and find out the cause or possible
                   cause for troubles.<br/>
                   <br/>
                   
                   I combine the best of both worlds: The freedom of a creative and artistic mind...
                   with the discipline and structure of logical and reasoned thinking.</p>
              </div>
                <div className="conbotEnl">
                  <Enlaces/>
                </div>
          </div>
                  
                <div className="contDes">
                   <a className="descargas" href={cvI} target="_blank" rel="noopener noreferrer" download={"Pedro Endara CVi"} > 
                   <button className="btnDes"><span>Download CV</span></button>
                   </a>
                   <a className="descargas" href={cvE} target="_blank" rel="noopener noreferrer" download={"Pedro Endara CVe"} > 
                   <button className="btnDes"><span>Descargue CV</span></button>
                   </a>
                 </div>
        </div>      
              <Icons/>
              <div>
      
</div>
    </div>
  )
}
