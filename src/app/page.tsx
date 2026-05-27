'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Background Image (Shared) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/InitBackground.webp" 
          alt="Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Top Center Logo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <Image src="/images/Univet_Main Logo_White.png" alt="Univet Logo" width={200} height={50} className="object-contain" />
      </div>

      {/* Medical Side (Left) */}
      <div className="relative flex-1 group cursor-pointer overflow-hidden z-10">
        {/* Overlay - Dark by default, lights up blue on hover */}
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-medical/40" />
        
        <div className="relative h-full flex flex-col items-center justify-end pb-32 text-white p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/medical" className="inline-block border-2 border-white/80 bg-black/20 backdrop-blur-sm text-white px-12 py-3 rounded-md font-semibold tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              MEDICAL
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Dental Side (Right) */}
      <div className="relative flex-1 group cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-white/10 z-10">
        {/* Overlay - Dark by default, lights up green on hover */}
        <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-primary/40" />
        
        <div className="relative h-full flex flex-col items-center justify-end pb-32 text-white p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Link href="/dental" className="inline-block border-2 border-white/80 bg-black/20 backdrop-blur-sm text-white px-12 py-3 rounded-md font-semibold tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              DENTAL
            </Link>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
      >
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
