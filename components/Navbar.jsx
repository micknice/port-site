import React, {useState, useEffect}from 'react'
import {IconContext} from 'react-icons'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import navLogo from '../public/assets/nav/brain.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const [shadow, setShadow] = useState(4)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 0 && window.scrollY <50) {
        setShadow(4)
      } 
      else if (window.scrollY >= 50 && window.scrollY <100) {
        setShadow(0)
      } 
      else if (window.scrollY >= 100 && window.scrollY <150) {
        setShadow(1)
      }  else if (window.scrollY >= 150 && window.scrollY <250) {
        setShadow(2)
      } else if (window.scrollY >= 250) {
        setShadow(3)
      } else {
        setShadow(4)
      }
    }
    console.log('shadow', shadow)
    window.addEventListener('scroll', handleShadow)
  },);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className={
      shadow == 4 ? 'fixed w-full h-20 shadow-none z-[100] bg-[#ecf0f3] bg-opacity-100' : 
      shadow == 0 ? 'fixed w-full h-20 shadow-sm z-[100] bg-[#eff3f5] bg-opacity-95' : 
      shadow == 1 ? 'fixed w-full h-20 shadow z-[100] bg-[#f2f7f7] bg-opacity-90' : 
      shadow == 2 ? 'fixed w-full h-20 shadow-lg z-[100] bg-[#f5faf9] bg-opacity-85' : 
      shadow == 3 ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#f8fdfb] bg-opacity-80' : 
      'fixed w-full h-20  shadow-none z-[100] bg-white bg-opacity-100'}>
      <div className ='flex justify-between items-center w-full h-full px-2 2xl:px-16 sm:ml-3'>
        <Link href='/'>
          <Image className ={
        shadow == 4 ? '' : 
        shadow == 0 ? 'opacity-75 ' : 
        shadow == 1 ? 'opacity-30' : 
        shadow == 2 ? 'opacity-10' : 
        shadow == 3 ? 'opacity-0' : 
        'opacity-0'}
          priority
          src={navLogo} 
          alt='/' 
          width='auto' 
        height='50'/>
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/' >
              <li className='ml-10 font-bold text-sm uppercase hover:border-b hover:scale-105'>Home</li>
            </Link>
            <Link href='/#about' >
              <li className='ml-10 font-bold text-sm uppercase hover:border-b hover:scale-105'>About</li>
            </Link>
            <Link href='/#skills' >
              <li className='ml-10 font-bold text-sm uppercase hover:border-b hover:scale-105'>Skills</li>
            </Link>
            <Link href='/#projects' >
              <li className='ml-10 font-bold text-sm uppercase hover:border-b hover:scale-105'>Projects</li>
            </Link>

            <Link href='#contact' >
              <li className='ml-10 font-bold text-sm uppercase hover:border-b hover:scale-105'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full -h-screen bg-black/70' : ''}>
        <div className={
          nav 
          ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={navLogo} width='auto' height='35' alt='/'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Get busy</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/' >
                <li className='py-4 text-sm font-semibold' onClick={handleNav} >Home</li>
              </Link>
              <Link href='/#about' >
                <li className='py-4 text-sm font-semibold' onClick={handleNav}>About</li>
              </Link>
              <Link href='/#skills'>
                <li className='py-4 text-sm font-semibold' onClick={handleNav}>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li className='py-4 text-sm font-semibold ' onClick={handleNav}>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-sm font-semibold' onClick={handleNav}>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='.self-center uppercase tracking-widest text-[#5]'>Lets Connect</p>
              <div className='flex items-baseline justify-evenly my-4 w-full sm:w-[80%] mx-1'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <IconContext.Provider
                    value={{color: 'blue'}}
                  >
                    <FaLinkedinIn/>
                  </IconContext.Provider>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <IconContext.Provider
                    value={{color: '#db0d0d'}}
                  >
                    <AiOutlineMail/>
                  </IconContext.Provider>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar