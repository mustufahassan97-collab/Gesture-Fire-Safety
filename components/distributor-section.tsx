"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Globe, Mail, Phone } from "lucide-react"

export function DistributorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="where-to-buy"
      className="py-12 md:py-24 bg-secondary border-t border-border relative overflow-hidden"
      ref={ref}
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none dot-pattern" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">
            Where to <span className="text-primary">Buy</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 glass p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center border border-border group hover:border-primary/30 transition-all duration-500"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ibs-logo-PY6UxbMvdt1lnncyThUkhqSUgYkumm.png"
                alt="Index Building Solutions Logo"
                width={200}
                height={200}
                className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain brightness-110"
              />
              <div className="mt-4 md:mt-6 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                <span className="h-1 w-1 bg-primary rounded-full animate-pulse" />
                Authorized Partner
              </div>
            </motion.div>

            {/* Distributor Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 glass p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/10 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="flex flex-col gap-6 md:gap-10 md:flex-row">
                {/* Left: Basic Info */}
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-1">
                    Index Building Solutions
                  </h4>
                  <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-widest mb-4 md:mb-6">
                    Official Distributor — Pakistan
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1 shrink-0" size={16} />
                      <p className="text-muted-foreground text-xs font-bold uppercase leading-relaxed">
                        35-A, 4th Floor, RJ Mall,
                        <br /> Rashid Minhas Road, Karachi
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-primary shrink-0" size={16} />
                      <Link
                        href="http://www.index.com.pk"
                        target="_blank"
                        className="text-white text-xs font-bold hover:text-primary transition tracking-tighter italic"
                      >
                        www.index.com.pk
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Contact Nodes */}
                <div className="flex flex-col gap-3 md:w-64">
                  <div className="glass p-4 rounded-xl border border-border bg-white/5">
                    <span className="text-[9px] font-black text-muted-foreground uppercase block mb-1 tracking-widest">
                      <Mail className="inline mr-1" size={10} />
                      Email Support
                    </span>
                    <Link
                      href="mailto:info@ibsbuilding.com"
                      className="text-white text-xs font-bold hover:text-primary transition break-all"
                    >
                      info@ibsbuilding.com
                    </Link>
                  </div>
                  <div className="glass p-4 rounded-xl border border-border bg-white/5">
                    <span className="text-[9px] font-black text-muted-foreground uppercase block mb-1 tracking-widest">
                      <Phone className="inline mr-1" size={10} />
                      Contact Lines
                    </span>
                    <p className="text-white text-xs font-bold">+92 336 8088002</p>
                    <p className="text-white text-xs font-bold">+92 329 2572191</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border flex justify-center">
                <Link
                  href="tel:+923368088002"
                  className="bg-white text-black px-8 md:px-10 py-3 md:py-4 font-black uppercase text-[10px] hover:bg-primary hover:text-white transition-all duration-500 shadow-xl group-hover:scale-105 w-full sm:w-auto text-center"
                >
                  Contact Distributor
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
