'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: 'LED Headlight Pro', category: 'LED', image: '/images/fotoforos_product.png', line: 'Alta Potência' },
  { id: 2, name: 'Wireless LED', category: 'LED', image: '/images/fotoforos_product.png', line: 'Sem Fio' },
  { id: 3, name: 'Bateria Extra', category: 'Bateria', image: '/images/acessorios_product.png', line: 'Acessório' },
];

const categories = ['Todos', 'LED', 'Bateria'];

export default function FotoforosCatalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-cream text-dark min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Category Hero */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-serif mb-4">Fotóforos e Iluminação</h1>
          <p className="text-cream/80 max-w-2xl mx-auto">Sistemas de iluminação coaxial LED para máxima clareza visual e fidelidade de cores.</p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-dark hover:bg-beige/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{product.line}</span>
                  <h3 className="text-xl font-bold mt-1 mb-4">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <Link href={`/produtos/${product.id}`} className="text-sm font-semibold text-dark hover:text-primary transition-colors flex items-center">
                      Saiba mais <ArrowRight size={16} className="ml-1" />
                    </Link>
                    <span className="text-xs text-gray-400">Ref. F0{product.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Nenhum produto encontrado nesta categoria.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}