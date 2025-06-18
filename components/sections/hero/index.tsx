"use client";

import React, { useRef } from "react";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { images } from "@/constants";
import Button from "../../atoms/button";
import { BottomLine, Gradient } from "../../design/hero";
import Typewriter from 'typewriter-effect';



type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            We Make Amazing
            <Typewriter
            options={{
              strings: ['Websites', 'Mobile Apps', 'AI Solutions','Data Analytics','Creatives'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          <p className={cn("body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8")}>
           Make you digital prescence can now be more intuitive, engaging, and personalized than ever before, with Cyborg.
          </p>
          <Button href="#features" white>
            Know More
          </Button>
        </div>

        <div className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}>
          <div className={cn("relative z-1 rounded-2xl p-0.5 bg-conic-gradient")}>
            <div className={cn("relative bg-n-8 rounded-[1rem]")}>
              <div className={cn("h-[1.4rem] bg-n-10 rounded-t-[0.9rem]")} />
              <div
                className={cn(
                  "aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]"
                )}
              >
               <video
                src="/videos/background.mp4" // Change to your actual video path
                width={1024}
                height={800}
                autoPlay
                loop
                muted
                playsInline
                className="w-full translate-y-[8%] scale-[1.7] md:translate-y-[-10%] md:scale-100 lg:translate-y-[-23%]"
              >
                Your browser does not support the video tag.
              </video>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <Image
              src={images.heroBackground}
              width={1440}
              height={1880}
              className="w-full"
              alt="hero"
            />
          </div>

          
        </div>

        
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
