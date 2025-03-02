"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

type Testimonial = {
  quote: string
  author: string
  title: string
  company: string
  companyLogo: string
  caseStudyLink?: string
  stats?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Massdriver is incredibly easy to use, and makes best practices for operations approachable even for novices. Despite this, it also provides immense power to more advanced users.",
    author: "Zachary Hueras",
    title: "Principal Software Engineer",
    company: "AMD",
    companyLogo: "/icons/amd.svg",
    caseStudyLink: "View AMD Case Study",
    stats: 'AMD Global Telemedicine experienced an 89% reduction in "DevOps" tasks and saw ROI in about 10 days.',
  },
  {
    quote:
      "Massdriver is a must for small teams that don't have the resources for a dedicated DevOps team, as it significantly simplifies and improves their deployment processes. It is also a great tool for bigger teams as it follows best practices when provisioning infrastructure and modernizes processes by using Infrastructure as Code.",
    author: "Ivan Ivanov",
    title: "Head of Engineering",
    company: "GameStake",
    companyLogo: "/images/gamestake.png",
    caseStudyLink: "View GameStake Case Study",
    stats: "GameStake saved 25% on their cloud costs by adopting Massdriver.",
  },
  {
    quote:
      "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity tools, designed to streamline cloud management and reduce infrastructure development time.",
    author: "Kirk Safford",
    title: "Director",
    company: "Microsoft Founders Hub",
    companyLogo: "/icons/msfh.svg",
  },
  {
    quote:
      "Their proactive approach to user feedback, coupled with the platform's open-source nature, ensures it remains an essential tool in our DevOps arsenal.",
    author: "Valeriy Tverdohleb",
    title: "CTO",
    company: "VP",
    companyLogo: "/images/vp.png",
  },
  {
    quote:
      "Massdriver is a comprehensive platform engineering solution that combines ease of use with robust functionality. Its focus on compliance, security, and cost-effectiveness makes it a valuable tool for organizations of all sizes.",
    author: "Minith Jain",
    title: "Founding Engineer",
    company: "Energos",
    companyLogo: "/images/energcos.png",
  },
  {
    quote:
      "As an engineer who no longer has their own DevOps team, Massdriver is a great abstraction for a team who wants to move away from their PaaS, but doesn't want to go completely to the IaaS side.",
    author: "Elijah Kim",
    title: "Senior Software Engineer",
    company: "Invibe",
    companyLogo: "/images/invibe.png",
  },
  {
    quote:
      "It is an amazing experience building a Microservice base cloud infrastructure with it, as it handles huge amounts of the configuration work in the background (while still allowing all the customizations for advanced users or corner cases) and allows one to keep an overview of the project. Best support I have ever seen.",
    author: "Kevin Kleber",
    title: "CTO",
    company: "Suind",
    companyLogo: "/images/suind.png",
  },
  {
    quote:
      "Massdriver has been essential in carrying us forward quickly into the most powerful, modern paradigm for managing multiple cloud infrastructures ever known.",
    author: "Jordan Ritter",
    title: "CEO",
    company: "Augment",
    companyLogo: "/images/augment.png",
  },
  {
    quote: "It's incredible to me that I could put together a sophisticated release like this so quickly and easily.",
    author: "Lars Solberg",
    title: "CTO",
    company: "Immersive",
    companyLogo: "/images/immersive.png",
  },
  {
    quote: "The employees of Massdriver are incredibly attentive and helpful. Great product with excellent support.",
    author: "Ben Rosand",
    title: "Founding Engineer",
    company: "Unknown",
    companyLogo: "/images/ccolor.png",
  },
  {
    quote:
      "With Massdriver we were able to replace days of planning and debugging backend infrastructure with Terraform to having it up and running seamlessly in under an hour.",
    author: "Bernie Conrad",
    title: "Lead Software Engineer",
    company: "Allthenticate",
    companyLogo: "/images/all.png",
  },
  {
    quote:
      "We've had a great experience. The Massdriver team has always been responsive to our questions and ready to jump in.",
    author: "Joseph Sciarrino",
    title: "Co-founder & CEO",
    company: "Hydra",
    companyLogo: "/images/hydra.png",
  },
]

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center", 
    loop: true,
    skipSnaps: false,
    dragFree: true,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
      "(max-width: 767px)": { slidesToScroll: 1 },
    },
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl"> {/* Adjusted container with max width and increased padding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-2xl">Loved by DevOps and Software Engineers</h2>
          <div className="flex gap-6">
            <button
              className="text-white/70 hover:text-white transition-colors disabled:opacity-50"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              className="text-white/70 hover:text-white transition-colors disabled:opacity-50"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden mx-auto" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-2rem)] min-w-0 bg-white rounded-lg p-8 flex flex-col mx-4" 
                style={{ maxWidth: "380px" }}
              >
                <div className="flex-grow space-y-6">
                  <p className="text-gray-900 leading-relaxed">{testimonial.quote}</p>
                  {testimonial.caseStudyLink && (
                    <div className="text-blue-500 font-medium inline-block hover:underline cursor-pointer">
                      {testimonial.caseStudyLink} →
                    </div>
                  )}
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="h-8 w-auto"
                    />
                  </div>

                  {testimonial.stats && (
                    <div className="bg-gray-900 text-white rounded-lg p-4">
                      <p className="text-sm leading-relaxed">{testimonial.stats}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h3 className="text-2xl md:text-3xl font-medium">Featured In</h3>
            <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Read News →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-8 justify-items-center"> 
            <Image
              src="/icons/microsoft.svg"
              alt="Microsoft"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/tech.svg"
              alt="TechCrunch"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/yhack.svg"
              alt="Hacker News"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/product.svg"
              alt="Product Hunt"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/devops.png"
              alt="DevOps.com"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 justify-items-center"> 
            <Image
              src="/images/silicon.png"
              alt="SiliconANGLE"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/yahoofin.png"
              alt="Yahoo Finance"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/icons/silver.svg"
              alt="Silverlinings"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/LA.png"
              alt="LA Business Journal"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/cio.png"
              alt="CIO Influence"
              width={120}
              height={40}
              className="w-auto h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}