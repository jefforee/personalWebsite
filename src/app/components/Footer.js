'use client'
import { motion } from 'framer-motion';
import RubberDuck from '../../../public/images/footer/rubber_duck.png'
import YellowBasket from '../../../public/images/footer/basket_yellow.png'
import YellowChips from '../../../public/images/footer/potatochip_yellow.png'

import Image from 'next/image';

export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='font-pixelify'
            id = "footer"
        >
            {/* Black separator line */}

            <div className="border-t-2 border-black w-full"></div>

            <div className='flex flex-row justify-between px-[10%] lg:px-60 pt-14 pb-2 sm:pb-24 text-[8px] sm:text-[1vw]'>
                <div className="flex flex-row gap-10">
                    <div className='flex flex-col gap-2'>
                        <a href="mailto:jeff0827@berkeley.edu" className='self-start footer-hover-effect' target="_blank" rel="noopener noreferrer">&lt;Email&gt;</a>
                        <a href="https://drive.google.com/file/d/1Bk07BZNe7QwLKi1MMZFREW3d-MooIDDb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='self-start footer-hover-effect'>&lt;Resume&gt;</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="https://www.linkedin.com/in/jeffreyhuang2002/" target="_blank" rel="noopener noreferrer" className='self-start footer-hover-effect'>&lt;LinkedIn&gt;</a>
                        <a href="https://github.com/jefforee" target="_blank" rel="noopener noreferrer" className='self-start footer-hover-effect'>&lt;Github&gt;</a>
                    </div>
                </div>

                <div className='flex flex-col justify-end items-end'>
                    <div className="image-container">
                        <div className="image-wrapper">
                            <Image src={YellowBasket} alt="Yellow Basket" className="image" style={{ imageRendering: 'pixelated' }}/>
                            <div className="description">Basket</div>
                        </div>
                        <div className="image-wrapper">
                            <Image src={YellowChips} alt="Yellow Chips" className="image" style={{ imageRendering: 'pixelated' }} />
                            <div className="description">Chips</div>
                        </div>
                        <div className="image-wrapper">
                            <Image src={RubberDuck} alt="Rubber Duck" className="image" style={{ imageRendering: 'pixelated' }} />
                            <div className="description">Duck</div>
                        </div>
                    </div>

                    <span className="gradient-effect text-[8px] sm:text-[1vw]">
                        <span>Designed&nbsp;</span>
                        <span>and&nbsp;</span>
                        <span>coded&nbsp;</span>
                        <span>by&nbsp;</span>
                        <span>Jeffrey&nbsp;</span>
                        <span>Huang</span>
                    </span>
                </div>
            </div>
        </motion.div>
    )
}