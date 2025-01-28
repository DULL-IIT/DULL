'use client'

// import CarouselImage from "./components/CarouselImage"
import DULLinfo from "./components/DULLinfo"
import HeadDULL from "./components/HeadDULL"
import Welcome from "./components/Welcome"
import { useEffect, useState } from "react"
import Collaborators from "./components/Collaborators"
import Contact from "./components/Contact"

function Home() {

  return (
    <div>
      <div className="overflow-x-hidden flex-grow">
        <Welcome />
        {/* <CarouselImage /> */}
        <DULLinfo />
        <HeadDULL />
        <Collaborators />
        <Contact />
      </div>
    </div>
  )
}

export default Home
