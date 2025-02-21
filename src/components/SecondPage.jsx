import React from 'react';
import { delay, motion, spring, useScroll, useSpring, useTransform } from 'framer-motion';
import { useParams } from 'react-router';
import db from './db';
// import Example from './loading';

const Single = () => {
//   const name = "im harish";
  const {id} = useParams()
  const member = db.members[id-1];
//   console.log(member);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(100,100,100)', 'rgb(0,0,0)']);
  return (
    <>
      <motion.div
        className="div z-50"
        style={{
          scaleX,
          transformOrigin: 'left',
          background,
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '5px',
        }}
      ></motion.div>
      <div className='flex'>
        <div>
          <motion.div className='bg-black w-[500px] h-1 mt-10' initial={{ x: -150 }} animate={{ x: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          <motion.div className='bg-black w-1 h-[200px] ml-10 absolute top-0 left-0' initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: "spring", delay: .2, duration: .9 }}></motion.div>
          <div>
            <img src={`${member?.img}`} alt="" className='w-10 h-12 mt-[160px] ml-5 hover:animate-spin' />
          </div>
          <h1 className='ml-52 mt-40 text-3xl font-bold'>{member?.name === "" ? "Upcoming soon" : member?.name}</h1>
          <h1 className='ml-52 mt-1 text-3xl font-bold text-red-600'>front-end-dev</h1>
          <h1 className='ml-52 text-1xl mt-7 text-gray-700'>
            He crafts responsive websites where technologies <br /> meet creativity
          </h1>
          <div className='ml-52 bg-white h-18 w-28 border mt-5 p-2 border-gray-700 hover:scale-105'>
            Contact me!!
          </div>
        </div>
        <img src={member?.img} alt="Profile" className='absolute ml-[900px]' />
        <div className='absolute bg-white h-8 w-[300px] border mt-[590px] ml-[1000px] border-gray-700 pt-1 flex'>
          <div className='w-4 h-4 bg-red-500 absolute mt-1'></div>
          <div className='pl-5'>Currently Studying in Kalvium</div>
        </div>
      </div>

      {/* second page */}
      <div className=''>
        <div className='h-[80px] w-[600px] bg-[#F6FAFF] mt-[300px] ml-[380px] flex border-2 border-black'>
          <h1 className='ml-5 mt-3 font-semibold'>
            “Access to computers and the Internet has become a basic need for education in our
            society.”
          </h1>
        </div>
        <div className='h-[40px] w-[150px] bg-white ml-[830px] border-2 border-black mb-2 font-semibold'>
          - Kent Conrad
        </div>
      </div>

      <div className='mt-[150px] ml-[210px] font-bold text-[30px] text-red-600'>
        <div className='h-1 w-[100px] text-red-600'></div>
        <h1 className='absolute pl-7 text-black'>Skills</h1>#
      </div>

      {/* <img src="src\assets\im\skill-removebg-preview 1.png" alt="Skills" className='absolute ml-16' /> */}

      <div className="flex justify-center mt-28 ml-96 gap-6">
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white">Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white">TypeScript, Lua, Python, JavaScript</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white">Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white">TypeScript, Lua, Python, JavaScript</td>
            </tr>
          </tbody>
        </table>

        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-black px-5 py-2 bg-white">Languages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-5 py-2 bg-white">TypeScript, Lua, Python, JavaScript</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex mt-[140px] ml-[200px]'>
        <h1 className='text-[30px] font-bold text-red-600'>#</h1>
        <h1 className='text-[30px] font-bold' >about-me</h1>
        <h1 className='mt-[60px] absolute '>Hello, i’m {member?.name}!</h1>
        <h1 className='mt-[100px] absolute'>

          I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop <br />responsive websites from scratch and raise them into modern user-friendly web <br /> experiences.

          Transforming my creativity and knowledge into a websites has been <br /> my passion for over a year. </h1>
        <h1 className='mt-[240px] absolute'>I have been helping various clients to establish their presence online. <br /> I always strive to learn about the newest technologies and frameworks.</h1>



      </div>

      <div className='flex  ml-[200px] mt-[400px]'>
        <h1 className='text-[30px] font-bold text-red-600'>#</h1>
        <h1 className='text-[30px] font-bold' >projects</h1>
      
       

       {/* <Example/> */}
       <h1 className='mt-[100px] ml-[100px] absolute text-[30px] font-semibold '>
          Coming soon  
         
       </h1>
       


      </div>


      <div className='flex mt-[380px] ml-[900px]'>
        <h1 className='text-[30px] font-bold text-red-600'>#</h1>
        <h1 className='text-[30px] font-bold' >Contact me!!</h1>
        <h1 className='mt-[60px] absolute '>Hello, i’m {member?.name}</h1>
        <h1 className='mt-[100px] absolute'>

          I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me </h1>


      </div>

      <div className='p-[100px]'></div>




    </>
  );
};

export default Single;
