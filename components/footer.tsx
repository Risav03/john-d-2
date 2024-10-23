import React from 'react'
import Image from 'next/image'
import chumfooter from "@/assets/footerchum.png"
import { IoMdMail } from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { SiOpensea } from 'react-icons/si'

export const Footer = () => {
  return (
    <div id='footer' className='bg-[#d55a34] rounded-t-xl pt-10 relative bottom-2 z-50 border-t-4 border-[#ffc3b1] w-screen md:h-52 max-md:flex-col flex px-10'>
        <div className='md:w-[80%] max-md:mx-auto'>
          <h2 className='text-3xl '>My Links</h2>
          <div className='mt-2 flex gap-4 max-md:justify-center'>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=doolittle4@att.net' target='_blank' className='my-2 hover:-translate-y-1 text-lg duration-200 text-[#ffc3b1] hover:text-white'><IoMdMail/></a>
            <a href='https://x.com/Jdooplantman?t=ah83jNjN25plZCqE7QiBhQ&s=09' target='_blank' className='my-2 hover:-translate-y-1 text-lg duration-200 text-[#ffc3b1] hover:text-white'><FaXTwitter/></a>
            <a href='https://opensea.io/0x45489df7dDCb75740978641f3e44Bd0a2AdC7f24' target='_blank' className='my-2 hover:-translate-y-1 text-lg duration-200 text-[#ffc3b1] hover:text-white'><SiOpensea/></a>
          </div>
        </div>
        <div className='flex md:w-[20%] md:justify-end max-md:justify-center'>
          <Image src={chumfooter} alt='footer' className='w-40' />
        </div>
    </div>
  )
}
