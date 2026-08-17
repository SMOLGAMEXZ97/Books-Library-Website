import React, { useState } from 'react';
import { Book, Collection, ActiveTab } from '../types';

interface HomeViewProps {
  trendingBooks: Book[];
  collections: Collection[];
  onSelectBook: (bookId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  trendingBooks,
  collections,
  onSelectBook,
  setActiveTab,
}) => {
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#E2E2E2]">
      {/* Hero Section */}
      <section className="min-h-[820px] flex items-center justify-center px-6 md:px-16 pt-28 pb-16 relative overflow-hidden bg-[#0D0D0D]">
        <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-6 flex flex-col z-20">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A68F68] animate-pulse"></span>
              Books Library 97 • Anthology & Monograph
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] leading-[1.02] font-serif italic tracking-tight mb-6 text-[#E2E2E2] font-normal bg-[#000000] p-4 sm:p-6 border border-subtle">
              The Sanctuary <br />
              <span className="text-[#A68F68] not-italic font-sans font-black tracking-tight text-3xl sm:text-5xl lg:text-[62px] uppercase block my-1">
                Of Living Thoughts
              </span>
              <span className="font-serif italic text-3xl sm:text-4xl lg:text-[50px] text-[#E2E2E2]/90 block">
                Edition No. 97
              </span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#E2E2E2]/75 max-w-[460px] mb-8 font-light">
              Explore an expansive archive of timeless literature, critical essays, philosophy, and curated contemporary prose — preserved in a tranquil digital reading sanctuary.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onSelectBook('arch-silence')}
                className="bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] font-bold uppercase px-8 py-3.5 tracking-[0.2em] hover:bg-[#BCA37A] transition-all cursor-pointer shadow-2xl active:scale-98 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">auto_stories</span>
                <span>Open Featured Volume</span>
              </button>
              <button
                onClick={() => setActiveTab('browse')}
                className="border border-[#A68F68]/40 bg-[#161616] text-[#E2E2E2] font-sans text-[10px] font-bold uppercase px-8 py-3.5 tracking-[0.2em] hover:border-white hover:bg-[#222] transition-all cursor-pointer active:scale-98 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">explore</span>
                <span>Explore Catalog</span>
              </button>
              <span className="font-serif italic text-xs text-[#E2E2E2]/50 ml-2 hidden sm:inline">
                Vol. 97 Archive
              </span>
            </div>
          </div>

          <div className="md:col-span-6 relative h-[460px] md:h-[560px] flex justify-end">
            <div className="w-full md:w-[94%] h-full bg-[#161616] border border-[#A68F68]/30 relative group shadow-2xl overflow-hidden flex flex-col justify-between p-3 sm:p-4">
              {/* Full Crisp Artwork Showcase */}
              <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden border border-subtle bg-[#080808]">
                <div
                  className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-all duration-700 brightness-95 group-hover:brightness-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507842229456-655f269a8b14?auto=format&fit=crop&q=85&w=1600')",
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#A68F68]/40 px-3 py-1 text-[#A68F68] font-sans text-[9px] uppercase font-bold tracking-[0.2em] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs">local_library</span>
                  <span>Grand Reading Hall</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0D0D0D]/85 backdrop-blur-md border border-subtle px-3 py-1 font-mono text-[10px] text-[#E2E2E2]/80">
                  EST. 1997 • ARCHIVE 97
                </div>
              </div>

              {/* Bottom Showcase Dossier Strip */}
              <div className="pt-3 border-t border-subtle/80 flex items-center justify-between gap-4 text-[#E2E2E2]">
                <div className="min-w-0">
                  <span className="font-sans text-[9px] uppercase font-bold text-[#A68F68] tracking-[0.2em] block">
                    Curator's Choice
                  </span>
                  <p className="font-serif italic text-sm text-[#E2E2E2] truncate">
                    "The Architecture of Silence" by Eleanor Vance
                  </p>
                </div>
                <button
                  onClick={() => onSelectBook('arch-silence')}
                  className="px-4 py-2 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] uppercase font-bold tracking-widest hover:bg-[#BCA37A] transition-colors shrink-0 cursor-pointer"
                >
                  Inspect Volume
                </button>
              </div>
            </div>

            <div className="absolute left-0 top-1/3 vertical-text text-[#E2E2E2] opacity-5 text-[72px] font-sans font-black pointer-events-none hidden lg:block">
              BOOKS LIBRARY 97
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-20 px-6 md:px-16 bg-[#0D0D0D] border-t border-subtle">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex justify-between items-end mb-10 border-b border-subtle pb-4">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">
                Curated Selection
              </span>
              <h2 className="font-serif italic text-3xl md:text-4xl text-[#E2E2E2] font-normal mt-1">
                Trending Publications
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('browse')}
              className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#E2E2E2]/70 hover:text-[#A68F68] transition-colors cursor-pointer"
            >
              Index All →
            </button>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {trendingBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => onSelectBook(book.id)}
                className="min-w-[210px] md:min-w-[240px] max-w-[240px] snap-start flex flex-col gap-3 group cursor-pointer"
              >
                <div className="aspect-[2/3] w-full bg-[#161616] border border-subtle relative shadow-lg group-hover:border-[#A68F68]/60 transition-all duration-300 overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {book.isTrending && (
                    <div className="absolute top-3 left-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[8px] uppercase tracking-widest font-bold px-2 py-0.5">
                      Featured
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-serif italic text-base text-[#E2E2E2] font-normal truncate group-hover:text-[#A68F68] transition-colors">
                    {book.title}
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-[#E2E2E2]/50 truncate mt-0.5">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="py-20 px-6 md:px-16 bg-[#161616] border-t border-b border-subtle">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">
              Anthology Editions
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl text-[#E2E2E2] font-normal mt-1">
              Curated Collections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.slice(0, 3).map((coll) => (
              <div
                key={coll.id}
                onClick={() => setActiveTab('browse')}
                className="group cursor-pointer relative h-96 bg-[#0D0D0D] border border-subtle overflow-hidden shadow-xl hover:border-[#A68F68]/50 transition-all"
              >
                <div
                  className="bg-cover bg-center w-full h-full absolute inset-0 opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url('${coll.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#A68F68] font-bold block mb-2">
                    Volume {coll.id.toUpperCase()}
                  </span>
                  <h3 className="font-serif italic text-2xl text-[#E2E2E2] font-normal mb-2 group-hover:text-[#A68F68] transition-colors">
                    {coll.title}
                  </h3>
                  <p className="font-sans text-xs text-[#E2E2E2]/70 leading-relaxed">
                    {coll.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Intelligence Teaser */}
      <section className="py-24 px-6 md:px-16 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">
            Personalized Curation Engine
          </span>
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#E2E2E2]">
            A chronicle that <br />
            <span className="text-outline">understands</span> resonance.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#E2E2E2]/60 max-w-xl mx-auto leading-relaxed">
            Our editorial platform adapts to your reading rhythm, grouping literature by philosophical tone, prose nuance, and stylistic depth.
          </p>
          <div>
            <button
              onClick={() => setShowHowItWorksModal(true)}
              className="inline-flex items-center gap-3 bg-[#161616] border border-subtle hover:border-[#A68F68] text-[#E2E2E2] hover:text-[#A68F68] font-sans text-[10px] font-bold uppercase px-8 py-3.5 tracking-[0.2em] transition-all cursor-pointer"
            >
              <span>Examine The Architecture</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* How it works modal */}
      {showHowItWorksModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-subtle text-[#E2E2E2] max-w-lg w-full p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setShowHowItWorksModal(false)}
              className="absolute top-6 right-6 text-[#E2E2E2]/60 hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-3 border-b border-subtle pb-4">
              <span className="material-symbols-outlined text-3xl text-[#A68F68]">psychology</span>
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68]">Colophon</span>
                <h3 className="font-serif italic text-2xl font-normal text-[#E2E2E2]">How Books Library 97 Works</h3>
              </div>
            </div>
            <div className="space-y-4 font-sans text-xs text-[#E2E2E2]/70 leading-relaxed">
              <p>
                1. <strong className="text-white">Contextual Pacing:</strong> Tracks the rhythm of chapters and essays you savor, establishing your velocity.
              </p>
              <p>
                2. <strong className="text-white">Theme Vectoring:</strong> Groups monographs by philosophical nuance, stylistic prose, and thematic gravity.
              </p>
              <p>
                3. <strong className="text-white">Editorial Delivery:</strong> Receive weekly tailored reading lists free of intrusive notifications.
              </p>
            </div>
            <button
              onClick={() => setShowHowItWorksModal(false)}
              className="w-full py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer"
            >
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#080808] font-sans text-[10px] uppercase tracking-[0.2em] w-full py-16 border-t border-subtle flex flex-col items-center justify-center gap-6 px-6 mt-auto text-[#E2E2E2]/50">
        <div className="flex items-baseline gap-2">
          <span className="font-sans font-black text-xl tracking-tight text-[#E2E2E2]">BOOKS LIBRARY 97</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#A68F68]">Press</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[#E2E2E2]/60">
          <a href="#" className="hover:text-white transition-colors">Colophon</a>
          <a href="#" className="hover:text-white transition-colors">Privacy & Terms</a>
          <a href="#" className="hover:text-white transition-colors">Monographs</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-[9px] text-[#E2E2E2]/30 pt-2">
          © {new Date().getFullYear()} Arcane Editorial Media. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

