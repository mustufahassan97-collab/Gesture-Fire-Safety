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
      className="py-24 bg-background border-y border-border relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-stretch">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass p-10 rounded-3xl border border-border group hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-primary" />
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-sm md:text-base">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
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
          className="glass p-10 rounded-3xl border border-border group hover:border-primary/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-primary" />
            <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-sm md:text-base">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed">
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
