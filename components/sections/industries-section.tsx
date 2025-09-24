"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";
const INDUSTRIES = [
  {
    name: "Hospitals & Surgical Centers",
    description:
      "Turn operative notes into clean claims and research-ready insights. Coding with evidence, payer validation, Oracle Cerner integration, and KPI dashboards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M3 22h18"></path><path d="M6 22V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path><path d="M9 10h6"></path><path d="M12 7v6"></path>
      </svg>
    ),
  },
  // {
  //   name: "Ambulatory Surgery Centers (ASCs)",
  //   description:
  //     "High-throughput documentation and coder review. CPT, ICD-10, and HCPCS suggestions with sentence-level citations and denial-prevention checks.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
  //       <rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M2 20h20"></path><path d="M8 8h8"></path><path d="M8 12h6"></path>
  //     </svg>
  //   ),
  // },
  {
    name: "Academic Medicine & Research",
    description:
      "Measurement-based KPIs from the same notes. Cohort filters, secure exports, and audit trails that support IRB processes without duplicate charting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M22 12l-10 7L2 12l10-7 10 7z"></path><path d="M6 15v4"></path><path d="M18 15v4"></path>
      </svg>
    ),
  },
  {
    name: "Revenue Cycle & Coding Teams",
    description:
      "One validation panel for evidence, modifiers, bundling, and payer rules. Lower denials, clearer audits, and no-code automations across pre- and post-bill.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M7 21h10"></path><path d="M9 17v4"></path><path d="M15 17v4"></path>
      </svg>
    ),
  },
  {
    name: "Government Healthcare (VA, DoD, Public Health)",
    description:
      "Healthcare-focused deployments with HIPAA and SOC 2 controls, role-based access, and integration pathways to government EHRs and revenue systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M2 20h20"></path><path d="M5 20V8.2c0-.4.3-.8.7-.9l.2-.1c.4 0 .8.2 1 .5l1.8 2.6c.3.4.9.4 1.2 0l1.8-2.6c.3-.4.5-.6 1-.5.1 0 .2 0 .3.1.4.1.7.5.7.9V20"></path><path d="M13 14h6a2 2 0 0 1 2 2v4"></path><path d="M8 17H5"></path>
      </svg>
    ),
  },
];

export function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            {/* <p className="text-muted-foreground max-w-2xl mx-auto">
              NeuroFlo delivers custom-built, agentic AI solutions for mission-critical operations across regulated industries.
            </p> */}
              <p className="text-muted-foreground max-w-2xl mx-auto">
              NeuroFlo is purpose-built for healthcare, with extensions for government healthcare programs when required.We deliver agentic AI solutions for mission-critical operations across regulated industries.
            </p>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphismCard 
                intensity="low" 
                hoverEffect={true}
                className="h-full"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {industry.description}
                </p>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}