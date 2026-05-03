"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about-us" className="py-16 md:py-32 bg-secondary relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight md:leading-none mb-4 md:mb-6 text-white">
            Safety <br className="hidden sm:block" />
            <span className="text-primary">Reimagined.</span>
          </h2>
          <div className="w-24 h-1 bg-primary mb-6 md:mb-8 mx-auto md:mx-0" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
            Gesture Fire Safety engineers specialized, automatic suppression systems
            that detect and extinguish fire at the source instantly.
          </p>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="glass p-6 md:p-8 rounded-2xl text-center sm:text-left">
            <h4 className="text-primary font-black text-2xl md:text-3xl">24/7</h4>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">
              Autonomous Monitoring
            </p>
          </div>
          <div className="glass p-6 md:p-8 rounded-2xl text-center sm:text-left">
            <h4 className="text-white font-black text-lg md:text-xl lg:text-2xl">CUSTOM SIZES</h4>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">
              Variable Capacities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
