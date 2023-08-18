import BalloonImg from '../public/assets/parallax/balloon.png' 

import Image from 'next/image'

const Balloon = () => {
    return (
        <div class="relative mix-blend-lighten">
        <img src='../public/assets/parallax/balloon.png' alt="BannerImage" class="  w-full object-cover object-right " />
        <img src='../public/assets/parallax/balloon.png' alt="BannerImage" class=" h-[20vh] w-[30vh] object-cover object-right " />
      </div>
    );
  };
  
  export default Balloon;

  
  
  
