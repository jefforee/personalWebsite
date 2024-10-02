"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import pillar from '../../../public/images/play/pillar.png';
import { useHasStarted } from '../contexts/HasStartedContext';
import { useEffect } from 'react';


const PhotoGallery = dynamic(() => import('../components/PhotoGallery'), { ssr: false });

export default function Play() {
    const { setHasStarted } = useHasStarted();

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
            transition={{ duration: 0.5 }} 
            className="py-10 flex flex-col"
        >
            {/* Pillar Image */}
            <div className="relative h-[20vw] font-pixelify mb-10 sm:mb-0">
                <Image
                    src={pillar}
                    className='absolute -top-5 sm:top-0 -left-[65px] sm:-left-[100px] lg:-left-60 w-[80%] sm:w-[45vw]'
                    style={{ imageRendering: 'pixelated' }}
                    alt="Pillar"
                    unoptimized 
                    priority
                />
            </div>

            <PhotoGallery />
            <span className='w-full text-end'>
                Check out more at&nbsp;
                <a
                    href="https://www.instagram.com/jeffs.jpeg/"
                    className='font-semibold transition-all duration-300 ease-in-out hover:text-banana-yellow'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @jeffs.jpeg
                </a>
            </span>
        </motion.div>
    );
}
