"use client"

import Image from "next/image";
import "../app/globals.css";
import bg from "@/assets/bg.jpg"
import chum from "@/assets/johndchum.png"
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { Gallery } from "@/components/gallery";
import Link from "next/link";

export default function Home() {

  const [bringMenu, setBringMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-md:p-4 items-center justify-center h-screen sticky top-0">
        <div className="w-screen h-screen absolute left-0 bottom-0 z-[10] bg-gradient-to-b from-transparent to-black/80"></div>
        <div className="absolute z-[48] flex items-end justify-center top-0 left-0  w-screen h-screen">
          <div className="flex h-10 top-6 max-md:top-2 w-full absolute max-md:hidden">
            <div className="relative flex h-full w-full">
              <div className="w-[40%] flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="662"
                  height="678"
                  fill="none"
                  viewBox="0 0 662 678"
                  className="h-16 w-16 scale-x-[-1] text-black translate-x-[0.1rem]"
                >
                  <path
                    fill="currentColor"
                    d="M279.5 316.5C184.946 584.5 85 678 .5 678V.5H662c-88.167.5-301 85-382.5 316z"
                  ></path>
                </svg>
              </div>
              <div className="md:w-[60%] w-[60%] h-16 flex items-center gap-10 justify-start px-10 bg-black">
                <a href="#about" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">About</a>
                <a href="#gallery" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Gallery</a>
                <a href="#footer" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Links</a>
                <Link onClick={()=>{setBringMenu(false)}} href="/merch" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Merch</Link>
              </div>
              <div className="absolute top-16 -right-0 rotate-180 -scale-y-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="662"
                  height="678"
                  fill="none"
                  viewBox="0 0 662 678"
                  className="h-16 w-16 text-black -translate-x-[0.1rem]"
                >
                  <path
                    fill="currentColor"
                    d="M279.5 316.5C184.946 584.5 85 678 .5 678V.5H662c-88.167.5-301 85-382.5 316z"
                  ></path>
                </svg>

              </div>

            </div>
          </div>
          <div className="md:hidden w-16 h-16 bg-black rounded-xl flex items-center justify-center absolute right-0 top-0">
            <button onClick={() => { setBringMenu(prev => !prev) }} className="text-white text-lg w-full h-full flex justify-center items-center">{bringMenu ? <ImCross/> : <IoIosMenu className="text-3xl" />}</button>
          </div>
          <div className={`flex flex-col items-center absolute z-[51] bg-black p-10 rounded-lg duration-300 gap-4 top-0 left-0 justify-center ${bringMenu ? "-translate-y-0" : "-translate-y-[20rem]"} `}>
            <a onClick={()=>{setBringMenu(false)}} href="#about" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">About</a>
            <a onClick={()=>{setBringMenu(false)}} href="#gallery" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Gallery</a>
            <a onClick={()=>{setBringMenu(false)}} href="#footer" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Links</a>
            <Link onClick={()=>{setBringMenu(false)}} href="/merch" className="text-lg hover:text-[#d55a34] duration-200 hover:-translate-y-1">Merch</Link>
          </div>
        </div>
          
          
          <div className="flex max-md:flex-col md:gap-10 md:flex-row-reverse items-center absolute bottom-0 left-0 z-[20] max-md:justify-end justify-center h-screen w-screen">
            <div className="max-md:text-center md:w-[60%]">
              <h1 className="max-md:text-4xl text-[5rem]">I'm Inspector</h1>
              <span className="text-[#d55a34] max-md:text-5xl text-[6rem]"> Orange</span>
            </div>
            <Image src={chum} alt="chum" className="md:w-[35rem] z-50 md:translate-y-[11dvh] " />
          </div>

        <div className="h-[100vh] top-0 absolute left-0 overflow-hidden object-contain p-6 max-md:p-2 border-black">
          <Image src={bg} className="h-full z-10 rounded-2xl object-cover " alt="bg" />
        </div>

      </div>
      <About />
      <Gallery/>
      <Footer />
    </div>

  );

}
