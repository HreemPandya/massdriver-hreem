"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudySection() {
  return (
    <section className="bg-gradient-to-br from-[#0d1a24] to-[#1a2c3a] text-white py-20">
      <div className="container mx-auto px-4">

        <h2 className="text-5xl md:text-6xl font-medium text-center mb-16 max-w-6xl mx-auto">
          How AMD Global Telemedicine Reduced Software Release Effort by 89%
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          <div className="bg-[#223540] rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-medium mb-1">Chip McIntosh</h3>
              <p className="text-gray-300 mb-6">Chief Innovation Officer</p>

              <p className="text-gray-300 leading-relaxed">
                Massdriver's platform has revolutionized our approach to infrastructure, saving us 89% of the time spent
                managing infrastructure. Our operation could upscale by an order of magnitude, if not two, and we would
                not be in crisis mode to hire somebody to manage infrastructure.
              </p>
            </div>

            <div className="mt-8">
              <Image
                src="\icons\amd.svg"
                alt="AMD Global Telemedicine Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-300 mb-8">
              Explore how AMD Global Telemedicine revolutionized their software deployment process, cutting down release
              effort by 89% with Massdriver's cloud solutions. This case study is a must-read for those aiming to scale
              efficiently and enhance team productivity through innovative cloud technology. Download now for key
              insights.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-[#3EAED8] mr-2">•</span>
                <span className="text-gray-300">
                  Reduced software release effort by 89% with Massdriver's cloud solutions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EAED8] mr-2">•</span>
                <span className="text-gray-300">
                  Managed a 100x workload surge without increasing engineering staff.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#3EAED8] mr-2">•</span>
                <span className="text-gray-300">Improved team collaboration and productivity ninefold.</span>
              </li>
            </ul>

            <Link href="/case-studies/amd-global-telemedicine" className="inline-block">
              <button className="group relative px-6 py-3 overflow-hidden rounded-md font-medium">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] rounded-md"></div>
                <span className="relative flex items-center justify-center text-white">
                  View Case Study <ArrowRight className="ml-2" size={16} />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg p-8 mb-20 max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-center uppercase mb-1">PLATFORM ENGINEERING</h3>
          <p className="text-center uppercase text-xl mb-6">PODCAST</p>

          <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
            This podcast caters to professionals and enthusiasts passionate about the intricacies of platform
            architecture, cloud operations, and scaling DevOps practices.
          </p>

          <p className="text-center font-medium mb-6">LISTEN TO THE PODCAST</p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://www.youtube.com/channel/your-channel" target="_blank" aria-label="YouTube">
              <Image src="/images/youtube-box.png" alt="YouTube" width={50} height={50} />
            </Link>
            <Link href="https://www.iheart.com/podcast/your-podcast" target="_blank" aria-label="iHeart Radio">
              <Image src="/images/heart-radio.png" alt="iHeart Radio" width={50} height={50} />
            </Link>
            <Link href="https://open.spotify.com/show/your-podcast" target="_blank" aria-label="Spotify">
              <Image src="/icons/spotify.svg" alt="Spotify" width={50} height={50} />
            </Link>
            <Link href="https://podcasts.apple.com/podcast/your-podcast" target="_blank" aria-label="Apple Podcasts">
              <Image src="/icons/apple-radio.svg" alt="Apple Podcasts" width={50} height={50} />
            </Link>
            <Link href="https://music.amazon.com/podcasts/your-podcast" target="_blank" aria-label="Amazon Music">
              <Image src="/images/amazon-music.png" alt="Amazon Music" width={50} height={50} />
            </Link>
            <Link href="https://pocketcasts.com/podcast/your-podcast" target="_blank" aria-label="Pocket Casts">
              <Image src="/images/pocket.png" alt="Pocket Casts" width={50} height={50} />
            </Link>
            <Link href="/rss-feed" target="_blank" aria-label="RSS Feed">
              <Image src="/images/rss.png" alt="RSS Feed" width={50} height={50} />
            </Link>
            <Link href="https://overcast.fm/itunes/your-podcast" target="_blank" aria-label="Overcast">
              <Image src="/images/overcast.png" alt="Overcast" width={50} height={50} />
            </Link>
          </div>
        </div>

        <div className="mb-20 max-w-6xl mx-auto">
          <h2 className="text-5xl font-medium text-center mb-10">We know the cloud</h2>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="bg-white text-black rounded-lg p-8 relative">
              <Image
                src="/icons/quote.svg"
                alt="Quotation mark"
                width={40}
                height={40}
                className="absolute -top-4 -left-4 opacity-70"
              />
              <p className="text-lg mb-6">
                "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of
                Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity tools,
                designed to streamline cloud management and reduce infrastructure development time."
              </p>
              <div>
                <p className="font-bold">Kirk Safford</p>
                <p className="text-gray-600 text-sm">Director, Microsoft for Startups</p>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto border-t border-gray-600 my-10"></div>
          <p className="text-center text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
            Built by a team of world-class cloud certified experts. Massdriver has passed rigorous CIS benchmarks for
            your favorite cloud's partnership network.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image src="/images/aws-part.png" alt="AWS Partner" width={120} height={80} />
            <Image
              src="/icons/msfh1.svg"
              alt="Microsoft for Startups Founders Hub"
              width={240}
              height={80}
            />
            <Image
              src="/images/cloud.png"
              alt="Google Cloud Certified"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="text-center mb-10 relative max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-4xl mx-auto">
            We're confident Massdriver will transform how your team operates. Are you ready to simplify?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 bg-[#3EAED8] hover:bg-[#2D9AC5] text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Book a Demo <ArrowRight size={16} />
            </Link>
            <Link
              href="/try-free"
              className="inline-flex items-center gap-2 border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Try Free Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get our Newsletter <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-[#2D5A6E] py-4 text-center max-w-6xl mx-auto">
            <p className="text-white">
              <Link
                href="/manager-help"
                className="hover:underline transition duration-200"
              >
                Need help persuading your manager?
              </Link>
            </p>
          </div>

          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#3EAED8]/20 rounded-full -z-10 blur-xl"></div>
        </div>
      </div>
    </section>
  )
}