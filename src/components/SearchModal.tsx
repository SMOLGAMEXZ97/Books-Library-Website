import React, { useState } from 'react';
import { Book } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  books: Book[];
  onSelectBook: (bookId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  books,
  onSelectBook,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(query.toLowerCase()) ||
          b.author.toLowerCase().includes(query.toLowerCase()) ||
          b.category.toLowerCase().includes(query.toLowerCase()) ||
          b.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-[#161616] border border-subtle max-w-2xl w-full p-6 space-y-6 shadow-2xl relative overflow-hidden text-[#E2E2E2]">
        <div className="flex items-center gap-3 border-b border-subtle pb-4">
          <span className="material-symbols-outlined text-2xl text-[#A68F68]">search</span>
          <input
            type="text"
            autoFocus
            placeholder="Search by title, author, or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-serif italic text-lg text-[#E2E2E2] focus:outline-none placeholder-[#E2E2E2]/40"
          />
          <button
            onClick={onClose}
            className="text-[#E2E2E2]/60 hover:text-[#A68F68] p-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto space-y-3 pr-2 scrollbar-hide">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-[#E2E2E2]/50 font-serif italic text-sm">
              Type to search across the entire Books Library 97 catalog...
            </div>
          ) : results.length > 0 ? (
            results.map((book) => (
              <div
                key={book.id}
                onClick={() => {
                  onSelectBook(book.id);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 bg-[#0D0D0D] border border-subtle hover:border-[#A68F68] transition-all cursor-pointer group shadow-2xs"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-12 h-16 object-cover flex-shrink-0 border border-subtle"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif italic text-base text-[#E2E2E2] truncate group-hover:text-[#A68F68] transition-colors">
                    {book.title}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68F68] font-bold truncate mt-0.5">
                    By {book.author}
                  </p>
                  <span className="font-sans text-[9px] text-[#E2E2E2]/50 uppercase tracking-widest mt-0.5 block">
                    {book.category}
                  </span>
                </div>
                <span className="material-symbols-outlined text-xl text-[#A68F68] group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-[#E2E2E2]/50 font-serif italic text-sm">
              No matching volumes found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
