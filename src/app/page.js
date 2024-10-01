"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import labelSign from "../../public/images/home/label_sign.png"
import longLabelSign from "../../public/images/experiences/long_label_sign.png"
import dinosaur from "../../public/images/home/dinosaur_game.png"
import bigBorder from "../../public/images/projects/big_border.png"
import smallBorder from "../../public/images/projects/small_border.png"
import GCALPreview from "../../public/images/projects/GCAL_Template.png"
import GCALPreviewLarge from "../../public/images/projects/GCAL_Template_Large.png"
import UniPreview from "../../public/images/projects/Uni_Template.png"
import NotiomPreview from "../../public/images/projects/Notiom_Template.png"
import RRGPreview from "../../public/images/projects/RRG_Template.png"
import experienceGray from "../../public/images/experiences/experience_gray.png"
import experienceYellow from "../../public/images/experiences/experience_yellow.png"
import amazonPixel from "../../public/images/experiences/amazonPixel.png"
import ethicalPixel from "../../public/images/experiences/ethicalPixel.png"
import kaiduPixel from "../../public/images/experiences/kaiduPixel.png"
import ibmPixel from "../../public/images/experiences/ibmPixel.png"
import banana from "../../public/images/home/banana.png"
import pikmin from "../../public/images/experiences/pikminPixel.png"
import luckyBlock from "../../public/images/home/luckyBlockPixel.png"


import topLeftSelect from "../../public/images/experiences/topLeftSelect.png"
import topRightSelect from "../../public/images/experiences/topRightSelect.png"
import bottomLeftSelect from "../../public/images/experiences/bottomLeftSelect.png"
import bottomRightSelect from "../../public/images/experiences/bottomRightSelect.png"
import { useHasStarted } from './contexts/HasStartedContext';
import { motion } from 'framer-motion';


export default function Home() {
  const projectInfo = [
    {
      title: "GCAL Creator",
      description: "A Chrome extension that transforms user text input into dynamically generated Google Calendar events, simplifying the multi-step process of event creation.",
      small_image: GCALPreview,
      large_image: GCALPreviewLarge,
      website: "https://github.com/jefforee/GCAL-Creator"
    },
    {
      title: "Notiom",
      description: "A task management web application inspired by Notion, enabling task addition, removal, and editing.",
      small_image: NotiomPreview,
      website: "https://github.com/jefforee/notiom"
    },
    {
      title: "Uni",
      description: "An iOS app that removes tracking parameters from links shared on the web, generating URLs that are privacy-friendly.",
      small_image: UniPreview,
      website: "https://github.com/jefforee/Uni/"
    },
    {
      title: "Random Restaurant Generator",
      description: "A random restaurant generator to help people decide on restaurant locations to dine at.",
      small_image: RRGPreview,
      website: "https://jefforee.github.io/"
    },
  ]

  const experienceInfo = [
    {
      company: "Amazon",
      role: "Software Engineer",
      time: "2024 - Present",
      icon: amazonPixel,
      link: "https://www.aboutamazon.com/"
    },
    {
      company: "EthiCAL Apparel",
      role: "Frontend Web Developer",
      time: "2021 - 2023",
      icon: ethicalPixel,
      link: "https://www.ethicalapparel.org/"
    },
    {
      company: "Kaidu AI",
      role: "Software Engineer Intern",
      time: "Summer 2023",
      icon: kaiduPixel,
      link: "https://www.kaidu.ai/"
    },
    {
      company: "IBM",
      role: "Cloud Engineer Intern",
      time: "Summer 2022",
      icon: ibmPixel,
      link: "https://www.ibm.com/us-en"
    },
  ];

  const [isMobile, setIsMobile] = useState(false); 
  const [tiltDirection, setTiltDirection] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [shakeClass, setShakeClass] = useState('');
  const { hasStarted, setHasStarted } = useHasStarted();

  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const iframeRef = useRef(null);
  const [loadIframe, setLoadIframe] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setLoadIframe(true);
                  observer.disconnect(); // Stop observing once the iframe has loaded
              }
          },
          { threshold: 0.1 } // Adjust this threshold as necessary
      );

      if (iframeRef.current) {
          observer.observe(iframeRef.current);
      }

      return () => {
          if (iframeRef.current) {
              observer.unobserve(iframeRef.current);
          }
      };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const handleShakingClick = () => {
    setClickCount(prevCount => prevCount + 1);
    setShakeClass(`shake-shake${Math.min(clickCount + 1, 5)}`);

    setTimeout(() => setShakeClass(''), 600);
  };

  const handleClick = (direction) => {
    if (tiltDirection) {
      setTiltDirection('');
    } else {
      setTiltDirection(direction);
    }
  };


  useEffect(() => {
    setHasStarted(false);

    const updateImageSrc = () => {
      console.log(window.innerWidth )
      if (window.innerWidth > 768) {
        console.log("Set false")
        setIsMobile(false);
      } else {
        console.log("Set true")

        setIsMobile(true);
        console.log(isMobile)
      }
     

    };

    // Set initial image source
    updateImageSrc();
    
    // console.log(window.innerWidth)
    // console.log(isMobile)

    // Add event listener for resize
    window.addEventListener('resize', updateImageSrc);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${isFooterVisible ? "relative" : ""} z-10`}
    >


      {/* Lucky Block */}
      <div className={`cursor-help bottom-5 ${isFooterVisible ? 'absolute right-0' : 'fixed right-[10%] lg:right-60'} image-container-lucky`}>
        <Image
          src={luckyBlock}
          alt="Description"
          className="w-10 h-10"
          unoptimized
        />
        <div className="text-box-lucky font-pixelify text-xs md:text-base w-[100px] sm:w-[200px]">Interact with <span className='text-banana-yellow font-bold'>yellow</span> objects for a surprise!</div>
      </div>




      {/*Intro  */}
      <div className="flex flex-col h-screen mt-[-54px] justify-center">

        {/* Name and dinosaur */}
        <div className="flex flex-row sm:items-center">
          <div className="flex flex-col items-start justify-center">
            <span className="text-xl xl:text-[2vw] mr-2">
              Hello, I am
            </span>
            <span className="leading-none	text-[9vw] font-semibold flex flex-row items-end">
              Jeffrey
              <div className="flex mb-2 md:mb-3 lg:mb-4 cursor-pointer">
                <span className="heartbeat"></span>
                <span className="dot"></span>
              </div>
            </span>
          </div>

          {/* Dinosaur game */}

          {isMobile ? (
            <div className="relative w-full min-w-[200px] min-h-[200px]">
              <Image
                src={dinosaur}
                fill
                objectFit="contain"
                unoptimized
              />
            </div>
          )
            :
            (
              <div className="iframe-container" ref={iframeRef}>
            {loadIframe ? (
                <iframe
                    src="https://jefforee.github.io/dinosaur-game/"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Embedded HTML"
                    scrolling='no'
                    className='cursor-crosshair'
                    sandbox="allow-same-origin allow-scripts allow-popups" // Optional
                />
            ) : (
                <div className="overlay">
                    <p>Loading game...</p>
                </div>
            )}
            <div className="overlay mt-1">
                <p>Press Spacebar to Start</p>
            </div>
        </div>

            )
          }




        </div>

        {/* Description */}
        <span className={`text-lg xl:text-[1.5vw] ${isMobile ? '-mt-12' : 'sm:mt-6'}`}>
          A keyboard enthusiast, foodie, photographer, and gamer who is passionate about impactful software and finding&nbsp;
          <span className="text-banana-yellow font-semibold banana-hover relative">banana
            <Image src={banana} alt="Banana image" className="pop-up-image" style={{ imageRendering: 'pixelated' }} unoptimized />
          </span>-flavored snacks.
        </span>



        <span className="self-start text-lg xl:text-[1.5vw] mt-4 "
        >
          Currently a software engineer at <span className="text-banana-yellow font-semibold animated-text cursor-pointer">
            <span>A</span><span>m</span><span>a</span><span>z</span><span>o</span><span>n</span>
          </span>.
        </span>
        <a href="#project-start" className="self-start text-xl xl:text-[1.5vw] font-pixelify mt-10 jumping-text cursor-pointer" onClick={() => setHasStarted(true)}>
          <span className='blinking-text'>&gt; PRESS START</span>
        </a>

      </div>
      {/* Projects */}
      <div id="project-start"/>

      {hasStarted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 2 }}
          id="project"
          className="flex flex-col justify-center items-center"
        >
          {/* Project Sign */}
          <div
            className={`relative z-30
              ${tiltDirection === 'left' ? 'tilt-sign-left active' : ''
              } ${tiltDirection === 'right' ? 'tilt-sign-right active' : ''
              } ${isMobile ? "w-24" : "w-[15vw]"
              }`}
          >
            <div
              className="absolute inset-y-0 left-0 w-1/2 cursor-pointer z-20"
              onClick={() => handleClick('left')}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/2 cursor-pointer z-20"
              onClick={() => handleClick('right')}
            />
            <Image
              src={labelSign}
              alt="Label Sign"
              style={{ imageRendering: 'pixelated' }}
              unoptimized
            />
            <div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-[60%] sm:-translate-y-1/2">
              <span className={`font-pixelify ${isMobile ? "text-xs" : "text-[2vw]"} tracking-widest`}>
                <span className="text-banana-yellow ">&lt;</span>
                PROJECT
                <span className="text-banana-yellow">&gt;</span>
              </span>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 md:mt-8">
            {projectInfo.map((project, index) => (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`${index === 0 ? 'sm:col-span-2 col-span-1' : 'col-span-1'} relative bg-none group`}
              >
                {/* Project Image */}
                {isMobile ?
                  (<Image
                    src={smallBorder}
                    alt={project.title}
                    width={500}
                    height={200}
                    style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} // To ensure it behaves responsively
                    unoptimized
                  />)
                  :
                  (<Image
                    src={index === 0 ? bigBorder : smallBorder}
                    alt={project.title}
                    style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} // To ensure it behaves responsively
                    width={500}
                    height={200}
                    unoptimized
                  />)
                }

                {/* Hover Effect Wrapper */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer z-10">
                  {/* Corner Images */}
                  <Image src={topLeftSelect} alt="Top Left" className={`absolute ${isMobile ? "top-[-14px] left-[-12px] w-6 h-6" : "top-[-18px] left-[-16px] w-10 h-10"} animate-out-in-top-left`} style={{ imageRendering: 'pixelated' }} unoptimized />
                  <Image src={topRightSelect} alt="Top Right" className={`absolute ${isMobile ? "top-[-14px] right-[-12px] w-6 h-6" : "top-[-18px] right-[-16px] w-10 h-10"} animate-out-in-top-right`} style={{ imageRendering: 'pixelated' }} unoptimized />
                  <Image src={bottomLeftSelect} alt="Bottom Left" className={`absolute ${isMobile ? "bottom-[-14px] left-[-12px] w-6 h-6" : "bottom-[-18px] left-[-16px] w-10 h-10"} animate-out-in-bottom-left`} style={{ imageRendering: 'pixelated' }} unoptimized />
                  <Image src={bottomRightSelect} alt="Bottom Right" className={`absolute ${isMobile ? "bottom-[-14px] right-[-12px] w-6 h-6" : "bottom-[-18px] right-[-16px] w-10 h-10"} animate-out-in-bottom-right`} style={{ imageRendering: 'pixelated' }} unoptimized />
                </div>

                {/* Project Details */}
                <div className="absolute inset-0 flex flex-col p-4 md:p-8">
                  {isMobile ?
                    (<Image
                      src={project.small_image}
                      className="shadow-custom border-[3px] border-gray-800"
                      unoptimized
                    />)
                    :
                    (<Image
                      src={index === 0 ? project.large_image : project.small_image}
                      className="shadow-custom border-[3px] border-gray-800"
                      unoptimized
                    />)
                  }
                  <h1 className="text-xl lg:text-[1.5vw] font-semibold mt-2 overflow-hidden">{project.title}</h1>
                  <p className={`z-40 ${isMobile ? "text-xs" : "text-[1.5vw]"} lg:text-[1vw] leading-[none] sm:leading-[normal] xl:leading-6 lg:pt-1 text-gray-700 project-description`}>
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>



        </motion.div>

      )}

      {/* Experience */}
      {hasStarted && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="flex flex-col justify-center items-center mt-8 sm:mt-52 pb-32"
        >
          {/* Experience Sign */}
          <div
            className={`relative ${shakeClass} ${isMobile ? "w-28" : "w-[19vw]"} cursor-pointer`}
            onClick={handleShakingClick}
          >
            <Image
              src={longLabelSign}
              alt="Label Sign"
              style={{ imageRendering: 'pixelated' }}
              unoptimized
            />

            <div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-[60%] sm:-translate-y-1/2">
              <span className={`font-pixelify ${isMobile ? "text-xs" : "text-[2vw]"} tracking-widest`}>
                <span className="text-banana-yellow">&lt;</span>
                EXPERIENCE
                <span className="text-banana-yellow">&gt;</span>
              </span>
            </div>

            {(clickCount >= 5) && (
              <div className="absolute top-[-170%] left-1/2 transform -translate-x-1/2 crawling-image">
                <Image
                  src={pikmin} // Replace with your image source
                  alt="pikmin"
                  style={{ imageRendering: 'pixelated' }}
                  unoptimized
                />
              </div>
            )}
          </div>



          {/* Container for the images */}
          <div className="relative w-[50vw] mt-2 sm:mt-8">
            <div className={`flex flex-col text-gray-700 ${isMobile ? "justify-center items-center" : ""}`}>
              {experienceInfo.map((experience, index) => (
                <a href={experience.link} target="_blank" rel="noopener noreferrer" key={index} className={`relative ${isMobile ? "h-[4vw] w-[70vw]" : "h-[4vw]"} group hover:text-black mb-4 cursor-pointer`}>
                    <Image
                      src={experienceGray}
                      style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} // To ensure it behaves responsively
                      className="absolute transition-opacity duration-500 ease-in-out"
                      unoptimized
                    />
                    <Image
                      src={experienceYellow}
                      style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} // To ensure it behaves responsively
                      className="absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      unoptimized
                    />

                    <div className={`absolute inset-0 flex flex-row items-center space-x-1 sm:space-x-3 z-10 ${isMobile ? "top-[50%]" : "top-[45%]"} left-3 transform -translate-y-[30%] sm:-translate-y-1/2`}>
                      <Image
                        src={experience.icon}
                        alt={`Icon ${index}`}
                        style={{ imageRendering: 'pixelated' }}
                        className={`aspect-square z-10 ${(experience.company == "IBM" && !isMobile) ? "mb-[8px] w-[4.25vw] h-[4.5vw]" : "w-[4vw] h-[4vw]"} ${isMobile ? "mb-0" : "mb-6"}`}
                        width={50}
                        height={50}
                        unoptimized
                      />

                      <div className={`flex flex-row w-full items-center justify-between font-light ${isMobile ? "text-[7px]" : "text-[1.15vw]"}`}>
                        <div>
                          <span className="font-semibold">{experience.company}</span>
                          &nbsp;
                          <span className="">{experience.role}</span>
                        </div>
                        <div>
                          <span className="font-pixelify justify-end mr-1 sm:mr-4">{experience.time}</span>
                        </div>
                      </div>

                    </div>
                </a>
              ))}

            </div>
          </div>
        </motion.div>
      )}





    </motion.div>

  );
}
