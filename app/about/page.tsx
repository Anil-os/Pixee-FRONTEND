'use client';

import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function AboutUs() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900'>
            <Navigation />

            {/* Hero Section */}
            <div className='relative h-[500px] flex items-center justify-center overflow-hidden'>
                {/* Background Image Overlay */}
                <div className='absolute inset-0 bg-black/50 z-10'></div>
                <Image
                    src='/bg-wedding.jpg'
                    alt='Celebration background'
                    fill
                    className='object-cover'
                    priority
                />

                {/* Hero Content */}
                <div className='relative z-20 text-center text-white px-4'>
                    <h1 className='text-5xl md:text-6xl font-bold mb-4'>We Deliver Memories</h1>
                    <p className='text-xl md:text-2xl text-gray-200'>
                        A photo sharing platform that allows you to seamlessly<br />
                        upload, share and store photos seamlessly
                    </p>
                </div>
            </div>

            {/* Mission, Vision, Value, Culture Grid */}
            <div className='bg-slate-950/50 relative py-20'>
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 pointer-events-none'></div>
                <div className='max-w-6xl mx-auto px-6 relative z-10'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Our Mission */}
                        <div className='bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex items-start space-x-6 hover:bg-gray-800/60 transition-colors group'>
                            <div className='w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform'>
                                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M13 2L3 14h8l-2 8 10-12h-8l2-8z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors'>Our Mission</h3>
                                <p className='text-gray-400 leading-relaxed font-light'>
                                    To build an ecosystem that brings out the photographer and socialite inside every human
                                </p>
                            </div>
                        </div>

                        {/* Our Vision */}
                        <div className='bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex items-start space-x-6 hover:bg-gray-800/60 transition-colors group'>
                            <div className='w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/10 group-hover:scale-105 transition-transform'>
                                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors'>Our Vision</h3>
                                <p className='text-gray-400 leading-relaxed font-light'>
                                    To globally revolutionize photo-sharing using AI
                                </p>
                            </div>
                        </div>

                        {/* Our Value */}
                        <div className='bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex items-start space-x-6 hover:bg-gray-800/60 transition-colors group'>
                            <div className='w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-transform'>
                                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M23.5 17c0 3.59-4.46 6.5-10 6.5-.83 0-1.65-.06-2.44-.18l-3.8 1.68c-.46.2-.98-.2-.84-.7l.87-3.12C4.35 19.64 2.5 17.76 2.5 15.5c0-3.59 4.46-6.5 10-6.5s10 2.91 10 6.5c0 .58-.1 1.14-.29 1.67l3.8-1.68c.46-.2.98.2.84.7l-.87 3.12c.24-.56.37-1.17.37-1.81z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors'>Our Value</h3>
                                <p className='text-gray-400 leading-relaxed font-light'>
                                    A community that values quality & convenience
                                </p>
                            </div>
                        </div>

                        {/* Our Culture */}
                        <div className='bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex items-start space-x-6 hover:bg-gray-800/60 transition-colors group'>
                            <div className='w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform'>
                                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' />
                                </svg>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors'>Our Culture</h3>
                                <p className='text-gray-400 leading-relaxed font-light'>
                                    Innovative, Fun & Progressive
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Pixee Section */}
            <div className='bg-gray-950 py-20 border-t border-white/5'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        {/* Device Mockups - Placeholder */}
                        <div className='relative group'>
                            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                            <div className='relative bg-gray-900 rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-white/10 overflow-hidden'>
                                <Image
                                    src='/pixee-logo.jpg'
                                    alt='Pixee Logo'
                                    width={400}
                                    height={200}
                                    className='object-contain w-full h-auto max-h-[300px]'
                                />
                            </div>
                        </div>

                        {/* About Content */}
                        <div>
                            <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4'>About Pixee</h2>
                            <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 rounded-full'></div>
                            <p className='text-lg text-gray-300 leading-relaxed font-light'>
                                Pixee is a community driven AI photo sharing platform. You can create a group on the Pixee App for every occasion.
                                Just dump all the photos, and it will intelligently share pictures with friends and family
                                in high quality without messing up your gallery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 py-12 text-center text-gray-400'>
                <p className='text-lg'>
                    &copy; 2024 Pixee. All rights reserved. Made with ❤️ for photo lovers everywhere.
                </p>
            </div>
        </div>
    );
}
