'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ScrollExpandMedia from '@/components/scroll-expansion-hero';
import Navigation from '@/components/Navigation';
import { PricingSectionDemo } from '@/components/pricing-section-demo';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900'>
      <Navigation />
      <ScrollExpandMedia
        mediaType='image'
        mediaSrc='/main-image.jpg'
        bgImageSrc='/bg-wedding.jpg'
        title='Pixee'
        scrollToExpand='Scroll to Explore ↓'
      >
        {/* About Section */}
        <div className='max-w-6xl mx-auto space-y-16'>

          {/* New AI Photo Galleries Section */}
          <div className='mt-32 relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none'></div>
            <p className='relative text-sm text-blue-400 uppercase tracking-wider mb-4 font-semibold'>JOIN OUR COMMUNITY</p>
            <h2 className='relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6'>
              Create your own Photo Galleries
            </h2>
            <div className='relative w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full'></div>

            {/* Illustration Placeholder - using simple colored boxes to represent photo cards */}
            <div className='relative h-64 mb-12'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <svg className='w-full h-full opacity-20' viewBox='0 0 800 300' fill='none'>
                  <circle cx='400' cy='150' r='100' stroke='url(#gradient)' strokeWidth='1' />
                  <rect x='200' y='100' width='100' height='100' stroke='url(#gradient)' strokeWidth='1' />
                  <rect x='500' y='100' width='100' height='100' stroke='url(#gradient)' strokeWidth='1' />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='relative flex flex-wrap gap-4 justify-center items-center h-full'>
                <div className='bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 group'>
                  <Image src='/gallery-1.jpg' alt='Group photo' width={128} height={128} className='w-32 h-32 object-cover rounded-lg' />
                  <p className='text-xs mt-3 text-gray-400 group-hover:text-blue-300 transition-colors'>You uploaded 58 photos...</p>
                </div>
                <div className='bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 group'>
                  <Image src='/gallery-2.jpg' alt='Photographer' width={128} height={128} className='w-32 h-32 object-cover rounded-lg' />
                  <p className='text-xs mt-3 text-gray-400 group-hover:text-purple-300 transition-colors'>We've found new photos!</p>
                </div>
                <div className='bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:border-pink-500/50 group'>
                  <Image src='/gallery-3.jpg' alt='Wedding celebration' width={128} height={128} className='w-32 h-32 object-cover rounded-lg' />
                  <p className='text-xs mt-3 text-gray-400 group-hover:text-pink-300 transition-colors'>12 people joined...</p>
                </div>
                <div className='bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:border-orange-500/50 group'>
                  <Image src='/gallery-4.jpg' alt='Photo gallery' width={128} height={128} className='w-32 h-32 object-cover rounded-lg' />
                  <p className='text-xs mt-3 text-gray-400 group-hover:text-orange-300 transition-colors'>And created the...</p>
                </div>
              </div>
            </div>

            <p className='relative text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              You can create a group on the <span className="text-white font-semibold">Pixee app</span> for every occasion. Just dump all the photos, invite friends, and let <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-bold">AI do the magic!</span>
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className='mt-20 space-y-12 relative'>
          <div className='absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none'></div>
          <h2 className='relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-purple-200 text-center pb-2'>How It Works</h2>

          <div className='grid md:grid-cols-2 gap-8 mt-12 relative z-10'>
            <div className='bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-gray-800/40 transition-colors group'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300'>
                  1
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors'>Upload Photos</h4>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>Upload photos from your event or gathering to Pixee instantly.</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-gray-800/40 transition-colors group'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300'>
                  2
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors'>AI Detection</h4>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>Our advanced AI automatically detects and recognizes faces with high precision.</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-gray-800/40 transition-colors group'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-300'>
                  3
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors'>Tag Friends</h4>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>Tag people once, or strictly let AI suggest accurate matches from your contacts.</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-gray-800/40 transition-colors group'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-300'>
                  4
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors'>Instant Delivery</h4>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>Everyone gets notified and receives their photos in full original quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 relative overflow-hidden rounded-3xl p-12 text-center group'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black border border-white/10 rounded-3xl z-0'></div>
          {/* Animated glow effect */}
          <div className='absolute -inset-[50%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out'></div>

          <div className='relative z-10'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
              Ready to Transform Your Photo Sharing?
            </h2>
            <p className='text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light'>
              Join thousands of users who are already sharing memories the smart way with Pixee.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
              <button className='bg-white text-purple-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-900/20'>
                Download for iOS
              </button>
              <button className='bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
                Download for Android
              </button>
            </div>
          </div>
        </div>



        {/* Pricing Section */}
        <div id='pricing' className='mt-20'>
          <PricingSectionDemo />
        </div>

        {/* Footer */}
        <div className='mt-20 pt-12 border-t border-white/10 text-center text-gray-400'>
          <p className='text-lg'>
            &copy; 2025 Pixee. All rights reserved. Made with ❤️ by ANIL.
          </p>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
