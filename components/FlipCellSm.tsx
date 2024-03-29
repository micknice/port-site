import ReactCardFlip from 'react-card-flip'
import {useState, useEffect} from 'react'
import Ainsley from '../public/assets/logos/ainsleyml.png'
import Image, { StaticImageData } from 'next/image'
import store from '../store/store'
import {useSound} from 'use-sound'
import scratch from '../scratchEngine/Scratch'



interface FlipCellProps {
    flippedImg?: StaticImageData; // The image URL to display when flipped
    finishCallback: () => void
}


export default function FlipCell({flippedImg, finishCallback}: FlipCellProps) {

    const [flipped, setFlipped] = useState(false)

    const [playFlipSfx] = useSound('/assets/sfx/swish.mp3', {volume: 0.2})
    const [playKerching] = useSound('/assets/sfx/kerching.mp3')
    const [playSigh] = useSound('/assets/sfx/sigh.mp3', {volume:0.2})
    

    const handleFlip = () => {
        if(!flipped) {
            setFlipped(true)
            store.incrementFlipCount()
            playFlipSfx()
            if(store.flipCount === 9){
                if(scratch.keyLang === 'Loss') {
                    playSigh()
                } else {
                    playKerching()
                }
                finishCallback()
            }
        }
    }
    
    return (
        <div onClick={handleFlip} className='h-full flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <ReactCardFlip containerClassName=' rounded-lg w-3/3 h-3/3 ' isFlipped={flipped} flipDirection='horizontal'>
                    <Image className='  rounded-lg w-full h-full'
                        src={Ainsley}
                                        
                        alt="/" 
                    />
                    {flippedImg &&
                        <Image className=' rounded-lg w-full h-full'
                            src={flippedImg}
                                            
                            alt="/" 
                                            
                        />
                    }
                </ReactCardFlip>
            </div>
            
        </div>
    )

}