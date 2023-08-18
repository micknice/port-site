import Image  from 'next/image';
import React from 'react';
import workoutImg from '../public/assets/projects/workout.png';
import JavaScript from '../public/assets/skills/JavaScript-logo.png';
import ReactLogo from '../public/assets/skills/react.png';
import PostgreSQL from '../public/assets/skills/Postgresql_elephant.svg.png';
import Docker from '../public/assets/skills/docker.png';
import Mapbox from '../public/assets/skills/mapbox.png'
import Socket from '../public/assets/skills/Socket-io.png'
import Bing from '../public/assets/skills/bing.png'
import SimImg from '../public/assets/projects/SimShot.png'

import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });




import { RiRadioButtonFill } from 'react-icons/ri';
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
          src={SimImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Breakdown Simulator</h2>
          <h3>Javascript / React / PostgreSQL / Mapbox / Bing Maps / Socket.IO / Docker</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Simulation of automotive breakdowns and patrol allocation across the UK road network. Inspired by the year I spent working at the AA as a call handler.
            Written in JavaScript, pulling member data from postgreSQL database and route data from Bing Maps API. GUI made with React and Mapbox, updated via Socket.IO. 
            I have a few long term goals for this project, firstly I am working on a refactor which will make all the API calls up front so the simulation can be run fast.
            This will allow the generation of large amounts of data which I will use to optimize the home locations and allocation algorithm to optimize the fix/travel time ratio.
            Im also working on spinning up multiple handlers which will feed their allocations into a centralized pipeline using Docker, K8 and Kafka.
          </p>
          <ReactPlayer className=' py-8'url='https://youtu.be/DnE5YcD77SE' config={{youtube: {playerVars: {cc_load_policy: 1}}}}/> 
          <a
            href='https://github.com/micknice/AA_breakdown_simulator'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Back-End Code</button>
          </a>
          <a
            href='https://github.com/micknice/Breakdown_GUI'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Front-End Code</button>
          </a>
          
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={JavaScript} height='30' className='pr-1'/>JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={ReactLogo} height='29' className='pr-1'/>React
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={PostgreSQL} height='26' className='pr-1 mr-1'/> PostgreSQL
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}           
                <Image alt='/' src={Mapbox} height='30' className='pr-1 px-1'/> Mapbox
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}           
                <Image alt='/' src={Bing} height='30' className='pr-1 px-1 mr-1'/> Bing Maps
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}           
                <Image alt='/' src={Socket} height='26' className='pr-1 px-1 mr-0.5'/> Socket.IO
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}           
                <Image alt='/' src={Docker} height='30' className='pr-1 px-1'/> Docker
              </p>
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

export default workout;