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
            title='Workout Tracker'
            backgroundImg={Workout}
            projectUrl='/workout'
            tech='Flutter, Firebase, BLoC'
          />          
          <ProjectItem
            title='Breakdown Simulator'
            backgroundImg={Breakdown}
            projectUrl='/breakdown'
            tech='JavaScript, React, PostgreSQL, Mapbox, Bing Maps, Socket.IO, Docker'
          />          
          <ProjectItem
            title='Meme-o-sphere. Turn based game'
            backgroundImg={Memeosphere}
            projectUrl='/memeosphere'
            tech='JavaScript, Next, React, MobX'
          />          
          <ProjectItem
            title='Cash Overflow. Instant win game of chance'
            backgroundImg={cashImg}
            projectUrl='/cashoverflow'
            tech='TypeScript, Next, React, Tailwind, MobX'
          />          
          <ProjectItem
            title='Profanity Filter Microservice'
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