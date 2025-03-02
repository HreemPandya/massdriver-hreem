"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function DeliverOnDemand() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-100 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 max-w-4xl mx-auto">
          Deliver On-Demand, Self-Service of Standardized Infrastructure
        </h2>
        
        <div className="relative aspect-video max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
        {!videoPlaying ? (
          <div
            className="relative cursor-pointer flex items-center justify-center rounded-lg overflow-hidden"
            onClick={() => setVideoPlaying(true)}
          >
            <img
              src="/images/mass-thumb.png"
              alt="Video thumbnail"
              className="w-full h-auto"
            />
            
            <div className="absolute flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L19 12L8 19V5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/Zd2SSE-iT3g?autoplay=1"
              title="Massdriver Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] hover:from-[#2D9AC5] hover:to-[#2D9AC5] text-white transition-all duration-300">See a demo →</Button>
        </div>
      </div>
    </section>
  )
}
