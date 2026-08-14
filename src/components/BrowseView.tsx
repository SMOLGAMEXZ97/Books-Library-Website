import React, { useState } from 'react';
import { Book, Collection, ActiveTab } from '../types';

interface BrowseViewProps {
  collections: Collection[];
  allBooks: Book[];
  onSelectBook: (bookId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BrowseView: React.FC<BrowseViewProps> = ({
  collections,
  allBooks,
  onSelectBook,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Fiction Focus', 'Non-Fiction', 'Award Winners', "Editors' Choice"];

  const filteredCollections = collections.filter((c) => {
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    const matchesQuery =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const filteredBooks = allBooks.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 md:pt-10 md:pl-64 pb-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4 border-b border-subtle pb-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">The Anthology Index</span>
          <h1 className="font-serif italic text-4xl sm:text-5xl text-[#E2E2E2] font-normal leading-tight">
            Curated Collections
          </h1>
          <p className="font-serif text-base text-[#E2E2E2]/70 leading-relaxed font-normal">
            A rigorous collection of analytical thought. Award-winning journalists and essayists dissect society, politics, and culture.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="space-y-6">
          <div className="relative max-w-xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#E2E2E2]/40 text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search collections, authors, genres..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#161616] border border-subtle font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
            />
          </div>

          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-sans text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#A68F68] text-[#0D0D0D] shadow-lg'
                    : 'bg-[#161616] text-[#E2E2E2]/70 hover:text-white border border-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Curated Collections Grid */}
        <div className="space-y-8">
          <div className="border-b border-subtle pb-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Featured Compendiums</span>
            <h2 className="font-serif italic text-2xl md:text-3xl text-[#E2E2E2]">
              Special Anthologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCollections.map((coll) => (
              <div
                key={coll.id}
                className="bg-[#161616] border border-subtle hover:border-[#A68F68]/60 transition-all duration-300 flex flex-col group overflow-hidden"
              >
                <div className="relative h-64 w-full overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={coll.image}
                    alt={coll.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-3 py-1 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] uppercase tracking-[0.2em] font-bold mb-2 inline-block">
                      {coll.category}
                    </span>
                    <h3 className="font-serif italic text-2xl text-[#E2E2E2]">
                      {coll.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="font-serif text-sm text-[#E2E2E2]/70 leading-relaxed font-normal">
                    {coll.description}
                  </p>

                  {/* Included Books Preview */}
                  <div className="pt-4 border-t border-subtle">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68] font-bold block mb-3">
                      Volumes in this Anthology
                    </span>
                    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                      {allBooks
                        .filter((b) => coll.bookIds.includes(b.id))
                        .map((book) => (
                          <div
                            key={book.id}
                            onClick={() => onSelectBook(book.id)}
                            className="flex items-center gap-3 bg-[#0D0D0D] px-3.5 py-2 border border-subtle cursor-pointer hover:border-[#A68F68] transition-colors flex-shrink-0"
                          >
                            <img
                              src={book.coverImage}
                              alt={book.title}
                              className="w-7 h-10 object-cover border border-subtle"
                            />
                            <div className="text-left">
                              <span className="font-serif italic text-xs text-[#E2E2E2] block truncate max-w-[120px]">
                                {book.title}
                              </span>
                              <span className="font-sans text-[9px] uppercase tracking-wider text-[#E2E2E2]/50 block truncate max-w-[120px]">
                                {book.author}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Books Search Results */}
        {searchQuery && (
          <div className="space-y-6 pt-8 border-t border-subtle">
            <h2 className="font-serif italic text-2xl text-[#E2E2E2]">
              Matching Archives ({filteredBooks.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => onSelectBook(book.id)}
                  className="bg-[#161616] border border-subtle hover:border-[#A68F68] transition-all cursor-pointer group"
                >
                  <div className="aspect-[2/3] w-full overflow-hidden bg-[#0D0D0D]">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif italic text-sm text-[#E2E2E2] truncate group-hover:text-[#A68F68] transition-colors">
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
        )}
      </div>
    </div>
  );
};

