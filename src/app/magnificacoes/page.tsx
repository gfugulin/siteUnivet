'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function MagnificacoesPage() {
  return (
    <div className="bg-cream text-dark min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-serif mb-4">Sistemas de Magnificação</h1>
          <p className="text-cream/80 max-w-2xl mx-auto">Tabelas técnicas comparativas para ajudar você a escolher a melhor opção para sua prática.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          
          {/* Galileano */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
                <Image 
                  src="/images/lupas_product.png" 
                  alt="Sistema Galileano" 
                  fill 
                  className="object-contain p-6"
                />
              </div>
              <h2 className="text-2xl font-bold font-serif mt-6 mb-2">Sistema Galileano</h2>
              <p className="text-gray-600 text-sm">Ideal para iniciantes e procedimentos gerais. Leveza e amplo campo de visão.</p>
            </div>
            <div className="md:w-2/3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-white uppercase bg-primary">
                    <tr>
                      <th scope="col" className="px-6 py-3">Magnificação</th>
                      <th scope="col" className="px-6 py-3">Campo de Visão</th>
                      <th scope="col" className="px-6 py-3">Profundidade de Campo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-beige/20">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">2.0x</th>
                      <td className="px-6 py-4">120 mm</td>
                      <td className="px-6 py-4">150 mm</td>
                    </tr>
                    <tr className="bg-cream/50 border-b border-beige/20">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">2.5x</th>
                      <td className="px-6 py-4">100 mm</td>
                      <td className="px-6 py-4">120 mm</td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">3.0x</th>
                      <td className="px-6 py-4">80 mm</td>
                      <td className="px-6 py-4">100 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Prismático */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
                <Image 
                  src="/images/lupas_product.png" 
                  alt="Sistema Prismático" 
                  fill 
                  className="object-contain p-6"
                />
              </div>
              <h2 className="text-2xl font-bold font-serif mt-6 mb-2">Sistema Prismático</h2>
              <p className="text-gray-600 text-sm">Para especialistas que exigem alta resolução e detalhes minuciosos.</p>
            </div>
            <div className="md:w-2/3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-white uppercase bg-dark">
                    <tr>
                      <th scope="col" className="px-6 py-3">Magnificação</th>
                      <th scope="col" className="px-6 py-3">Campo de Visão</th>
                      <th scope="col" className="px-6 py-3">Profundidade de Campo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-beige/20">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">3.5x</th>
                      <td className="px-6 py-4">70 mm</td>
                      <td className="px-6 py-4">80 mm</td>
                    </tr>
                    <tr className="bg-cream/50 border-b border-beige/20">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">4.5x</th>
                      <td className="px-6 py-4">60 mm</td>
                      <td className="px-6 py-4">70 mm</td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 font-bold text-dark">6.0x</th>
                      <td className="px-6 py-4">50 mm</td>
                      <td className="px-6 py-4">50 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}