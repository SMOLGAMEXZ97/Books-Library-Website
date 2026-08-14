import React from 'react';
import { ActiveTab, UserProfile } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userProfile: UserProfile;
  onOpenSearch: () => void;
  booksCount: number;
}

export const TopNavbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  onOpenSearch,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-subtle flex justify-between items-center px-6 md:px-12 h-20 transition-colors">
      <div className="flex items-center gap-8">
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-baseline gap-2.5 cursor-pointer text-left group"
        >
          <span className="font-sans font-black text-xl tracking-tight text-[#E2E2E2]">BOOKS LIBRARY 97</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Edition</span>
        </button>
        <nav className="hidden md:flex gap-8 items-center pt-0.5">
          <button
            onClick={() => setActiveTab('library')}
            className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer py-1 ${
              activeTab === 'library'
                ? 'text-[#A68F68] font-bold border-b border-[#A68F68]'
                : 'text-[#E2E2E2]/70 hover:text-[#E2E2E2] border-b border-transparent hover:border-white/30'
            }`}
          >
            Library
          </button>
          <button
            onClick={() => setActiveTab('browse')}
            className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer py-1 ${
              activeTab === 'browse'
                ? 'text-[#A68F68] font-bold border-b border-[#A68F68]'
                : 'text-[#E2E2E2]/70 hover:text-[#E2E2E2] border-b border-transparent hover:border-white/30'
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-all cursor-pointer py-1 ${
              activeTab === 'wishlist'
                ? 'text-[#A68F68] font-bold border-b border-[#A68F68]'
                : 'text-[#E2E2E2]/70 hover:text-[#E2E2E2] border-b border-transparent hover:border-white/30'
            }`}
          >
            Wishlist
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="text-[#E2E2E2]/80 hover:text-[#E2E2E2] hover:bg-white/5 transition-all p-2 rounded-full cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">search</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          aria-label="Notifications"
          className="text-[#E2E2E2]/80 hover:text-[#E2E2E2] hover:bg-white/5 transition-all p-2 rounded-full hidden md:block cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">notifications</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          aria-label="Settings"
          className="text-[#E2E2E2]/80 hover:text-[#E2E2E2] hover:bg-white/5 transition-all p-2 rounded-full hidden md:block cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">settings</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className="w-9 h-9 rounded-full overflow-hidden border border-[#A68F68]/40 active:scale-95 transition-transform cursor-pointer"
        >
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export const SidebarNav: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  booksCount,
}) => {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 py-8 px-6 bg-[#161616] border-r border-subtle z-40">
      <div className="mb-8">
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-baseline gap-2 cursor-pointer text-left mb-1"
        >
          <span className="font-sans font-black text-lg tracking-tight text-[#E2E2E2]">BOOKS LIBRARY 97</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#A68F68]">Edition</span>
        </button>
        <p className="font-sans text-[10px] uppercase tracking-wider text-[#E2E2E2]/50">
          {booksCount} books in library
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        <button
          onClick={() => setActiveTab('home')}
          className={`w-full flex items-center gap-3.5 p-3 rounded font-sans text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-[#A68F68] text-[#0D0D0D] font-bold shadow-lg'
              : 'text-[#E2E2E2]/70 hover:bg-white/5 hover:text-[#E2E2E2]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">home</span>
          Overview
        </button>

        <button
          onClick={() => setActiveTab('library')}
          className={`w-full flex items-center gap-3.5 p-3 rounded font-sans text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer ${
            activeTab === 'library'
              ? 'bg-[#A68F68] text-[#0D0D0D] font-bold shadow-lg'
              : 'text-[#E2E2E2]/70 hover:bg-white/5 hover:text-[#E2E2E2]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">library_books</span>
          My Library
        </button>

        <button
          onClick={() => setActiveTab('browse')}
          className={`w-full flex items-center gap-3.5 p-3 rounded font-sans text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer ${
            activeTab === 'browse'
              ? 'bg-[#A68F68] text-[#0D0D0D] font-bold shadow-lg'
              : 'text-[#E2E2E2]/70 hover:bg-white/5 hover:text-[#E2E2E2]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">explore</span>
          Chronicle
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`w-full flex items-center gap-3.5 p-3 rounded font-sans text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-[#A68F68] text-[#0D0D0D] font-bold shadow-lg'
              : 'text-[#E2E2E2]/70 hover:bg-white/5 hover:text-[#E2E2E2]'
          }`}
        >
          <span className="material-symbols-outlined text-xl">history</span>
          Reading Logs
        </button>
      </nav>

      <div className="mt-auto space-y-4">
        <button
          onClick={() => setActiveTab('settings')}
          className="w-full py-2.5 px-4 bg-[#A68F68]/15 text-[#A68F68] border border-[#A68F68]/40 rounded font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#A68F68] hover:text-[#0D0D0D] transition-all cursor-pointer"
        >
          {userProfile.isPro ? 'Pro Edition ✨' : 'Unlock Pro Access'}
        </button>

        <div className="space-y-1 pt-4 border-t border-subtle">
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 p-2.5 rounded font-sans text-[10px] uppercase tracking-[0.15em] transition-all cursor-pointer ${
              activeTab === 'settings' ? 'bg-white/10 text-[#E2E2E2] font-bold' : 'text-[#E2E2E2]/60 hover:bg-white/5 hover:text-[#E2E2E2]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">settings</span>
            Preferences
          </button>
        </div>

        {/* User Snippet */}
        <div 
          onClick={() => setActiveTab('settings')}
          className="flex items-center gap-3 p-2 pt-3 border-t border-subtle cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-8 h-8 rounded-full object-cover border border-[#A68F68]/30"
          />
          <div className="flex flex-col truncate">
            <span className="font-sans text-[11px] font-bold text-[#E2E2E2] truncate">
              {userProfile.name}
            </span>
            <span className="font-sans text-[9px] uppercase tracking-wider text-[#E2E2E2]/50 truncate">
              {userProfile.email}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const MobileBottomNav: React.FC<{
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSearch: () => void;
}> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe h-16 bg-[#0D0D0D]/95 backdrop-blur-xl z-50 border-t border-subtle font-sans text-[10px] uppercase tracking-wider text-[#E2E2E2]/60">
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-transform active:scale-90 ${
          activeTab === 'home' ? 'text-[#A68F68] font-bold' : 'hover:text-[#E2E2E2]'
        }`}
      >
        <span className="material-symbols-outlined text-xl">auto_stories</span>
        <span className="text-[9px] mt-0.5">Home</span>
      </button>

      <button
        onClick={() => setActiveTab('library')}
        className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-transform active:scale-90 ${
          activeTab === 'library' ? 'text-[#A68F68] font-bold' : 'hover:text-[#E2E2E2]'
        }`}
      >
        <span className="material-symbols-outlined text-xl">menu_book</span>
        <span className="text-[9px] mt-0.5">Library</span>
      </button>

      <button
        onClick={onOpenSearch}
        className="flex flex-col items-center justify-center bg-[#A68F68] text-[#0D0D0D] rounded-full p-2.5 active:scale-90 transition-transform cursor-pointer shadow-lg"
      >
        <span className="material-symbols-outlined text-xl">search</span>
      </button>

      <button
        onClick={() => setActiveTab('reader')}
        className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-transform active:scale-90 ${
          activeTab === 'reader' ? 'text-[#A68F68] font-bold' : 'hover:text-[#E2E2E2]'
        }`}
      >
        <span className="material-symbols-outlined text-xl">chrome_reader_mode</span>
        <span className="text-[9px] mt-0.5">Reader</span>
      </button>

      <button
        onClick={() => setActiveTab('settings')}
        className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-transform active:scale-90 ${
          activeTab === 'settings' ? 'text-[#A68F68] font-bold' : 'hover:text-[#E2E2E2]'
        }`}
      >
        <span className="material-symbols-outlined text-xl">person</span>
        <span className="text-[9px] mt-0.5">Profile</span>
      </button>
    </nav>
  );
};

