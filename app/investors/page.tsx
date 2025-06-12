'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

// Create a client component for the download button
const DownloadButton = () => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // Redirect to download deck page
    window.location.href = '/download-deck';
  };

  return (
    <Button variant="outline" onClick={handleDownload}>
      Download Deck
    </Button>
  );
};

// Keep the main page component as a server component
export default function InvestorsPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Investor Information</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in revolutionizing how mission-critical operations leverage AI in regulated industries.
            </p>
          </div>
          
          <GlassmorphismCard 
            intensity="medium" 
            glowAccent={true}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">We're Raising $10M</h2>
                <p className="text-muted-foreground">
                  NeuroFlo is seeking $10M in funding to scale our custom-built, agentic AI platform for mission-critical operations in regulated industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <Link href="/contact?type=investor">Request Meeting</Link>
                  </Button>
                  <DownloadButton />
                </div>
              </div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[50px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer rotating ring */}
                  <div className="w-3/4 h-3/4 rounded-full border-4 border-blue-500/30 animate-[spin_10s_linear_infinite] flex items-center justify-center relative">
                    {/* Orbital dots on outer ring */}
                    <div className="absolute w-3 h-3 bg-blue-400/60 rounded-full animate-[spin_10s_linear_infinite] -top-1.5 left-1/2 transform -translate-x-1/2"></div>
                    <div className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-[spin_10s_linear_infinite] top-1/2 -right-1 transform -translate-y-1/2"></div>
                    
                    {/* Inner counter-rotating ring */}
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-cyan-500/30 animate-[spin_5s_linear_infinite_reverse] relative flex items-center justify-center">
                      {/* Orbital dots on inner ring */}
                      <div className="absolute w-2 h-2 bg-cyan-300/70 rounded-full animate-[spin_5s_linear_infinite_reverse] -top-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="absolute w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-[spin_5s_linear_infinite_reverse] top-1/2 -left-0.5 transform -translate-y-1/2"></div>
                      
                      {/* Pulsing center core */}
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400/80 to-cyan-400/80 rounded-full animate-pulse shadow-lg"></div>
                    </div>
                    
                    {/* Additional floating elements */}
                    <div className="absolute w-1 h-1 bg-blue-200/60 rounded-full animate-[spin_15s_linear_infinite] top-1/4 left-1/4"></div>
                    <div className="absolute w-1 h-1 bg-cyan-200/60 rounded-full animate-[spin_8s_linear_infinite_reverse] bottom-1/4 right-1/4"></div>
                  </div>
                  
                  {/* Central glowing backdrop */}
                  <div className="absolute w-20 h-20 rounded-full bg-blue-600/30 backdrop-blur-md animate-pulse"></div>
                  
                  {/* Floating particles around the whole system */}
                  <div className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-[spin_20s_linear_infinite] top-8 left-8"></div>
                  <div className="absolute w-0.5 h-0.5 bg-cyan-300/40 rounded-full animate-[spin_12s_linear_infinite_reverse] bottom-12 right-6"></div>
                  <div className="absolute w-1 h-1 bg-blue-200/30 rounded-full animate-[spin_25s_linear_infinite] top-16 right-12"></div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">What We Do</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-lg mb-4">
                  NeuroFlo is the premier Agentic AI Platform for mission-critical operations in government, military, law enforcement, and healthcare.
                </p>
                <p className="text-muted-foreground">
                  Unlike conventional AI systems, NeuroFlo is not a tool for customers to configure themselves—it's a bespoke, end-to-end solution crafted by our expert team of AI engineers, PhD researchers, UI/UX designers, and compliance specialists. We deliver custom-built, agentic AI experiences tailored to the unique challenges of regulated industries, ensuring seamless integration, unparalleled accuracy, and absolute trustworthiness.
                </p>
              </GlassmorphismCard>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Team</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-muted-foreground mb-6">
                  Our team consists of AI specialists with over 20 years of combined experience in secure, mission-critical systems:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Engineering Leadership</span> – Driving technical vision and execution across AI systems architecture, infrastructure, and performance optimization.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Team of PhD Researchers</span> – Experts in machine learning, computer vision, and natural language processing.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">Compliance Specialists</span> – Ensuring our solutions meet HIPAA, CJIS, and FedRAMP requirements.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>
                      <span className="font-medium">UI/UX Designers</span> – Creating intuitive interfaces for complex AI systems.
                    </p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Traction</h2>
              <GlassmorphismCard intensity="low">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Pilot discussions with 3 federal agencies</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Strong interest from healthcare providers for HIPAA-compliant surgical monitoring</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Advanced prototype development for law enforcement video analysis</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Growing waitlist for early testing program</p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Unique Insights</h2>
              <GlassmorphismCard intensity="low">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>The future of AI in regulated industries is not self-service SaaS, but expert-led custom implementations that ensure compliance and performance.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Agentic AI architectures outperform traditional approaches for mission-critical operations by enabling specialized agents to collaborate on complex tasks.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    </div>
                    <p>Building compliance into AI systems from day one is essential for success in regulated industries, where traditional AI solutions fail to meet stringent requirements.</p>
                  </li>
                </ul>
              </GlassmorphismCard>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Market Size</h2>
              <GlassmorphismCard intensity="low">
                <p className="text-muted-foreground mb-6">
                  Total addressable market exceeding $10 billion by 2025 across:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">Government & Military</h3>
                    <p className="text-muted-foreground">$4.2B market for AI-powered video analysis, emergency response, and secure intelligence systems.</p>
                  </div>
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">Law Enforcement</h3>
                    <p className="text-muted-foreground">$2.8B market for AI-enhanced surveillance, evidence management, and public safety systems.</p>
                  </div>
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">Healthcare</h3>
                    <p className="text-muted-foreground">$3.5B market for HIPAA-compliant AI monitoring, reporting, and patient care enhancement.</p>
                  </div>
                  <div className="border border-border/40 rounded-lg p-6 bg-background/40">
                    <h3 className="font-medium text-lg mb-2">Cross-Sector</h3>
                    <p className="text-muted-foreground">$1.5B market for compliance tooling, reporting systems, and secure multimodal AI platforms.</p>
                  </div>
                </div>
              </GlassmorphismCard>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Investment Ask</h2>
              <GlassmorphismCard intensity="medium" glowAccent={true}>
                <div className="text-center p-4">
                  <h3 className="text-3xl font-bold mb-4">$10M</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    To scale NeuroFlo's mission-critical AI platform
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                      <Link href="/contact?type=investor">Request Meeting</Link>
                    </Button>
                    <DownloadButton />
                  </div>
                </div>
              </GlassmorphismCard>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}