'use client';

import { useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';

export default function Navigation() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center space-x-2'>
                        <Image
                            src='/logo.jpg'
                            alt='Pixee Logo'
                            width={40}
                            height={40}
                            className='rounded-lg'
                        />
                        <span className='text-2xl font-bold text-white'>Pixee</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <div className='relative'>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className='text-gray-300 hover:text-white transition-colors flex items-center space-x-1'
                            >
                                <span>Solutions & Use-cases</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className='absolute top-full mt-2 w-64 bg-slate-900 rounded-lg shadow-xl border border-slate-800 py-2'>
                                    <a href='#photographers' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Photographers
                                    </a>
                                    <a href='#weddings' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Weddings
                                    </a>
                                    <a href='#parties' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Parties & Celebrations
                                    </a>
                                    <a href='#corporates' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Corporates
                                    </a>
                                    <a href='#colleges' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Colleges
                                    </a>
                                    <a href='#events' className='block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800 transition-colors'>
                                        For Events
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href='/about' className='text-gray-300 hover:text-white transition-colors'>About Us</a>
                        <a href='mailto:anilkumarh999@gmail.com' className='text-gray-300 hover:text-white transition-colors'>Contact Us</a>

                        <a href='/#pricing' className='text-gray-300 hover:text-white transition-colors'>Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
