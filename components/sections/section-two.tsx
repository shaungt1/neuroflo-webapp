"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion";


export function SectionTwo() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gifs = [
    "/gif/insight-workflow-screen.gif",
    "/gif/op-note-screen.gif", 
    "/gif/research-desk-screen.gif"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gifs.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [mounted, gifs.length]);



  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center py-2 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex justify-center items-center">
          
          {/* Centered GIF Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl"
          >
            {/* Main Slider Container with Enhanced Glassmorphism like GitHub */}
            <div className="relative group">
              
              {/* Multiple glow layers for GitHub-like effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-cyan-400/40 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Glassmorphic Frame */}
              <div className="relative rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden dark:border-white/5 dark:bg-white/5">
                
                {/* Enhanced blur effects on edges for partial visibility */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/90 via-background/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 via-background/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background/70 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background/70 to-transparent z-10 pointer-events-none"></div>

                {/* Corner glow effects */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-600/30 rounded-full filter blur-3xl opacity-40"></div>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/30 rounded-full filter blur-3xl opacity-40"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/30 rounded-full filter blur-3xl opacity-40"></div>
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/30 rounded-full filter blur-3xl opacity-40"></div>

                {/* Slider Content - Larger aspect ratio */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-background/10 to-background/30 ">
                  {gifs.map((gif, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.05
                      }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={gif}
                          alt="NeuroFlo App Screen"
                          fill
                          className="object-cover"
                          priority={index === 0}
                          unoptimized // For GIFs to animate
                        />
                        
                        {/* Enhanced partial cutoff effect at bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                        
                        {/* Side fade effects for better integration */}
                        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background/60 to-transparent"></div>
                        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background/60 to-transparent"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
