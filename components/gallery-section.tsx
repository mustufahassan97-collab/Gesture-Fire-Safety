"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project1-APJl2XALDeiddFBFR8dGv1nhOcODCx.jpg",
    alt: "Fire suppression installation project 1",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project2-nOM2CUPzA27g1uoPmksrf0oI1KZwEW.jpg",
    alt: "Electrical panel wiring project 2",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project3-de8MXTrWynvISZwhqYLeozy1mdBKd5.jpg",
    alt: "Technician working on electrical panel",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project4-dKRML0gJAszqWzAqeS6HhIaZaa0oM4.jpg",
    alt: "Worker installing fire suppression system",
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project5-SkuF4ANkS9orldzpZv2SEehTmg6VeZ.jpg",
    alt: "Fire safety control panel installation",
  },
  {
    id: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project6-iFZZXAf5vImJDpmjQgWoloZJFsMoGA.jpg",
    alt: "Electrical cabinet with fire extinguisher",
  },
  {
    id: 7,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project7-xUUosMJOpfBQAgs2CbKDRNDWiOJJxy.jpg",
    alt: "Industrial electrical panels",
  },
  {
    id: 8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project8-40jQmngdOQCTghU07qg0fhQzQDU3t2.jpg",
    alt: "Circuit breakers installation",
  },
  {
    id: 9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project9-QsMb8U6tFIGH1200M9rdQhV7pIMqpu.jpg",
    alt: "Electrical panel components",
  },
  {
    id: 10,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project10-mDZ6F3aTDDNlOCiIuf2KFHrFbTkHBG.jpg",
    alt: "Fire suppression cylinder in enclosure",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects-gallery" className="py-16 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white">
            Field <span className="text-primary">Deployments</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-40 sm:h-52 md:h-64 glass rounded-lg md:rounded-xl overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={300}
                height={256}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
