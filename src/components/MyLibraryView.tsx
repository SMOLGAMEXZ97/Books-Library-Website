import React, { useState } from 'react';
import { Book, ActiveTab } from '../types';

interface MyLibraryViewProps {
  books: Book[];
  onSelectBook: (bookId: string) => void;
  onReadBook: (bookId: string) => void;
  onOpenAddModal: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const MyLibraryView: React.FC<MyLibraryViewProps> = ({
  books,
  onSelectBook,
  onReadBook,
  onOpenAddModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const bookshelfBooks = books.filter((b) => b.inBookshelf);

  const currentlyReading = bookshelfBooks.find((b) => b.progress > 0 && b.progress < 100) || bookshelfBooks[0];

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Essays', 'Design', 'Philosophy'];

  const filteredBooks = bookshelfBooks.filter((book) => {
    const matchesCat = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 md:pt-10 md:pl-64 pb-24 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-subtle pb-6">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Personal Vault</span>
            <h1 className="font-serif italic text-3xl md:text-5xl text-[#E2E2E2] font-normal">
              My Library
            </h1>
            <p className="font-sans text-xs text-[#E2E2E2]/60 mt-1">
              {bookshelfBooks.length} volumes in your curated collection
            </p>
          </div>

          <button
            onClick={onOpenAddModal}
            className="self-start sm:self-auto bg-[#A68F68] text-[#0D0D0D] px-6 py-3 font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-all flex items-center gap-2 cursor-pointer active:scale-98 shadow-xl"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span>Catalog New Volume</span>
          </button>
        </div>

        {/* Continue Reading Feature Banner */}
        {currentlyReading && (
          <div className="bg-[#161616] border border-subtle p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between shadow-2xl relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left z-10 w-full md:w-auto">
              <img
                src={currentlyReading.coverImage}
                alt={currentlyReading.title}
                className="w-24 h-36 md:w-28 md:h-42 bg-[#0D0D0D] object-cover shadow-2xl border border-subtle flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => onSelectBook(currentlyReading.id)}
              />
              <div className="space-y-3">
                <span className="px-3 py-1 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] uppercase tracking-[0.2em] font-bold inline-block">
                  Active Reading Session
                </span>
                <h2 className="font-serif italic text-2xl md:text-3xl text-[#E2E2E2]">
                  {currentlyReading.title}
                </h2>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A68F68] font-bold">
                  By {currentlyReading.author}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-1 max-w-xs">
                  <div className="flex justify-between font-sans text-[10px] uppercase tracking-wider text-[#E2E2E2]/60">
                    <span>{currentlyReading.progress}% Reading Depth</span>
                    <span>{currentlyReading.minsLeft} mins left</span>
                  </div>
                  <div className="w-full bg-[#0D0D0D] h-1.5 border border-subtle overflow-hidden">
                    <div
                      className="bg-[#A68F68] h-full transition-all duration-500"
                      style={{ width: `${currentlyReading.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onReadBook(currentlyReading.id)}
              className="w-full md:w-auto bg-[#A68F68] text-[#0D0D0D] px-8 py-3.5 font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl"
            >
              <span className="material-symbols-outlined text-lg">play_arrow</span>
              <span>Resume Reading</span>
            </button>
          </div>
        )}

        {/* Bookshelf Controls */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A68F68] font-bold">Chronicle View</span>
              <h2 className="font-serif italic text-2xl text-[#E2E2E2]">
                Bookshelf Index
              </h2>
            </div>

            {/* Filter Search */}
            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#E2E2E2]/40 text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Search index..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#161616] border border-subtle font-serif text-xs text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-sans text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#A68F68] text-[#0D0D0D] shadow-lg'
                    : 'bg-[#161616] text-[#E2E2E2]/70 hover:text-white border border-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bookshelf Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group bg-[#161616] border border-subtle hover:border-[#A68F68]/60 transition-all duration-300 flex flex-col"
                >
                  <div
                    onClick={() => onSelectBook(book.id)}
                    className="aspect-[2/3] w-full overflow-hidden bg-[#0D0D0D] relative cursor-pointer"
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    {book.progress > 0 && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0D0D] to-transparent p-3">
                        <div className="w-full bg-white/20 h-1 overflow-hidden">
                          <div
                            className="bg-[#A68F68] h-full"
                            style={{ width: `${book.progress}%` }}
                          />
                        </div>
                        <span className="font-sans text-[9px] uppercase tracking-wider text-[#E2E2E2]/80 mt-1 block">
                          {book.progress}% read
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      <h3
                        onClick={() => onSelectBook(book.id)}
                        className="font-serif italic text-base text-[#E2E2E2] font-normal truncate hover:text-[#A68F68] transition-colors cursor-pointer"
                      >
                        {book.title}
                      </h3>
                      <p className="font-sans text-[10px] uppercase tracking-wider text-[#E2E2E2]/50 truncate mt-0.5">
                        {book.author}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-subtle">
                      <span className="font-sans text-[9px] uppercase tracking-widest text-[#A68F68]">
                        {book.category}
                      </span>
                      <button
                        onClick={() => onReadBook(book.id)}
                        className="text-[#E2E2E2]/70 hover:text-[#A68F68] p-1 transition-colors cursor-pointer"
                        title="Read now"
                      >
                        <span className="material-symbols-outlined text-base">chrome_reader_mode</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#161616] border border-subtle p-8">
              <span className="material-symbols-outlined text-4xl text-[#A68F68] mb-3">menu_book</span>
              <p className="font-serif italic text-xl text-[#E2E2E2]">No volumes recorded</p>
              <p className="font-sans text-xs text-[#E2E2E2]/60 mt-1">Select another category or catalog a new volume to your library.</p>
              <button
                onClick={onOpenAddModal}
                className="mt-6 px-6 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors"
              >
                Catalog First Book
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

