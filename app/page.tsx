"use client"

import { NextUIProvider } from "@nextui-org/react"
import AboutCustomers from "@/components/AboutCustomers"
import CremationStep from "@/components/CremationStep"
import CtaParallax from "@/components/CtaParallax"
import Hero from "@/components/Hero"
import HomeAbout from "@/components/HomeAbout"
import HomeAccordion from "@/components/HomeAccordion"
import HomeBanner from "@/components/HomeBanner"
import HomeBannerCta from "@/components/HomeBannerCta"
import HomeGray from "@/components/HomeGray"
import HomeHeroV2 from "@/components/HomeHeroV2"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <NextUIProvider>
      <Hero />
      <HomeGray />
      <HomeBanner />
      <Testimonials />
      <HomeAbout />
      <CremationStep />
      <CtaParallax />
      <AboutCustomers />
      <HomeBannerCta />
      <HomeAccordion />
      <HomeHeroV2 />
    </NextUIProvider>
  )
}
