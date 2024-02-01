import Image  from 'next/image';
import React from 'react';
import workoutImg from '../public/assets/projects/workout.png';
import JavaScript from '../public/assets/skills/JavaScript-logo.png';
import ReactLogo from '../public/assets/skills/react.png';
import NextImg from '../public/assets/skills/next.png'
import MobXImg from '../public/assets/skills/MobX.png'
import cashImg from '../public/assets/projects/cashoverflowcrop.png'
import TypeScript from '../public/assets/skills/Typescript_logo_2020.svg.png'
import Tailwind from '../public/assets/skills/Tailwind_CSS_Logo.svg.png'
import GameOne from '../components/GameOne'
import Next from '../public/assets/skills/next.png';


import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });




import Link from 'next/link';
import YouTubePlayer from 'react-player/youtube';

const workout = () => {
  
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />       
        <Image 
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cashImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Cash Overflow</h2>
          <h3>TypeScript / Next / React / Tailwind / MobX</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5  py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Instant win game of chance.
          </p>
          <div className=''><GameOne/></div>
          
         
          <a
            href='https://github.com/micknice/scratch-overflow'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Code</button>
          </a>
          
          
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>
              <div className='grid grid-cols-4 items-center justify-start'>
                <Image alt='/' src={TypeScript} height='30' className='pr-2 col-span-1'/> 
                <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                  TypeScript
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
              
            </div>
          </div>
        </div>
        <div className='h-2'></div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>         
      </div>
    </div>
  );
};

export default workout;