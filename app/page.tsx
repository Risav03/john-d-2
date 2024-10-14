import Image from "next/image";
import "../app/globals.css";
import bg from "@/assets/bg.jpg"
import chum from "@/assets/johndchum.png"
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col max-md:p-4 items-center justify-center h-screen sticky top-0">
      <div className="bg-gradient-to-t absolute z-50 flex items-end justify-center top-0 left-0 from-black/80 to-black/20 w-screen h-screen">
        <div className="flex h-10 top-6 max-md:top-2 absolute">
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
          <div className="md:w-72 w-40 h-16 flex items-center justify-center bg-black">
            <h1 className="text-xl md:text-2xl">Inspector<span className="font-bold text-orange-500"> Orange</span></h1>
          </div>
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
        <Image src={chum} alt="chum" className="w-[40rem] absolute bottom-0 z-50" />
      </div>

      <div className="h-[100vh] top-0 absolute left-0 overflow-hidden object-contain p-6 max-md:p-2 border-black">
        <Image src={bg} className="h-full z-10 rounded-2xl object-cover " alt="bg" />
      </div>

    </div>
    <About/>
    <Footer/>
    </div>

  );

}
