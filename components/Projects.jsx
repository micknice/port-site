import React from 'react';
import Skinscan from '../public/assets/projects/SKINSCAN.png';
import Workout from '../public/assets/projects/workout.png';
import Breakdown from '../public/assets/projects/SimShot.png'
import Profanity from '../public/assets/projects/profanity.png'
import Memeosphere from '../public/assets/projects/memeosphereScrnsht.png'
import cashImg from '../public/assets/projects/cashoverflowcrop.png'
import Tardigrade from '../public/assets/projects/thetardigrade_front.png'
import MikiFit from '../public/assets/projects/mikifit-front.png'

import ProjectItem from './ProjectItem';
import ProjectItemVideo from './ProjectItemVideo';

const Projects = () => {
  return (
    <div id='projects' className='w-full  '>
      <div className='max-w-[1240px] mx-auto mt-20 sm:mt-40 px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] mt-10'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          <ProjectItem
            title='MikiFit'
            backgroundImg={MikiFit}
            projectUrl='/e-commerce'
            description='E-commerce store'
            tech='NextJS, Spring Boot, Tailwind, Docker'
          /> 
          <ProjectItem
            title='The Tardigrade'
            backgroundImg={Tardigrade}
            projectUrl='/news'
            description='News site with social features'
            tech='NextJS, Express, Tailwind, PostgreSQL'
          />  
          <ProjectItem
            title='Skin Scan'
            backgroundImg={Skinscan}
            projectUrl='/skinscan'
            description='Skin cancer education with neural network image classification'
            tech='Vue, Express, Flask, PyTorch'
          />          
                  
                   
          <ProjectItem
            title='Any %'
            backgroundImg={Workout}
            projectUrl='/workout'
            description='Cross platform workout tracker'
            tech='Flutter, Firebase, BLoC'
          />          
          <ProjectItem
            title='AA Simulator'
            backgroundImg={Breakdown}
            projectUrl='/breakdown'
            description='Simulation of breakdowns and rescue patrol allocation and attendance'
            tech='React, PostgreSQL, Socket.IO'
          />          
          <ProjectItem
            title='Memeosphere'
            backgroundImg={Memeosphere}
            projectUrl='/memeosphere'
            description='Turn based card battle game'
            tech='Next, React, MobX'
          />          
          <ProjectItem
            title='Cash Overflow'
            backgroundImg={cashImg}
            projectUrl='/cashoverflow'
            description='Instant win game of chance'
            tech='TypeScript, Next, Tailwind, MobX'
          />          
          <ProjectItem
            title='Profanity Filter'
            backgroundImg={Profanity}
            projectUrl='/profanity'
            description='Profanity detection micro-service'
            tech='JavaScript, Express, Docker'
          />          
        </div>
      </div>
    </div>
  );
};

export default Projects;