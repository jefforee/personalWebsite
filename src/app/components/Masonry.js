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

// List of images
const photos = [
    { src: image1, width: 180, height: 170, top: "9%", left: "23.5%", objectPosition: "100% 30%" },
    { src: image2, width: 250, height: 280, top: "0%", left: "40%", objectPosition: "100% 75%" },
    { src: image3, width: 250, height: 180, top: "11%", left: "62%", objectPosition: "100% 0" },
    { src: image4, width: 150, height: 150, top: "27.5%", left: "10%", objectPosition: "100% 40%" },
    { src: image5, width: 250, height: 150, top: "28%", left: "24%", objectPosition: "100% 50%" },
    { src: image6, width: 360, height: 400, top: "30%", left: "46%", objectPosition: "100% 30%" },
    { src: image7, width: 120, height: 120, top: "38%", left: "78%", objectPosition: "100% 50%" },
    { src: image8, width: 300, height: 150, top: "44%", left: "20%", objectPosition: "100% 50%" },
    { src: image9, width: 140, height: 180, top: "53%", left: "78.5%", objectPosition: "100% 50%" },
    { src: image10, width: 250, height: 300, top: "60%", left: "24%", objectPosition: "100% 50%" },
    { src: image11, width: 240, height: 150, top: "70%", left: "47%", objectPosition: "100% 50%" },

];

export default function PhotoGallery() {
    const [isMobile, setIsMobile] = useState(false);
    const [photoDimensions, setPhotoDimensions] = useState([]);

    useEffect(() => {
        // Function to update mobile state based on screen width
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 1000);
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
        <>
            {isMobile ? (
                <div className="relative w-full h-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {photoDimensions.map((photo, index) => (
                        <div
                            key={index}
                            className="transition-transform duration-300 ease-in-out hover:scale-105 relative"
                            style={{
                                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                                border: "solid 2px brown",
                                overflow: "hidden",
                                aspectRatio: photo.width > photo.height ? "10/11.5" : "14/16", // Adjust based on orientation
                            }}
                        >
                            <Image
                                src={photo.src}
                                alt={`Photo ${index}`}
                                fill // Fill the parent container
                                style={{
                                    objectFit: "cover", // Keep the image aspect ratio while covering the container
                                }}
                            />
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
                                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
                                border: "solid 4px #753316",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={photo.src}
                                alt={`Photo ${index}`} // Corrected the alt text
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: photo.objectPosition, // Adjust this as needed
                                    transition: "transform 0.3s ease-in-out",
                                }} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
