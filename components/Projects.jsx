import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Skinscan from '../public/assets/projects/SKINSCAN.png';
import Workout from '../public/assets/projects/workout.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto mt-40 px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Skin Scan'
            backgroundImg={Skinscan}
            projectUrl='/skinscan'
            tech='Vue, Express, Flask, PyTorch'
          />          
          <ProjectItem
            title='Workout Tracker'
            backgroundImg={Workout}
            projectUrl='/workout'
            tech='Flutter, Firebase, BLoC'
          />          
          <ProjectItem
            title='Breakdown Simulator'
            backgroundImg={Workout}
            projectUrl='/breakdown'
            tech='JavaScript, React, PostgreSQL, Mapbox, Bing Maps, Socket.IO, Docker'
          />          
        </div>
      </div>
    </div>
  );
};

export default Projects;