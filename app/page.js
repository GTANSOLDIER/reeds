"use client";

import Image from "next/image";
import reedsTxt from "../assets/reedswebsite.png";
import motionTxt from "../assets/motion txt.png";
import mainIllustration from "../assets/main illlustration.png";
import videoIcon from "../assets/videoIcon.png";

import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="body ">
      <div className="header-nav flex items-center md:w-full md:px-36 px-4 py-6 justify-between text-center">
        <div className="md:w-[20%]">
          <Image src={reedsTxt} alt="reeds.ng" className="w-[132px] h-auto" />
        </div>
        <div className={`${isMenuOpen ? 'menuOpened' : 'menuClosed' } relative z-50 md:hidden`} onClick={() => {
          setIsMenuOpen(!isMenuOpen)
        }}>
          <RxHamburgerMenu className={`${isMenuOpen ? 'hidden' : '' }`} size={40}/>
          <AiOutlineClose className={`${isMenuOpen ? '' : 'hidden' }`} color="white" size={40}/>
        </div>
        <div className={`${isMenuOpen ? 'mobileMenuOverlay' : 'hidden' } `}></div>
        <div className={`${isMenuOpen ? ' text-lg text-white items-start text-left px-5 flex flex-col gap-8  pt-40 bg-[rgba(0,0,0,0.9)] w-[70%] h-[100vh] absolute top-0 right-0 mobileMenuAnimation': 'hidden'} mobileMenu z-20 md:flex md:flex-row  md:items-center md:gap-10 md:-ml-32 md:static md:h-0 `}>
          <a href=""> Instagram </a>
          <a href=""> Whatsapp </a>
          <a href=""> Tik-Tok</a>
          <a href="" className=""> Call </a>
        </div>
        <div className="hidden md:block">
          <a href="" className=" md:border-black md:border  rounded-full text-center px-8 hidden md:block md:ml-auto py-3 md:py-2">Call</a>
        </div>

      </div>


      <div className=" flex flex-col items-center md:grid md:grid-cols-2 md-w-max-w-lg pt-10 md:pt-5 md:px-36">

        <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex md:w-full">
          <div className="mt-10 text-5xl md:text-[4.25rem] font-semibold">
            <div className="text-center"> We design</div>
            <Image src={motionTxt} alt="motion" className="motionImg -mt-4 ml-3 md:-ml-8 " />
            <div className="-mt-3 mb-4"> graphics</div>
          </div>

          <div id="writeup" className="opacity-90 leading-relaxed md:max-w-md md:mt-8">
            We are a creative agency that specializes in the art of combining
            graphics, animation, and visual effects to create engaging and dynamic
            visual content.
          </div>
      </div>


        <div>
          <Image src={mainIllustration} alt="mainIllustration" className="mainIllustration"/>
        </div>
        
        <div className="flex gap-x-6 mt-6 mb-12">
          <button id="messageBtn">message</button>
          <div className="flex items-center gap-x-2"> 
            <span className=""><Image src={videoIcon} alt="mainIllustration" className="videoIcon w-[24px]"/></span> 
            <span>watch videos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
