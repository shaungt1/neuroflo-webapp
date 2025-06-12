"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { ArrowLeft, Download, FileText, Presentation, ExternalLink } from "lucide-react";

export default function DownloadDeckPage() {
  const [activeView, setActiveView] = useState<'pdf' | 'slides'>('pdf');

  return (
    <div className="pt-24 pb-16 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute top-40 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[96px] opacity-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/investors" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Investors
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">NeuroFlo Investor Pitch Deck</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of our agentic AI platform for mission-critical operations. 
              Explore our technology, market opportunity, and $10M funding round.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-1">
              <Button
                variant={activeView === 'pdf' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveView('pdf')}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                PDF View
              </Button>
              <Button
                variant={activeView === 'slides' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveView('slides')}
                className="flex items-center gap-2"
              >
                <Presentation className="w-4 h-4" />
                Slide View
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <GlassmorphismCard intensity="medium" className="mb-8">
            {activeView === 'pdf' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-500" />
                    PDF Document View
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
                
                {/* PDF Viewer Placeholder */}
                <div className="w-full h-[800px] bg-background/30 border border-border/40 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto">
                      <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">NeuroFlo Investor Deck</h3>
                      <p className="text-muted-foreground mb-4">
                        Complete 25-slide presentation covering our technology, market, team, and funding requirements.
                      </p>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Open in New Tab
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Presentation className="w-6 h-6 text-blue-500" />
                    Interactive Slide View
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download PPTX
                  </Button>
                </div>

                {/* Slide Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] bg-background/30 border border-border/40 rounded-lg flex items-center justify-center cursor-pointer hover:bg-background/50 transition-colors"
                    >
                      <span className="text-sm font-medium">{i + 1}</span>
                    </div>
                  ))}
                </div>

                {/* Current Slide Display */}
                <div className="w-full aspect-[16/9] bg-background/30 border border-border/40 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center justify-center mx-auto">
                      <Presentation className="w-10 h-10 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Slide 1: Executive Summary</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        NeuroFlo: The Premier Agentic AI Platform for Mission-Critical Operations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slide Navigation Controls */}
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <span className="flex items-center px-4 py-2 text-sm text-muted-foreground">
                    Slide 1 of 25
                  </span>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </GlassmorphismCard>

          {/* Deck Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <GlassmorphismCard intensity="low">
              <h3 className="text-lg font-semibold mb-3">Deck Contents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Executive Summary</li>
                <li>• Problem & Solution</li>
                <li>• Technology Overview</li>
                <li>• Market Opportunity</li>
                <li>• Business Model</li>
                <li>• Competitive Landscape</li>
                <li>• Team & Advisors</li>
                <li>• Financial Projections</li>
                <li>• Funding Requirements</li>
                <li>• Use of Funds</li>
              </ul>
            </GlassmorphismCard>

            <GlassmorphismCard intensity="low">
              <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• $10B+ addressable market</li>
                <li>• Expert-led AI development</li>
                <li>• Compliance-first architecture</li>
                <li>• Federal agency pilots</li>
                <li>• Healthcare partnerships</li>
                <li>• Proprietary agentic technology</li>
                <li>• Experienced team</li>
                <li>• Clear path to revenue</li>
                <li>• Scalable platform</li>
                <li>• Strong IP portfolio</li>
              </ul>
            </GlassmorphismCard>

            <GlassmorphismCard intensity="low">
              <h3 className="text-lg font-semibold mb-3">Investment Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Funding Round:</span>
                  <p className="font-medium">Series A - $10M</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Use of Funds:</span>
                  <p className="font-medium">Team expansion, R&D, market entry</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Timeline:</span>
                  <p className="font-medium">Q1 2025 close target</p>
                </div>
                <Button asChild className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                  <Link href="/contact?type=investor">Schedule Meeting</Link>
                </Button>
              </div>
            </GlassmorphismCard>
          </div>

          {/* Contact Section */}
          <GlassmorphismCard intensity="medium" glowAccent={true}>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Learn More?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a meeting with our team to discuss the investment opportunity and see a live demonstration of our agentic AI platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                  <Link href="/contact?type=investor">Request Meeting</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="mailto:info@neuroflo.us">Email Directly</Link>
                </Button>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
}