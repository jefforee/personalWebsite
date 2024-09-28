"use client";

import { useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import orangeJuice from "../../../public/images/about/orange_juice.png"
import yellowSoda from "../../../public/images/about/soft_drink_yellow.png"
import profilePic from "../../../public/images/about/jeffPFPpixel.png"
import realPicFull from "../../../public/images/about/realPfpFull.png"

import computerGif from "../../../public/images/about/computer.gif"

import foodie from "../../../public/images/frogs/foodie.png"
import gamer from "../../../public/images/frogs/gamer.png"
import gym from "../../../public/images/frogs/gym.png"
import photographer from "../../../public/images/frogs/photographer.png"

import topLeftSelect from "../../../public/images/experiences/topLeftSelect.png"
import topRightSelect from "../../../public/images/experiences/topRightSelect.png"
import bottomLeftSelect from "../../../public/images/experiences/bottomLeftSelect.png"
import bottomRightSelect from "../../../public/images/experiences/bottomRightSelect.png"

import inventoryPlant from "../../../public/images/inventory/inventoryPlant.png"
import confirm from "../../../public/images/inventory/confirm.png"
import cancel from "../../../public/images/inventory/cancel.png"
import sandtimer from "../../../public/images/inventory/sandtimer.png"

import GradientSquare from '../components/GradientSquare';
import { motion } from 'framer-motion';
import FlipLink from '../components/FlipLink';

export default function About() {


    const identityInfo = [
        {
            label: "Original",
            role: "Jeffrey",
            description: "Sleeping",
            image: profilePic,
            yoe: "??",
            items: []

        },

        {
            label: "Frogtographer",
            role: "Photographer",
            description: "Film-Look",
            image: photographer,
            yoe: "3",
            items: []

        }
    ]

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedRole, setSelectedRole] = useState(identityInfo[0]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`py-8 xl:py-32 flex flex-col`}
        >

            {/* Intro */}
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <div className='leading-none flex flex-row items-center'>
                        <Image src={orangeJuice} width={100} className='w-[3vw]' style={{ imageRendering: 'pixelated' }} unoptimized></Image>
                        <Image src={yellowSoda} width={100} className='w-[3vw] sm:-ml-3' style={{ imageRendering: 'pixelated' }} unoptimized></Image>
                        <span className='text-[4vw] font-semibold'>My name is</span>
                    </div>

                    {/* <div class="content">
                        <h2 className="text-[5vw] xl:text-[8vw] lg:ml-4 leading-[1.15] font-pixelify text_shadows lg:-mb-5">Jeffrey</h2>
                    </div>
                    <div className="flicker-container">
                        <h1 className="flicker-text" data-flicker="Hello">
                            Flicker
                        </h1>
                        <span className="flicker-span" aria-hidden="true">Hello</span>
                    </div> */}
                    {/* <span className='text-[5vw]'>Jeffrey 黄</span> */}

                    {/* Name */}
                    <section className="xl:px-8 py-2 text-banana-yellow">
                        <FlipLink href="#" isHovered={isHovered} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            {isHovered ? "Huang 黄" : "Jeffrey"}
                        </FlipLink>
                    </section>



                    <div className='flex flex-row justify-start gap-x-4 items-center '>
                        <Image
                            src={computerGif}
                            style={{ imageRendering: 'pixelated' }}
                            className='w-[10vw]'
                            alt="Computer gif"
                            unoptimized
                        />
                        <div className='flex flex-col font-pixelify text-[1.15vw] lg:leading-9 font-semibold'>
                            <div className="flex flex-row">
                                <span className='font-normal'>Currently -&gt;&nbsp; <br /> Previously -&gt;&nbsp;  <br /> Developing -&gt;&nbsp;</span>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString('SWE @ Amazon<br/>IBM<br/>UniMart')
                                            .pauseFor(2000)
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: true,   // Ensures the text types only once
                                        delay: 80,     // Typing speed
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <Image
                        src={profilePic}
                        style={{
                            imageRendering: 'pixelated',
                            transition: 'opacity 0.5s ease',
                        }}
                        className={`w-[25vw] h-[25vw] max-w-xl border-[5px] border-black absolute top-0 right-5 opacity-100 group-hover:opacity-0`} // Change opacity on hover
                        alt="Profile Picture"
                        unoptimized
                    />
                    <Image
                        src={realPicFull}
                        style={{
                            imageRendering: 'auto',
                            transition: 'opacity 0.5s ease',
                            objectFit: 'cover'
                        }}
                        className={`w-[25vw] h-[25vw] max-w-xl border-[5px] border-black absolute top-0 right-5 opacity-0 group-hover:opacity-100`} // Change opacity on hover
                        alt="Real Profile Picture"
                        unoptimized
                    />
                </div>



            </div>
            <div className='flex flex-col justify-center items-center mt-24'>
                <span className='font-pixelify text-[2vw]'>
                    <span className='text-banana-yellow'>&lt;</span>
                    SELECT YOUR JEFF
                    <span className='text-banana-yellow'>&gt;</span>
                </span>

                <div className='flex flex-row gap-x-4 mt-4' >
                    {[
                        { src: photographer, label: 'Frogtographer' },
                        { src: gym, label: 'Gym Frog' },
                        { src: foodie, label: 'Froogdie' },
                        { src: gamer, label: 'Gamerog' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className='relative flex flex-col items-center group z-20'
                            onClick={() => {
                                setSelectedIndex(index);

                                // Find the corresponding role in identityInfo based on the label
                                const identityItem = identityInfo.find(info => info.label === item.label);
                                if (identityItem) {
                                    setSelectedRole(identityItem); // Set selectedRole to the role from identityInfo
                                }
                                console.log(selectedRole)
                            }}
                        >
                            <Image
                                src={item.src}
                                style={{ imageRendering: 'pixelated' }}
                                className='w-[14vw] cursor-pointer'
                                alt={item.label}
                                unoptimized

                            />
                            <span className='font-semibold text-[1.5vw] mt-2 font-pixelify'>{item.label}</span>

                            {/* Hover Effect Wrapper */}
                            {selectedIndex !== index && (

                                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer z-10">
                                    {/* Corner Images */}
                                    <Image
                                        src={topLeftSelect}
                                        alt="Top Left"
                                        className={`absolute top-[-14px] left-[-12px] w-6 h-6 animate-out-in-top-left ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={topRightSelect}
                                        alt="Top Right"
                                        className={`absolute top-[-14px] right-[-12px] w-6 h-6 animate-out-in-top-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomLeftSelect}
                                        alt="Bottom Left"
                                        className={`absolute bottom-[32px] left-[-12px] w-6 h-6 animate-out-in-bottom-left ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomRightSelect}
                                        alt="Bottom Right"
                                        className={`absolute bottom-[32px] right-[-12px] w-6 h-6 animate-out-in-bottom-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                </div>
                            )}

                            {/* Show original images if selected */}
                            {selectedIndex === index && (
                                <div className="absolute inset-0 flex justify-center items-center cursor-default z-20">
                                    {/* Original colored images */}
                                    <Image
                                        src={topLeftSelect} // Replace with your original image path
                                        alt="Top Left"
                                        className={`absolute top-[-14px] left-[-12px] w-6 h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={topRightSelect} // Replace with your original image path
                                        alt="Top Right"
                                        className={`absolute top-[-14px] right-[-12px] w-6 h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomLeftSelect} // Replace with your original image path
                                        alt="Bottom Left"
                                        className={`absolute bottom-[32px] left-[-12px] w-6 h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomRightSelect} // Replace with your original image path
                                        alt="Bottom Right"
                                        className={`absolute bottom-[32px] right-[-12px] w-6 h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            <div className='flex flex-row items-center justify-center font-pixelify mt-28 gap-x-3'>
                {/* Left Side */}
                <div className='flex flex-col gap-y-3 w-1/4'>

                    {/* Inventory Label*/}
                    <div className='bg-[#ECD6AB] border-2 border-black rounded-md p-1 '>
                        <div className='flex flex-row items-center bg-[#C28569] 
                        justify-between px-3 py-2 rounded-md space'>
                            {/* Image */}
                            <div className='border-2 rounded-md bg-white border-black w-[4vw] h-[2vw] flex justify-center items-center'>
                                <div className='relative bg-[#D9D9D9] rounded-md w-[3.5vw] h-[1.8vw]'>
                                    <Image
                                        src={inventoryPlant}
                                        width={100}
                                        className='w-[3vw] h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[55%]'
                                        style={{ imageRendering: 'pixelated' }}
                                        alt="Inventory Plant"
                                        unoptimized
                                    />
                                </div>
                            </div>


                            {/* Label */}
                            <span className='font-semibold text-[1.75vw] pl-2 '>Inventory</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='bg-white border-2 border-black rounded-md p-1'>

                        <div className='bg-[#C0CBDC] rounded-md flex flex-col p-2 text-[1.5vw] leading-none'>
                            <div className="flex flex-row space-x-4 justify-center">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <GradientSquare key={index} />
                                ))}
                            </div>

                            <span className='font-semibold pt-2'>{selectedRole ? selectedRole.role : identityInfo[0].role}</span>
                            <span className='opacity-50'>{selectedRole ? selectedRole.description : identityInfo[0].description}</span>
                            <div className='flex flex-row py-2 items-center space-x-3'>
                                <Image src={selectedRole ? selectedRole.image : identityInfo[0].image}
                                    className='w-[3vw] aspect-square rounded-md border-2 border-black'
                                    unoptimized
                                ></Image>
                                <Image src={confirm} className='h-[1.5vw] w-auto transition-transform transform hover:scale-110 cursor-pointer'
                                    style={{ imageRendering: 'pixelated' }}
                                    unoptimized
                                ></Image>
                                <Image src={cancel} className='h-[1.5vw] w-auto transition-transform transform hover:scale-110 cursor-pointer'
                                    style={{ imageRendering: 'pixelated' }}
                                    unoptimized
                                ></Image>
                            </div>

                        </div>

                    </div>
                    {/* YOE */}
                    <div className='bg-[#ECD6AB] border-2 border-black rounded-md p-1 '>
                        <div className='flex flex-row items-center bg-[#C28569] 
                        justify-center px-3 py-2 rounded-md space space-x-2'>

                            <Image
                                src={sandtimer}
                                width={100}
                                className='w-[1.75vw] h-auto'
                                style={{ imageRendering: 'pixelated' }}
                                alt="Inventory Plant"
                                unoptimized
                            />


                            {/* Label */}
                            <span className='font-semibold text-[1.75vw] pl-2 '>{selectedRole ? selectedRole.yoe : identityInfo[0].yoe} Years</span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='border-2 border-black w-2/4'>
                    {/* Inventory */}
                    <div>
                        
                    </div>
                </div>
            </div>



        </motion.div >
    );
};
