'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight } from 'lucide-react';

const professors = [
  { 
    id: 1, 
    name: 'Henrique Tabuse', 
    specialty: 'Cirurgião-Dentista | Especialista em Reabilitação Oral | Prótese e Estética', 
    description: 'Henrique Tabuse é cirurgião-dentista com sólida trajetória acadêmica e profissional, dedicando-se à reabilitação oral e à odontologia estética de alta performance. Sua atuação é pautada pelo equilíbrio entre a precisão técnica e a funcionalidade, buscando sempre restaurar não apenas o sorriso, mas a qualidade de vida e a autoconfiança de seus pacientes.',
    image: '/images/professor_portrait.png' 
  },
  { 
    id: 2, 
    name: 'Ronaldo Hirata', 
    specialty: 'Cirurgião-Dentista | Professor | Pesquisador e Especialista em Dentística Estética', 
    description: 'Reconhecido internacionalmente como um dos principais expoentes da odontologia contemporânea, o Dr. Hirata une a excelência clínica à investigação científica rigorosa. Sua atuação foca na estética dental e em procedimentos restauradores avançados, sendo um pioneiro no desenvolvimento de técnicas simplificadas para resinas compostas e na aplicação de conceitos de biomimética.',
    image: '/images/professor_portrait.png' 
  },
  { 
    id: 3, 
    name: 'Giovanna Borelli', 
    specialty: 'Cirurgião-Dentista | Professora | Especialista em Dentística e Estética Dental', 
    description: 'Giovanna Borelli é cirurgiã-dentista formada pela Universidade Paulista (UNIP), com atuação focada em dentística restauradora, estética dental e saúde bucal, unindo técnica, precisão e visão clínica integrada.',
    image: '/images/professor_portrait.png' 
  },
  { 
    id: 4, 
    name: 'José Garofalo', 
    specialty: 'Cirurgião-Dentista | Especialista em Reabilitação Oral e Estética', 
    description: 'José Garofalo é cirurgião-dentista com uma trajetória consolidada pela busca incessante da excelência clínica, dedicando-se integralmente à reabilitação oral e à odontologia estética de alto padrão.',
    image: '/images/professor_portrait.png' 
  },
];

export default function ProfessoresPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfessors = professors.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#C8C3B2] text-dark min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-white relative overflow-hidden h-[600px] flex items-center bg-[#1A4D2E]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/Dental/Professores.webp" 
            alt="Professores" 
            fill 
            className="object-cover object-right"
          />
          {/* Gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4D2E] via-[#1A4D2E]/50 to-transparent md:w-1/2" />
        </div>
 
        {/* Search Bar Floating */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-20">
          <div className="relative">
            <input 
              type="text" 
              placeholder="O que você está procurando?" 
              className="w-full bg-white/30 text-white placeholder-white/70 pl-12 pr-4 py-3 rounded-full focus:outline-none focus:bg-white/40 transition-colors"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-white/70" />
          </div>
        </div>
 
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          {/* Content */}
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              TECNOLOGIA ITALIANA &<br />FABRICAÇÃO BRASILEIRA
            </h2>
            
            <button className="inline-flex items-center bg-transparent border-2 border-white text-white font-condensed font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#1A4D2E] transition-colors">
              <Image 
                src="/images/Univet_Main Logo_White.png" 
                alt="Univet" 
                width={40} 
                height={15} 
                className="object-contain mr-2"
              />
              CONFIGURE SUA LUPA IDEAL
            </button>
            
            <div className="pt-10">
              <h1 className="text-6xl md:text-8xl font-serif text-white/90">PROFESSORES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Search & List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Search */}
          <div className="max-w-md mx-auto mb-16 relative">
            <input
              type="text"
              placeholder="Buscar por nome ou especialidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <Search className="absolute right-5 top-3.5 text-gray-400" size={18} />
          </div>

          {/* List */}
          <div className="space-y-20">
            {filteredProfessors.map(professor => (
              <div key={professor.id} className="flex flex-col md:flex-row gap-12 items-start">
                <div className="relative w-full md:w-1/3">
                  {/* Triangle Notch (pointing up) */}
                  <div className="absolute top-0 left-4 -translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#C8C3B2]" />
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <Image 
                      src={professor.image} 
                      alt={professor.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold font-condensed text-dark mb-1">{professor.name}</h3>
                  <p className="text-sm font-bold text-primary/80 uppercase tracking-wider mb-4">{professor.specialty}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{professor.description}</p>
                  <Link href={`/professores/${professor.id}`} className="text-sm font-semibold text-primary hover:text-dark transition-colors flex items-center">
                    Ver perfil completo <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProfessors.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Nenhum professor encontrado com esses critérios.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}