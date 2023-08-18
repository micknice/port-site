import Image from 'next/image';
import React from 'react';
import skinscanImg from '../public/assets/projects/SKINSCAN.png';
import skinTechImg from '../public/assets/projects/SKIN_SCAN_TECH_STACK.png';
import Javascript from '../public/assets/skills/JavaScript-logo.png';
import Python from '../public/assets/skills/python.png';
import Mysql from '../public/assets/skills/mysql.png';
import Flask from '../public/assets/skills/flask_logo_icon_145276.png';
import Pytorch from '../public/assets/skills/pytorch-logo.png';
import Express from '../public/assets/skills/express.png';
import Vue from '../public/assets/skills/vue.png'
import {animate} from 'framer-motion'



import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const skinscan = () => {
  
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
          <h2 className='py-2'>Skin Scan</h2>
          <h3>Vue JS / Express / MySQL / AWS / Flask / PyTorch / Heroku</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Front end was built using Vue Js, Primary back end handling user data, auth and file storage built with express, MySQL and AWS.
            ML Inference microservice built with Python, Flask and PyTorch and hosted using Heroku.
            Service allows users to upload photos of skin conditions and have them assessed by the ML model.
            Model was trained on HAM10000 dataset.
          </p>
          <ReactPlayer className=' py-8'url='https://youtu.be/QbiGu2FLbAY' /> 
          <a
            href='https://github.com/TestDrivenDesign/project-frontend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Front-End Code</button>
          </a>
          <a
            href='https://github.com/TestDrivenDesign/ServerTest'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Back-End Code</button>
          </a>
          <a
            href='https://github.com/TestDrivenDesign/pytorch-flask-REST-server'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Inference Server Code</button>
          </a>
          <a
            href='https://github.com/TestDrivenDesign/pytorch-flask-REST-server'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Model Training Code</button>
          </a>
          <a
            href='https://main.d2lr9qljwqxiia.amplifyapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 hover:scale-105'>Demo</button>
          </a>
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Javascript} height='30' className='pr-1 '/>Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Vue} height='27' className='pr-1 '/>Vue
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Express} height='30' className='pr-1 '/>Express
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Mysql} height='30' className='pr-1 '/>MySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Python} height='30' className='pr-1 '/>Python
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Flask} height='30' className='pr-1 '/>Flask
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold ml-1'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image alt='/' src={Pytorch} height='30' className='pr-1 '/>PyTorch
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

export default skinscan;