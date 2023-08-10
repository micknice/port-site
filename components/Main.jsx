import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useSpring, animated, config, easings } from '@react-spring/web'
// import {animate} from 'framer-motion'
// import {useState} from 'react'

const config1 = {
            mass: 2, 
            tension: 250, 
            friction: 40,
            clamp: true,
            easing: easings.easeInElastic
        }
const config2 = {
            // ...config.gentle,
            mass: 2, 
            tension: 300, 
            friction: 28,
            // clamp: true,
       
            easing: easings.easeInBounce
        }


const Main = () => {
    const springLeft = useSpring({
        from: { x: -2000 },
        to: { x: 0 },
        config: config1
      })
    const springRight = useSpring({
        from: { x: 2000 },
        to: { x: 0 },
        config: config1,
        delay:100
      })
    const springUp1 = useSpring({
        from: { y: 400 },
        to: { y: 0 },
        config: config2,
        delay:100
      })
    const springUp2 = useSpring({
        from: { y: 400 },
        to: { y: 0 },
        config: config2,
        delay:200
      })
    const springUp3 = useSpring({
        from: { y: 400 },
        to: { y: 0 },
        config: config2,
        delay:300
      })
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>LET'S GET BUSY</p>
                <animated.div style={{...springLeft}}>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'> Mike</span></h1>
                </animated.div>
                <animated.div style={{...springRight}}>
                    <h1 className='py-4 text-gray-700 '>A Software Developer</h1>
                </animated.div>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I make software</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/mike-mccullagh-7171b5234/'>
                        <animated.div style={{...springUp1}}>

                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        </animated.div>
                    </a>
                    <a href='https://github.com/micknice'>
                        <animated.div style={{...springUp2}}>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        </animated.div>
                    </a>
                        <animated.div style={{...springUp3}}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                        </animated.div>
                        {/* <animated.div style={{...springs3}}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                        </animated.div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main