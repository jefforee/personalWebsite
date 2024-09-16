'use client'
import { motion } from 'framer-motion';
import RubberDuck from '../../../public/images/rubber_duck.png'
import YellowBasket from '../../../public/images/basket_yellow.png'
import YellowChips from '../../../public/images/potatochip_yellow.png'

import Image from 'next/image';

export default function Footer() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='font-pixelify'
        >
            {/* Black separator line */}

            <div className="border-t-2 border-black w-full"></div>

            <div className='flex flex-row justify-between px-[10%] lg:px-60 pt-14 pb-24'>
                <div className="flex flex-row gap-10">
                    <div className='flex flex-col gap-2'>
                        <a href="mailto:jeff0827@berkeley.edu" className='self-start footer-hover-effect'>&lt;Email&gt;</a>
                        <a href="https://drive.google.com/file/d/1Bk07BZNe7QwLKi1MMZFREW3d-MooIDDb/view?usp=sharing" className='self-start footer-hover-effect'>&lt;Resume&gt;</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="https://www.linkedin.com/in/jeffreyhuang2002/" className='self-start footer-hover-effect'>&lt;LinkedIn&gt;</a>
                        <a href="https://github.com/jefforee" className='self-start footer-hover-effect'>&lt;Github&gt;</a>
                    </div>
                </div>

                <div className='flex flex-col justify-end items-end'>
                    
                    <div className="image-container">
                        <div className="image-wrapper">
                            <Image src={YellowBasket} alt="Yellow Basket" class="image" />
                            <div class="description">Basket</div>
                        </div>
                        <div className="image-wrapper">
                            <Image src={YellowChips} alt="Yellow Chips" class="image" />
                            <div class="description">Chips</div>
                        </div>
                        <div className="image-wrapper">
                            <Image src={RubberDuck} alt="Rubber Duck" class="image" />
                            <div class="description">Duck</div>
                        </div>
                    </div>

                    <span className="gradient-effect">
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