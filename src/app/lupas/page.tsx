'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const categories = ['TODOS', 'ITA', 'ASH', 'NEW TECHNE', 'LOOK&COOL', 'AIR-X', 'HEADGEAR'];

export default function LupasPage() {
  const [activeCategory, setActiveCategory] = useState('ITA');

  return (
    <div className="bg-[#F4F0E4] text-dark min-h-screen font-condensed">
      <Header />

      {/* Hero Section */}
      <section className="text-white relative overflow-hidden h-[600px] flex items-center bg-[#1A4D2E]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/Dental/BackDental1.webp" 
            alt="Homem com Lupa" 
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
              <h1 className="text-6xl md:text-8xl font-serif text-white/90">LUPAS</h1>
            </div>
          </div>
        </div>


      </section>

      {/* Main Content Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* White Card Container */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors flex-1 text-center whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Content Area (Main Image) */}
            <div className="relative bg-black h-[500px] flex items-center justify-center">
              {/* Main Product Image Placeholder */}
              <div className="text-white text-center">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Visualização do Modelo</p>
                <h2 className="text-3xl font-bold uppercase">{activeCategory}</h2>
              </div>
              
              {/* Carousel Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <span className="sr-only">Anterior</span>
                &lt;
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <span className="sr-only">Próximo</span>
                &gt;
              </button>
            </div>

            {/* Details Row */}
            <div className="grid grid-cols-12 items-stretch border-t border-gray-200">
              
              {/* Vertical Title "DETALHES" */}
              <div className="col-span-1 flex items-center justify-center border-r border-gray-200 bg-gray-50">
                <span className="font-bold uppercase tracking-widest text-xs [writing-mode:vertical-lr] rotate-180 py-4 text-gray-600">
                  DETALHES
                </span>
              </div>

              {/* Thumbnails */}
              <div className="col-span-11 grid grid-cols-5 md:grid-cols-5 gap-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="aspect-square relative border-r last:border-r-0 border-gray-200 bg-gray-100 flex items-center justify-center group cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-xs text-gray-400 group-hover:text-primary transition-colors">Detalhe {i}</span>
                    {/* When images are available:
                    <Image src={`/images/Dental/Lupa_Detail_${i}.webp`} alt={`Detail ${i}`} fill className="object-cover" />
                    */}
                  </div>
                ))}
              </div>

            </div>

            {/* Action Bar (Saiba Mais) */}
            <div className="p-4 bg-gray-50 flex justify-end border-t border-gray-200">
              <Link href="/contato" className="bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-xs px-6 py-2 rounded transition-colors">
                SAIBA MAIS &gt;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Wood Background Section (Technologies) */}
      <section className="py-16 bg-[#5C4033] relative"> {/* Using dark brown to simulate wood */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#F4F0E4] rounded-3xl p-8 md:p-12 shadow-xl relative">
            
            {/* Arrow pointing up */}
            <div className="absolute top-0 left-12 -translate-y-full border-8 border-transparent border-b-[#F4F0E4]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Galileano */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">GALILEANO</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    Os novos sistemas de magnificação Galileano PRO HD oferecem alta qualidade óptica, amplo campo de visão e a melhor profundidade de campo, sem comprometer o conforto e mantendo a leveza. São particularmente intuitivos e extremamente versáteis.
                  </p>
                </div>
                <Link href="/magnificacoes" className="inline-flex items-center bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-xs px-4 py-2 rounded self-start transition-colors">
                  SAIBA MAIS &gt;
                </Link>
              </div>

              {/* Prismático */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">PRISMÁTICO</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    As lupas prismáticas XS ULTRA-HD são projetadas e fabricadas para permitir a mais elevada magnificação com a maior clareza e nitidez de imagem. Elas elevarão seu trabalho a outro patamar, graças ao seu excepcional desempenho.
                  </p>
                </div>
                <Link href="/magnificacoes" className="inline-flex items-center bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-xs px-4 py-2 rounded self-start transition-colors">
                  SAIBA MAIS &gt;
                </Link>
              </div>

              {/* Ergo */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">ERGO</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    Univet, sempre atenta à ergonomia e à qualidade óptica, desenvolveu a inovadora tecnologia Ergo Advanced, que melhora a condição de trabalho do profissional.
                  </p>
                </div>
                <Link href="/magnificacoes" className="inline-flex items-center bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-xs px-4 py-2 rounded self-start transition-colors">
                  SAIBA MAIS &gt;
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Magnification Details Section */}
      <section className="py-16 bg-[#E5E0D8]">
        <div className="container mx-auto px-4 max-w-6xl space-y-4">
          
          {/* Galileana */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/4 flex justify-center">
              <Image src="/images/Dental/lente_galileana.png" alt="Lente Galileana" width={200} height={250} className="object-contain mix-blend-multiply" />
            </div>
            <div className="w-full md:w-2/4">
              <h2 className="text-2xl md:text-3xl font-condensed font-bold text-[#1A4D2E] uppercase mb-4">MAGNIFICAÇÃO GALILEANA</h2>
              <p className="text-gray-600 mb-4 text-sm">Explore as variações de magnificação da linha Galileana PRO HD:</p>
              <div className="bg-[#E5E0D8] px-4 py-2 mb-6 text-sm text-gray-800">
                <span className="font-bold">CAMPO DE VISÃO</span> a uma distância de trabalho de 400 mm
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Os novos sistemas de magnificação Galileano PRO HD oferecem alta qualidade óptica, amplo campo de visão e a melhor profundidade de campo, sem comprometer o conforto e mantendo a leveza. São particularmente intuitivos e extremamente versáteis.
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <table className="w-full text-center text-sm">
                <thead>
                  <tr className="bg-[#E5E0D8] text-gray-800 text-xs">
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tl-lg">MAGNIFICAÇÃO</th>
                    <th className="py-3 px-2 font-bold w-1/3">CAMPO<br/>DE VISÃO<br/>[mm]</th>
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tr-lg">PROFUNDIDADE<br/>DE CAMPO<br/>[mm]</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">2.5x</td>
                    <td className="py-3">122</td>
                    <td className="py-3">135</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">3.0x</td>
                    <td className="py-3">82</td>
                    <td className="py-3">90</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">3.5x</td>
                    <td className="py-3">55</td>
                    <td className="py-3">73</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Prismática */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/4 flex justify-center">
              <Image src="/images/Dental/lente_prismatica.png" alt="Lente Prismática" width={200} height={250} className="object-contain mix-blend-multiply" />
            </div>
            <div className="w-full md:w-2/4">
              <h2 className="text-2xl md:text-3xl font-condensed font-bold text-[#1A4D2E] uppercase mb-4">MAGNIFICAÇÃO PRISMÁTICA</h2>
              <p className="text-gray-600 mb-4 text-sm">Explore as variações de magnificação da linha Prismática XS-Ultra HD:</p>
              <div className="bg-[#E5E0D8] px-4 py-2 mb-6 text-sm text-gray-800">
                <span className="font-bold">CAMPO DE VISÃO</span> a uma distância de trabalho de 400 mm
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                As lupas prismáticas XS ULTRA-HD são projetadas e fabricadas para permitir a mais elevada magnificação com a maior clareza e nitidez de imagem. Elas elevarão seu trabalho a outro patamar, graças ao seu excepcional desempenho.
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <table className="w-full text-center text-sm">
                <thead>
                  <tr className="bg-[#E5E0D8] text-gray-800 text-xs">
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tl-lg">MAGNIFICAÇÃO</th>
                    <th className="py-3 px-2 font-bold w-1/3">CAMPO<br/>DE VISÃO<br/>[mm]</th>
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tr-lg">PROFUNDIDADE<br/>DE CAMPO<br/>[mm]</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">3.5x</td>
                    <td className="py-3">85</td>
                    <td className="py-3">90</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">4.0x</td>
                    <td className="py-3">80</td>
                    <td className="py-3">85</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">5.0x</td>
                    <td className="py-3">65</td>
                    <td className="py-3">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ergo Advanced */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center relative">
            <div className="w-full md:w-1/4 flex justify-center">
              <Image src="/images/Dental/lente_ergo.png" alt="Lente Ergo Advanced" width={200} height={250} className="object-contain mix-blend-multiply" />
            </div>
            <div className="w-full md:w-2/4">
              <h2 className="text-2xl md:text-3xl font-condensed font-bold text-[#1A4D2E] uppercase mb-4">MAGNIFICAÇÃO ERGO ADVANCED</h2>
              <p className="text-gray-600 mb-4 text-sm">Explore as variações de magnificação da linha Ergo Advanced:</p>
              <div className="bg-[#E5E0D8] px-4 py-2 mb-6 text-sm text-gray-800">
                <span className="font-bold">CAMPO DE VISÃO</span> a uma distância de trabalho de 400 mm
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistema patenteado de lupas ópticas ultraleves, projetado para proporcionar ergonomia superior, maior brilho de imagem e um campo de visão mais amplo, permitindo uma postura natural e consciência ambiental contínua durante o uso.
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <table className="w-full text-center text-sm">
                <thead>
                  <tr className="bg-[#E5E0D8] text-gray-800 text-xs">
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tl-lg">MAGNIFICAÇÃO</th>
                    <th className="py-3 px-2 font-bold w-1/3">CAMPO<br/>DE VISÃO<br/>[mm]</th>
                    <th className="py-3 px-2 font-bold w-1/3 rounded-tr-lg">PROFUNDIDADE<br/>DE CAMPO<br/>[mm]</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">3.5x</td>
                    <td className="py-3">72</td>
                    <td className="py-3">75</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-bold">4.5x</td>
                    <td className="py-3">62</td>
                    <td className="py-3">45</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-bold">5.7x</td>
                    <td className="py-3">44</td>
                    <td className="py-3">22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Exclusive Frames Section */}
      <section className="relative min-h-[500px] flex items-center bg-[#2C2C2C]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Dental/armacoesExclusivas.png" 
            alt="Armações Exclusivas" 
            fill 
            className="object-cover object-left md:object-center"
          />
        </div>
        
        {/* Triangle Notch (pointing up) */}
        <div className="absolute top-0 left-12 -translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#2C2C2C]" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex justify-end">
            <div className="max-w-lg text-white text-right font-sans text-3xl md:text-4xl font-light leading-snug">
              <p>Armações exclusivas,</p>
              <p>desenvolvidas</p>
              <p>integralmente para o</p>
              <p>uso de lupas.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}