"use client"

import { useState } from "react"
import { Code, Upload, BarChart } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Code",
    icon: Code,
    heading: "Ops Teams Write IaC",
    description:
      "DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.",
    subtext:
      "Your IaC is no longer just config, it's a functional software asset. Policy and cost tools are embedded, cutting down maintenance for Ops teams.",
    image: "/images/code-editor.png",
  },
  {
    number: "2",
    title: "Publish",
    icon: Upload,
    heading: "Ops Teams Publish Modules",
    description:
      "Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization's compliance, security, and guardrails in place.",
    subtext: "A central repository for provisioning, policy, and cost controls of your cloud resources.",
    image: "/images/publish-catalog.png",
  },
  {
    number: "3",
    title: "Diagram",
    icon: BarChart,
    heading: "Devs Diagram to Provision",
    description:
      "Developers diagram what they want and your IaC modules are used to provision. Developers don't have to copy Helm Charts or Terraform Modules. They don't have brittle IaC pipelines. Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling in your modules.",
    subtext: "Say goodbye to 100's of brittle IaC pipelines.",
    image: "/images/diagram-interface.png",
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">How it Works</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between mb-8">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg transition-all duration-300 m-2 md:m-0 ${
                  activeStep === index ? "bg-blue-500 text-white" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <step.icon className="w-5 h-5" />
                <span className="font-medium">
                  {step.number}. {step.title}
                </span>
              </button>
            ))}
          </div>

          <div className="border border-gray-700 rounded-lg bg-gray-800 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-medium">{steps[activeStep].heading}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{steps[activeStep].description}</p>
                <p className="text-gray-400 text-base">{steps[activeStep].subtext}</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 relative flex items-center justify-center">
                <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-lg overflow-hidden">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].heading}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {activeStep + 1}/3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}