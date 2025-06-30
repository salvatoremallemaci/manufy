import React from 'react'
import background from '../assets/manu-intro.mp4'

const Opening = () => {
  return (
    <div className='h-screen bg-[#121212] flex items-center justify-center'>
        <video className='w-[75%] object-cover mix-blend-screen' src={background} preload='auto' autoPlay loop muted playsInline></video>
    </div>
  )
}

export default Opening