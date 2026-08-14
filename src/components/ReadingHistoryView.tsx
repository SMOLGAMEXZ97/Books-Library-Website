import React from 'react';
import { ReadingHistoryItem, ActiveTab } from '../types';

interface ReadingHistoryViewProps {
  history: ReadingHistoryItem[];
  onReadBook: (bookId: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const ReadingHistoryView: React.FC<ReadingHistoryViewProps> = ({
  history,
  onReadBook,
}) => {
  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 md:pt-10 md:pl-64 pb-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto space-y-8">
        <div className="border-b border-subtle pb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Chronicle</span>
          <h1 className="font-serif italic text-3xl md:text-5xl text-[#E2E2E2] font-normal">
            Reading Annals
          </h1>
          <p className="font-sans text-xs text-[#E2E2E2]/60 mt-1">
            Track your recent reading sessions, completion levels, and time invested.
          </p>
        </div>

        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-[#161616] border border-subtle p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl hover:border-[#A68F68]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <img
                  src={item.coverImage}
                  alt={item.bookTitle}
                  className="w-14 h-20 object-cover bg-[#0D0D0D] border border-subtle flex-shrink-0"
                />
                <div>
                  <h3 className="font-serif italic text-xl text-[#E2E2E2]">
                    {item.bookTitle}
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68F68] font-bold mt-0.5">
                    By {item.author}
                  </p>
                  <span className="font-sans text-[10px] text-[#E2E2E2]/50 mt-1 block">
                    Last active: {item.lastReadDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-subtle">
                <div className="text-right">
                  <span className="font-sans text-xs font-bold text-[#A68F68] block uppercase tracking-wider">
                    {item.progressPercent}% Completed
                  </span>
                  <span className="font-serif text-xs text-[#E2E2E2]/60 italic">
                    {item.timeSpentMins} mins duration
                  </span>
                </div>

                <button
                  onClick={() => onReadBook(item.bookId)}
                  className="px-5 py-2.5 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">play_arrow</span>
                  <span>Resume</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

