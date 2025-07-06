import React, { useRef, useEffect } from 'react'
import background from '../assets/manu-intro.mp4'

const Opening = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { })
    }
  }, [])

  return (
    <div className='h-screen bg-[#121212] flex items-center justify-center'>
      <video
        ref={videoRef}
        className='w-[75vw] md:w-[40%] object-cover mix-blend-screen'
        src={background}
        preload='auto'
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  )
}

export default Opening