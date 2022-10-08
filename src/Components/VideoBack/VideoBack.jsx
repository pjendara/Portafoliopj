import React from 'react'
import backvid from "../../media/back-vid.mp4"
import "./videoback.css"

export const VideoBack = () => {
  return (
    <video className="video" preload="auto" autoPlay loop muted webkit-playsinline playsinline>
        <source src={backvid} type="video/mp4" />
    </video>
  )
}
