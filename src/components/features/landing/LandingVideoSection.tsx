"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import LandingMax1440Container from "./LandingMax1440Container";
import thumbnail from "@/public/images/thumbnail.png";
import playIcon from "@/public/images/play.svg";

export default function LandingVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <LandingMax1440Container className="mb-24">
      <div className="w-full max-w-[1100px] mx-auto aspect-video object-cover rounded-gradient-border-2 overflow-hidden relative">
        {!isPlaying ? (
          <div className="w-full h-full object-cover bg-black rounded-md relative flex items-center justify-center">
            <Image
              src={thumbnail}
              alt="Video thumbnail"
              fill
              className="object-cover rounded-md w-full h-full absolute top-0 left-0"
            />
            {/* Play button overlay */}
            
              <button
                className="hover:scale-105 transition-transform duration-300 cursor-pointer z-50"
                onClick={handlePlay}
              >
                <Image 
                  src={playIcon} 
                  alt="Play icon" 
                  width={76}
                  height={76}
                  className="w-[76px] h-[76px] z-50" 
                />
              </button>
          </div>
        ) : (
          <video
            ref={videoRef}
            src="/"
            autoPlay
            muted
            loop
            controls
            className="w-full h-full aspect-video object-cover bg-black rounded-md"
          />
        )}
      </div>
    </LandingMax1440Container>
  );
}
