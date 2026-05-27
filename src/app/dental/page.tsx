'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
} from 'lucide-react';

const slides = [
  '/images/Dental/BackDental1.webp',
  '/images/Dental/BackDental2.webp'
];

export default function DentalHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-cream text-dark min-h-screen font-sans">
      <Header />

      {/* Hero Section Carousel */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Carousel Backgrounds */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={slides[currentSlide]} 
              alt="Dental Banner" 
              fill 
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 z-10 h-full flex flex-col justify-center relative pt-24">
          
          {/* Search Bar - Top Center */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="O que você está procurando?" 
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/80 rounded-full py-3 px-6 pl-12 outline-none focus:bg-white/30 transition-all font-light"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80" size={20} />
            </div>
          </div>

          {/* Left Aligned Content */}
          <div className="max-w-3xl mt-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold font-serif text-white mb-8 leading-tight uppercase"
            >
              TECNOLOGIA ITALIANA &<br/>FABRICAÇÃO BRASILEIRA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/configurador" className="inline-flex items-center space-x-3 border border-white text-white px-8 py-3 rounded-full font-sans text-sm font-semibold tracking-wider hover:bg-white hover:text-primary transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:stroke-primary transition-colors">
                  <path d="M4 7l8 10 8-10"/>
                </svg>
                <span>CONFIGURE SUA LUPA IDEAL</span>
              </Link>
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-12 right-12 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-condensed text-primary uppercase tracking-wider">NOSSOS PRODUTOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Lupas */}
            <Link href="/lupas" className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4] block shadow-lg">
              <Image 
                src="/images/Dental/NossosProdutosLupas.webp" 
                alt="Lupas" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-condensed text-white font-bold uppercase tracking-wider">LUPAS</h3>
              </div>
            </Link>

            {/* Fotóforos */}
            <Link href="/fotoforos" className="group relative rounded-2rem overflow-hidden aspect-[4/5] md:aspect-[3/4] block shadow-lg">
              <Image 
                src="/images/Dental/NossosProdutosFotóforos.webp" 
                alt="Fotóforos" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-condensed text-white font-bold uppercase tracking-wider">FOTÓFOROS</h3>
              </div>
            </Link>

            {/* Acessórios */}
            <Link href="/acessorios" className="group relative rounded-2rem overflow-hidden aspect-[4/5] md:aspect-[3/4] block shadow-lg">
              <Image 
                src="/images/Dental/NossosProdutosAcessorios.webp" 
                alt="Acessórios" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-condensed text-white font-bold uppercase tracking-wider">ACESSÓRIOS</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image 
          src="/images/Dental/SolucaoEspecialidades.webp" 
          alt="Soluções por Especialidade" 
          fill 
          className="object-cover object-right md:object-center"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent"> {/* Dark overlay on mobile for readability */}
          <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Content (Text) */}
            <div className="w-full md:w-[35%] text-white mt-10 md:mt-0 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 uppercase leading-tight">
                PARA CADA<br/>ESPECIALIDADE,<br/>UMA SOLUÇÃO
              </h2>
              <p className="text-sm md:text-base font-light mb-8 max-w-sm text-white/90">
                Cada especialidade exige um tipo diferente de precisão. Personalizamos as soluções ideais para o seu trabalho.
              </p>
              
              {/* Button with Univet V */}
              <Link href="/configurador" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-condensed font-bold uppercase tracking-wider rounded transition-colors group px-5 py-3">
                {/* Univet V Logo Placeholder (Stylized V) */}
                <svg className="w-8 h-4 text-white mr-3" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M2 5h12l6 10 6-10h12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm">CONFIGURE SUA LUPA IDEAL</span>
              </Link>
            </div>
            
            {/* Right Content (Labels for the 4 columns) */}
            <div className="hidden md:grid grid-cols-4 w-full md:w-[60%] h-full pb-8">
              <div className="flex justify-center items-end">
                <span className="text-white font-condensed font-bold uppercase tracking-wider text-xs lg:text-sm">ENDODONTIA</span>
              </div>
              <div className="flex justify-center items-end">
                <span className="text-white font-condensed font-bold uppercase tracking-wider text-xs lg:text-sm">IMPLANTODONTIA</span>
              </div>
              <div className="flex justify-center items-end">
                <span className="text-white font-condensed font-bold uppercase tracking-wider text-xs lg:text-sm">PERIODONTIA</span>
              </div>
              <div className="flex justify-center items-end">
                <span className="text-white font-condensed font-bold uppercase tracking-wider text-xs lg:text-sm">DENTÍSTICA</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Pillars Section (Excellence, Ergonomics, Vision) */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">EXCELLENCE & INNOVATION</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Com uma tradição em artesania italiana, a Univet continua a expandir os limites da tecnologia óptica, combinando engenharia de precisão com design inovador.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">ERGONOMICS & TECHNOLOGY</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ao integrar ergonomia avançada e tecnologias inteligentes, a Univet aprimora o conforto, a eficiência e o desempenho para profissionais das áreas médica, odontológica e setores especializados.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">A SHARED VISION</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Na Univet, visão não se trata apenas de enxergar — trata-se de expandir limites, transformar a maneira como os profissionais trabalham e entregar excelência óptica como nunca antes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Ergonomics Banner Section */}
      <section className="relative w-full h-[400px] bg-white overflow-hidden">
        <Image 
          src="/images/Dental/Ergonomics.webp" 
          alt="Ergonomia" 
          fill 
          className="object-contain object-center"
        />
        
        {/* Text Overlay in the center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-xs font-condensed font-bold text-primary uppercase tracking-wider mb-1">ERGONOMIA</span>
          <h3 className="text-xl md:text-2xl font-bold font-condensed text-black uppercase mb-3 max-w-md">INVISTA NO SEU MAIOR ATIVO: VOCÊ.</h3>
          <p className="text-gray-600 text-xs max-w-sm leading-relaxed">
            Eleve o nível da sua prática profissional com as lupas Univet. Ganhe precisão nos atendimentos, preserve sua ergonomia e garanta uma carreira livre de lesões.
          </p>
        </div>
      </section>

      {/* Technologies Section (Galileano, Prismático, Ergo) */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Galileano */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold font-condensed text-primary uppercase tracking-wider mb-4">GALILEANO</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Os novos sistemas de magnificação Galileano PRO HD oferecem alta qualidade óptica, amplo campo de visão e a melhor profundidade de campo, sem comprometer o conforto e mantendo a leveza. São particularmente intuitivos e extremamente versáteis.
                </p>
              </div>
              <Link href="/magnificacoes" className="inline-flex items-center bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-xs px-4 py-2 rounded self-start transition-colors">
                SAIBA MAIS <span className="ml-1">&gt;</span>
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
                SAIBA MAIS <span className="ml-1">&gt;</span>
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
                SAIBA MAIS <span className="ml-1">&gt;</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Side: Form */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-serif text-black mb-2">Agende uma Demonstração</h2>
                <p className="text-sm text-gray-600">Preencha o formulário e nossa equipe entrará em contato com você.</p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Nome</label>
                    <input type="text" placeholder="Digite seu nome" className="w-full p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Telefone</label>
                    <input type="text" placeholder="Digite seu telefone" className="w-full p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-3">
                    <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Cidade</label>
                    <input type="text" placeholder="Digite sua cidade" className="w-full p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">UF</label>
                    <input type="text" placeholder="UF" className="w-full p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase mb-1 block">Mensagem</label>
                  <textarea placeholder="Digite sua mensagem" rows={4} className="w-full p-3 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
                </div>
                
                <div className="text-center mt-6">
                  <button type="submit" className="bg-[#2A2A2A] hover:bg-black text-white font-condensed font-bold uppercase tracking-wider text-sm px-8 py-3 rounded-lg transition-colors w-full md:w-auto">
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Side: Image */}
            <div className="relative h-[400px] md:h-full">
              <Image 
                src="/images/Forms.webp" 
                alt="Equipe Univet" 
                fill 
                className="object-cover"
              />
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}