import Image from 'next/image';
import React from 'react';
import skinscanImg from '../public/assets/projects/SKINSCAN.png';
import skinTechImg from '../public/assets/projects/SKIN_SCAN_TECH_STACK.png';
import SimpleSlider from '../components/Slider'

import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const flownotes = () => {
  const imgArr = [skinscanImg, skinTechImg]
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        {/* <SimpleSlider imgArr={imgArr}/> */}

        
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={skinscanImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Flow Notes</h2>
          <h3>Dart / Flutter / Firebase / BLoC</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Flutter app allowing users to calculate the natural ventilation of individual rooms, totalling the values across rooms grouped by job in order to assess whether forced ventilation is required. Jobs can be saved to user account and results can be shared via email. App created with Flutter and BLoC pattern. Auth and storage uses Firebase and Firestore.
          </p>
          <ReactPlayer className=' py-8'url='https://youtu.be/QbiGu2FLbAY' /> 
          <a
            href='https://github.com/micknice/flutter-proj-v1/tree/main/mynotes'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Code</button>
          
            {/* <button className='px-8 py-2 mt-4'>Demo</button> */}
          </a>
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Dart
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Flutter
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BLoC
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

export default flownotes;