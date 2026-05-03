"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="vision"
      className="py-12 md:py-24 bg-background border-y border-border relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl border border-border group hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-6 md:w-8 bg-primary" />
            <h3 className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-xs md:text-base">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-200 text-sm md:text-lg lg:text-xl font-normal leading-relaxed">
            To become a leading innovator in compact, automatic fire suppression
            solutions, providing safe and sustainable protection across diverse
            applications, from the smallest enclosures to the most complex
            facilities.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl border border-border group hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-6 md:w-8 bg-primary" />
            <h3 className="text-primary font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-xs md:text-base">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-200 text-sm md:text-lg lg:text-xl font-normal leading-relaxed">
            To design, manufacture, and deliver compact, automatic fire suppression
            systems that prioritize safety, reliability, and environmental
            responsibility, serving diverse sectors with innovative, cost-effective,
            and easy to integrate solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
