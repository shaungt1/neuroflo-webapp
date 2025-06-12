"use client";

import { useState, useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";

export function SignupSection() {
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [useCase, setUseCase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon about joining our early testing program.",
      });
      setEmail("");
      setOrganization("");
      setUseCase("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section ref={ref} id="signup" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute bottom-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Early Testing Program</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're onboarding select partners in law enforcement, healthcare, defense, and government agencies. Register your interest to be among the first to experience NeuroFlo.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard 
              intensity="medium" 
              glowAccent={true}
              className="p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="useCase">Primary Use Case</Label>
                    <Input
                      id="useCase"
                      type="text"
                      placeholder="Briefly describe your use case"
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground mb-6">
                  By submitting this form, you agree to our <a href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                >
                  {isSubmitting ? "Submitting..." : "Register Interest"}
                </Button>
              </form>
            </GlassmorphismCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}