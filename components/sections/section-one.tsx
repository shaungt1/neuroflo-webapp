'use client';

import Link from 'next/link';
import SineWave from '@/components/fx/SineWave';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Braces } from 'lucide-react';

const SectionOne: React.FC = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <section className='h-screen w-full overflow-hidden bg-background text-foreground relative'>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="w-16 h-16" /> {/* Placeholder for logo */}
                </div>
            </section>
        );
    }

    return (
        <section className='h-screen w-full overflow-hidden bg-background text-foreground relative'>
            {/* Multi-layered Distorted Blue Light */}
            <div className='pointer-events-none absolute -left-[500px] top-0 z-0 h-[80vh] w-[80vh] rounded-[40%] bg-blue-800 opacity-20 blur-[140px]' />
            <div className='top-50 pointer-events-none absolute -left-[350px] z-0 h-[90vh] w-[60vh] rounded-[80%] bg-cyan-600 opacity-10 blur-[100px]' />
            <div className='pointer-events-none absolute -left-[650px] top-40 z-0 h-[70vh] w-[70vh] rounded-[50%] bg-blue-700 opacity-25 blur-[60px]' />

            {/* BACKGROUND - BentoDemo */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className='inset-0 z-0 flex items-center justify-center'>
                <div className='relative h-full w-full'>
                    <div className='pointer-events-none absolute inset-1 -left-[-1080px] top-0 h-screen rotate-[0deg] transform dark:-left-[-1080px] dark:top-40 dark:rotate-[-1deg]'>
                        <div className='h-full w-full opacity-[0.3] transition-opacity duration-500 hover:opacity-[0.6] dark:opacity-[0.055]'>
                        
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Centered Content - ABOVE the waves */}
            <div className='flex h-full w-full flex-col items-center justify-center px-4 text-center relative z-20'>
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='mb-8 sm:mb-10 md:mb-12 relative z-30'>
                    <div className="flex items-center space-x-4">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={resolvedTheme === 'dark' ? '/logo/neuroflow-xl.png' : '/logo/neroflow-logo-dark-lg.png'}
                                alt="NeuroFlo Logo"
                                width={64}
                                height={64}
                                className="w-1/2 h-full object-contain"
                                priority
                            />
                        </div>
                    
                    </div>
                </motion.div>

                {/* GLASSMORPHIC CTA Card - TRANSPARENT so waves show through */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='group relative z-30 w-full max-w-2xl overflow-visible rounded-2xl border border-white/20 bg-white/5 p-8 px-10 py-10 shadow-2xl backdrop-blur-sm transition duration-300 hover:backdrop-blur-md hover:bg-white/10 dark:border-white/10 dark:bg-black/5 hover:dark:bg-black/10'>
                    
                    {/* Subtle glow effect on hover */}
                    <div className='pointer-events-none absolute inset-0 -z-10 flex items-center justify-center'>
                        <div className='bg-gradient-radial h-[100%] w-[100%] rounded-full from-blue-500/10 via-blue-400/5 to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-40' />
                    </div>

                    {/* Content with enhanced readability */}
                    <h3 className='mb-4 bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent drop-shadow-lg'>
                   Operate With Intelligence in Healthcare & Government!
                    </h3>

                    {/* <p className='mb-6 text-base text-white/90 dark:text-white/80 font-medium drop-shadow-md'>
                        NeuroFlo connects voice, video & automation — instantly, securely. Come discover how NeuroFlo’s agent-based AI platform transforms video, voice, text, sensor, and edge data into structured, auditable intelligence—built for the speed, precision, and compliance demands of critical infrastructure.
                    </p> */}
                    <p className='mb-6 text-base text-white/90 dark:text-white/80 font-medium drop-shadow-md'>
                     NeuroFlo connects agentic AI across voice, video, and text to extract clinical insights for providers, generate clean claims for medical billing, and automate AI-based reporting,unifying documentation, coding, insights, and workflow automation all in one platform! Providers document once; scribe and coding agents infer CPT, ICD-10, and HCPCS with 98%+ accuracy, show sentence-level evidence, validate payer rules, and sync to major EHRs like Oracle Cerner. All of this runs on a unified HIPAA and SOC 2 compliant foundation with full audit trails and role-based access.
                    </p>
                   
                    <div className='flex flex-wrap justify-center gap-6'>
                        <Link href='/about'>
                            <Button variant='default' className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white hover:from-blue-700 hover:to-cyan-700 backdrop-blur-sm border border-white/20 shadow-lg">
                                Learn More
                            </Button>
                        </Link>
                        <Link href='/contact'>
                            <Button variant='secondary' className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm shadow-lg">
                                Request a Demo
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                    {/* Sine Wave Behind the Card */}
                <div className='absolute left-0 right-0 top-[70%] z-10'>
                    <SineWave
                        height={300}
                        className='w-full overflow-hidden'
                        colorStops={['rgba(0, 80, 160, 0)', 'rgba(0, 120, 255, 0.8)', 'rgba(0, 100, 220, 0)']}
                        glow={true}
                        glowColor='rgba(0, 200, 255, 0.4)'
                        glowBlur={30}
                        audioReactive={false}
                        speedMultiplier={1.3} // Speed boost, 1–10 recommended
                        animateGradient={false}
                        jitter={true}
                        jitterIntensity={2} // 1 (low shimmer) to 10 (chaotic)
                        amplitudeSensitivity={1.5}
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;

export { SectionOne }