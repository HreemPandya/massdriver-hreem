"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const FeaturesDropdown = () => (
  <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg p-8 grid grid-cols-2 gap-6 z-50">
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-1 rounded bg-gray-100">
            <Image src="/icons/production.svg" alt="" width={24} height={24} />
          </div>
          <h3 className="font-medium">Production Ready</h3>
        </div>
        <p className="text-sm text-gray-600">Secure, compliant reference architectures</p>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-1 rounded bg-gray-100">
            <Image src="/icons/metrics.svg" alt="" width={24} height={24} />
          </div>
          <h3 className="font-medium">Contextual Metrics</h3>
        </div>
        <p className="text-sm text-gray-600">Infrastructure diagrams as dashboards</p>
      </div>
    </div>

    <div>
      <h3 className="font-medium mb-4">QUICKSTARTS</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary">
          <Image src="/icons/ruby.svg" alt="" width={20} height={20} />
          Ruby on Rails
        </Link>
        <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary">
          <Image src="/icons/aws.svg" alt="" width={20} height={20} />
          AWS ECS Service
        </Link>
      </div>
      <Link href="/features" className="text-primary text-sm mt-6 hover:underline block">
        View all features
      </Link>
    </div>
  </div>
)

const SolutionsDropdown = () => (
  <div className="absolute top-full left-0 w-[900px] bg-white shadow-lg rounded-lg p-8 grid grid-cols-3 gap-8 z-50">
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2 border-b border-gray-300 pb-1">SOLUTIONS</h3>
      <div className="space-y-3">
        <Link href="#" className="block hover:text-primary">
          Developer Self Service
        </Link>
        <Link href="#" className="block hover:text-primary">
          OpenTofu for Enterprise
        </Link>
        <Link href="#" className="block hover:text-primary">
          Backstage Alternative
        </Link>
        <Link href="#" className="block hover:text-primary">
          Platform Engineering Accelerator
        </Link>
        <Link href="#" className="block hover:text-primary">
          Cost Management
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2 border-b border-gray-300 pb-1">CASE STUDIES</h3>
      <div className="space-y-3">
        <Link href="#" className="block hover:text-primary">
          Mentaware's Seamless AWS-to-Azure Migration
        </Link>
        <Link href="#" className="block hover:text-primary">
          GameStake Achieves Zero-Downtime Deployments
        </Link>
        <Link href="#" className="block hover:text-primary">
          How AMD Global Telemedicine Reduced Effort by 89%
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-2 border-b border-gray-300 pb-1">WEBINARS</h3>
      <div className="space-y-3">
        <Link href="#" className="block hover:text-primary">
          Best Practices for Containerizing Web Apps
        </Link>
        <Link href="#" className="block hover:text-primary">
          Migrating Existing OpenTofu Modules
        </Link>
        <Link href="#" className="block hover:text-primary">
          Open Office Hours
        </Link>
        <Link href="#" className="text-primary text-sm hover:underline">
          View all webinars
        </Link>
      </div>
    </div>
  </div>
)

const CommunityDropdown = () => (
  <div className="absolute top-full right-0 w-[200px] bg-white shadow-lg rounded-lg py-2 z-50">
    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
      <Image src="/icons/webinar.svg" alt="" width={20} height={20} />
      Webinars
    </Link>
    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
      <Image src="/icons/youtube.svg" alt="" width={20} height={20} />
      YouTube
    </Link>
    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
      <Image src="/icons/podcast.svg" alt="" width={20} height={20} />
      Podcast
    </Link>
    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
      <Image src="/icons/slack.svg" alt="" width={20} height={20} />
      Slack
    </Link>
  </div>
)

// Mobile menu component
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="flex-shrink-0">
            <Image src="/icons/mass-logo.svg" alt="Massdriver" width={140} height={32} />
          </Link>
          <button onClick={onClose} className="p-1">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <button 
              onClick={() => toggleSection('features')} 
              className="flex items-center justify-between w-full py-2 border-b"
            >
              <span className="font-medium">Features</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'features' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'features' && (
              <div className="py-4 pl-4 space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Production Ready</h3>
                  <p className="text-sm text-gray-600">Secure, compliant reference architectures</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Contextual Metrics</h3>
                  <p className="text-sm text-gray-600">Infrastructure diagrams as dashboards</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium mb-2">QUICKSTARTS</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="#" className="flex items-center gap-1 text-sm hover:text-primary">
                      Ruby on Rails
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-sm hover:text-primary">
                      AWS ECS Service
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <button 
              onClick={() => toggleSection('solutions')} 
              className="flex items-center justify-between w-full py-2 border-b"
            >
              <span className="font-medium">Solutions</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'solutions' && (
              <div className="py-4 pl-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">SOLUTIONS</h3>
                  <div className="space-y-3">
                    <Link href="#" className="block hover:text-primary">Developer Self Service</Link>
                    <Link href="#" className="block hover:text-primary">OpenTofu for Enterprise</Link>
                    <Link href="#" className="block hover:text-primary">Backstage Alternative</Link>
                    <Link href="#" className="block hover:text-primary">Platform Engineering Accelerator</Link>
                    <Link href="#" className="block hover:text-primary">Cost Management</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">CASE STUDIES</h3>
                  <div className="space-y-3">
                    <Link href="#" className="block hover:text-primary">Mentaware's Seamless AWS-to-Azure Migration</Link>
                    <Link href="#" className="block hover:text-primary">GameStake Achieves Zero-Downtime Deployments</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/pricing" className="block py-2 border-b font-medium">
            Pricing
          </Link>

          <Link href="/blog" className="block py-2 border-b font-medium">
            Blog
          </Link>

          <Link href="/docs" className="block py-2 border-b font-medium">
            Docs
          </Link>

          <Link href="/templates" className="block py-2 border-b font-medium">
            Templates
          </Link>

          <div>
            <button 
              onClick={() => toggleSection('community')} 
              className="flex items-center justify-between w-full py-2 border-b"
            >
              <span className="font-medium">Community</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === 'community' ? 'rotate-180' : ''}`} />
            </button>
            {expandedSection === 'community' && (
              <div className="py-4 pl-4 space-y-3">
                <Link href="#" className="flex items-center gap-2 hover:text-primary">Webinars</Link>
                <Link href="#" className="flex items-center gap-2 hover:text-primary">YouTube</Link>
                <Link href="#" className="flex items-center gap-2 hover:text-primary">Podcast</Link>
                <Link href="#" className="flex items-center gap-2 hover:text-primary">Slack</Link>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <Link href="/signin" className="block text-center py-2 border rounded-md">
              Sign In
            </Link>
            <Button className="w-full bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] hover:from-[#2D9AC5] hover:to-[#2D9AC5] text-white transition-all duration-300">
              Try Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="relative bg-white border-b z-50">
      <div className="container mx-auto px-4 relative z-50">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image src="/icons/mass-logo.svg" alt="Massdriver" width={140} height={32} />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("features")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-primary">
                  Features <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "features" && <FeaturesDropdown />}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-primary">
                  Solutions <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "solutions" && <SolutionsDropdown />}
              </div>

              <Link href="/pricing" className="hover:text-primary">
                Pricing
              </Link>

              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>

              <Link href="/docs" className="hover:text-primary">
                Docs
              </Link>

              <Link href="/templates" className="hover:text-primary">
                Templates
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("community")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-primary">
                  Community <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "community" && <CommunityDropdown />}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link href="/signin" className="text-sm hover:text-primary">
                Sign In
              </Link>
            </div>
            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-[#3EAED8] to-[#2D9AC5] hover:from-[#2D9AC5] hover:to-[#2D9AC5] text-white transition-all duration-300">
                Try Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </nav>
  )
}