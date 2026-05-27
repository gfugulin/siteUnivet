'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight } from 'lucide-react';

const posts = [
  { id: 1, title: 'A Importância da Ergonomia na Odontologia Moderna', category: 'Ergonomia', date: '10 Mai, 2026', excerpt: 'Como a escolha correta da lupa pode prevenir lesões e aumentar a vida útil da sua carreira.', image: '/images/blog_post.png', featured: true },
  { id: 2, title: 'Como Escolher a Lupa Ideal para sua Especialidade', category: 'Guia', date: '08 Mai, 2026', excerpt: 'Entenda as diferenças entre sistemas Galileanos e Prismáticos e qual o melhor para você.', image: '/images/blog_post.png', featured: false },
  { id: 3, title: 'Tecnologia Prismática vs. Galileana: O que mudou?', category: 'Tecnologia', date: '05 Mai, 2026', excerpt: 'Uma análise profunda das inovações em ótica que estão mudando a prática clínica.', image: '/images/blog_post.png', featured: false },
  { id: 4, title: 'Iluminação Coaxial: Faz mesmo diferença?', category: 'Tecnologia', date: '01 Mai, 2026', excerpt: 'Descubra por que a luz alinhada ao seu eixo de visão é crucial para diagnósticos precisos.', image: '/images/blog_post.png', featured: false },
];

const categories = ['Todos', 'Ergonomia', 'Tecnologia', 'Guia'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredPosts = activeCategory === 'Todos' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <div className="bg-cream text-dark min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-serif mb-4">Blog Univet</h1>
          <p className="text-cream/80 max-w-2xl mx-auto">Conteúdo especializado sobre ergonomia, tecnologia ótica e inovação na saúde.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Categories */}
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

          {/* Featured Post */}
          {featuredPost && activeCategory === 'Todos' && (
            <div className="mb-16">
              <Link href={`/blog/${featuredPost.id}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-64 md:h-full bg-gray-100">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{featuredPost.category}</span>
                  <h2 className="text-3xl font-bold font-serif mt-2 mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-400">{featuredPost.date}</span>
                    <span className="text-sm font-semibold flex items-center">Ler artigo <ArrowRight size={16} className="ml-1" /></span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeCategory !== 'Todos' ? filteredPosts : regularPosts).map(post => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col h-64">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{post.category}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-sm font-semibold flex items-center">Ler mais <ArrowRight size={14} className="ml-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Nenhum artigo encontrado nesta categoria.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}