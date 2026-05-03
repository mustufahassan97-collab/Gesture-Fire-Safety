"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <header className="hero-gradient min-h-screen flex items-center pt-24 pb-12 md:pt-20 relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanline absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8 lg:gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold mb-3 md:mb-4 tracking-[0.15em] md:tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            STOP DISASTER BEFORE IT STARTS
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight md:leading-none mb-5 md:mb-7 text-white"
          >
            AUTOMATIC FIRE <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              SUPPRESSION SYSTEM.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0"
          >
            GESTURE FIRE SAFETY PRESENTS &quot;GESPROTECH&quot; AN AUTOMATIC FIRE
            SUPPRESSION KIT FOR ELECTRICAL PANELS
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#products"
              className="bg-primary px-6 md:px-8 py-3 md:py-4 font-black uppercase text-white text-sm md:text-base hover:scale-105 transition-transform shadow-glow text-center"
            >
              Explore Systems
            </Link>
            <Link
              href="tel:+923390003473"
              className="border border-white/20 px-6 md:px-8 py-3 md:py-4 font-black uppercase text-white text-sm md:text-base hover:bg-white hover:text-black transition-all text-center"
            >
              Call Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative order-first lg:order-last"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
          
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-extinguisher-P0bnPhycs2JdMGPdKpsbTnLmwaqH2Z.jpg"
            alt="FSP Fire Suppression System"
            width={600}
            height={550}
            className="relative z-10 mx-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[550px] w-auto object-contain glow-red"
            priority
          />
        </motion.div>
      </div>
    </header>
  )
}
