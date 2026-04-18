"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  GraduationCap, 
  Microscope, 
  Award, 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  ExternalLink, 
  FileText,
  ArrowRight,
  Globe
} from 'lucide-react';

export default function AcademicPortfolio() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force mouse visibility for accessibility
    document.body.style.cursor = 'auto';
    
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
          }
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const books = [
    { 
      year: "2024", 
      title: "L'Orthodontie de l'enfant", 
      desc: "Guide complet sur la croissance dento-faciale et les protocoles thérapeutiques.", 
      url: "https://www.amazon.ca/-/fr/FARID-BOURZGUI/dp/9999334849" 
    },
    { 
      year: "2023", 
      title: "Contemporary Orthodontics", 
      desc: "Issues and trends in modern clinical practice and digital orthodontics.", 
      url: "https://www.amazon.ca/-/fr/Issues-Contemporary-Orthodontics-Farid-Bourzgui/dp/9535121618" 
    },
    { 
      year: "2022", 
      title: "Basic Aspects & Clinical", 
      desc: "Fundamentals of orthodontic treatment planning and biological principles.", 
      url: "https://www.amazon.ca/-/fr/Orthodontics-Basic-Aspects-Clinical-Considerations/dp/9535101439" 
    }
  ];

  return (
    <main className="bg-[#FAF9F6] text-[#1a1a1a] min-h-screen selection:bg-[#C5A059] selection:text-white font-sans overflow-x-hidden">
      
      {/* 🛑 CUSTOM CSS FOR SERIF FONT 🛑 */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .font-serif { font-family: 'Times New Roman', serif; }
      `}</style>

      {/* Subtle Luxury Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 border border-[#C5A059]/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out hidden md:block"
      />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-8 fixed w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/5">
        <span className="font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs text-[#0D1B2A]">Prof. Farid Bourzgui</span>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
          <a href="#about" className="hover:opacity-100 hover:text-[#C5A059] transition-all">Parcours</a>
          <a href="#research" className="hover:opacity-100 hover:text-[#C5A059] transition-all">Publications</a>
          <a href="#contact" className="hover:opacity-100 hover:text-[#C5A059] transition-all">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">
              Orthodontie & Orthopédie Dento-Faciale
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] mb-8 text-[#0D1B2A]">
              Farid <br />
              <span className="italic text-[#C5A059]">Bourzgui</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light italic">
              "Une vie dédiée à l'enseignement, la recherche et l'excellence clinique."
            </p>
            <div className="mt-12 flex items-center gap-8">
               <a href="#research" className="bg-[#0D1B2A] text-white px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all duration-500 shadow-xl">
                 Consulter les travaux
               </a>
               <div className="hidden sm:block h-px w-20 bg-[#C5A059]/30" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border border-black/5">
              <img 
                src="/1.jpg" 
                alt="Pr. Farid Bourzgui"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-2xl border-l-4 border-[#C5A059] hidden md:block">
               <p className="text-[10px] uppercase tracking-widest font-black text-[#0D1B2A]">Directeur de Service</p>
               <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter font-bold">CCTD Casablanca</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-white px-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-5xl font-serif text-[#0D1B2A] sticky top-32 leading-tight uppercase tracking-tighter">Le Parcours</h2>
              <div className="mt-6 h-1 w-12 bg-[#C5A059]" />
            </div>
            <div className="md:col-span-8 space-y-12">
              <p className="text-2xl leading-relaxed text-gray-700 font-light">
                Le **Pr. Farid Bourzgui** est une figure emblématique de l'orthodontie. Son expertise s'étend de la recherche fondamentale à l'innovation clinique, marquant des générations de praticiens.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-[#FAF9F6] border-b-4 border-[#C5A059] hover:shadow-lg transition-all duration-500">
                  <GraduationCap className="mb-6 text-[#C5A059]" size={40} strokeWidth={1} />
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter">Formation Académique</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">Encadrement et formation continue à la Faculté de Médecine Dentaire de Casablanca.</p>
                </div>
                <div className="p-10 bg-[#FAF9F6] border-b-4 border-[#0D1B2A] hover:shadow-lg transition-all duration-500">
                  <Microscope className="mb-6 text-[#0D1B2A]" size={40} strokeWidth={1} />
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-tighter">Recherche Mondiale</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">Auteur de multiples ouvrages de référence et de plus de 150 articles indexés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#0D1B2A] py-32 text-white px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 text-center relative z-10">
          {[
            { n: "25+", l: "Années d'Expérience" },
            { n: "150+", l: "Articles Indexés" },
            { n: "12", l: "Livres Publiés" },
            
          ].map((stat, i) => (
            <div key={i}>
              <span className="block text-5xl md:text-7xl font-serif text-[#C5A059] mb-4">{stat.n}</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">{stat.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📚 LIBRARY SECTION (Fixed Books & Links) */}
      <section id="research" className="py-32 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-black block mb-4">Savoir & Transmission</span>
            <h2 className="text-6xl font-serif text-[#0D1B2A] leading-none italic uppercase">Ouvrages</h2>
          </div>
          <a href="https://www.amazon.ca/s?k=Farid+Bourzgui" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b-2 border-[#C5A059] pb-3 hover:text-[#C5A059] transition-all">
            Amazon Canada Library <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {books.map((book, i) => (
            <motion.a 
              key={i} 
              href={book.url} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -15 }} 
              className="group block"
            >
              <div className="aspect-[3/4] bg-[#F3F2EE] mb-10 relative flex items-center justify-center border border-black/5 hover:bg-[#E5E1DA] transition-colors shadow-sm group-hover:shadow-2xl overflow-hidden">
                <FileText size={80} strokeWidth={0.3} className="text-[#0D1B2A]/10 group-hover:text-[#C5A059]/40 transition-all duration-700" />
                <div className="absolute top-8 right-8 text-[9px] font-bold text-[#C5A059] tracking-widest uppercase">{book.year}</div>
                <div className="absolute bottom-6 right-6 bg-[#0D1B2A] text-white p-3 rounded-full translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <ExternalLink size={16} />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-[#0D1B2A] group-hover:text-[#C5A059] transition-colors uppercase tracking-tighter leading-tight">{book.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light italic">{book.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-40 bg-white border-t border-zinc-100 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Award size={40} className="mx-auto mb-10 text-[#C5A059]" strokeWidth={1} />
          <h2 className="text-5xl md:text-8xl font-serif text-[#0D1B2A] mb-12 italic tracking-tighter leading-none">
            Elite <br/> Academics
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-20 text-lg font-light leading-relaxed">
            Pour toute collaboration académique, recherche scientifique ou consultation clinique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Email Officiel</p>
               <p className="text-sm font-bold text-[#0D1B2A] hover:underline cursor-pointer">f.bourzgui@um5s.net.ma</p>
            </div>
            <div className="space-y-4">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Localisation</p>
               <p className="text-sm font-bold text-[#0D1B2A]">CCTD, Casablanca, Maârif</p>
            </div>
            <div className="space-y-4">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059]">Réseaux</p>
               <div className="flex justify-center gap-6">
                 <a href="#" className="text-sm font-bold text-[#0D1B2A] hover:text-[#C5A059]">LinkedIn</a>
                 <a href="https://www.researchgate.net/profile/Farid-Bourzgui" className="text-sm font-bold text-[#0D1B2A] hover:text-[#C5A059]">ResearchGate</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-[8px] uppercase tracking-[0.8em] text-gray-400 bg-white border-t border-zinc-50 font-bold">
        © 2026 PR. FARID BOURZGUI — DESIGNED FOR ACADEMIC EXCELLENCE
      </footer>

    </main>
  );
}
