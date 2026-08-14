import React, { useState } from 'react';
import { Book, ReaderSettings, ActiveTab } from '../types';

interface ReaderViewProps {
  book: Book;
  readerSettings: ReaderSettings;
  onUpdateSettings: (settings: Partial<ReaderSettings>) => void;
  onUpdateProgress: (bookId: string, progress: number) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  book,
  readerSettings,
  onUpdateSettings,
  onUpdateProgress,
  setActiveTab,
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(3); // Default Chapter 4 or first chapter
  const [showAppearanceMenu, setShowAppearanceMenu] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  const chapters = book.chapters || [
    {
      id: "ch-default",
      number: 1,
      title: "The Quiet Mind",
      content: [
        "In an age of constant connectivity, silence has become the ultimate luxury. We are bombarded with notifications, news feeds, and the incessant hum of digital existence. Yet, it is only within the spaces between the noise that profound thought can truly gestate.",
        "Consider the architecture of a grand library. The physical space dictates a reverence for the written word. High ceilings absorb the ambient sound, creating a muffled stillness that paradoxically amplifies concentration.",
        "Seneca wrote extensively on the idea of tranquility, noting that true peace is not found in the absence of conflict, but in the ability to maintain equilibrium amidst it. This equilibrium is the foundation of deep reading."
      ]
    }
  ];

  const currentChapter = chapters[currentChapterIndex] || chapters[0];

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => setShowToast(null), 2500);
  };

  const handleProgressChange = (newProgress: number) => {
    onUpdateProgress(book.id, newProgress);
  };

  // Theme styling mapping
  const getThemeClass = () => {
    switch (readerSettings.theme) {
      case 'sepia':
        return 'bg-[#f4ecd8] text-[#3e3223]';
      case 'light':
        return 'bg-[#fbf9f4] text-[#1b1c19]';
      case 'dark':
      default:
        return 'bg-[#0D0D0D] text-[#E2E2E2]';
    }
  };

  // Font family mapping
  const getFontFamilyClass = () => {
    return readerSettings.fontFamily === 'sans' ? 'font-sans' : 'font-serif';
  };

  // Font size mapping
  const getFontSizeClass = () => {
    switch (readerSettings.fontSize) {
      case 'sm':
        return 'text-base';
      case 'lg':
        return 'text-xl';
      case 'xl':
        return 'text-2xl';
      case 'base':
      default:
        return 'text-lg';
    }
  };

  // Line spacing mapping
  const getLineSpacingClass = () => {
    switch (readerSettings.lineSpacing) {
      case 'tight':
        return 'leading-normal';
      case 'loose':
        return 'leading-loose';
      case 'normal':
      default:
        return 'leading-relaxed';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col ${getThemeClass()}`}>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-16 right-6 z-50 bg-[#051a17] text-white px-4 py-2.5 rounded-lg shadow-lg font-ui-label text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-green-400 text-base">bookmark</span>
          <span>{showToast}</span>
        </div>
      )}

      {/* Reader Top Bar */}
      <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between border-b border-current/10 bg-inherit backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab('library')}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Back to Library"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="font-ui-main text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">
              {book.title}
            </h1>
            <span className="font-caption text-xs opacity-70">
              Chapter {currentChapter.number}: {currentChapter.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsBookmarked(!isBookmarked);
              triggerToast(isBookmarked ? 'Bookmark removed' : 'Page bookmarked');
            }}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Bookmark Page"
          >
            <span className={`material-symbols-outlined text-xl ${isBookmarked ? 'fill text-amber-600' : ''}`}>
              bookmark
            </span>
          </button>

          <button
            onClick={() => setShowAppearanceMenu(!showAppearanceMenu)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title="Reader Settings"
          >
            <span className="material-symbols-outlined text-xl">format_size</span>
          </button>
        </div>
      </header>

      {/* Appearance Customizer Drawer */}
      {showAppearanceMenu && (
        <div className="fixed top-16 right-6 z-50 w-80 p-6 rounded-2xl shadow-2xl border border-current/20 bg-inherit backdrop-blur-2xl space-y-5 font-ui-main">
          <div className="flex justify-between items-center border-b border-current/10 pb-2">
            <h3 className="font-semibold text-sm">Appearance</h3>
            <button
              onClick={() => setShowAppearanceMenu(false)}
              className="p-1 hover:opacity-70 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          {/* Font Family */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold opacity-70">Font Family</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onUpdateSettings({ fontFamily: 'serif' })}
                className={`py-2 px-3 rounded-lg text-xs font-serif border cursor-pointer ${
                  readerSettings.fontFamily === 'serif'
                    ? 'border-current font-bold bg-black/10 dark:bg-white/10'
                    : 'border-current/20 hover:bg-black/5'
                }`}
              >
                Serif
              </button>
              <button
                onClick={() => onUpdateSettings({ fontFamily: 'sans' })}
                className={`py-2 px-3 rounded-lg text-xs font-sans border cursor-pointer ${
                  readerSettings.fontFamily === 'sans'
                    ? 'border-current font-bold bg-black/10 dark:bg-white/10'
                    : 'border-current/20 hover:bg-black/5'
                }`}
              >
                Sans-Serif
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold opacity-70">Text Size</label>
            <div className="flex items-center justify-between bg-black/5 dark:bg-white/10 p-1 rounded-xl">
              <button
                onClick={() => onUpdateSettings({ fontSize: 'sm' })}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  readerSettings.fontSize === 'sm' ? 'bg-current/10 font-bold' : ''
                }`}
              >
                A-
              </button>
              <button
                onClick={() => onUpdateSettings({ fontSize: 'base' })}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold cursor-pointer ${
                  readerSettings.fontSize === 'base' ? 'bg-current/10 font-bold' : ''
                }`}
              >
                A
              </button>
              <button
                onClick={() => onUpdateSettings({ fontSize: 'lg' })}
                className={`px-3 py-1.5 rounded-lg text-base font-semibold cursor-pointer ${
                  readerSettings.fontSize === 'lg' ? 'bg-current/10 font-bold' : ''
                }`}
              >
                A+
              </button>
              <button
                onClick={() => onUpdateSettings({ fontSize: 'xl' })}
                className={`px-3 py-1.5 rounded-lg text-lg font-semibold cursor-pointer ${
                  readerSettings.fontSize === 'xl' ? 'bg-current/10 font-bold' : ''
                }`}
              >
                A++
              </button>
            </div>
          </div>

          {/* Theme Palette */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold opacity-70">Theme Palette</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onUpdateSettings({ theme: 'light' })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold bg-[#fbf9f4] text-[#1b1c19] border border-black/20 cursor-pointer ${
                  readerSettings.theme === 'light' ? 'ring-2 ring-[#051a17]' : ''
                }`}
              >
                Light
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'sepia' })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold bg-[#f4ecd8] text-[#3e3223] border border-black/20 cursor-pointer ${
                  readerSettings.theme === 'sepia' ? 'ring-2 ring-[#3e3223]' : ''
                }`}
              >
                Sepia
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'dark' })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold bg-[#1a1a1a] text-[#e4e2dd] border border-white/20 cursor-pointer ${
                  readerSettings.theme === 'dark' ? 'ring-2 ring-white' : ''
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Line Spacing */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold opacity-70">Line Spacing</label>
            <div className="grid grid-cols-3 gap-2">
              {(['tight', 'normal', 'loose'] as const).map((spacing) => (
                <button
                  key={spacing}
                  onClick={() => onUpdateSettings({ lineSpacing: spacing })}
                  className={`py-1.5 px-2 rounded-lg text-xs capitalize border cursor-pointer ${
                    readerSettings.lineSpacing === spacing
                      ? 'border-current font-bold bg-black/10 dark:bg-white/10'
                      : 'border-current/20 hover:bg-black/5'
                  }`}
                >
                  {spacing}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Reading Canvas */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 md:py-16 w-full space-y-8">
        <div className="space-y-3 pb-8 border-b border-current/10">
          <span className="font-caption text-xs uppercase tracking-widest opacity-60">
            Chapter {currentChapter.number}
          </span>
          <h2 className="font-display-lg text-3xl md:text-4xl font-bold leading-tight">
            {currentChapter.title}
          </h2>
        </div>

        <div className={`space-y-6 ${getFontFamilyClass()} ${getFontSizeClass()} ${getLineSpacingClass()}`}>
          {currentChapter.content.map((paragraph, index) => (
            <p key={index} className="indent-6 first:indent-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Chapter Navigation controls */}
        <div className="flex items-center justify-between pt-12 border-t border-current/10">
          <button
            disabled={currentChapterIndex === 0}
            onClick={() => {
              if (currentChapterIndex > 0) {
                setCurrentChapterIndex(currentChapterIndex - 1);
                handleProgressChange(Math.max(0, book.progress - 15));
              }
            }}
            className="px-4 py-2 rounded-lg border border-current/20 text-xs font-ui-label font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 cursor-pointer flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
            <span>Previous</span>
          </button>

          <span className="font-caption text-xs opacity-70">
            Chapter {currentChapterIndex + 1} of {chapters.length}
          </span>

          <button
            disabled={currentChapterIndex >= chapters.length - 1}
            onClick={() => {
              if (currentChapterIndex < chapters.length - 1) {
                setCurrentChapterIndex(currentChapterIndex + 1);
                handleProgressChange(Math.min(100, book.progress + 15));
              }
            }}
            className="px-4 py-2 rounded-lg border border-current/20 text-xs font-ui-label font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 cursor-pointer flex items-center gap-1"
          >
            <span>Next</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Scrubber Progress Bar Footer */}
      <footer className="sticky bottom-0 z-40 px-6 py-3 border-t border-current/10 bg-inherit backdrop-blur-md flex items-center gap-4">
        <span className="font-caption text-xs opacity-70 whitespace-nowrap">
          {book.progress}%
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={book.progress}
          onChange={(e) => handleProgressChange(Number(e.target.value))}
          className="w-full accent-current h-1 bg-current/20 rounded-lg cursor-pointer"
        />
        <span className="font-caption text-xs opacity-70 whitespace-nowrap">
          {book.minsLeft}m left
        </span>
      </footer>
    </div>
  );
};
