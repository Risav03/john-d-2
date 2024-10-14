import React from 'react'
import Image from 'next/image'
import chumfooter from "@/assets/footerchum.png"

export const Footer = () => {
  return (
    <div className='bg-[#d55a34] rounded-t-xl pt-10 relative z-50 border-t-4 border-[#ffc3b1] w-screen md:h-52 max-md:flex-col flex px-10'>
        <div className='md:w-[80%]'>
          <h2 className='text-3xl '>Contact Me</h2>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=doolittle4@att.net' target='_blank' className='my-2 hover:-translate-y-1 duration-200 text-[#ffc3b1] hover:text-white'>Email</a>
        </div>
        <div className='flex md:w-[20%] justify-end'>
          <Image src={chumfooter} alt='footer' className='w-40' />
        </div>
    </div>
  )
}
