"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer
      className="bg-background py-12 md:py-20 border-t border-border relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative z-10">
        {/* Brand & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h4 className="font-black text-xl md:text-2xl uppercase mb-4 md:mb-6 tracking-tighter text-white">
            Gesture <span className="text-primary">Fire Safety</span>
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-6">
            Stop Disaster—Before It Starts. Protecting Industry, Innovation, and
            Infrastructure with advanced autonomous suppression technology.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            Systems Operational
          </div>
        </motion.div>

        {/* Headquarters Contact Node */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <h5 className="font-black uppercase mb-4 md:mb-6 text-xs text-primary tracking-[0.2em]">
            Headquarters
          </h5>
          <div className="space-y-3 md:space-y-4 text-sm font-bold uppercase">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3">
              <span className="text-muted-foreground">ADDR:</span>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Office# 176, Erum Mall, Karachi, Pakistan
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 border-t border-border pt-3 md:pt-4">
              <span className="text-muted-foreground">MAIL:</span>
              <Link
                href="mailto:info@gesturefiresafety.com"
                className="text-white hover:text-primary transition tracking-tighter text-xs break-all"
              >
                info@gesturefiresafety.com
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 border-t border-border pt-3 md:pt-4">
              <span className="text-muted-foreground">WEB:</span>
              <Link
                href="https://www.gesturefiresafety.com"
                target="_blank"
                className="text-white hover:text-primary transition tracking-tighter text-xs"
              >
                www.gesturefiresafety.com
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 border-t border-border pt-3 md:pt-4">
              <span className="text-muted-foreground">TEL:</span>
              <p className="text-primary text-xs">+92 339 000 3473</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h5 className="font-black uppercase mb-4 md:mb-6 text-xs text-primary tracking-[0.2em]">
            Eco-Certification
          </h5>
          <p className="text-muted-foreground text-xs leading-relaxed mb-4">
            FK-5-1-12 Agent: Zero Ozone Depletion. Safe for Human Presence.
            Specialized for Electrical Enclosures and Server Racks.
          </p>
          <div className="grid grid-cols-3 gap-2 opacity-30 max-w-[200px] mx-auto md:mx-0">
            <div className="border border-white p-2 text-center text-[8px] font-black text-white">
              CE
            </div>
            <div className="border border-white p-2 text-center text-[8px] font-black text-white">
              UKCA
            </div>
            <div className="border border-white p-2 text-center text-[8px] font-black text-white">
              ROHS
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright & Credits */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border mt-12 md:mt-20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center">
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          &copy; 2026 Gesture Fire Safety. All Rights Reserved.
        </div>
        <div className="text-[9px] text-muted uppercase font-black">
          Gesture Fire Safety
        </div>
      </div>
    </footer>
  )
}
