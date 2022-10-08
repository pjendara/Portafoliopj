import React from 'react'
import loader from "../../media/loader.gif"
import "../Loader/loader.css"

export const Loader = () => {
  return (
    <div className="conLoader">
        <img className="loader" src={loader} alt="loading" />
    </div>
  )
}
