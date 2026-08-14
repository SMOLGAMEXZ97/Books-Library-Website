import React, { useState } from 'react';
import { Book } from '../types';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (newBook: Book) => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({
  isOpen,
  onClose,
  onAddBook,
}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState<Book['category']>('Fiction');
  const [pages, setPages] = useState(250);
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const defaultCover =
      coverImage.trim() ||
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800';

    const newBook: Book = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      author: author.trim(),
      coverImage: defaultCover,
      rating: 5.0,
      reviewsCount: 1,
      description: description.trim() || 'A newly added title in your personal Aura library.',
      category,
      pages,
      published: 'Recently',
      language: 'English',
      progress: 0,
      minsLeft: Math.round(pages * 0.6),
      inBookshelf: true,
      chapters: [
        {
          id: 'ch-custom-1',
          number: 1,
          title: 'Beginning',
          content: [
            description.trim() || 'Welcome to your custom added book.'
          ]
        }
      ]
    };

    onAddBook(newBook);
    onClose();
    setTitle('');
    setAuthor('');
    setCoverImage('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#161616] border border-subtle max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative text-[#E2E2E2]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#E2E2E2]/60 hover:text-[#A68F68] cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <h2 className="font-serif italic text-2xl text-[#E2E2E2]">
          Add Volume to Library
        </h2>

        <div>
          <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
            Book Title *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. The Sound and the Fury"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
          />
        </div>

        <div>
          <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
            Author Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. William Faulkner"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as Book['category'])}
              className="w-full px-3 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
            >
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Essays">Essays</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Design">Design</option>
              <option value="Science">Science</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
              Page Count
            </label>
            <input
              type="number"
              min={10}
              max={3000}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
            />
          </div>
        </div>

        <div>
          <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
            Cover Image URL (Optional)
          </label>
          <input
            type="url"
            placeholder="https://images.unsplash.com/..."
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
          />
        </div>

        <div>
          <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-1">
            Description / Notes
          </label>
          <textarea
            rows={3}
            placeholder="Brief summary or personal notes..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 border border-subtle text-[#E2E2E2] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#0D0D0D]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A]"
          >
            Add Volume
          </button>
        </div>
      </form>
    </div>
  );
};
