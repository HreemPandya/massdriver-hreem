import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NotificationBar from "@/components/notification-bar";
import HowItWorks from "@/components/how-it-works";
import SeeWhatsPossible from "@/components/see-whats-possible";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import DeliverOnDemand from "@/components/deliver-on-demand";
import InfrastructureSection from "@/components/infrastructure-section";
import CaseStudySection from "@/components/case-study-section";
import ChatWidget from "@/components/chat-widget";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-clash-grotesk">
      <NotificationBar />
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 md:py-24 container mx-auto px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <Image src="/bglogo.svg" alt="" fill className="object-contain" priority />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 relative font-satoshi">
            DevOps Without the Red Tape
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto relative">
            At Massdriver, we believe in prevention, not permission.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto relative">
            Our platform lets <span className="underline">"ops"</span> teams encode their expertise and your
            organization's non-negotiables into preapproved self-service infrastructure powered by the IaC tools you
            already know.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 relative">
            Massdriver—Fast by default. Safe by design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <Button
              variant="outline"
              className="border-primary text-primary px-6 py-3 rounded-md font-medium min-w-[180px] font-clash-grotesk"
            >
              See a demo
            </Button>
            <Button className="bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] hover:from-[#2D9AC5] hover:to-[#2D9AC5] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center min-w-[180px] transition-all duration-300 font-satoshi">
              Start free trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <HowItWorks />

        <SeeWhatsPossible />

        <TestimonialsCarousel />

        <DeliverOnDemand />

        <InfrastructureSection />

        <CaseStudySection />

        <ChatWidget />

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi">
              Ready to transform your DevOps workflow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-clash-grotesk">
              Join the growing number of teams that are accelerating their infrastructure delivery with Massdriver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-primary text-primary px-6 py-3 rounded-md font-medium min-w-[180px] font-clash-grotesk"
              >
                See a demo
              </Button>
              <Button className="bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] hover:from-[#2D9AC5] hover:to-[#2D9AC5] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center min-w-[180px] transition-all duration-300 font-satoshi">
                Start free trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
