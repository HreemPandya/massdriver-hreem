"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import Link from "next/link"

interface VideoSectionProps {
  title: string
  description: string[]
  videoSrc: string
  imagePreview: string
  isReversed?: boolean
}

const VideoSection = ({ title, description, videoSrc, imagePreview, isReversed = false }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 py-16 items-center max-w-6xl mx-auto`}>
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-medium text-white">{title}</h2>
        {description.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-800/30 bg-[#1A2A33]">
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster={imagePreview}
            onEnded={() => setIsPlaying(false)}
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-sm hover:bg-black/40 rounded-full p-2.5 transition-all z-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="w-5 h-5 text-white/90" /> : <Play className="w-5 h-5 text-white/90" />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function InfrastructureSection() {
  return (
    <section className="bg-[#1A2A33] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6">Infrastructure at the Speed of Thought</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enable developer self-service without risking compliance, security, cost, or reliability.
          </p>
        </div>

        <VideoSection
          title="Cloud Service Catalog"
          description={[
            "Your DevOps teams have a lot on their plate, don't lose another great teammate to burnout.",
            "Enable developers to self-serve cloud infrastructure from approved IaC templates in a central catalog.",
            "Developers drag, connect, and deploy. No more last minute Jira tickets to the DevOps team.",
          ]}
          videoSrc="/videos/cloud-video.mp4"
          imagePreview="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mM3X3ZX8PebfjlIzzn2WwsBCmb1ESg.png"
        />

        <VideoSection
          title="Cost & Health Insights"
          description={[
            "Get a clear view of your cloud's health and costs right where your developers manage their infrastructure.",
            "With real-time insights, you can make proactive adjustments, ensuring systems are efficient and cost-effective.",
            "Never get caught with a surprise cloud bill again.",
          ]}
          videoSrc="/videos/cost-video.mp4"
          imagePreview="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6D4Ps1KLH7gZntkg6RXda93Rr6aHoF.png"
          isReversed={true}
        />

        <VideoSection
          title="Inventory & Audit Records"
          description={[
            "Get instant visibility into every asset, streamline your workflows, and keep your projects moving forward efficiently.",
            "Say goodbye to the chaos of scattered resources and hello to seamless, organized control.",
            "No more hunting for assets or piecing together the puzzle of your cloud infrastructure.",
          ]}
          videoSrc="/videos/inventory-video.mp4"
          imagePreview="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2rAroImw8xRUPkUGEmIzxaPg8yh36d.png"
        />

        <div className="text-center mt-16">
          <Link
            href="#demo"
            className="inline-flex items-center gap-2 bg-[#3EAED8] hover:bg-[#2D9AC5] text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See a demo <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}