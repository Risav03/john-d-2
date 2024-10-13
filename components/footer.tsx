import React from 'react'
import Image from 'next/image'
import chumfooter from "@/assets/footerchum.jpg"

export const Footer = () => {
  return (
    <div className='bg-[#d55a34] rounded-t-xl sticky top-0 border-t-4 border-[#e36d49] w-screen h-40 flex justify-end px-10'>
        <Image src={chumfooter} alt='footer' className='w-40' />
    </div>
  )
}
