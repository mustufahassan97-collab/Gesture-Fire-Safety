"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const techFeatures = [
  {
    number: "01",
    title: "Heat Sensitive Detection",
    description: "Proprietary polymer tubing reacts at 160°C.",
  },
  {
    number: "02",
    title: "Clean Agent FK-5-1-12",
    description:
      "Zero residue. Non-conductive. Less Global Warming Potential. Safe for Sensitive Equipment.",
  },
  {
    number: "03",
    title: "CELLULAR NOTIFICATION",
    description: "Automatic SMS/Voice alerts via GSM-based FSP Control Panel.",
  },
]

const diagnostics = [
  { label: "Agent Agent", value: "FK-5-1-12", highlight: false },
  { label: "Response Time", value: "< 10 Seconds", highlight: true },
  { label: "Alert Protocol", value: "Local Sounder, SMS and Voice Call", highlight: false },
  { label: "Compliances", value: "CE, UKCA, ROHS", highlight: "green" },
]

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech" className="py-16 md:py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left - Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 md:mb-8 uppercase text-white text-center lg:text-left">
            Technical <span className="text-primary">DATA SHEET</span>
          </h2>
          <div className="space-y-4 md:space-y-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start sm:items-center p-4 md:p-6 glass rounded-2xl"
              >
                <div className="bg-primary text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-black mr-4 md:mr-6 italic shadow-glow shrink-0 text-sm md:text-base">
                  {feature.number}
                </div>
                <div className="min-w-0">
                  <h5 className="font-black uppercase text-xs md:text-sm text-white">
                    {feature.title}
                  </h5>
                  <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Diagnostics Panel */}
        <motion.div
          initial={{ opacity: 0, rotateY: 15 }}
          animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-6 sm:p-8 md:p-12 rounded-3xl border-t-4 border-primary shadow-[0_20px_50px_rgba(220,38,38,0.1)]"
        >
          <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 border-b border-border pb-4 uppercase text-white text-center lg:text-left">
            System Diagnostics
          </h3>
          <div className="space-y-4 font-bold text-xs md:text-sm uppercase">
            {diagnostics.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground gap-1 sm:gap-4 border-b border-border/30 pb-3 sm:border-0 sm:pb-0"
              >
                <span className="text-muted-foreground/70 sm:text-muted-foreground">{item.label}</span>
                <span
                  className={`${
                    item.highlight === "green"
                      ? "text-green-500"
                      : item.highlight
                      ? "text-primary"
                      : "text-white"
                  } text-right sm:text-left`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
