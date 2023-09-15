import React from 'react';
import Skinscan from '../public/assets/projects/SKINSCAN.png';
import Workout from '../public/assets/projects/workout.png';
import Breakdown from '../public/assets/projects/SimShot.png'
import Profanity from '../public/assets/projects/profanity.png'
import Memeosphere from '../public/assets/projects/memeosphereScrnsht.png'
import cashImg from '../public/assets/projects/cashoverflowcrop.png'

import ProjectItem from './ProjectItem';
import ProjectItemVideo from './ProjectItemVideo';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen '>
      <div className='max-w-[1240px] mx-auto mt-20 sm:mt-40 px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] mt-10'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <ProjectItem
            title='Skin Scan'
            backgroundImg={Skinscan}
            projectUrl='/skinscan'
            tech='Vue, Express, Flask, PyTorch'
          />          
          <ProjectItem
            title='Lift Tracker'
            backgroundImg={Workout}
            projectUrl='/workout'
            tech='Flutter, Firebase, BLoC'
          />          
          <ProjectItem
            title='AA Simulator'
            backgroundImg={Breakdown}
            projectUrl='/breakdown'
            tech='React, PostgreSQL, Socket.IO'
          />          
          <ProjectItem
            title='Memeosphere'
            backgroundImg={Memeosphere}
            projectUrl='/memeosphere'
            tech='Next, React, MobX'
          />          
          <ProjectItem
            title='Cash Overflow'
            backgroundImg={cashImg}
            projectUrl='/cashoverflow'
            tech='TypeScript, Next, Tailwind, MobX'
          />          
          <ProjectItem
            title='Profanity Filter'
            backgroundImg={Profanity}
            projectUrl='/profanity'
            tech='JavaScript, Express, Docker'
          />          
        </div>
      </div>
    </div>
  );
};

export default Projects;