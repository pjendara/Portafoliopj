import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "../Projects/projects.css"
import coinp from "../../media/scrcoinplus.jpg"
import travel from "../../media/scrtravel.jpg"
import plush from "../../media/scrplushead.jpg"
import linki from "../../media/linkicon.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Projects = () => {
  return (
    <div className="contProj">
     <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <img className="imgScreen" src={coinp} alt="coinp" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
            Coin+
            <a href="https://coin-plus.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Final proyect developed as part of the SoyHenry bootcamp along
            with other six people. It is a Web App that offers cryptocurrency
            exchange services on the Ethereum network. You can buy cripto,
            exchange it for another crypto or sell it back again. For the Frontend
            it was used React, Redux toolkit, Auth0, Axios, Bootstrap,
            Cloudinary, Sweet alert, Swiper, Nodemailer, Mailtrap and
            Paypal. The Backend was developed with Node.js, Express,
            Typescript, Typegoose, Mongoose. For the Data Base MongoDB y
            Mongo Atlas. For the connection and operation of the
            cryptocurrencies it was used Solidity, Hardhat, Alchemy and
            Metamask.
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={travel} alt="travel" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
          Countrie’s App
            <a href="https://travel-app-pj.vercel.app/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Web App for consulting information on countries and tourist
            activities. React, Redux, and CSS were used for the Frontend. The
            Backend was developed in Node.js with Express. The Data base in
            PostgreSQL and Sequelize.
            </p>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className="imgScreen" src={plush} alt="plush" />
          <div className="contTex">  
          <div className="title" data-swiper-parallax="-300">
            Plusheadhunters
            <a href="https://www.plusheadhunters.com/" target="_blank" rel="noreferrer">
            <img className="imglink" src={linki} alt="linki" />
            </a>
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
              Website for the Plusheadhunters Consulting & Training company.
            </p>
          </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
    </div>
  )
}
