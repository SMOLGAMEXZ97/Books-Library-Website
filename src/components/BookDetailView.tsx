import React, { useState } from 'react';
import { Book, Review, ActiveTab } from '../types';

interface BookDetailViewProps {
  book: Book;
  onReadNow: (bookId: string) => void;
  onToggleWishlist: (bookId: string) => void;
  onToggleBookshelf: (bookId: string) => void;
  onAddReview: (bookId: string, review: Review) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BookDetailView: React.FC<BookDetailViewProps> = ({
  book,
  onReadNow,
  onToggleWishlist,
  onToggleBookshelf,
  onAddReview,
  setActiveTab,
}) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewText.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      author: reviewerName.trim(),
      initial: reviewerName.trim().charAt(0).toUpperCase(),
      rating: reviewRating,
      text: reviewText.trim()
    };

    onAddReview(book.id, newRev);
    setShowReviewForm(false);
    setReviewerName('');
    setReviewText('');
    setToastMessage('Review published to the chronicle.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 pb-20 px-6 md:px-16">
      <div className="max-w-[1240px] mx-auto">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-24 right-6 z-50 bg-[#A68F68] text-[#0D0D0D] px-6 py-3 border border-black/20 shadow-2xl font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-3 animate-bounce">
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Back Link */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 text-[#E2E2E2]/60 hover:text-[#A68F68] transition-colors font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          <span>Return to Overview</span>
        </button>

        {/* Main Book Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-16 items-start">
          {/* Cover Column */}
          <div className="md:col-span-4 w-full max-w-[340px] mx-auto md:mx-0">
            <div className="aspect-[2/3] w-full bg-[#161616] border border-subtle relative shadow-2xl overflow-hidden group">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-8 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] uppercase tracking-[0.2em] font-bold">
                  {book.category}
                </span>
                {book.isWishlist && (
                  <span className="px-3 py-1 bg-[#161616] text-[#A68F68] border border-[#A68F68]/40 font-sans text-[9px] uppercase tracking-[0.2em] font-bold">
                    Saved in Wishlist
                  </span>
                )}
              </div>
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#E2E2E2] font-normal leading-[0.95] mb-3">
                {book.title}
              </h1>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A68F68] font-bold">
                By {book.author}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 font-sans text-xs text-[#E2E2E2]/70">
              <div className="flex items-center text-[#A68F68]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-lg fill"
                  >
                    {star <= Math.floor(book.rating) ? 'star' : 'star_half'}
                  </span>
                ))}
              </div>
              <span className="font-bold text-[#E2E2E2]">{book.rating} / 5.0</span>
              <span className="text-[#E2E2E2]/40">({book.reviewsCount.toLocaleString()} reviews)</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onReadNow(book.id)}
                className="bg-[#A68F68] text-[#0D0D0D] px-8 py-3.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#BCA37A] transition-all flex items-center gap-2 cursor-pointer active:scale-98 shadow-xl"
              >
                <span className="material-symbols-outlined text-lg">chrome_reader_mode</span>
                <span>Open Reader</span>
              </button>

              <button
                onClick={() => {
                  onToggleWishlist(book.id);
                  setToastMessage(book.isWishlist ? 'Removed from Wishlist' : 'Saved to Wishlist');
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className={`px-6 py-3.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] border transition-all flex items-center gap-2 cursor-pointer active:scale-98 ${
                  book.isWishlist
                    ? 'bg-[#161616] text-[#A68F68] border-[#A68F68]'
                    : 'border-subtle text-[#E2E2E2] hover:border-white'
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {book.isWishlist ? 'bookmark_added' : 'bookmark'}
                </span>
                <span>{book.isWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={() => {
                  onToggleBookshelf(book.id);
                  setToastMessage(book.inBookshelf ? 'Removed from Library' : 'Added to Library');
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className={`px-6 py-3.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] border transition-all flex items-center gap-2 cursor-pointer active:scale-98 ${
                  book.inBookshelf
                    ? 'bg-[#161616] text-[#E2E2E2] border-subtle'
                    : 'border-subtle text-[#E2E2E2] hover:border-white'
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {book.inBookshelf ? 'check_box' : 'add_to_photos'}
                </span>
                <span>{book.inBookshelf ? 'In Library' : 'Add to Library'}</span>
              </button>
            </div>

            {/* Metadata Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-b border-subtle py-6">
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68] font-bold block mb-1">Genre</span>
                <span className="font-serif italic text-base text-[#E2E2E2]">{book.category}</span>
              </div>
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68] font-bold block mb-1">Volume</span>
                <span className="font-serif italic text-base text-[#E2E2E2]">{book.pages} Pages</span>
              </div>
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68] font-bold block mb-1">Published</span>
                <span className="font-serif italic text-base text-[#E2E2E2]">{book.published}</span>
              </div>
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A68F68] font-bold block mb-1">Prose Style</span>
                <span className="font-serif italic text-base text-[#E2E2E2]">{book.language}</span>
              </div>
            </div>

            {/* Synopsis */}
            <div className="space-y-3 pt-2">
              <h3 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Synopsis</h3>
              <p className="font-serif text-base text-[#E2E2E2]/80 leading-relaxed font-normal">
                {book.description}
              </p>
            </div>
          </div>
        </div>

        {/* Author Section */}
        {book.authorBio && (
          <section className="mb-16 bg-[#161616] border border-subtle p-8 sm:p-10 relative overflow-hidden">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold block mb-4">
              Author Biography
            </span>
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <img
                src={book.authorBio.image}
                alt={book.authorBio.name}
                className="w-24 h-24 rounded-full object-cover border border-[#A68F68]/40 shadow-xl flex-shrink-0"
              />
              <div className="space-y-3">
                <h3 className="font-serif italic text-2xl text-[#E2E2E2]">
                  {book.authorBio.name}
                </h3>
                <p className="font-serif text-sm text-[#E2E2E2]/70 leading-relaxed">
                  {book.authorBio.bio}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="space-y-8">
          <div className="flex justify-between items-center border-b border-subtle pb-4">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Critique</span>
              <h2 className="font-serif italic text-2xl md:text-3xl text-[#E2E2E2]">Reader Reviews</h2>
            </div>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer"
            >
              {showReviewForm ? 'Cancel' : 'Write a Critique'}
            </button>
          </div>

          {/* New Review Form */}
          {showReviewForm && (
            <form onSubmit={handleReviewSubmit} className="bg-[#161616] border border-subtle p-8 space-y-6">
              <h3 className="font-serif italic text-xl text-[#E2E2E2]">Submit Your Critique</h3>
              <div>
                <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                  Name / Pseudonym
                </label>
                <input
                  type="text"
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  required
                  className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
                />
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                  Rating Scale
                </label>
                <select
                  value={reviewRating}
                  onChange={(e) => setReviewRating(Number(e.target.value))}
                  className="px-4 py-3 border border-subtle bg-[#0D0D0D] font-sans text-xs text-[#E2E2E2]"
                >
                  <option value={5}>5 Stars - Essential Reading</option>
                  <option value={4}>4 Stars - High Resonance</option>
                  <option value={3}>3 Stars - Moderate Essay</option>
                  <option value={2}>2 Stars - Minor Flaws</option>
                  <option value={1}>1 Star - Needs Revision</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                  Critique Body
                </label>
                <textarea
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Record your thoughts on prose, cadence, and theme..."
                  required
                  className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer"
              >
                Publish Review
              </button>
            </form>
          )}

          {/* Existing Reviews List */}
          <div className="space-y-6">
            {book.reviews && book.reviews.length > 0 ? (
              book.reviews.map((rev) => (
                <div key={rev.id} className="p-6 bg-[#161616] border border-subtle space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#A68F68] text-[#0D0D0D] font-sans font-black flex items-center justify-center text-sm">
                        {rev.initial}
                      </div>
                      <div>
                        <h4 className="font-serif italic text-base text-[#E2E2E2]">{rev.author}</h4>
                        <div className="flex text-[#A68F68] text-xs">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-sm fill">star</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-serif text-sm text-[#E2E2E2]/80 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))
            ) : (
              <p className="font-serif text-sm text-[#E2E2E2]/50 italic">No critiques recorded yet for this volume.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

