"use client";

import { useRef } from "react";
import { useInView } from "@/lib/use-in-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { motion } from "@/lib/motion";

const CAPABILITIES = [
  {
    id: "agentic",
    name: "Agentic Architecture",
    description: "NeuroFlo's agentic architecture deploys intelligent, autonomous agents with specialized roles, tools, and memory that operate collaboratively or independently to tackle the most demanding operational challenges.",
    features: [
      "Custom agent creation by AI experts",
      "Contextual intelligence from multimodal inputs",
      "Tool integration with specialized models",
      "Agent collaboration for complex workflows",
      "Adaptability through fine-tuned LLMs"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h.01"></path><path d="M17 7h.01"></path><path d="M7 17h.01"></path><path d="M17 17h.01"></path></svg>
    )
  },
  {
    id: "multimodal",
    name: "Multimodal Processing",
    description: "Process and act on multiple data modalities in real time with NeuroFlo's advanced voice, video, and text processing capabilities, delivering a unified intelligence layer for any scenario.",
    features: [
      "Real-time video analysis with computer vision",
      "Voice transcription and conversational memory",
      "Document processing and form automation",
      "Knowledge base integration with RAG",
      "Edge and cloud hybrid processing"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21.9 8c-2.2-4.8-6.3-7-9.9-7-3.6 0-7.7 2.2-9.9 7-2 4.8-2 9.2 0 14 2.2 4.8 6.3 7 9.9 7 3.6 0 7.7-2.2 9.9-7 2-4.8 2-9.2 0-14Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    )
  },
  {
    id: "compliance",
    name: "Compliance-First Design",
    description: "NeuroFlo is engineered with compliance as its foundation, making it the go-to solution for government contracting and regulated industries with strict security and privacy requirements.",
    features: [
      "HIPAA, CJIS, and FedRAMP compliance",
      "Comprehensive audit trails for transparency",
      "Role-based access control",
      "Explainable AI for regulatory audits",
      "Data sovereignty and privacy protection"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
    )
  },
  {
    id: "reporting",
    name: "Agentic Reporting",
    description: "NeuroFlo's hierarchical, agent-driven reporting system delivers unparalleled accuracy and scalability, tailored to the exacting demands of regulated sectors.",
    features: [
      "Specialized data agents for analysis",
      "Master reporting agents for synthesis",
      "Multi-report agents for high-level insights",
      "Client-defined reporting scope",
      "AI-driven visualizations and compliance validation"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
    )
  }
];

// Floating neural particle component
const FloatingParticle = ({ delay, duration, size, x, y, color }: { 
  delay: number; 
  duration: number; 
  size: number; 
  x: number; 
  y: number;
  color: string;
}) => (
  <div
    className="absolute rounded-full blur-[0.5px]"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: color,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      opacity: 0,
    }}
  />
);

// Animated atom visualization component
const AnimatedAtom = () => {
  // Random floating particles configuration
  const floatingParticles = [
    { delay: 0, duration: 4, size: 3, x: 20, y: 30, color: 'rgba(59, 130, 246, 0.4)' },    // blue
    { delay: 1.5, duration: 5, size: 2, x: 75, y: 60, color: 'rgba(6, 182, 212, 0.4)' },   // cyan
    { delay: 3, duration: 4.5, size: 2.5, x: 40, y: 80, color: 'rgba(59, 130, 246, 0.3)' }, // blue
  ];

  return (
    <div className="relative order-1 md:order-2 aspect-square max-w-md mx-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-[50px]"></div>
      
      {/* Floating neural particles */}
      {floatingParticles.map((particle, index) => (
        <FloatingParticle key={`float-${index}`} {...particle} />
      ))}
      
      {/* Electron shells container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Nucleus */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-[spin_8s_linear_infinite]"></div>
        </div>

        {/* Inner electron shell */}
        <div className="absolute w-48 h-48 animate-[spin_12s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div
              key={`inner-${i}`}
              className="absolute w-3 h-3 rounded-full bg-blue-400/80 blur-[0.5px]"
              style={{
                left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 3)}%`,
                top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 3)}%`,
                animation: `orbit-1 ${8 + i}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Middle electron shell */}
        <div className="absolute w-64 h-64 animate-[spin_16s_linear_infinite_reverse]">
          {[...Array(5)].map((_, i) => (
            <div
              key={`middle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/80 blur-[0.5px]"
              style={{
                left: `${50 + 45 * Math.cos((i * 2 * Math.PI) / 5)}%`,
                top: `${50 + 45 * Math.sin((i * 2 * Math.PI) / 5)}%`,
                animation: `orbit-2 ${12 + i * 0.5}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Outer electron shell */}
        <div className="absolute w-80 h-80 animate-[spin_20s_linear_infinite]">
          {[...Array(7)].map((_, i) => (
            <div
              key={`outer-${i}`}
              className="absolute w-2.5 h-2.5 rounded-full bg-blue-500/60 blur-[0.5px]"
              style={{
                left: `${50 + 48 * Math.cos((i * 2 * Math.PI) / 7)}%`,
                top: `${50 + 48 * Math.sin((i * 2 * Math.PI) / 7)}%`,
                animation: `orbit-3 ${16 + i * 0.3}s linear infinite`,
              }}
            />
          ))}
        </div>

        {/* Connection lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute w-[1px] h-1/2 bg-gradient-to-t from-blue-500/20 to-transparent origin-bottom"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${(i * 45)}deg)`,
                animation: `glow ${3 + i * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            opacity: 0;
            transform: translate(0, 0) scale(1);
          }
          25% { 
            opacity: 0.8;
            transform: translate(10px, -10px) scale(1.1);
          }
          50% { 
            opacity: 0.4;
            transform: translate(-5px, 15px) scale(0.9);
          }
          75% { 
            opacity: 0.6;
            transform: translate(-15px, -5px) scale(1.05);
          }
        }
        @keyframes orbit-1 {
          from { transform: rotate(0deg) translateX(24px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(0deg) translateX(32px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(32px) rotate(-360deg); }
        }
        @keyframes orbit-3 {
          from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export function CapabilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NeuroFlo's unique technology stack sets it apart in mission-critical AI solutions.
            </p>
          </motion.div>
        </div>
        
        <Tabs defaultValue="agentic" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-10">
            {CAPABILITIES.map((capability) => (
              <TabsTrigger 
                key={capability.id}
                value={capability.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary/10"
              >
                <span className="hidden md:inline-block">{capability.name}</span>
                <span className="md:hidden">{capability.icon}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {CAPABILITIES.map((capability) => (
            <TabsContent key={capability.id} value={capability.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <GlassmorphismCard 
                    intensity="medium" 
                    glowAccent={true}
                    className="order-2 md:order-1 md:p-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{capability.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {capability.description}
                    </p>
                    <ul className="space-y-2">
                      {capability.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mt-1"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassmorphismCard>
                  
                  <AnimatedAtom />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}