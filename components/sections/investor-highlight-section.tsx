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
              <h2 className="text-3xl font-bold mb-6">Why NeuroFlo</h2>
              <p className="text-xl text-muted-foreground mb-8">
                NeuroFlo is a healthcare AI platform that turns operative notes into codes, claims, and research-grade insights on a HIPAA and SOC 2 foundation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Op-Notes to Claims: CPT, ICD-10, and HCPCS with evidence, payer and NCCI checks, and one-screen validation.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Proven accuracy: 95%+ in pilots with sentence-level citations and 90% claim acceptance on test sets.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Integrated: Oracle Cerner pathways, exports to revenue systems, and no-code automations for operations and finance.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                  </div>
                  <p className="text-muted-foreground">Insights built in: outcomes, complications, LOS, readmissions, and research KPIs from the same notes.</p>
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
              <h3 className="text-2xl font-bold mb-6">We're Raising $3M</h3>
              <p className="text-muted-foreground mb-8">
                Funds will scale Op-Notes → Claims, validation, and insights across hospitals and ASCs, expand Oracle Cerner integrations, and accelerate go-to-market.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">Market Size</h4>
                  <p className="text-muted-foreground">
                    TAM: $10B+ across healthcare AI for coding, RCM, and analytics as outlined in our deck.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Team</h4>
                  <p className="text-muted-foreground">
                    AI and healthcare engineers with 20+ years combined experience in secure, mission-critical systems and EHR integrations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Traction</h4>
                  <p className="text-muted-foreground">
                    Pilot at a Maryland University Medical Center-affiliated surgical center; active work with Vandalia Health at $10K per month; 95%+ coding accuracy with sentence-level evidence.
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
