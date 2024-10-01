"use client";

import { useRef, useState, useEffect } from 'react';
import { useHasStarted } from '../contexts/HasStartedContext';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import orangeJuice from "../../../public/images/about/orange_juice.png"
import yellowSoda from "../../../public/images/about/soft_drink_yellow.png"
import profilePic from "../../../public/images/about/jeffPFPpixel.png"
import realPicFull from "../../../public/images/about/realPfpFull.png"
import dialogueBox from "../../../public/images/about/dialogueBox.png"
import nextOption from "../../../public/images/about/nextOption.png"
import FadeInOnScroll from '../components/FadeInOnScroll';

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
import basket from "../../../public/images/inventory/basket.png"


import dumbbell from "../../../public/images/inventory/gym/dumbbell.png"
import chicken from "../../../public/images/inventory/gym/Chicken.png"
import chickenLeg from "../../../public/images/inventory/gym/ChickenLeg.png"
import eggs from "../../../public/images/inventory/gym/Eggs.png"
import bananaGym from "../../../public/images/inventory/gym/banana.png"
import milk from "../../../public/images/inventory/gym/milk_gallon.png"
import water from "../../../public/images/inventory/gym/water.png"
import peanut_butter from "../../../public/images/inventory/gym/peanut_butter.png"


import GradientSquare from '../components/GradientSquare';
import { motion } from 'framer-motion';
import FlipLink from '../components/FlipLink';
import Item from '../components/Item';

import lens from "../../../public/images/inventory/photographer/lens.png"
import microSD from "../../../public/images/inventory/photographer/micro_sd.png"
import flash from "../../../public/images/inventory/photographer/flash.png"
import digicam from "../../../public/images/inventory/photographer/digicam.png"
import fujifilm from "../../../public/images/inventory/photographer/camera.png"
import tripod from "../../../public/images/inventory/photographer/tripod.png"
import cameraBag from "../../../public/images/inventory/photographer/cameraBag.png"

import cereal from "../../../public/images/inventory/foodie/cereal2.png"
import grapes from "../../../public/images/inventory/foodie/green_grape_p.png"
import jam from "../../../public/images/inventory/foodie/jam_strawberry.png"
import patties from "../../../public/images/inventory/foodie/meat1_p.png"
import steak from "../../../public/images/inventory/foodie/meat2_p.png"
import chips from "../../../public/images/inventory/foodie/potatochip_blue.png"
import salmon from "../../../public/images/inventory/foodie/salmon_p.png"
import soda from "../../../public/images/inventory/foodie/soft_drink_red.png"
import strawberry from "../../../public/images/inventory/foodie/strawberry.png"
import bread from "../../../public/images/inventory/foodie/bread.png"

import boots from "../../../public/images/inventory/gamer/boots.png"
import cap from "../../../public/images/inventory/gamer/cap.png"
import frozenHeart from "../../../public/images/inventory/gamer/frozenHeart.png"
import ie from "../../../public/images/inventory/gamer/ie.png"
import locket from "../../../public/images/inventory/gamer/locket.png"
import potion from "../../../public/images/inventory/gamer/potion.png"



export default function About() {


    const identityInfo = [
        {
            role: "Jeffrey",
            description: "Sleeping",
            image: profilePic,
            yoe: "??",
            page: "0",
            items: [],

        },
        {
            role: "Frogtographer",
            description: "Film-Look",
            image: photographer,
            yoe: "3",
            page: "1",
            items: [
                { item_image: lens, item_name: "Lens" },
                { item_image: microSD, item_name: "MicroSD" },
                { item_image: flash, item_name: "Flash" },
                { item_image: digicam, item_name: "Sony DCR-SR42" },
                { item_image: fujifilm, item_name: "FujiFilm XT5" },
                { item_image: tripod, item_name: "Tripod" },
                { item_image: cameraBag, item_name: "Camera Bag" },

            ]
        },
        {
            role: "Gym Frog",
            description: "Eat. Sleep. Gym.",
            image: gym,
            yoe: "4",
            page: "2",
            items: [
                { item_image: dumbbell, item_name: "Dumbbell" },
                { item_image: chicken, item_name: "Chicken" },
                { item_image: chickenLeg, item_name: "More Chicken" },
                { item_image: eggs, item_name: "Eggs" },
                { item_image: bananaGym, item_name: "Banana" },
                { item_image: peanut_butter, item_name: "Peanut Butter" },

                { item_image: milk, item_name: "Milk" },
                { item_image: water, item_name: "Water" }
            ],

        },
        {
            role: "Froogdie",
            description: "Chomp. Nom. Gulp.",
            image: foodie,
            yoe: "∞",
            page: "3",
            items: [
                { item_image: cereal, item_name: "Cocoa Puffs" },
                { item_image: jam, item_name: "Strawberry Jam" },
                { item_image: bread, item_name: "Milk Bread" },
                { item_image: strawberry, item_name: "Strawberry" },
                { item_image: grapes, item_name: "Green Grapes" },
                { item_image: patties, item_name: "Wagyu" },
                { item_image: steak, item_name: "Ribeye Steak" },
                { item_image: salmon, item_name: "Salmon" },
                { item_image: chips, item_name: "S+V Chips" },
                { item_image: soda, item_name: "Coca Cola" },

            ],

        },
        {
            role: "Gamerog",
            description: "Hardstuck Diamond",
            image: gamer,
            yoe: "16",
            page: "4",
            items: [
                { item_image: boots, item_name: "Boots" },
                { item_image: potion, item_name: "Health Potion" },
                { item_image: frozenHeart, item_name: "Frozen Heart" },
                { item_image: ie, item_name: "Infinity Edge" },
                { item_image: cap, item_name: "Deathcap" },
                { item_image: locket, item_name: "Locket" },


            ],

        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedRole, setSelectedRole] = useState(identityInfo[0]);
    const { setHasStarted } = useHasStarted();
    const [startTyping, setStartTyping] = useState(false); // State to control typing
    const [currentIndex, setCurrentIndex] = useState(0);


    const dialogues = [
        "Hello! 'My name is Jeff' and this is where I am most of the time... the internet. I am currently a software engineer at Amazon and I... code a lot.",
        "I loveeee making mechanical keyboards! But it's too expensive...",
        "I snap, I gym, I eat, I game. Quite the simple life. Choose a version of me below!",
        "Did you notice all the yellow on the site? My last name 黄 (huang) means 'yellow' in Chinese!",
        "I will be taking my leave now. Ribbit ribbit."

    ];


    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
    };

    useEffect(() => {
        setHasStarted(true);

        return () => {
            setHasStarted(false);
        };
    }, [setHasStarted]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`py-8 xl:py-32 flex flex-col`}
        >

            {/* Intro */}
            <div className='flex flex-row justify-between px-2'>
                <div className='flex flex-col'>
                    <div className='leading-none flex flex-row items-center'>
                        <Image src={orangeJuice} width={100} className='w-[3vw]' style={{ imageRendering: 'pixelated' }} unoptimized></Image>
                        <Image src={yellowSoda} width={100} className='w-[3vw] sm:-ml-3' style={{ imageRendering: 'pixelated' }} unoptimized></Image>
                        <span className='text-[4vw] font-semibold'>My name is</span>
                    </div>

                    {/* Name */}
                    <section className="xl:px-8 py-1 text-banana-yellow">
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


            {/* Dialogue */}
            <FadeInOnScroll
                classes='relative flex justify-center mt-20'
                setStartTyping={setStartTyping}
            >
                <Image
                    src={dialogueBox}
                    style={{ imageRendering: 'pixelated' }}
                    className='w-[90%]'
                    alt="Dialogue Box"
                    unoptimized
                />

                <Image
                    src={nextOption}
                    style={{ imageRendering: 'pixelated' }}
                    className="w-[2vw] absolute top-[80%] right-[10%] cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:animate-pulse z-20"
                    alt="Next Option"
                    unoptimized
                    onClick={handleNext}
                />

                <div className="font-pixelify text-[1.25vw] absolute top-[70%] left-[12%] transform -translate-y-1/2 w-[80%] h-[50%]">
                    {startTyping &&
                        <Typewriter
                            options={{
                                delay: 20,
                                // autoStart: true,
                                loop: false,
                                cursor: ""
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(dialogues[currentIndex])
                                    .start();
                            }}
                            key={currentIndex}
                        />
                    }
                </div>
            </FadeInOnScroll>


            {/* Choose your jeff */}
            <div className='flex flex-col justify-center items-center mt-4 sm:mt-24'>
                <span className='font-pixelify text-[2vw]'>
                    <span className='text-banana-yellow'>&lt;</span>
                    CHOOSE YOUR
                    <span
                        onClick={() => {
                            setSelectedIndex(-1);
                            const identityItem = identityInfo.find(info => info.role === "Jeffrey");
                            if (identityItem) {
                                setSelectedRole(identityItem);
                            }
                        }}
                        className='text-banana-yellow font-semibold cursor-pointer'
                    > JEFF</span>
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
                                const identityItem = identityInfo.find(info => info.role === item.label);
                                if (identityItem) {
                                    setSelectedRole(identityItem); // Set selectedRole to the role from identityInfo
                                }
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
                                        className={`absolute top-[-8px] left-[-6px] sm:top-[-14px] sm:left-[-12px] w-3 h-3 sm:w-6 sm:h-6 animate-out-in-top-left ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={topRightSelect}
                                        alt="Top Right"
                                        className={`absolute top-[-8px] right-[-6px] sm:top-[-14px] sm:right-[-12px] w-3 h-3 sm:w-6 sm:h-6 animate-out-in-top-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomLeftSelect}
                                        alt="Bottom Left"
                                        className={`absolute bottom-[10px] left-[-6px] sm:bottom-[32px] sm:left-[-12px] w-3 h-3 sm:w-6 sm:h-6 animate-out-in-bottom-left ${selectedIndex === index ? '' : 'filter grayscale'}`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomRightSelect}
                                        alt="Bottom Right"
                                        className={`absolute bottom-[10px] right-[-6px] sm:bottom-[32px] sm:right-[-12px] w-3 h-3 sm:w-6 sm:h-6 animate-out-in-bottom-right ${selectedIndex === index ? '' : 'filter grayscale'}`}
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
                                        className={`absolute top-[-8px] left-[-6px] sm:top-[-14px] sm:left-[-12px] w-3 h-3 sm:w-6 sm:h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={topRightSelect} // Replace with your original image path
                                        alt="Top Right"
                                        className={`absolute top-[-8px] right-[-6px] sm:top-[-14px] sm:right-[-12px] w-3 h-3 sm:w-6 sm:h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomLeftSelect} // Replace with your original image path
                                        alt="Bottom Left"
                                        className={`absolute bottom-[10px] left-[-6px] sm:bottom-[32px] sm:left-[-12px] w-3 h-3 sm:w-6 sm:h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                    <Image
                                        src={bottomRightSelect} // Replace with your original image path
                                        alt="Bottom Right"
                                        className={`absolute bottom-[10px] right-[-6px] sm:bottom-[32px] sm:right-[-12px] w-3 h-3 sm:w-6 sm:h-6`}
                                        style={{ imageRendering: 'pixelated' }}
                                        unoptimized
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>




            <div className='flex flex-row items-stretch justify-center font-pixelify mt-4 sm:mt-28 gap-x-3'>
                {/* Left Side */}
                <div className='flex flex-col gap-y-3 w-1/4'>

                    {/* Inventory Label*/}
                    <div className='bg-[#ECD6AB] border-2 border-black rounded-md p-1'>
                        <div className='flex flex-row items-center bg-[#C28569] px-1 sm:px-3 py-2 rounded-md space'>
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
                            <span className='font-semibold text-[6px] sm:text-[1.75vw] pl-1 sm:pl-2 xl:pl-4 overflow-hidden'>Inventory</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='bg-white border-2 border-black rounded-md p-1'>
                        <div className='bg-[#C0CBDC] rounded-md flex flex-col p-1 sm:p-2 text-[1.5vw] leading-none overflow-hidden'>

                            <div className="flex flex-row justify-between">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <GradientSquare key={index} />
                                ))}
                            </div>

                            <span className='font-semibold pt-1 sm:pt-2'>{selectedRole ? selectedRole.role : identityInfo[0].role}</span>
                            <span className='opacity-50'>{selectedRole ? selectedRole.description : identityInfo[0].description}</span>
                            <div className='flex flex-row py-2 items-center space-x-1 sm:space-x-3'>
                                <Image src={selectedRole ? selectedRole.image : identityInfo[0].image}
                                    className='w-[20px] sm:w-[3vw] aspect-square rounded-sm sm:rounded-md border-2 border-black'
                                    unoptimized
                                ></Image>
                                <Image src={confirm} className='h-[10px] sm:h-[1.5vw] w-auto transition-transform transform active:scale-125 cursor-pointer'
                                    style={{ imageRendering: 'pixelated' }}
                                    unoptimized
                                ></Image>
                                <Image src={cancel} className='h-[10px] sm:h-[1.5vw] w-auto transition-transform transform active:scale-125 cursor-pointer'
                                    style={{ imageRendering: 'pixelated' }}
                                    unoptimized
                                ></Image>
                            </div>
                        </div>
                    </div>

                    {/* YOE */}
                    <div className='bg-[#ECD6AB] border-2 border-black rounded-md p-1'>
                        <div className='flex flex-row items-center bg-[#C28569] justify-center px-3 py-1 sm:py-2 rounded-md space space-x-1 sm:space-x-2 '>
                            <Image
                                src={sandtimer}
                                width={100}
                                className='w-[1.75vw] h-auto transition-transform duration-300 hover:rotate-180 cursor-pointer'
                                style={{ imageRendering: 'pixelated' }}
                                alt="Inventory Plant"
                                unoptimized
                            />

                            {/* Label */}
                            <span className=' font-semibold text-[1.75vw] pl-1 sm:pl-2'>
                                {selectedRole ? selectedRole.yoe : identityInfo[0].yoe} Years
                            </span>
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className='border-2 border-black w-2/4 p-1 sm:p-2 bg-[#F9C192] rounded-md flex flex-col justify-between sm:min-w-[400px] min-w-[220px]'>
                    <div className='bg-[#945542] p-2 rounded-md'>
                        {/* Inventory */}
                        <div className='inline-flex'>
                            <div className='flex flex-row items-center space-x-2 bg-[#C28569] py-2 px-2 sm:px-4 border-x-2 border-t-2 rounded-t-md border-black '>
                                <Image
                                    src={basket}
                                    width={100}
                                    className='w-[15px] sm:w-[2.5vw] h-auto '
                                    style={{ imageRendering: 'pixelated' }}
                                    alt="Inventory Plant"
                                    unoptimized
                                />
                                <span className='text-[8px] sm:text-[1.5vw]'>Items</span>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="flex flex-wrap gap-x-1 sm:gap-x-6 gap-y-4 bg-[#C28569] px-2 sm:px-4 border-2 border-black rounded-b-md rounded-tr-md mt-[-2.5px] sm:mt-[-2.072px] py-2">
                            {selectedRole.items.map((item, index) => (
                                <div key={index} className='flex-shrink-0 border-2 border-black bg-[#ECD6AB] rounded-md p-1'>
                                    <Item image={item.item_image} name={item.item_name} />
                                </div>
                            ))}
                            {/* Calculate the number of placeholders needed */}
                            {Array.from({ length: 17 - selectedRole.items.length }).map((_, index) => (
                                <div key={index + selectedRole.items.length} className='flex-shrink-0 border-2 border-black bg-[#ECD6AB] rounded-md p-1'>
                                    <Item />
                                </div>
                            ))}

                            <span className='mt-8 ml-6 text-xs sm:text-[1.5vw] '>{selectedRole.page}/{identityInfo.length - 1}</span>
                        </div>

                    </div>
                </div>
            </div>




        </motion.div >
    );
};
