"use client"

import Logo from "@/components/Logo"
import { SectionWrapper } from "@/components"
import Howitworks from "@/components/Howitworks"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Logo />
      <div className="">
        {/* bg-[#7335EE] */}

      <Hero />
      </div>
          <Howitworks />



     
    </main>
  )
}
