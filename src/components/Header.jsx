import React from "react";
import "./Header.css";
import { useScroll,motion,useSpring,useTransform,AnimatePresence, easeInOut} from "framer-motion";
import  { useEffect, useState } from 'react';
import Cards from "./Cards";
import LogoFlipCard from "./Flip";
function Header() {

  const {scrollYProgress }=useScroll();
  const scaleX=useSpring(scrollYProgress);
  const background=useTransform(scrollYProgress,[0,1],["rgb(100,100,100)","rgb(0,0,0)"])
  return (
    <>
       <motion.div className="div z-50 " style={{
        // scaleX:scrollYProgress,
        scaleX,
        transformOrigin:"left",
        // background:"black",
        background,
        position:"sticky",
        top:0,
        width:"100%",
        height:"5px",
       }}>

       </motion.div>

      <div className="sticky top-0 w-full flex justify-between items-center p-4 border-b-2 border-black bg-white  font-sans font-bold z-40">
        <img src="/images/squadlogo.png" alt="Logo" className="h-12 w-auto cursor-pointer" />
        <div className="flex space-x-4 ">
          <a href="#" className="Works">Works</a>
          <a href="#" className="Members">Members</a>
          <a href="#" className="Experiences">Experiences</a>
        </div>

        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="contact w-32 h-12 border-2 border-slate-500 hover:bg-black hover:text-white rounded-full">
          Contact
        </motion.button>
        </div>

        <div className="heading bg-slate-50 w-full h-auto z-40 flex justify-center space-x-4 mt-40">
        <AnimatePresence>
          {/* conditinal should be presented for the exit to work */}
          <motion.h1 className="text-[72.5px] font-normal text-black mt-30 pr-8"  initial={{x:-1000} } animate={{x:0}} exit={{x:-250}} transition={{type:"spring",duration:.5,delay:0.5,ease:"easeInOut"}}>Squad 76</motion.h1></AnimatePresence>

          <img src="/images/brain.png" className="w-[74px] h-[76px] mt-[10px]" alt="brain" />

          <motion.img src="/images/toothwheel.png" className="w-[88px] h-[91px] mt-30" alt="" initial={{x:1000}} animate={{x:0}} whileHover={{rotate:"180deg"}} transition={{repeat:1,x:{duration:0.3,delay:0.5,type:"spring",ease:"easeInOut"},rotate:{duration:0.3,delay:.3}}} />
        </div>
      
        <div className="subheading bg-slate-100 w-full z-40 flex-col mt-14  space-x-3">
          <div className="row1 flex justify-center">
            <h1 className="text-[84.1px] font-normal">Visual</h1>
            <motion.img initial={{y:-500}} animate={{y:0}} transition={{duration:0.3,delay:.3}} src="/images/eyes.png" className="w-[70px] h-[70px] " alt="" />
            <h1 className="text-[72.5px] font-normal">Experiences</h1>
          </div>
         
          <div className="row2 flex justify-center">
            <motion.img initial={{x:-1000}} animate={{x:0}} transition={{type:"spring",duration:1,delay:0.7}} src="/images/line.png" className="w-[238px] h-[8px] " alt="" />
            <h1 className="text-[84.1px] font-normal">of our Squad</h1>
            <motion.img initial={{x:1000}} animate={{x:0}} transition={{type:"spring",duration:1,delay:0.7}} src="/images/line.png" className="w-[238px] h-[8px] " alt="" />
          </div>

          <section className=" flex justify-center w-full py-32">

            <button className="rounded-full  text-[18px] w-[150px] h-[42.97px] hover:bg-black hover:text-white border-black border-2  hover:ring-1 hover:ring-offset-2 focus: ring-slate-400 font-sans">Explore</button>
          </section>
        </div>
        <Cards/>

        <div className="aboutUs bg-slate-200  w-full grid-cols-1 mt-32 justify-center ">
          
            <h1 className="text-[65.53px] flex justify-center font-sans">About us</h1>
          
          <div className="flex w-full justify-center">
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:0.6}} transition={{delay:.3, type:"tween"  }} className="text-[22px] font-bold opacity-60 w-[716px] h-[272px] p-4">We are Squad 76 of Kalvium Direct-Campus—first-year learners passionate about full-stack development, programming, and innovation. Aspiring to become entrepreneurs and tech pioneers, we aim to create impactful solutions and drive a new wave of technological revolution. Together, we’re building skills, fostering creativity, and shaping the future of tech.</motion.h1>
          </div>

        </div>

          {/* <div className="container w-full flex justify-center m-40 rounded-lg"> */}
            {/* <div className="bg-[#E8E5DB]  w-[1075.19px] h-[670px] md:w-[1075.19px] relative md:h-[670px] sm:h-96 sm:w-96 p-60 flex justify-center rounded-lg shadow-slate-900 drop-shadow-2xl shadow-2xl  ">
:
             <img src="/images/new-removebg-preview 1.png" alt="" className="w-[456px] h-[485px]  absolute top-16 flex justify-center "/>

            </div> */}

          {/* </div> */}
          <div className="w-full flex justify-center m-10">
          <LogoFlipCard/>
          </div>
          <div className="experiences w-full flex-col justify-center  ">
            <h1 className="text-[63px] flex justify-center ">Our Experiences</h1>
            <p className="text-[24px] flex justify-center mt-[40px] opacity-60" >Explore the stories, memories, and </p>
            <p className="text-[24px] flex justify-center opacity-60">triumphs that make our squad the best</p>
          </div>

          <div className="memoprojects flex justify-center space-x-40 mt-44">
            <motion.button whileTap={{scale:.95}} className="flex w-[371px] h-[501px] border-2 border-black rounded-lg relative flex-shrink space-x-10 flex-wrap shadow-2xl shadow-black drop-shadow-lg">
              <h1 className="text-[70px] left-4 absolute bottom-44 flex-wrap font-merienda">Memories</h1>
            </motion.button>
            <motion.button whileTap={{scale:.95}} className="flex w-[371px] h-[501px] border-2 border-black rounded-lg relative shadow-2xl drop-shadow-2xl shadow-black ">
              <h1 className="text-[70px] absolute bottom-44 left-4 font-rubikGlitch">Projects</h1>
            </motion.button>
          </div>

          <div className="interact flex  flex-col ">
            <h1 className="text-[72px] flex justify-center mt-52">Have a project in mind?</h1>
            <h1 className="text-[72px] flex justify-center ">Let’s work together.</h1>
          </div>

 

          <section className=" flex justify-center w-full py-32">

            <button className="rounded-full  text-[18px] w-[150px] h-[42.97px] hover:bg-blue-600 hover:text-white border-black border-2  hover:ring-1 hover:ring-offset-2 focus: ring-slate-400 font-sans">Get in touch</button>
          </section>
   <div className="footer w-full flex flex-col space-y-4">
    <img src="/images/Line 10 (Stroke).png" className="h-1 w-full px-10" alt="" />
    <div className="flex space-x-10 px-10">
      <a href=""><img className="w-10 h-10" src="/images/insta.png" alt="" /></a>
      <a href=""><img className=" w-10 h-10" src="/images/mail.png" alt="" /></a>
      <a href=""><img className=" w-10 h-10" src="/images/Twitter.png" alt="" /></a>
     
  
    </div>

   </div>
   
    </>
  );
}

export default Header;
