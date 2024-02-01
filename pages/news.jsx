import Image from 'next/image';
import React from 'react';
import skinscanImg from '../public/assets/projects/SKINSCAN.png';
import skinTechImg from '../public/assets/projects/SKIN_SCAN_TECH_STACK.png';
import Javascript from '../public/assets/skills/JavaScript-logo.png';
import Python from '../public/assets/skills/python.png';
import Postgres from '../public/assets/skills/Postgresql_elephant.svg.png';
import Flask from '../public/assets/skills/flask_logo_icon_145276.png';
import Pytorch from '../public/assets/skills/pytorch-logo.png';
import Express from '../public/assets/skills/express.png';
import ReactLogo from '../public/assets/skills/react.png'
import {animate} from 'framer-motion'
import Tardigrade from '../public/assets/projects/thetardigrade_front.png'
import Next from '../public/assets/skills/next.png';
import Tailwind from '../public/assets/skills/Tailwind_CSS_Logo.svg.png';



import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const news = () => {
  
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        
        <Image 
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Tardigrade}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>The Tardigrade</h2>
          <h3 className='pb-2'>News site with social features</h3>
          <h3>Next JS / React / Express / PostgreSQL / TailwindCSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          {/* <p>Project</p> */}
          <h2 className='pb-2'>Overview</h2>
          <p>
            Front end built with NextJS/React/TailwindCSS. Back end built using TDD with NodeJS/Express/PostgreSQL. 

          </p>
          <p>Allows user login, comments and voting on articles and
              comments. </p>
          <p>
            Features location-based weather widget and article recommendation using TF/IDF analysis.

          </p>
          {/* <ReactPlayer className=' py-8'url='https://youtu.be/QbiGu2FLbAY' />  */}
          <a
            href='https://github.com/micknice/the-tardigrade'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Front-End Code</button>
          </a>
          <a
            href='https://github.com/micknice/nc-news-back-end'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Back-End Code</button>
          </a>
          
          <a
            href='https://www.thetardigrade.co.uk/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 hover:scale-105'>Live Site</button>
          </a>
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 md:h-auto'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1 md:pl-3'>
            <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={Javascript} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  JavaScript
                </p>
              </div>
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={Next} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  NextJS
                </p>
              </div>
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={ReactLogo} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  React
                </p>
              </div>
              
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={Tailwind} height='28' className=' col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  TailwindCSS
                </p>
              </div>
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={Express} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  Express
                </p>
              </div>
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={Postgres} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        
          
      </div>
    </div>
  );
};

export default news;