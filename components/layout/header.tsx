"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Braces } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Investors", href: "/investors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-border/50" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
              <Braces className="w-4 h-4 text-white" />
              <div className="absolute inset-0 rounded-full blur-sm bg-blue-500/50 -z-10"></div>
            </div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 hidden sm:inline-block">
              NeuroFlo
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "text-primary bg-accent/50"
                  : "text-muted-foreground hover:text-primary hover:bg-accent/30"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <span className="text-sm text-muted-foreground mr-2 font-medium">
              (904) 497-1348
            </span>
            <ThemeToggle />
            <Button asChild className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-1"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container px-4 py-3">
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    pathname === item.href
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/30"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center pt-2 border-t border-border/50 mt-2">
                <span className="text-sm text-muted-foreground font-medium">
                  (904) 497-1348
                </span>
              </div>
              <Button asChild className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Request Demo</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}