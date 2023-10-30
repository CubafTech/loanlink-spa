"use client"

import Logo from "@/components/Logo"
import { SectionWrapper } from "@/components"
import Howitworks from "@/components/Howitworks"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Patners from "@/components/Partners"
import Testimonial from "@/components/Testimonial"

export default function Home() {
  return (
    <main className="flex flex-col bg-[#f2f2f2] ">
      <div className="mt-[4em]">
      <Logo />
      </div>
      <div className="">
        {/* bg-[#7335EE] */}
        <Hero />
        <Patners />
      </div>
      <Feature />
      <Howitworks />
      <Testimonial />



     
    </main>
  )
}
