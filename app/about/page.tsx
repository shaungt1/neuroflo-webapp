import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About NeuroFlo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Premier Agentic AI Platform for Mission-Critical Operations
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <GlassmorphismCard intensity="medium" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  At NeuroFlo, we're redefining how government, military, law enforcement, and healthcare sectors operate in an era where real-time intelligence, operational efficiency, and unyielding compliance are paramount.
                </p>
                <p className="text-muted-foreground">
                  Unlike conventional AI systems, NeuroFlo is not a tool for customers to configure themselves—it's a bespoke, end-to-end solution crafted by our expert team of AI engineers, PhD researchers, expert UI/UX designers, and compliance specialists. We deliver custom-built, agentic AI experiences tailored to the unique challenges of regulated industries, ensuring seamless integration, unparalleled accuracy, and absolute trustworthiness.
                </p>
              </GlassmorphismCard>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Compliance First</h3>
                  <p className="text-muted-foreground text-sm">
                    Built from the ground up to meet HIPAA, CJIS, FedRAMP, and other regulatory requirements.
                  </p>
                </GlassmorphismCard>
                
                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21.9 8c-2.2-4.8-6.3-7-9.9-7-3.6 0-7.7 2.2-9.9 7-2 4.8-2 9.2 0 14 2.2 4.8 6.3 7 9.9 7 3.6 0 7.7-2.2 9.9-7 2-4.8 2-9.2 0-14Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert-Led</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team of AI specialists builds each deployment, ensuring optimal performance and reliability.
                  </p>
                </GlassmorphismCard>
                
                <GlassmorphismCard intensity="low" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver not just technology, but measurable outcomes tailored to your mission-critical operations.
                  </p>
                </GlassmorphismCard>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Core Technology</h2>
              <GlassmorphismCard intensity="medium" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">The Agentic Architecture</h3>
                <p className="text-muted-foreground mb-6">
                  At the heart of NeuroFlo lies its agentic architecture—a sophisticated network of intelligent, autonomous agents orchestrated by our expert team to tackle the most demanding operational challenges. These agents are not generic bots; they are purpose-built entities, each with specialized roles, tools, and memory, designed to operate collaboratively or independently.
                </p>
                <h4 className="font-medium mb-2">How the Agentic System Works</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <p className="text-sm">Custom Agent Creation: Our team of AI experts defines and deploys agents based on client-specific use cases.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <p className="text-sm">Contextual Intelligence: Agents infer context from multimodal inputs using real-time and historical data.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <p className="text-sm">Tool Integration: Each agent is equipped with custom tools ensuring precise task execution.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <p className="text-sm">Collaboration: Agents operate as a team, handing off tasks seamlessly.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <p className="text-sm">Adaptability: Through fine-tuned large language models and reinforcement learning with human feedback.</p>
                  </li>
                </ul>
              </GlassmorphismCard>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <GlassmorphismCard intensity="low">
                  <h3 className="text-xl font-semibold mb-4">Multimodal Capabilities</h3>
                  <p className="text-muted-foreground mb-4">
                    NeuroFlo's ability to process and act on multiple data modalities in real time is a cornerstone of its advantage:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">Voice Processing: Real-time transcription and conversational memory</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">Video Analysis: Object detection, event recognition, and anomaly detection</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">Text Processing: Document handling, form automation, and knowledge integration</p>
                    </li>
                  </ul>
                </GlassmorphismCard>
                
                <GlassmorphismCard intensity="low">
                  <h3 className="text-xl font-semibold mb-4">Compliance-First Design</h3>
                  <p className="text-muted-foreground mb-4">
                    NeuroFlo is engineered with compliance as its foundation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">HIPAA: Secure handling of healthcare data</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">CJIS: Audit-ready systems for law enforcement</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">FedRAMP: Federal information security compliance</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="m5 12 5 5L20 7"></path></svg>
                      </div>
                      <p className="text-sm">Comprehensive audit trails, RBAC, and data sovereignty</p>
                    </li>
                  </ul>
                </GlassmorphismCard>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
              <GlassmorphismCard intensity="medium">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Elite Engineering</h3>
                    <p className="text-blue-400 mb-4">AI Product Design</p>
                    <p className="text-muted-foreground text-sm">
                      Our team has led the development of high-assurance AI systems across defense, enterprise, and edge environments. With deep experience in systems architecture, model optimization, and infrastructure hardening, we build for scale, speed, and security—no compromise.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Expert Team</h3>
                    <p className="text-blue-400 mb-4">AI Engineers & Researchers</p>
                    <p className="text-muted-foreground text-sm">
                      Our team includes PhD researchers, compliance specialists, and UI/UX designers with over 20 years of combined experience in secure AI systems.
                    </p>
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