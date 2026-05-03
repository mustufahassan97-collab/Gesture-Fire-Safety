"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about-us", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#products", label: "Products" },
  { href: "#tech", label: "Tech" },
  { href: "#projects-gallery", label: "Gallery" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-KRXWsNLuuYD538pNiwUaYROZDymWiG.png"
            alt="Gesture Fire Safety Logo"
            width={40}
            height={40}
            className="glow-red"
          />
          <span className="font-black text-xl uppercase tracking-tighter text-white">
            Gesture <span className="text-primary">Fire Safety</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-[10px] uppercase tracking-widest transition-colors hover:text-primary ${
                link.highlight ? "text-primary" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="mailto:info@gesturefiresafety.com"
            className="bg-primary px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-bold text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                    link.highlight ? "text-primary" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="mailto:info@gesturefiresafety.com"
                className="bg-primary px-5 py-3 rounded-full font-bold text-sm uppercase tracking-widest text-white text-center hover:bg-white hover:text-black transition-all mt-2"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
