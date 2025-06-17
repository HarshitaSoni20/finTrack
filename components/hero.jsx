"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useEffect } from "react";

 
const HeroSection = () => {

const imageRef = useRef()
useEffect(() => {
  const imageElement = imageRef.current;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      imageElement.classList.add("scrolled");
    } else {
      imageElement.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text-[95px] pb-6 bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text ">
                    Manage Your Finances <br /> with Intelligence
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                    An AI-powered financial management platform that helps you track,
                    analyze, and optimize your spending with real-time insights.
                </p>
                <div className="display-flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8 w-100 h-10 bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500
                animate-gradient hover:opacity-90 transition-opacity text-white hover:text-white">
                            Get Started
                        </Button>
                    </Link>

                </div>
                <div className="hero-image-wrapper">
                    <div ref={imageRef} className="hero-image">
                        <Image
                            src="/banner.jpeg"
                            width={1280}
                            height={720}
                            alt="Dashboard Preview"
                            className="rounded-lg shadow-2xl border mx-auto"
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;