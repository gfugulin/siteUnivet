import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B2E18] text-white py-12 text-sm font-condensed">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Logo, Search, Address */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div>
              {/* Univet Logo */}
              <div className="mb-6">
                <Image src="/images/Univet_Main Logo_White.png" alt="Univet Logo" width={140} height={35} className="object-contain" />
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xs mb-6">
                <input 
                  type="text" 
                  placeholder="O que você está procurando?" 
                  className="w-full bg-[#051E0E] text-white placeholder-gray-500 pl-10 pr-4 py-2 rounded-full focus:outline-none text-xs border border-transparent focus:border-primary"
                />
                <Search size={14} className="absolute left-3 top-2.5 text-gray-500" />
              </div>
            </div>

            {/* Address */}
            <div className="text-xs text-gray-400 leading-relaxed mt-auto">
              <p>Rua Pasadena, 215 - Parque Industrial</p>
              <p>San José - 06715-864 - Cotia, SP - CNPJ</p>
            </div>
          </div>

          {/* Middle Columns: Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Links Col 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="font-bold uppercase mb-2 tracking-wider">LUPAS</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li><Link href="/lupas" className="hover:text-white">TTL</Link></li>
                  <li><Link href="/lupas" className="hover:text-white">FLIP-UP</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold uppercase mb-2 tracking-wider">FOTÓFOROS</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li><Link href="/fotoforos" className="hover:text-white">LYNX</Link></li>
                  <li><Link href="/fotoforos" className="hover:text-white">LYNX PRO</Link></li>
                  <li><Link href="/fotoforos" className="hover:text-white">WIRELESS</Link></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Link href="/blog" className="font-bold uppercase hover:text-white block tracking-wider">BLOG</Link>
                <Link href="/eventos" className="font-bold uppercase hover:text-white block tracking-wider">EVENTOS</Link>
              </div>
            </div>

            {/* Links Col 2 */}
            <div className="space-y-6">
              <div>
                <h4 className="font-bold uppercase mb-2 tracking-wider">MAGNIFICAÇÕES</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li><Link href="/magnificacoes" className="hover:text-white">GALILEANO</Link></li>
                  <li><Link href="/magnificacoes" className="hover:text-white">PRISMÁTICO</Link></li>
                  <li><Link href="/magnificacoes" className="hover:text-white">ERGO</Link></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <Link href="/professores" className="font-bold uppercase hover:text-white block tracking-wider">PROFESSORES</Link>
                <Link href="/quem-somos" className="font-bold uppercase hover:text-white block tracking-wider">QUEM SOMOS</Link>
              </div>
              
              <div>
                <h4 className="font-bold uppercase mb-2 tracking-wider">ASSISTÊNCIA TÉCNICA</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li><Link href="/downloads" className="hover:text-white">DOWNLOADS</Link></li>
                  <li><Link href="/garantia" className="hover:text-white">GARANTIA</Link></li>
                  <li><Link href="/contato" className="hover:text-white">CONTATO</Link></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: Newsletter & Social */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h4 className="font-bold mb-1 text-base tracking-wider">Junte-se à comunidade Univet</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Cadastre-se e seja o primeiro a saber sobre novos produtos, promoções e muito mais.
              </p>
              
              <div className="space-y-2 max-w-xs">
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className="w-full bg-[#051E0E] text-white placeholder-gray-500 px-4 py-2 rounded focus:outline-none text-xs border border-transparent focus:border-primary"
                />
                <button className="w-full bg-[#C2D6C4] hover:bg-white text-[#0B2E18] font-bold uppercase py-2 rounded flex items-center justify-center text-xs transition-colors">
                  Inscreva-se <span className="ml-2 bg-[#0B2E18] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">&gt;</span>
                </button>
              </div>
              
              <p className="text-[10px] text-gray-500 mt-2 leading-tight">
                Ao se inscrever, você concorda com os Termos de Uso e a Política de Privacidade.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="font-bold uppercase mb-2 text-xs tracking-wider">Siga-nos</h4>
              <div className="flex space-x-3">
                {/* WhatsApp */}
                <Link href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.172-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1.002-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.032c0 2.121.554 4.189 1.605 6.006L0 24l6.104-1.603a11.812 11.812 0 005.94 1.586h.005c6.634 0 12.031-5.396 12.035-12.032a11.77 11.77 0 00-3.528-8.497z"/>
                  </svg>
                </Link>
                {/* Instagram */}
                <Link href="https://www.instagram.com/univetloupesbrasil/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.341 3.608 1.316.975.975 1.254 2.242 1.316 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.341 2.633-1.316 3.608-.975.975-2.242 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.341-3.608-1.316-.975-.975-1.254-2.242-1.316-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.341-2.633 1.316-3.608.975-.975 2.242-1.254 3.608-1.316 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.428.066-2.673.375-3.687 1.389-1.014 1.014-1.323 2.259-1.389 3.687-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.428.375 2.673 1.389 3.687 1.014 1.014 2.259 1.323 3.687 1.389 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.428-.066 2.673-.375 3.687-1.389 1.014-1.014 1.323-2.259 1.389-3.687.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.428-.375-2.673-1.389-3.687-1.014-1.014-2.259-1.323-3.687-1.389-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c0 .796-.646 1.441-1.44 1.441-.795 0-1.44-.645-1.44-1.441 0-.795.645-1.44 1.44-1.44.794 0 1.44.645 1.44 1.44z"/>
                  </svg>
                </Link>
                {/* YouTube */}
                <Link href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                  </svg>
                </Link>
                {/* LinkedIn */}
                <Link href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.169c0-7.905-8.864-7.674-11.018-3.682v-2.149z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
