"use client";

import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';

export default function DentistPortfolio() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force visibility on mount
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

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* 🛑 CSS INJECTION BACH L-MOUSE T-BAN DRACE 🛑 */}
      <style jsx global>{`
        html, body, * {
          cursor: auto !important; /* Hadchi kiy-force l-mouse t-ban f kolchi */
        }
        a, button, .cursor-pointer {
          cursor: pointer !important; /* Hadchi kiy-khaliha t-welli id mli t-hoveri */
        }
        #ghost-ring {
          pointer-events: none !important; /* Bach l-circle may-bloquich l-clicks */
        }
      `}</style>

      {/* Custom Ring (Ghost Cursor) - It follows but NEVER hides the real mouse */}
      <div 
        id="ghost-ring"
        ref={cursorRef}
        className="fixed w-10 h-10 border border-white/20 rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden md:block mix-blend-difference"
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-8 md:px-12 flex justify-between items-start mix-blend-difference">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter leading-none uppercase">Pr. Farid Bourzgui</span>
          <span className="text-[9px] tracking-[0.3em] text-zinc-400 mt-2 font-bold">CHEF DE SERVICE ODF</span>
        </div>
        <div className="hidden md:flex gap-10 text-[9px] font-bold tracking-widest uppercase mt-2">
          <a href="#expertise" className="hover:line-through transition-all cursor-pointer">Expertise</a>
          <a href="#publications" className="hover:line-through transition-all cursor-pointer">Publications</a>
          <a href="#contact" className="hover:line-through transition-all cursor-pointer">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-12 gap-8 w-full items-start">
          <div className="md:col-span-8">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase mb-8">
              Orthodontie & Orthopédie Dento-Faciale
            </h2>
            <h1 className="text-6xl md:text-[130px] font-black leading-[0.85] tracking-tighter mb-12">
              L'EXCELLENCE<br />
              <span className="text-transparent outline-text italic">ACADÉMIQUE</span>
            </h1>
            
            <div className="max-w-xl border-l-2 border-white pl-8 py-4 mb-12">
              <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed italic italic">
                "Chef de service d'ODF au CCTD de Casablanca. Une vie dédiée à l'enseignement, la recherche et l'excellence clinique."
              </p>
            </div>

            <button className="bg-white text-black px-12 py-6 font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:bg-zinc-200 transition-all cursor-pointer">
              Prendre Consultation <ArrowRight size={18} />
            </button>
          </div>

          <div className="md:col-span-4 aspect-[3/4] bg-zinc-900 overflow-hidden grayscale border border-zinc-800">
              <img src="/1.jpg" alt="Pr. Farid Bourzgui" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 px-6 md:px-12 border-t border-zinc-900 bg-[#070707]">
        <div className="flex justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Publications</h2>
          <a href="https://www.amazon.ca/Books-Farid-Bourzgui/s?rh=n%3A916520%2Cp_27%3AFarid%2BBourzgui" target="_blank" className="text-[10px] font-bold tracking-widest uppercase border-b border-white pb-2 cursor-pointer">
            Amazon Library <ExternalLink size={12} className="inline ml-2"/>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Orthodontie Enfant/Adolescent", y: "2023" },
            { t: "Pratique Clinique ODF", y: "2021" },
            { t: "Croissance Crânio-Faciale", y: "2019" }
          ].map((book, i) => (
            <a key={i} href="https://www.amazon.ca/Books-Farid-Bourzgui/s?rh=n%3A916520%2Cp_27%3AFarid%2BBourzgui" target="_blank" className="group bg-zinc-900/40 p-10 border border-zinc-800 hover:border-white transition-all aspect-square flex flex-col justify-between cursor-pointer">
              <BookOpen className="text-zinc-600 group-hover:text-white" size={30} />
              <h3 className="text-2xl font-black uppercase leading-none">{book.t}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 md:px-12 bg-black border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">Contact</h2>
            <p className="text-xl font-bold text-zinc-400 italic">Casablanca, Maârif — +212 522 XX XX XX</p>
          </div>
          <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">© 2026 PR. FARID BOURZGUI</p>
        </div>
      </footer>

      <style jsx>{`
        .outline-text { -webkit-text-stroke: 1.5px white; }
        @media (max-width: 768px) { .outline-text { -webkit-text-stroke: 1px white; color: white; } }
      `}</style>
    </div>
  );
}