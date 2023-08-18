import Image  from 'next/image';
import React from 'react';

import JavaScript from '../public/assets/skills/JavaScript-logo.png';
import Express from '../public/assets/skills/express.png';

import Docker from '../public/assets/skills/docker.png';

import SimImg from '../public/assets/projects/SimShot.png'
import Profanity from '../public/assets/projects/profanity.png'






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
          src={Profanity}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Profanity Filter</h2>
          <h3>Javascript / Express / Docker</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Simple profanity filtering microservice built so I had something testable to deploy when learning Kubernetes.
          </p>
          
          <a
            href='https://github.com/micknice/profanity-filter-microservice'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Code</button>
          </a>
          <a
            href='https://hub.docker.com/r/micknice/profanity-filter-microservice'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Docker Image alt='/'</button>
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
                <Image alt='/' src={Express} height='29' className='pr-1'/>Express
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