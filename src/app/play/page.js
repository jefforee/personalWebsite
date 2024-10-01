"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import pillar from '../../../public/images/play/pillar.png';
import MasonryLayout from '../components/Masonry';

export default function Play() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-10 flex flex-col"
        >
            {/* Pillar Image */}
            <div className="relative h-[20vw] font-pixelify">
                <Image
                    src={pillar}
                    className='absolute -top-5 sm:top-0 -left-[65px] sm:-left-[100px] lg:-left-60 w-[80%] sm:w-[45vw]'
                    style={{ imageRendering: 'pixelated' }}
                    alt="Pillar"
                    unoptimized
                />

            </div>

            <MasonryLayout/>    
        </motion.div>
    );
}
