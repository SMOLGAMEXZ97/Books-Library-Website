import React from 'react';
import { Book, ActiveTab } from '../types';

interface WishlistViewProps {
  books: Book[];
  onSelectBook: (bookId: string) => void;
  onReadBook: (bookId: string) => void;
  onToggleWishlist: (bookId: string) => void;
  onToggleBookshelf: (bookId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  books,
  onSelectBook,
  onReadBook,
  onToggleWishlist,
  onToggleBookshelf,
  setActiveTab,
}) => {
  const wishlistBooks = books.filter((b) => b.isWishlist);

  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 md:pt-10 md:pl-64 pb-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto space-y-8">
        <div className="border-b border-subtle pb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Prospectus</span>
          <h1 className="font-serif italic text-3xl md:text-5xl text-[#E2E2E2] font-normal">
            Wishlist & Reading Queue
          </h1>
          <p className="font-sans text-xs text-[#E2E2E2]/60 mt-1">
            {wishlistBooks.length} volumes reserved for upcoming contemplation
          </p>
        </div>

        {wishlistBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlistBooks.map((book) => (
              <div
                key={book.id}
                className="bg-[#161616] border border-subtle p-6 flex flex-col sm:flex-row gap-6 shadow-2xl hover:border-[#A68F68]/50 transition-all duration-300"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  onClick={() => onSelectBook(book.id)}
                  className="w-28 h-40 object-cover bg-[#0D0D0D] border border-subtle flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-500 mx-auto sm:mx-0"
                />

                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="px-2.5 py-0.5 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] font-bold uppercase tracking-[0.2em] mb-2 inline-block">
                      {book.category}
                    </span>
                    <h2
                      onClick={() => onSelectBook(book.id)}
                      className="font-serif italic text-xl text-[#E2E2E2] font-normal cursor-pointer hover:text-[#A68F68] transition-colors"
                    >
                      {book.title}
                    </h2>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68F68] font-bold mt-1">
                      By {book.author}
                    </p>
                    <p className="font-serif text-xs text-[#E2E2E2]/70 line-clamp-2 mt-2 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-subtle">
                    <button
                      onClick={() => onReadBook(book.id)}
                      className="px-4 py-2 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">chrome_reader_mode</span>
                      <span>Read</span>
                    </button>

                    <button
                      onClick={() => onToggleBookshelf(book.id)}
                      className="px-3.5 py-2 bg-[#0D0D0D] text-[#E2E2E2] border border-subtle font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:border-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">
                        {book.inBookshelf ? 'check_box' : 'library_add'}
                      </span>
                      <span>{book.inBookshelf ? 'In Library' : 'Add to Library'}</span>
                    </button>

                    <button
                      onClick={() => onToggleWishlist(book.id)}
                      className="p-2 text-[#E2E2E2]/50 hover:text-red-400 transition-colors cursor-pointer ml-auto"
                      title="Remove from wishlist"
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#161616] border border-subtle p-8 space-y-4">
            <span className="material-symbols-outlined text-5xl text-[#A68F68]">bookmark_border</span>
            <h2 className="font-serif italic text-2xl text-[#E2E2E2]">
              Your wishlist is currently unpopulated
            </h2>
            <p className="font-sans text-xs text-[#E2E2E2]/60 max-w-md mx-auto">
              Explore our curated collections and select books to assemble your private queue.
            </p>
            <button
              onClick={() => setActiveTab('browse')}
              className="px-6 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer"
            >
              Browse Collections
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

