import React, { useState } from 'react';
import {
  ActiveTab,
  Book,
  Collection,
  UserProfile,
  ReaderSettings,
  Review,
  ReadingHistoryItem,
} from './types';
import {
  INITIAL_BOOKS,
  INITIAL_COLLECTIONS,
  INITIAL_USER,
  INITIAL_HISTORY,
} from './data/mockData';
import { TopNavbar, SidebarNav, MobileBottomNav } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { BookDetailView } from './components/BookDetailView';
import { MyLibraryView } from './components/MyLibraryView';
import { BrowseView } from './components/BrowseView';
import { WishlistView } from './components/WishlistView';
import { AccountSettingsView } from './components/AccountSettingsView';
import { ReaderView } from './components/ReaderView';
import { ReadingHistoryView } from './components/ReadingHistoryView';
import { AddBookModal } from './components/AddBookModal';
import { SearchModal } from './components/SearchModal';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [collections] = useState<Collection[]>(INITIAL_COLLECTIONS);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER);
  const [readingHistory, setReadingHistory] = useState<ReadingHistoryItem[]>(INITIAL_HISTORY);
  const [selectedBookId, setSelectedBookId] = useState<string>('arch-silence');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const [readerSettings, setReaderSettings] = useState<ReaderSettings>({
    fontFamily: 'serif',
    fontSize: 'base',
    theme: 'light',
    lineSpacing: 'normal',
  });

  const selectedBook = books.find((b) => b.id === selectedBookId) || books[0];

  const handleSelectBook = (bookId: string) => {
    setSelectedBookId(bookId);
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadBook = (bookId: string) => {
    setSelectedBookId(bookId);
    setActiveTab('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (bookId: string) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === bookId ? { ...b, isWishlist: !b.isWishlist } : b))
    );
  };

  const handleToggleBookshelf = (bookId: string) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === bookId ? { ...b, inBookshelf: !b.inBookshelf } : b))
    );
  };

  const handleAddReview = (bookId: string, review: Review) => {
    setBooks((prev) =>
      prev.map((b) =>
        b.id === bookId
          ? {
              ...b,
              reviewsCount: b.reviewsCount + 1,
              reviews: [review, ...(b.reviews || [])],
            }
          : b
      )
    );
  };

  const handleAddBook = (newBook: Book) => {
    setBooks((prev) => [newBook, ...prev]);
  };

  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdateReaderSettings = (settings: Partial<ReaderSettings>) => {
    setReaderSettings((prev) => ({ ...prev, ...settings }));
  };

  const handleUpdateProgress = (bookId: string, progress: number) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === bookId ? { ...b, progress } : b))
    );

    // Update or add history entry
    setReadingHistory((prev) => {
      const existingIndex = prev.findIndex((h) => h.bookId === bookId);
      const targetBook = books.find((b) => b.id === bookId);
      if (!targetBook) return prev;

      const newItem: ReadingHistoryItem = {
        id: 'h-' + Date.now(),
        bookId,
        bookTitle: targetBook.title,
        author: targetBook.author,
        coverImage: targetBook.coverImage,
        lastReadDate: 'Just now',
        progressPercent: progress,
        timeSpentMins: 15,
      };

      if (existingIndex >= 0) {
        const updatedHistory = [...prev];
        updatedHistory[existingIndex] = newItem;
        return updatedHistory;
      } else {
        return [newItem, ...prev];
      }
    });
  };

  // Determine navbar mode
  const isSidebarLayout = ['library', 'settings', 'history'].includes(activeTab);
  const isReaderView = activeTab === 'reader';

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E2E2E2] selection:bg-[#E2E2E2] selection:text-[#0D0D0D] antialiased relative font-serif">
      {/* Background Editorial Architectural Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute left-[6%] top-0 bottom-0 border-l border-subtle"></div>
        <div className="absolute left-[50%] top-0 bottom-0 border-l border-subtle"></div>
        <div className="absolute right-[6%] top-0 bottom-0 border-l border-subtle"></div>
        <div className="absolute top-[80px] left-0 right-0 border-t border-subtle"></div>
      </div>
      {/* Top Navbar for Home, Browse, Wishlist, Detail */}
      {!isSidebarLayout && !isReaderView && (
        <TopNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userProfile={userProfile}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          booksCount={books.filter((b) => b.inBookshelf).length}
        />
      )}

      {/* Sidebar Navigation for Library, Settings, History */}
      {isSidebarLayout && !isReaderView && (
        <SidebarNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userProfile={userProfile}
          onOpenSearch={() => setIsSearchModalOpen(true)}
          booksCount={books.filter((b) => b.inBookshelf).length}
        />
      )}

      {/* Mobile Bottom Navigation */}
      {!isReaderView && (
        <MobileBottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenSearch={() => setIsSearchModalOpen(true)}
        />
      )}

      {/* Main Content Router */}
      <main>
        {activeTab === 'home' && (
          <HomeView
            trendingBooks={books.filter((b) => b.isTrending)}
            collections={collections}
            onSelectBook={handleSelectBook}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'detail' && (
          <BookDetailView
            book={selectedBook}
            onReadNow={handleReadBook}
            onToggleWishlist={handleToggleWishlist}
            onToggleBookshelf={handleToggleBookshelf}
            onAddReview={handleAddReview}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'library' && (
          <MyLibraryView
            books={books}
            onSelectBook={handleSelectBook}
            onReadBook={handleReadBook}
            onOpenAddModal={() => setIsAddModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'browse' && (
          <BrowseView
            collections={collections}
            allBooks={books}
            onSelectBook={handleSelectBook}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'wishlist' && (
          <WishlistView
            books={books}
            onSelectBook={handleSelectBook}
            onReadBook={handleReadBook}
            onToggleWishlist={handleToggleWishlist}
            onToggleBookshelf={handleToggleBookshelf}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'settings' && (
          <AccountSettingsView
            userProfile={userProfile}
            onUpdateProfile={handleUpdateProfile}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'reader' && (
          <ReaderView
            book={selectedBook}
            readerSettings={readerSettings}
            onUpdateSettings={handleUpdateReaderSettings}
            onUpdateProgress={handleUpdateProgress}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'history' && (
          <ReadingHistoryView
            history={readingHistory}
            onReadBook={handleReadBook}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Modals */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={handleAddBook}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        books={books}
        onSelectBook={handleSelectBook}
      />
    </div>
  );
}

export default App;
