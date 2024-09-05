"use client";

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import BlurIn from "@/components/magicui/blur-in";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 使用 useSpring 来添加缓动效果
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-5, 5]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    // 使用 spring 来平滑过渡回初始状态
    x.set(0, true);
    y.set(0, true);
  };

  return (
    <main>
      <div className="z-0 relative min-h-screen w-full pb-40 overflow-hidden bg-[radial-gradient(97.14%_56.45%_at_51.63%_0%,_#7D56F4_0%,_#4517D7_30%,_#000_100%)]">
        <DotPattern className={cn(
          "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]",
        )} />
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
            Eye-catching modern Responsive designs. Multiple layouts. Unique animations. Perfect for 2024. Free
          </motion.h2>


          {/* Get Started Button */}
          <motion.div variants={itemVariants} className="z-20">
            <Button size="lg" className="shadow-2xl mb-10">
              Get Started
            </Button>
          </motion.div>


          {/* main image */}
          <motion.div 
            className="flex justify-center items-center overflow-visible p-10"
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src="/image.webp"
                alt="Image"
                width={1200}
                height={900}
                className="w-full h-auto max-w-6xl mx-auto rounded-2xl shadow-lg"
                style={{ boxShadow: "0 4px 200px rgba(190, 24, 93, 0.5)" }}
                priority 
              />
            </motion.div>
          </motion.div>
        </MotionDiv>
      </div>
    </main>
  );
}
