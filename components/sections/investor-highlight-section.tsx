"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/lib/use-in-view";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";

export function InvestorHighlightSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why NeuroFlo is Different</h2>
              <p className="text-xl text-muted-foreground mb-8">
                NeuroFlo is not configurable SaaS. We handcraft agentic AI systems with a team of PhDs, engineers, and compliance experts.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Not a platform. A partner. We build and deploy custom AI solutions.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Custom-built, not configured. Each solution is handcrafted for specific needs.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Regulation-ready for HIPAA, CJIS, and FedRAMP compliance from day one.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">End-to-end solutions with ongoing support and adaptation as needs evolve.</p>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Link href="/investors">Investor Information →</Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard 
              intensity="medium" 
              glowAccent={true}
              className="p-8"
            >
              <h3 className="text-2xl font-bold mb-6">We're Raising $10M</h3>
              <p className="text-muted-foreground mb-8">
                Join us in scaling NeuroFlo's mission-critical AI platform to revolutionize regulated industries.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">Market Size</h4>
                  <p className="text-muted-foreground">
                    Total addressable market exceeding $10 billion by 2025 across government, military, law enforcement, and healthcare sectors.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Team</h4>
                  <p className="text-muted-foreground">
                    Led by AI specialists with over 20 years of combined experience in secure, mission-critical systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Traction</h4>
                  <p className="text-muted-foreground">
                    Pilot discussions with 3 federal agencies and strong interest from healthcare providers.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                  <Link href="/contact?type=investor">Request Meeting</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/investors">Download Deck</Link>
                </Button>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}