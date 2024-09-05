"use client";

import dynamic from 'next/dynamic';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import BlurIn from "@/components/magicui/blur-in";
import { motion } from 'framer-motion';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="z-0 relative min-h-screen w-full pb-40 overflow-hidden bg-[radial-gradient(97.14%_56.45%_at_51.63%_0%,_#7D56F4_0%,_#4517D7_30%,_#000_100%)]">
        {/*  */}
        <DotPattern className={cn(
            "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]",
          )} />
          {/* title */}
        <MotionDiv 
          className="relative z-10 flex flex-col items-center justify-start min-h-screen space-y-6 px-4 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <BlurIn
              word="Next.js hero section Web Template"
              className="font-display text-center text-4xl font-bold text-white w-full lg:w-auto max-w-3xl mx-auto z-10"
              duration={1}
            />
          </motion.div>

          {/* description */}

          <motion.h2 
            className="text-xl text-white text-opacity-60 tracking-normal text-center max-w-2xl mx-auto z-10"
            variants={itemVariants}
          >
            Eye-catching moden Responsive designs. Multiple layouts. Unique animations. Perfect for 2024. Free
          </motion.h2>


          {/* Get Started Button */}
          <motion.div variants={itemVariants} className="z-20">
            <Button size="lg" className="shadow-2xl mb-10">
              Get Started
            </Button>
          </motion.div>


          {/* Neon Gradient Card */}
          <motion.div 
            className="flex justify-center items-center overflow-hidden"
            variants={itemVariants}
          >
            
            <Image
              src="/image.webp"
              alt="Image"
              width={1200}
              height={900}
              className="w-full h-auto max-w-6xl mx-auto rounded-2xl"
            />
            
          </motion.div>
        </MotionDiv>
      </div>
    </main>
  );
}
