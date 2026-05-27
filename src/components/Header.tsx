'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  theme?: 'dental' | 'medical' | 'default';
}

export default function Header({ theme = 'default' }: HeaderProps) {
  const pathname = usePathname();
  // Auto-detect theme if not explicitly provided
  const currentTheme = theme !== 'default' ? theme : (pathname?.startsWith('/medical') ? 'medical' : 'dental');

  const borderColorClass = currentTheme === 'medical' ? 'border-medical' : 'border-primary';
  const hoverColorClass = currentTheme === 'medical' ? 'hover:text-medical' : 'hover:text-primary';
  const bgColorClass = currentTheme === 'medical' ? 'bg-medical' : 'bg-primary';

  return (
    <header className={`fixed top-0 left-0 right-0 bg-cream z-50 border-b-4 ${borderColorClass} shadow-sm h-16`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/Univet_Main Logo_Black.png" alt="Univet Logo" width={140} height={35} className="object-contain" priority />
        </Link>
        <nav className="hidden md:flex space-x-12 text-lg font-condensed uppercase h-full items-stretch">
          <Link href="/lupas" className={`flex items-center px-4 transition-colors ${
            pathname === '/lupas' 
              ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
              : `${hoverColorClass} text-dark/80 hover:text-dark`
          }`}>LUPAS</Link>
          <Link href="/fotoforos" className={`flex items-center px-4 transition-colors ${
            pathname === '/fotoforos' 
              ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
              : `${hoverColorClass} text-dark/80 hover:text-dark`
          }`}>FOTÓFOROS</Link>
          <Link href="/magnificacoes" className={`flex items-center px-4 transition-colors ${
            pathname === '/magnificacoes' 
              ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
              : `${hoverColorClass} text-dark/80 hover:text-dark`
          }`}>MAGNIFICAÇÕES</Link>
          {currentTheme === 'dental' && (
            <Link href="/professores" className={`flex items-center px-4 transition-colors ${
              pathname === '/professores' 
                ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
                : `${hoverColorClass} text-dark/80 hover:text-dark`
            }`}>PROFESSORES</Link>
          )}
          <Link href="/quem-somos" className={`flex items-center px-4 transition-colors ${
            pathname === '/quem-somos' 
              ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
              : `${hoverColorClass} text-dark/80 hover:text-dark`
          }`}>QUEM SOMOS</Link>
          <Link href="/assistencia" className={`flex items-center px-4 transition-colors ${
            pathname === '/assistencia' 
              ? 'bg-[#1A4D2E] text-white rounded-t-lg font-bold border-b-4 border-[#1A4D2E]' 
              : `${hoverColorClass} text-dark/80 hover:text-dark`
          }`}>ASSISTÊNCIA</Link>
        </nav>
      </div>
    </header>
  );
}
