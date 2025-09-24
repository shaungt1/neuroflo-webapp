"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { ArrowLeft, Download, FileText, Presentation, ExternalLink, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function DownloadDeckPage() {
  const [activeView, setActiveView] = useState<'pdf' | 'slides'>('pdf');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const totalSlides = 30; // Based on your split files
  
  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && activeView === 'slides') {
      interval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= totalSlides) {
            setIsPlaying(false);
            return 1;
          }
          return prev + 1;
        });
      }, 3000); // 3 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeView, totalSlides]);
  
  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    setIsPlaying(false);
  };
  
  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
    setIsPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 1));
    setIsPlaying(false);
  };
  
  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

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
              Comprehensive overview of our agentic AI platform for healthcare documentation and coding. 
              Explore our technology, market opportunity, and $3M funding round.
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
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/pitchdeck/neuroflo_pitchdeck_2025.pdf';
                      link.download = 'neuroflo_pitchdeck_2025.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
                
                {/* PDF Viewer */}
                <div className="w-full h-[800px] bg-background/30 border border-border/40 rounded-lg overflow-hidden">
                  <iframe
                    src="/pitchdeck/neuroflo_pitchdeck_2025.pdf"
                    className="w-full h-full rounded-lg"
                    title="NeuroFlo Investor Pitch Deck"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Presentation className="w-6 h-6 text-blue-500" />
                    Interactive Slide View
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={toggleAutoplay}
                      className="flex items-center gap-2"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isPlaying ? 'Pause' : 'Auto-Play'}
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/pitchdeck/neuroflo_pitchdeck_2025.pdf';
                        link.download = 'neuroflo_pitchdeck_2025.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                {/* Slide Thumbnails Navigation */}
                <div className="bg-background/20 rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Slide Navigation</h3>
                  <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 max-h-32 overflow-y-auto">
                    {Array.from({ length: totalSlides }, (_, i) => {
                      const slideNum = i + 1;
                      const isActive = slideNum === currentSlide;
                      return (
                        <div
                          key={slideNum}
                          onClick={() => goToSlide(slideNum)}
                          className={`aspect-[4/3] border rounded cursor-pointer transition-all duration-200 flex items-center justify-center text-xs font-medium ${
                            isActive 
                              ? 'border-blue-500 bg-blue-500/20 text-blue-400' 
                              : 'border-border/40 bg-background/30 text-muted-foreground hover:bg-background/50 hover:border-border/60'
                          }`}
                        >
                          {slideNum}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Current Slide Display */}
                <div className="relative">
                  <div className="w-full aspect-[16/10] bg-background/20 border border-border/40 rounded-lg overflow-hidden">
                    <iframe
                      src={`/pitchdeck/split/page-${currentSlide.toString().padStart(3, '0')}.pdf`}
                      className="w-full h-full"
                      title={`NeuroFlo Pitch Deck - Slide ${currentSlide}`}
                    />
                  </div>
                  
                  {/* Slide Navigation Overlay */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevSlide}
                      disabled={currentSlide === 1}
                      className="pointer-events-auto bg-background/80 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextSlide}
                      disabled={currentSlide === totalSlides}
                      className="pointer-events-auto bg-background/80 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Slide Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 1}>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === totalSlides}>
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      Slide {currentSlide} of {totalSlides}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToSlide(1)}
                        disabled={currentSlide === 1}
                      >
                        First
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToSlide(totalSlides)}
                        disabled={currentSlide === totalSlides}
                      >
                        Last
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-background/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                  />
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
                <li>• $45B+ healthcare AI market</li>
                <li>• Expert-led agentic AI development</li>
                <li>• HIPAA & SOC 2 compliance</li>
                <li>• Vandalia Health pilot deployment</li>
                <li>• 98%+ coding accuracy</li>
                <li>• Oracle Cerner EHR integration</li>
                <li>• Experienced healthcare AI team</li>
                <li>• $3M funding round ($1M seed)</li>
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