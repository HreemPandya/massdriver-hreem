import Image from "next/image"
import Link from "next/link"
import { Slack, Youtube, Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#d8e8f9] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Social Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="\icons\mass-logo.svg"
                alt="Massdriver"
                width={150}
                height={40}
                className="h-10"
              />
            </Link>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 bg-[#E5F6F1] text-[#0E8764] px-3 py-1 rounded-full text-sm">
                <span className="h-2 w-2 bg-[#0E8764] rounded-full"></span>
                System Operational
              </div>
            </div>
            <div className="flex gap-3">
              {[Slack, Youtube, Twitter, Linkedin, Github].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="bg-[#3EAED8] p-2 rounded-full text-white hover:bg-[#2D9AC5] transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    AWS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Azure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Templates</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    AWS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    GCP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Azure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Developer Self Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    OpenTofu for Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Platform Engineering Accelerator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Cost Management
                  </Link>
                </li>
              </ul>

              <h3 className="font-bold text-gray-900 mt-6 mb-4">Comparisons</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Backstage Alternative
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Spacelift vs Massdriver
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pitch Deck
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <div className="md:col-span-1 flex flex-col gap-4">
            <Image
              src="\icons\aws-partner.svg"
              alt="AWS Partner"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="\icons\google-cloud.svg"
              alt="Google Cloud Partner"
              width={80}
              height={80}
              className="object-contain"
            />
            <Image
              src="\icons\source-forge.svg"
              alt="SourceForge Reviews"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <p className="text-gray-600 text-sm">© Massdriver, Inc. {new Date().getFullYear()}</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

