"use client"

import chumbg from "@/assets/chumbg.jpg"
import Image, { StaticImageData } from "next/image"
import React, { useEffect, useState } from 'react'
import abi from "@/utils/abis/chumabi"
import { ContractAdd } from "@/utils/contractAds"
import { ethers } from "ethers"
import axios from "axios"
import blur from "@/assets/logos/blur2.png"
import opensea from "@/assets/logos/opensea2.svg"

interface Obj {
    trait_type: string,
    value: string
}

interface Prop {
    img: string,
    tokenId: number,
    attributeArr: Array<Obj>,
}
export const Gallery = () => {


    const [data, setData] = useState<Array<Prop>>([])

    async function contractSetup(){
        const provider = ethers.getDefaultProvider("https://mainnet.infura.io/v3/2d79cc1bf74a4f578c497d810215b1f9");

        try {
          const contract = new ethers.Contract(ContractAdd.contract, abi, provider);
          return contract;
        }
        catch(err){
            console.log(err);
        }
    }

    async function fetchChums(){
        const contract = await contractSetup();
        let i = 0

        while(1 == 1){
            try{
                const tokenId = Number(await contract?.tokenOfOwnerByIndex("0x45489df7ddcb75740978641f3e44bd0a2adc7f24", i));
                const img = "https://gateway.pinata.cloud/ipfs/QmXcSqfgLDPWaZBxrM3fxWenaE9nTDQGGtC59twFsphf92/"+tokenId+".png"
                const res = await axios.get("https://gateway.pinata.cloud/ipfs/Qmem6x3tee8t1thwaCzcFi5DjaZHkHwJniceizdMTmmVfh/"+tokenId);
                const attributeArr = res.data.attributes;

                setData(oldArr => [...oldArr, {img, tokenId, attributeArr}])

                i++;
            }
            catch(err){
                break;
            }
        }
    }

    useEffect(()=>{
        setData([])
        fetchChums();
    },[])

    const collabArr = [{
        name: "Cat Party",
        opensea: "https://opensea.io/assets/base/0x520c8125a65540e47ee7404cb3e943eb37bfa2b2/1",
        artist: "simplecat",
        rotation: " rotate-[5deg] ",
        image: "https://3xbuilds.s3.ap-south-1.amazonaws.com/collabs/catparty.png"
    },
    {
        name: "Chum Halloween Party 2024",
        opensea: "https://opensea.io/assets/base/0xf2cfd07e26a3f6faa471f39e0c66f6c08a22f778/2",
        artist: "CHUM BASE",
        rotation: " rotate-[-6deg] ",
        image: "https://3xbuilds.s3.ap-south-1.amazonaws.com/collabs/halloween.png"
    },
    {
        name: "Chickitty",
        opensea: "https://opensea.io/assets/base/0x9a291dd80cd601f4c02da3f595d78e4b640e8b56/161",
        artist: "FTGC",
        rotation: " rotate-[2deg] ",
        image: "https://3xbuilds.s3.ap-south-1.amazonaws.com/collabs/tradingcard.png"
    },
    {
        name: "Chum Chums #1081",
        opensea: "https://opensea.io/assets/base/0xf8a1e337c83ce46464d87e9a5dafc72854f4c196/118",
        artist: "Deriiv: Bonus Collection",
        rotation: " rotate-[-5deg] ",
        image: "https://3xbuilds.s3.ap-south-1.amazonaws.com/collabs/chumchums.gif"
    },
]

  return (
    <div id="gallery" className='flex max-md:flex-col rounded-t-xl gap-10 relative items-center bg-black justify-center min-h-screen border-t-4 border-[#d55a34] object-contain overflow-hidden'>
        <div className="md:pt-20 md:px-10 px-4 pt-10 relative z-50">
            <h2 className='text-[#ffc3b1] text-3xl text-center md:text-5xl md:px-10 px-4 mb-10 '>Gallery</h2>
            <div className="overflow-x-scroll h-[36rem] overflow-y-hidden py-[1rem] bg-black/50">
                <h2 className='text-white text-2xl md:text-3xl md:px-10 px-4 mb-4'>Collected:</h2>
                <div className="flex gap-4 items-center w-screen overflow-scroll md:px-10 px-4">
                    {data.map((item)=>(
                        <div className="bg-black border-2 h-[31rem] w-60 min-w-60 border-[#d55a34] rounded-lg flex flex-col items-center p-4">
                            <Image width={1080} height={1080} src={item.img} alt="image" className="w-48 h-48 rounded-lg" />
                            <h2 className="mt-2">Chum Chums <span className="text-[#d55a34]">#{item.tokenId}</span></h2>

                            <div className="flex gap-1 flex-wrap w-full justify-center mt-2">
                            {item.attributeArr.map((item2)=>(
                                <div className="w-24 text-center bg-[#d55a34]/20 py-2 rounded-lg border-[1px] border-[#d55a34]">
                                    <h2 className="text-[0.6rem] text-[#d55a34]">{item2.trait_type}</h2>
                                    <h2 className="text-xs">{item2.value}</h2>
                                </div>
                            ))}
                            </div>

                            <div className='flex gap-4 items-center w-full h-full justify-center flex-wrap mt-2 '>
                                    <a href={"https://blur.io/eth/asset/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423/"+item.tokenId} target='_blank' className="w-12 h-12 flex items-center justify-center rounded-lg border-[1px] border-[#d55a34] hover:-translate-y-1 duration-200" ><Image src={blur} alt="blur" className='w-8' /></a>
                                    <a href={"https://opensea.io/assets/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423/"+item.tokenId} target='_blank' className="w-12 h-12 flex items-center justify-center rounded-lg border-[1px] border-[#d55a34] hover:-translate-y-1 duration-200" ><Image src={opensea} alt="blur" className='w-8' /></a>
                                    <a href={"https://magiceden.io/collections/ethereum/0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423?evmItemDetailsModal=1~0xe987e9b07ca431fe0c7e8f431fa4f94ab9ca2423~"+item.tokenId} target='_blank' className="w-12 h-12 flex items-center justify-center rounded-lg border-[1px] border-[#d55a34] hover:-translate-y-1 duration-200">
                                        <svg viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:tw-hidden" color="#E42575" width="26" height="26" ><path d="M18.8759 4.07353L20.4363 5.90687C20.6149 6.11279 20.7733 6.28217 20.8373 6.37849C21.304 6.84225 21.5656 7.46902 21.5653 8.12214C21.5214 8.89268 21.0193 9.41744 20.5542 9.97873L19.4623 11.2607L18.8928 11.925C18.8723 11.9479 18.8592 11.9762 18.8549 12.0064C18.8506 12.0366 18.8554 12.0674 18.8686 12.0949C18.8819 12.1225 18.9031 12.1456 18.9295 12.1615C18.956 12.1773 18.9865 12.1851 19.0175 12.184H24.7096C25.579 12.184 26.6743 12.9147 26.6103 14.024C26.6085 14.5282 26.4045 15.0112 26.0427 15.3678C25.681 15.7243 25.1908 15.9253 24.6792 15.9271H15.7653C15.1789 15.9271 13.6017 15.9902 13.1602 14.6451C13.0663 14.364 13.0535 14.0628 13.1232 13.7749C13.2515 13.3493 13.4545 12.9491 13.723 12.5926C14.1713 11.9283 14.6566 11.2641 15.1351 10.6197C15.7518 9.77613 16.3854 8.9591 17.0089 8.0989C17.031 8.0709 17.043 8.03642 17.043 8.00092C17.043 7.96542 17.031 7.93094 17.0089 7.90294L14.7442 5.24594C14.7294 5.22668 14.7103 5.21105 14.6884 5.20029C14.6665 5.18954 14.6423 5.18394 14.6178 5.18394C14.5933 5.18394 14.5691 5.18954 14.5472 5.20029C14.5253 5.21105 14.5062 5.22668 14.4914 5.24594C13.8848 6.053 11.2292 9.62667 10.663 10.3507C10.0968 11.0747 8.70159 11.1146 7.92984 10.3507L4.38787 6.84678C4.36524 6.82441 4.33638 6.80916 4.30495 6.80298C4.27352 6.79679 4.24093 6.79995 4.21133 6.81205C4.18172 6.82415 4.15642 6.84464 4.13865 6.87093C4.12089 6.89722 4.11144 6.92812 4.11152 6.95971V13.6985C4.11986 14.1767 3.97616 14.6455 3.70058 15.0392C3.425 15.4329 3.03133 15.7318 2.57475 15.8939C2.28301 15.994 1.97122 16.0238 1.66538 15.981C1.35954 15.9382 1.06852 15.824 0.81657 15.6479C0.564624 15.4717 0.359058 15.2388 0.217014 14.9684C0.0749705 14.6981 0.000564258 14.3982 0 14.0938V1.97782C0.0203051 1.54119 0.179723 1.12198 0.455602 0.77974C0.731481 0.437504 1.10979 0.189657 1.53676 0.0714183C1.90302 -0.0247429 2.28856 -0.0237807 2.65431 0.0742068C3.02007 0.172194 3.35304 0.363725 3.61949 0.62939L9.06556 6.00318C9.08186 6.01951 9.1016 6.0321 9.12339 6.04006C9.14517 6.04802 9.16847 6.05117 9.19163 6.04927C9.21478 6.04736 9.23723 6.04046 9.25738 6.02906C9.27753 6.01765 9.29488 6.00201 9.30821 5.98326L13.1771 0.705779C13.3559 0.491534 13.58 0.318396 13.8338 0.198491C14.0876 0.078586 14.365 0.0148124 14.6464 0.0116362H24.7096C24.985 0.0120836 25.2571 0.0704765 25.5077 0.182911C25.7584 0.295345 25.9818 0.459228 26.163 0.663599C26.3442 0.86797 26.4791 1.10812 26.5585 1.36798C26.638 1.62785 26.6602 1.90144 26.6238 2.17045C26.5529 2.63712 26.3126 3.0626 25.9476 3.36798C25.5826 3.67335 25.1175 3.83789 24.6388 3.83108H19.004C18.9757 3.83176 18.9481 3.83991 18.924 3.85468C18.9 3.86945 18.8804 3.8903 18.8673 3.91506C18.8543 3.93982 18.8482 3.96758 18.8497 3.99545C18.8512 4.02332 18.8602 4.05029 18.8759 4.07353Z" fill="currentColor"></path></svg>
                                    </a>
                                </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#d55a34] pb-10 min-h-screen w-screen mt-10 relative">
                <h2 className='text-white text-3xl text-center md:text-5xl md:px-10 px-4 mb-10 pt-20 max-md:pt-10'>Orange Collabs</h2>
                <div className="flex flex-wrap items-center justify-center pt-10 gap-12">
                    {collabArr.map((item)=>(
                        <CollabHolder rotation={item.rotation} name={item.name} artist={item.artist} opensea={item.opensea} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
        <Image src={chumbg} alt="chumbg" className="brightness-[15%] absolute left-0 top-0 h-full w-screen object-cover" />
    </div>
  )
}

type CollabHolderType = {
    name:string,
    image:string, 
    opensea:string,
    artist:string,
    rotation:string
}

function CollabHolder({name, image, opensea, artist, rotation}:CollabHolderType){
    return(
        <div className={`h-80 w-60 bg-white ${rotation} hover:rotate-0 duration-200 shadow-xl shadow-black/30`}>
            <a href={opensea} target="_blank" className="">
                <div className="p-4">
                    <Image src={image} alt={name} width={1080} height={1080} className="" />
                    <h2 className="text-center text-black text-xl mt-2">{name}</h2>
                    <h2 className="text-center text-[#d55a34] text-lg">{artist}</h2>

                </div>
            </a>
        </div>
    )
}
