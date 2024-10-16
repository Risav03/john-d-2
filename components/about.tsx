import React from 'react'
import gif from "@/assets/hen.png"
import Image from 'next/image'

export const About = () => {
  return (
    <div id='about' className='flex max-md:flex-col rounded-t-xl gap-10 sticky top-0 md:py-20 md:px-10 px-4 py-10 items-center bg-black justify-center h-screen border-t-4 border-[#d55a34]'>
      <div className='md:w-[60%] flex items-center justify-center flex-col'>
        <h2 className='text-[#ffc3b1] text-3xl md:text-4xl'>About Me</h2>
        <p className='md:w-[80%] max-md:text-center mt-5 text-sm md:text-xl' ><span className='text-[#d55a34]'>Inspector Orange</span> is a clever, adventurous cat with a nose for mystery and a heart full of love. Known for his <span className='text-[#d55a34]'>bright orange raincoat</span> and keen detective skills, <span className='text-[#d55a34]'>Inspector Orange</span> roams the world in search of the chummiest people and places. </p>
        <p className='md:w-[80%] max-md:text-center mt-5 text-sm md:text-xl '>By his side is his loyal and quirky sidekick, <span className='text-[#d55a34]'>Orange Chikn</span>, a small but spirited companion who met Inspector Orange by chance during a serendipitous encounter. Together, this dynamic duo dedicates their time to spreading "chum love"—the unique warmth of friendship, kindness, and connection—wherever they go. <span className='text-[#d55a34]'>Their mission? </span>To uncover the hidden gems of chumminess and make the world a cozier, more loving place.</p>
      </div>
      <div className='md:w-[40%] flex items-center justify-center h-96 w-full'>
        <Image src={gif} alt="gif" className=' md:w-96 max-md:w-72 mx-auto rounded-xl' />
      </div>
    </div>
  )
}
