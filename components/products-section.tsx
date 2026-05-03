"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const products = [
  {
    id: "fsk-003",
    name: "FSK-003",
    capacity: "3 KG UNIT",
    description: "For Small and Medium Panels",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fsk-003-lddWHDL5hcISDSf5KSdGKm7pPfoUNZ.jpg",
    featured: false,
  },
  {
    id: "fsk-005",
    name: "FSK-005",
    capacity: "5 KG UNIT",
    description: "For Large Panels",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fsk-005-cXKX9aoql5C3EqIP2KBwyYdPUBhMea.jpg",
    featured: false,
  },
  {
    id: "fsk-010",
    name: "FSK-010",
    capacity: "10 KG UNIT",
    description: "For LT/LV Panels",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fsk-010-SUHKLSsaXLPmNGfigr5WuQoUfCf4cP.jpg",
    featured: false,
  },
  {
    id: "fsp-100",
    name: "FSP-100",
    capacity: "Control Panel",
    description: "24/7 Monitoring, BMS/FACP Integration",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-extinguisher-P0bnPhycs2JdMGPdKpsbTnLmwaqH2Z.jpg",
    featured: true,
  },
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black uppercase mb-2 text-white">
            The <span className="text-primary">PRODUCT</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-xs">
            FSK Series & FSP CONTROL PANEL
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass rounded-3xl overflow-hidden group transition-all hover:border-primary/50 ${
                product.featured ? "border-primary/30" : ""
              }`}
            >
              <div
                className={`h-[400px] p-8 flex items-center justify-center ${
                  product.featured ? "bg-primary/10" : "bg-white/5"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={350}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="font-black text-2xl text-white">{product.name}</h4>
                <p className="text-primary font-bold text-xs uppercase">
                  {product.capacity}
                </p>
                <p className="text-muted-foreground text-[10px] font-bold uppercase mt-1 tracking-wider leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
