'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function MedicalHome() {
  return (
    <div className="bg-cream text-dark min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 bg-dark text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold font-serif mb-6 leading-tight"
            >
              Precisão Cirúrgica para a Medicina Moderna
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-cream/90 mb-8 max-w-lg"
            >
              Lupas e fotóforos italianos desenvolvidos para maximizar sua visão, postura e performance em procedimentos complexos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-4"
            >
              <Link href="/configurador" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors flex items-center">
                Configure sua lupa ideal <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/contato" className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Agendar Demonstração
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] bg-primary rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/medical_bg.png" 
                alt="Medical Background" 
                fill 
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/50 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-cream/20 text-8xl font-bold font-serif">
                UNIVET
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">Nossos Produtos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tecnologia italiana de ponta para todas as suas necessidades de magnificação.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lupas */}
            <Link href="/lupas" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                <Image 
                  src="/images/lupas_product.png" 
                  alt="Lupas" 
                  fill 
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">Lupas</h3>
                  <p className="text-gray-500 text-sm">Galileanas e Prismáticas</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Fotóforos */}
            <Link href="/fotoforos" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                <Image 
                  src="/images/fotoforos_product.png" 
                  alt="Fotóforos" 
                  fill 
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">Fotóforos</h3>
                  <p className="text-gray-500 text-sm">Iluminação LED potente</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Acessórios */}
            <Link href="/acessorios" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                <Image 
                  src="/images/acessorios_product.png" 
                  alt="Acessórios" 
                  fill 
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 bg-white flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">Acessórios</h3>
                  <p className="text-gray-500 text-sm">Estojos, filtros e baterias</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 pr-8">
            <h2 className="text-4xl font-bold font-serif mb-4">Soluções por Especialidade</h2>
            <p className="text-gray-600 mb-6">Equipamentos projetados para atender às exigências específicas de cada área cirúrgica.</p>
            <Link href="/contato" className="text-primary font-semibold flex items-center hover:underline">
              Consulte um especialista <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
            <div className="p-6 bg-cream rounded-xl">
              <h3 className="font-bold text-lg mb-2">Cirurgia Geral</h3>
              <p className="text-sm text-gray-600">Visualização ampla e iluminação consistente para procedimentos abdominais.</p>
            </div>
            <div className="p-6 bg-cream rounded-xl">
              <h3 className="font-bold text-lg mb-2">Neurocirurgia</h3>
              <p className="text-sm text-gray-600">Alta magnificação e foco preciso para micro-cirurgias.</p>
            </div>
            <div className="p-6 bg-cream rounded-xl">
              <h3 className="font-bold text-lg mb-2">Oftalmologia</h3>
              <p className="text-sm text-gray-600">Fidelidade de cores e profundidade de campo excepcionais.</p>
            </div>
            <div className="p-6 bg-cream rounded-xl">
              <h3 className="font-bold text-lg mb-2">Cirurgia Plástica</h3>
              <p className="text-sm text-gray-600">Precisão nos detalhes para refinamento estético e reconstrutivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}