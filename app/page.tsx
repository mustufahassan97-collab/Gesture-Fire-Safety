import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VisionSection } from "@/components/vision-section"
import { ProductsSection } from "@/components/products-section"
import { TechSection } from "@/components/tech-section"
import { GallerySection } from "@/components/gallery-section"
import { DistributorSection } from "@/components/distributor-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ProductsSection />
      <TechSection />
      <GallerySection />
      <DistributorSection />
      <Footer />
    </main>
  )
}
