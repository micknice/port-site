import React from 'react'
import {IconContext} from 'react-icons'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useSpring, animated, config, easings } from '@react-spring/web'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import TextTransition, {presets} from 'react-text-transition'
// import {animate} from 'framer-motion'
// import {useState} from 'react'

const TEXTS = ['Software', 'React', 'ML', 'Flutter', 'Cloud']
const COLOURS = ['text-[#5651e5]', 'text-[#e58751]', 'text-[#e5d651]']
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
const config3 = {
            // ...config.gentle,
            mass: 6, 
            tension: 40, 
            friction: 3000,
            clamp: true,
       
            easing: easings.easeInBounce
        }


const Main = () => {
    const [index, setIndex] = useState(0);
    const [aOrAn, setAOrAn] = useState('A')
    const [devWord, setDevWord] = useState('Software');
    const [linkedInColor, setLinkedInColor] = useState('black')

    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
          
        );
        return () => clearTimeout(intervalId);
      }, []);

    
    useEffect(() => {
        if(devWord === 'ML') {
            setAOrAn('An')
        } else {
            setAOrAn('A')
        }
    }, [devWord]);

    useEffect(() => {
        setDevWord(TEXTS[index % TEXTS.length])
    })

    

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
        from: { y: 300 },
        to: { y: 0 },
        config: config2,
        delay:100
      })
    const springUp2 = useSpring({
        from: { y: 300 },
        to: { y: 0 },
        config: config2,
        delay:200
      })
    const springUp3 = useSpring({
        from: { y: 300 },
        to: { y: 0 },
        config: config2,
        delay:300
      })
    const springFadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 100 },
        config: config3,
        delay:600
      })
      const COLOURS = ['text-[#5651e5]', 'text-[#e58751]']
  return (
    <div id='home' className='w-full h-screen 2 text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center'>

        
        <div className='max-w-[1240px] w-full h-5/6 mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>LET'S GET BUSY</p>
                <animated.div style={{...springLeft}}>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'> Mike</span></h1>
                </animated.div>
                    <div className='py-4 text-gray-700'>
                <animated.div style={{...springRight}}>

                    <h1 className='py-4 text-gray-700 flex'>{aOrAn}
                        <span className='text-[#e5d651]  '>{' '}
                            <TextTransition className='ml-5 mr-5' springConfig={presets.stiff}>
                                
                                {devWord} 
                            </TextTransition>
                        </span> Dev
                    </h1>
                </animated.div>
                    </div>
                <animated.div style={{...springFadeIn}}>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I make software</p>
                </animated.div>
                
            </div>
        </div>
            <div className='flex items-center justify-evenly max-w-[330px] m-auto '>
                    <a href='https://www.linkedin.com/in/mike-mccullagh-7171b5234/'>
                        <animated.div style={{...springUp1}}>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-indigo-50'>
                                <IconContext.Provider
                                    value={{color: 'blue'}}
                                >
                                    <FaLinkedinIn/>
                                </IconContext.Provider>
                            </div>
                        </animated.div>
                    </a>
                    <a href='https://github.com/micknice'>
                        <animated.div style={{...springUp2}}>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-indigo-50'>
                                <FaGithub/>
                            </div>
                        </animated.div>
                    </a>
                    <animated.div style={{...springUp3}}>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-indigo-50'>
                                <IconContext.Provider
                                    value={{color: '#db0d0d'}}
                                >
                                    <AiOutlineMail/>
                                </IconContext.Provider>
                            </div>
                        </Link>
                    </animated.div>
                        {/* <animated.div style={{...springs3}}>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                        </animated.div> */}
                </div>
        </div>
    </div>
  )
}

export default Main