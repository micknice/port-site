import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Skinscan from '../public/assets/projects/SKINSCAN.png';
import Workout from '../public/assets/projects/workout.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
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
          {/* <ProjectItem
            title='Workout Tracker'
            backgroundImg={}
            projectUrl='/flownotes'
            tech='Flutter, Firebase, BLoC'
          />           */}
        </div>
      </div>
    </div>
  );
};

export default Projects;