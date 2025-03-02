"use client"

import { useState } from "react"
import Image from "next/image"

export default function SeeWhatsPossible() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  const cloudCertifications = [
    {
      name: "Google Cloud Partner",
      logo: "/icons/google-cloud.svg",
      alt: "Google Cloud Partner Logo",
    },
    {
      name: "AWS Partner",
      logo: "/icons/aws-partner.svg",
      alt: "AWS Partner Logo",
    },
    {
      name: "Microsoft for Startups Founders Hub",
      logo: "/icons/msfh.svg",
      alt: "Microsoft for Startups Founders Hub Logo",
    },
  ]

  const vcBackers = [
    {
      name: "Y Combinator",
      logo: "/icons/yc.svg",
      alt: "Y Combinator Logo",
    },
    {
      name: "Builders VC",
      logo: "/icons/builder.svg",
      alt: "Builders VC Logo",
    },
    {
      name: "1984.vc",
      logo: "/icons/1984.svg",
      alt: "1984.vc Logo",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-100 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 max-w-4xl mx-auto">
          See What's Possible with Massdriver's IaC-Powered Platform
        </h2>

        {/* Video Player */}
        <div className="relative aspect-video max-w-5xl mx-auto mb-16 rounded-lg overflow-hidden shadow-xl">
          {!videoPlaying ? (
            <div className="relative w-full h-full cursor-pointer" onClick={() => setVideoPlaying(true)}>
              <Image
                src="/images/see-what.png"
                alt="Massdriver Platform Interface"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <svg className="w-10 h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/yxAPMfGR0jE?autoplay=1"
              title="Massdriver Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-center text-gray-500 font-medium mb-8 tracking-wider">CLOUD CERTIFIED</h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {cloudCertifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-center">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.alt}
                      width={cert.name === "Microsoft for Startups Founders Hub" ? 200 : 100}
                      height={80}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-center text-gray-500 font-medium mb-8 tracking-wider">VC BACKED</h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {vcBackers.map((backer) => (
                  <div key={backer.name} className="flex items-center justify-center">
                    <Image
                      src={backer.logo || "/placeholder.svg"}
                      alt={backer.alt}
                      width={backer.name === "Builders VC" ? 150 : 100}
                      height={60}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}