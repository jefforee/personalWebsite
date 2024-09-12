'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { TbFileCv, TbBrandLinkedin, TbBrandInstagram } from 'react-icons/tb';


export default function Navbar() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="pt-2 md:pt-4 flex flex-row justify-between items-start md:items-center px-[10%] lg:px-60">
                {/* Leftside */}
                <div className="font-pixelify font-light text-lg flex flex-row justify-start md:justify-center items-center gap-4">
                    <button type="button" onClick={() => router.push('/')} className="font-medium text-xl mr-8 pt-2 md:pt-0">Jeffrey Huang</button>
                    <div className='hidden md:flex flex-row gap-4 items-center justify-center'>
                        <button type="button" onClick={() => router.push('/')}>Work</button>
                        <button type="button" onClick={() => router.push('/about')}>About</button>
                        <button type="button" onClick={() => router.push('/play')}>Play</button>
                    </div>
                </div>
                {/* Rightside */}
                <div>
                    {/* Hamburger button for small screens */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col items-center justify-center space-y-1 w-10 h-10 focus:outline-none ml-auto"
                    >
                        <span className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Accordion for small screens */}
                    <div
                        className={`overflow-hidden transition-max-height duration-500 ease-in-out md:hidden ${isOpen ? 'max-h-40' : 'max-h-0'
                            }`}
                    >
                        <div className="flex flex-col items-center bg-[#E0E0DB] w-16 font-pixelify">
                            <button type="button" onClick={() => router.push('/')} className='w-full border-2 border-black hover:bg-banana-yellow'>Work</button>
                            <button type="button" onClick={() => router.push('/about')} className='w-full border-2 border-black hover:bg-banana-yellow'>About</button>
                            <button type="button" onClick={() => router.push('/play')} className='w-full border-2 border-black hover:bg-banana-yellow'>Play</button>

                        </div>
                    </div>

                    {/* Icons row for medium and larger screens */}
                    <div className="hidden md:flex md:flex-row md:gap-4 md:items-center">
                        <a>
                            <TbFileCv className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/jeffreyhuang2002/">

                            <TbBrandLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/jeffs.jpeg/">
                            <TbBrandInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>


            </div>
            {/* Black separator line */}
            <div className="border-t-2 border-black w-full mt-2"></div>

        </div>
    )
}