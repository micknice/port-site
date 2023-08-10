import Image from 'next/image';
import React from 'react';
import workoutImg from '../public/assets/projects/workout.png';
import Dart from '../public/assets/skills/Dart_logo.png';
import Flutter from '../public/assets/skills/flutter.png';
import Firebase from '../public/assets/skills/firebase.png';
import Bloc from '../public/assets/skills/bloc.png';






import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const workout = () => {
  
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />       
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={workoutImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Workout Tracker</h2>
          <h3>Dart / Flutter / Firebase / BLoC</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Workout tracker allowing users to log lifts and track progress with visualization and records. Built with Flutter and Firebase.
          </p>
          {/* <ReactPlayer className=' py-8'url='https://youtu.be/QbiGu2FLbAY' />  */}
          <a
            href='https://github.com/micknice/any_percent_flutter_app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105'>Code</button>
          </a>
          
        </div>
        
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image src={Dart} height='20' className='pr-1 '/>Dart
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image src={Flutter} height='20' className='pr-1'/>Flutter
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                {/* <RiRadioButtonFill className='pr-1' />  */}
                <Image src={Firebase} height='20' className='pr-1'/> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                {/* <RiRadioButtonFill className='pr-1' />  */}           
                <Image src={Bloc} height='23' className='pr-1 px-1'/> BLoC
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