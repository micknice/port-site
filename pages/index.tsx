import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { Inter, Poppins } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ]
})

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike McCullagh - Portfolio</title>
        <meta name="description" content="etc. etc."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <Projects/>
      {/* <About/> */}
      <Skills/>
      {/* <Contact/> */}

    </div>
  )
}
