'use client';

import Link from 'next/link';
import SineWave from '@/components/fx/SineWave';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion';
import { Braces } from 'lucide-react';

const SectionOne: React.FC = () => {
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
                        <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
                            <Braces className="w-8 h-8 text-white" />
                            <div className="absolute inset-0 rounded-full blur-sm bg-blue-500/50 -z-10"></div>
                        </div>
                        <span className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
                            NeuroFlo
                        </span>
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
                        AI That Obeys Rules. Not Limits.
                    </h3>

                    <p className='mb-6 text-base text-white/90 dark:text-white/80 font-medium drop-shadow-md'>
                        NeuroFlo connects voice, video & automation — instantly, securely.
                    </p>

                    <div className='flex flex-wrap justify-center gap-6'>
                        <Link href='/about'>
                            <Button variant='default' className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white hover:from-blue-700 hover:to-cyan-700 backdrop-blur-sm border border-white/20 shadow-lg">
                                Learn More
                            </Button>
                        </Link>
                        <Link href='/contact'>
                            <Button variant='secondary' className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm shadow-lg">
                                Get Started
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