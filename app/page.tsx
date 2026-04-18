"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Book, GraduationCap, Microscope, Award, ArrowUpRight, Mail, MapPin, Globe, FileText } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-[#1a1a1a] min-h-screen selection:bg-[#C5A059] selection:text-white font-sans overflow-x-hidden">
      
      {/* Navigation - High-End & Minimalist */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-8 fixed w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-black/5">
        <span className="font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Prof. Farid Bourzgui</span>
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
          <a href="#about" className="hover:opacity-100 transition-all border-b border-transparent hover:border-[#C5A059]">Parcours</a>
          <a href="#research" className="hover:opacity-100 transition-all border-b border-transparent hover:border-[#C5A059]">Publications</a>
          <a href="#contact" className="hover:opacity-100 transition-all border-b border-transparent hover:border-[#C5A059]">Contact</a>
        </div>
      </nav>

      {/* Hero Section - The Professor's Portrait */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[10px] uppercase tracking-[0.3em] mb-8">
              Orthodontie & Orthopédie Dento-Faciale
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] mb-8 text-[#0D1B2A]">
              Farid <br />
              <span className="italic text-[#C5A059]">Bourzgui</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light italic">
              "Chef de service d'ODF au CCTD de Casablanca. Une vie dédiée à l'enseignement, la recherche et l'excellence clinique."
            </p>
            <div className="mt-10 flex gap-4">
               <a href="#research" className="bg-[#0D1B2A] text-white px-8 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-colors duration-500">
                 Consulter les travaux
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-black/5">
              <img 
                src="/1.jpg" // Sourtou li derti f public/1.jpeg
                alt="Pr. Farid Bourzgui"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 border-[15px] border-[#FAF9F6]/20 m-4 pointer-events-none" />
            </div>
            {/* Professional Label */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border-l-4 border-[#C5A059] hidden md:block">
               <p className="text-[10px] uppercase tracking-widest font-bold text-[#0D1B2A]">Faculté de Médecine Dentaire</p>
               <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tighter">Casablanca, Maroc</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section - Detailed Biography */}
      <section id="about" className="py-32 bg-white px-8 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-serif text-[#0D1B2A] sticky top-32">À propos du <br/>Professeur</h2>
            </div>
            <div className="md:col-span-8 space-y-10">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                Le **Pr. Farid Bourzgui** est un expert reconnu en **Orthopédie Dento-Faciale**. En plus de ses fonctions académiques à la Faculté de Médecine Dentaire, il dirige le service d'ODF au sein du Centre de Consultation et de Traitement Dentaire (CCTD).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#FAF9F6] border-t-2 border-[#C5A059]">
                  <GraduationCap className="mb-6 text-[#C5A059]" size={32} />
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">Académicien</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Engagement total dans la formation clinique des résidents et des étudiants en médecine dentaire.</p>
                </div>
                <div className="p-8 bg-[#FAF9F6] border-t-2 border-[#0D1B2A]">
                  <Microscope className="mb-6 text-[#0D1B2A]" size={32} />
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">Chercheur</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Contribution majeure à l'orthodontie moderne à travers plus de 150 publications scientifiques.</p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Son parcours est marqué par une quête incessante d'innovation. Il a contribué à l'implémentation de techniques de pointe au Maroc, tout en assurant un encadrement rigoureux des travaux de recherche (thèses et mémoires).
                </p>
                <p>
                  Membre actif de plusieurs sociétés savantes nationales et internationales, il participe régulièrement aux congrès mondiaux pour partager son expertise sur les malocclusions et les traitements interceptifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-[#0D1B2A] py-24 text-white px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { n: "25+", l: "Années d'Expérience" },
            { n: "150+", l: "Articles Indexés" },
            { n: "12", l: "Ouvrages Académiques" },
            { n: "CCTD", l: "Chef de Service" }
          ].map((stat, i) => (
            <div key={i}>
              <span className="block text-5xl md:text-6xl font-serif text-[#C5A059] mb-3">{stat.n}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">{stat.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Library Section (Books) */}
      <section id="research" className="py-32 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl font-serif mb-2 text-[#0D1B2A]">Bibliothèque d'Ouvrages</h2>
            <p className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">Scientific Publications & Books</p>
          </div>
          <a href="https://www.researchgate.net/profile/Farid-Bourzgui" target="_blank" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-[#C5A059] pb-2">
            Explorer ResearchGate <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "L'Orthodontie Clinique", desc: "Manuel de référence sur les protocoles thérapeutiques." },
            { title: "Céphalométrie Fondamentale", desc: "Analyse des structures cranio-faciales et croissance." },
            { title: "Pathologies Dentaires", desc: "Étude clinique et prise en charge multidisciplinaire." }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -15 }} className="group">
              <div className="aspect-[3/4] bg-[#E5E1DA] mb-8 relative flex items-center justify-center border border-black/5 shadow-inner">
                <FileText size={60} strokeWidth={0.5} className="text-[#0D1B2A]/10 group-hover:text-[#C5A059]/40 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 h-[1px] bg-black/10" />
                <div className="absolute top-6 right-6 text-[10px] font-mono text-black/20">ED. 2024</div>
              </div>
              <h3 className="text-2xl font-serif mb-3 text-[#0D1B2A]">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-32 bg-[#FAF9F6] border-t border-black/5 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full border border-[#C5A059] mb-8">
             <Mail size={24} className="text-[#C5A059]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0D1B2A] mb-8 italic">Restons en contact</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-16 font-light">
            Pour toute collaboration académique ou demande d'expertise, n'hésitez pas à nous contacter via les canaux officiels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-[#0D1B2A]">
            <div className="space-y-4">
               <p className="opacity-40">Email</p>
               <p>f.bourzgui@um5s.net.ma</p>
            </div>
            <div className="space-y-4">
               <p className="opacity-40">Localisation</p>
               <p>Faculté de Médecine Dentaire, Casa</p>
            </div>
            <div className="space-y-4">
               <p className="opacity-40">Institution</p>
               <p>Chef de Service ODF - CCTD</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-[9px] uppercase tracking-[0.6em] text-gray-400">
        © 2026 Pr. Farid Bourzgui — Conçu pour l'Excellence Académique
      </footer>

    </main>
  );
}