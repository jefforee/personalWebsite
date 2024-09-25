"use client";

import { useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import orangeJuice from "../../../public/images/about/orange_juice.png"
import yellowSoda from "../../../public/images/about/soft_drink_yellow.png"
import profilePic from "../../../public/images/about/jeffPFPpixel.png"
import computerGif from "../../../public/images/about/computer.gif"

import foodie from "../../../public/images/frogs/foodie.png"
import gamer from "../../../public/images/frogs/gamer.png"
import gym from "../../../public/images/frogs/gym.png"
import photographer from "../../../public/images/frogs/photographer.png"

import topLeftSelect from "../../../public/images/experiences/topLeftSelect.png"
import topRightSelect from "../../../public/images/experiences/topRightSelect.png"
import bottomLeftSelect from "../../../public/images/experiences/bottomLeftSelect.png"
import bottomRightSelect from "../../../public/images/experiences/bottomRightSelect.png"

import { motion } from 'framer-motion';

export default function About() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`py-8 sm:py-32 flex flex-col`}
        >

            {/* Intro */}
            <div className='flex flex-row justify-between   '>
                <div className='flex flex-col'>
                    <div className='leading-none flex flex-row items-center'>
                        <Image src={orangeJuice} width={100} className='w-[3vw]' style={{ imageRendering: 'pixelated' }}></Image>
                        <Image src={yellowSoda} width={100} className='w-[3vw] sm:-ml-3' style={{ imageRendering: 'pixelated' }}></Image>
                        <span className='text-[4vw] font-semibold'>My name is</span>
                    </div>

                    <div class="content">
                        <h2 className="leading-[1.15] font-pixelify text_shadows -mb-5">Jeffrey</h2>
                    </div>


                    <div className='flex flex-row justify-start gap-x-4 items-center '>
                        <Image
                            src={computerGif}
                            style={{ imageRendering: 'pixelated' }}
                            className='w-[10vw]'
                            alt="Computer gif"
                        />
                        <div className='flex flex-col font-pixelify text-[1.15vw] lg:leading-9 font-semibold'>
                            <div className="flex flex-row">
                                <span className='font-normal'>Currently -&gt;&nbsp;</span>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(500)
                                            .typeString('Software Engineer @ Amazon')
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,   // Ensures the text types only once
                                        delay: 50,     // Typing speed
                                    }}

                                />
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-normal'>Previously -&gt;&nbsp;</span>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(2300)
                                            .typeString('IBM')
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                    }}
                                />
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-normal'>Developing -&gt;&nbsp;</span>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(2600)
                                            .typeString('UniMart')
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={profilePic}
                        style={{ imageRendering: 'pixelated' }}
                        className='w-[25vw] max-w-xl border-[5px] border-black'
                        alt="Profile Picture"
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
                    <div key={index} className='relative flex flex-col items-center group z-20'
                    onClick={() => {
                        setSelectedIndex(index);
                        console.log(`Selected index: ${index}`);
                    }}>
                        <Image
                            src={item.src}
                            style={{ imageRendering: 'pixelated' }}
                            className='w-[15vw] cursor-pointer'
                            alt={item.label}
                           
                            
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
                            />
                            <Image
                                src={topRightSelect}
                                alt="Top Right"
                                className={`absolute top-[-14px] right-[-12px] w-6 h-6 animate-out-in-top-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                style={{ imageRendering: 'pixelated' }}
                            />
                            <Image
                                src={bottomLeftSelect}
                                alt="Bottom Left"
                                className={`absolute bottom-[32px] left-[-12px] w-6 h-6 animate-out-in-bottom-left ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                style={{ imageRendering: 'pixelated' }}
                            />
                            <Image
                                src={bottomRightSelect}
                                alt="Bottom Right"
                                className={`absolute bottom-[32px] right-[-12px] w-6 h-6 animate-out-in-bottom-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                style={{ imageRendering: 'pixelated' }}
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
                                />
                                <Image
                                    src={topRightSelect} // Replace with your original image path
                                    alt="Top Right"
                                    className={`absolute top-[-14px] right-[-12px] w-6 h-6`}
                                    style={{ imageRendering: 'pixelated' }}
                                />
                                <Image
                                    src={bottomLeftSelect} // Replace with your original image path
                                    alt="Bottom Left"
                                    className={`absolute bottom-[32px] left-[-12px] w-6 h-6`}
                                    style={{ imageRendering: 'pixelated' }}
                                />
                                <Image
                                    src={bottomRightSelect} // Replace with your original image path
                                    alt="Bottom Right"
                                    className={`absolute bottom-[32px] right-[-12px] w-6 h-6`}
                                    style={{ imageRendering: 'pixelated' }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>



        </motion.div >
    );
};

