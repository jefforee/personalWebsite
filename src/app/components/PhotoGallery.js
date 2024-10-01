"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import image1 from "../../../public/images/play/photos/image1.JPG";
import image2 from "../../../public/images/play/photos/image2.JPG";
import image3 from "../../../public/images/play/photos/image3.JPG";
import image4 from "../../../public/images/play/photos/image4.JPG";
import image5 from "../../../public/images/play/photos/image5.JPG";
import image6 from "../../../public/images/play/photos/image6.JPG";
import image7 from "../../../public/images/play/photos/image7.JPG";
import image8 from "../../../public/images/play/photos/image8.JPG";
import image9 from "../../../public/images/play/photos/image9.JPG";
import image10 from "../../../public/images/play/photos/image10.JPG";
import image11 from "../../../public/images/play/photos/image11.JPG";
import image20 from "../../../public/images/play/photos/image20.JPG";

// List of images with links
const photos = [
    { src: image1, width: 180, height: 170, top: "9%", left: "23.5%", objectPosition: "100% 30%", link: "https://www.instagram.com/p/C7K6pB2vsWd/?img_index=1" },
    { src: image2, width: 250, height: 280, top: "0%", left: "40%", objectPosition: "100% 75%", link: "https://www.instagram.com/p/C8VeXyQSMK5/?img_index=1" },
    { src: image3, width: 250, height: 180, top: "11%", left: "62%", objectPosition: "100% 0", link: "https://www.instagram.com/p/CtIXHU_JWP6/" },
    { src: image4, width: 150, height: 150, top: "27.5%", left: "10%", objectPosition: "100% 40%", link: "https://www.instagram.com/p/Cv_Jn2ZRXcS/" },
    { src: image5, width: 250, height: 150, top: "28%", left: "24.5%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C5kGJmFxPhv/" },
    { src: image6, width: 360, height: 400, top: "30%", left: "47%", objectPosition: "100% 30%", link: "https://www.instagram.com/p/C4r6Y8BOXch/" },
    { src: image7, width: 120, height: 120, top: "38%", left: "78%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C0sc9wARuTr/" },
    { src: image8, width: 300, height: 150, top: "44%", left: "21.5%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C_cFyXENRSv/?img_index=1" },
    { src: image9, width: 140, height: 180, top: "53%", left: "78.5%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C8XiXffSLbh/?img_index=1" },
    { src: image10, width: 250, height: 300, top: "60%", left: "24%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C8sKeXqy4ns/?img_index=1" },
    { src: image11, width: 240, height: 160, top: "70%", left: "47%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C8kcvyvS5de/?img_index=1" },
    { src: image20, width: 140, height: 100, top: "71%", left: "68%", objectPosition: "100% 50%", link: "https://www.instagram.com/p/C8kcvyvS5de/?img_index=1" },


];

export default function PhotoGallery() {
    const [isMobile, setIsMobile] = useState(false);
    const [photoDimensions, setPhotoDimensions] = useState([]);

    useEffect(() => {
        // Function to update mobile state based on screen width
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // Set initial mobile state
        updateIsMobile();

        // Add event listener for resize
        window.addEventListener("resize", updateIsMobile);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    useEffect(() => {
        const loadImageDimensions = () => {
            const dimensions = photos.map((photo) => {
                const img = new window.Image();
                img.src = photo.src.src; // Use the src from the imported Image

                return new Promise((resolve) => {
                    img.onload = () => {
                        resolve({ width: img.width, height: img.height, src: photo.src });
                    };
                });
            });

            Promise.all(dimensions).then((resolvedDimensions) => {
                setPhotoDimensions(resolvedDimensions);
            });
        };

        loadImageDimensions();
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="relative w-full h-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {photoDimensions.map((photo, index) => (
                        <div
                            key={index}
                            className="transition-transform duration-300 ease-in-out hover:scale-105 relative"
                            style={{
                                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                                border: "solid 2px #501B04",
                                overflow: "hidden",
                                aspectRatio: photo.width > photo.height ? "10/11.5" : "14/16", // Adjust based on orientation
                            }}
                        >
                            <a href={photos[index].link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={photo.src}
                                    alt={`Photo ${index}`}
                                    fill // Fill the parent container
                                    style={{
                                        objectFit: "cover", // Keep the image aspect ratio while covering the container
                                    }}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="relative w-full h-[60vw] left-[-10px]">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="absolute transition-transform duration-300 ease-in-out hover:scale-105"
                            style={{
                                top: photo.top,
                                left: photo.left,
                                width: `${photo.width}px`, // Use template literals correctly
                                height: `${photo.height}px`, // Use template literals correctly
                                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
                                border: "solid 4px #501B04",
                                overflow: "hidden",
                            }}
                        >
                            <a href={photo.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={photo.src}
                                    alt={`Photo ${index}`} // Corrected the alt text
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: photo.objectPosition, 
                                        // transition: "transform 0.3s ease-in-out",
                                    }} 
                                />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
