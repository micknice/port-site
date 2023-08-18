import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/skills/glasto.jpeg';
import {useScroll, motion, useAnimation, useTransform, useMotionValueEvent, useSpring} from 'framer-motion';
import {useEffect, useRef} from 'react'
import { useInView } from "react-intersection-observer";


const About = () => {
  
  // const control = useAnimation()
  // const {ref, inView} = useInView({margin: "0px 400px -400px 0px"})
  
  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, x:0, transition: {delay: 0.5, duration: 0.5} },
  //   hidden: { opacity: 0, scale: 1, x:600 },
  // }
  // useEffect(() => {
  //   if(inView) {
  //     control.start("visible")
  //     console.log(inView)
  //   } else {
  //     control.start("hidden")
  //   }
  // },[control, inView])


  
  return (
    
  
    <div id='about' className='w-full  lg:h-screen md:h-screen p-2 flex items-center py-16 mb-20'>
    {/* <motion.div
      ref={ref}
      variants={boxVariant}
      initial='hidden'
      animate={control}
      className='w-full  lg:h-screen md:h-screen p-2 flex items-center py-16 mb-20'
    > */}

    <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='col-span-2 mt-[45px] lg:mt-0'>
        <p className='uppercase text-xl tracking-widest  text-[#5651e5]'>
          About
        </p>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-gray-600'>
          I love coding. I love solving complex problems. I know how to google.
        </p>
        <p className='py-2 text-gray-600'>
          I started coding in 2022 writing small data and basic machine learning 
          programs in Python and completed the Northcoders Software Development
          bootcamp in April of 2023 where I was primed in the fundamentals of full stack development. Since then I have been working hard to pick up new 
          languages and technologies to extend my skills in back-end, front-end and data. 
        </p>
        <p className='py-2 text-gray-600'>
          Looking for a junior position somewhere where I can push myself, listen, learn and ultimately get good.
        </p>
        <p className='py-2 text-gray-600'> 
          In my spare time I like to lift weights and produce instrumental library music, some of which occasionally finds its way into film and television.
          Neal Stephenson obsessive.
        </p>
        <Link href='/#projects'>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            A picture paints a thousand words. So why not check out some of my latest projects?
          </p>
        </Link>
      </div>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src={AboutImg} className='rounded-xl' alt='/' />
      </div>
    </div>
    {/* </motion.div> */}
  </div>
    
  )
}

export default About