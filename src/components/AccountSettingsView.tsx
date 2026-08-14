import React, { useState } from 'react';
import { UserProfile, ActiveTab } from '../types';

interface AccountSettingsViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const AccountSettingsView: React.FC<AccountSettingsViewProps> = ({
  userProfile,
  onUpdateProfile,
}) => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showGoalsModal, setShowGoalsModal] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [emailInput, setEmailInput] = useState(userProfile.email);
  const [monthlyGoalInput, setMonthlyGoalInput] = useState(userProfile.monthlyTarget);
  const [yearlyGoalInput, setYearlyGoalInput] = useState(userProfile.yearlyTarget);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({ name: nameInput, email: emailInput });
    setShowEditProfileModal(false);
    showToast('Profile updated successfully!');
  };

  const handleGoalsSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({ monthlyTarget: monthlyGoalInput, yearlyTarget: yearlyGoalInput });
    setShowGoalsModal(false);
    showToast('Reading goals updated!');
  };

  const handleClearCache = () => {
    onUpdateProfile({ storageUsedGB: 0.2 });
    showToast('Offline cache cleared successfully!');
  };

  return (
    <div className="bg-[#0D0D0D] text-[#E2E2E2] min-h-screen pt-28 md:pt-10 md:pl-64 pb-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto space-y-10">
        {/* Toast Notification */}
        {toastMsg && (
          <div className="fixed top-24 right-6 z-50 bg-[#A68F68] text-[#0D0D0D] px-6 py-3 border border-black/20 shadow-2xl font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-3 animate-bounce">
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Page Header */}
        <div className="border-b border-subtle pb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A68F68] font-bold">Preferences</span>
          <h1 className="font-serif italic text-3xl md:text-5xl text-[#E2E2E2] font-normal">
            Account Dossier
          </h1>
          <p className="font-sans text-xs text-[#E2E2E2]/60 mt-1">
            Manage your profile, subscription, reading targets, and application telemetry.
          </p>
        </div>

        {/* User Profile Card */}
        <div className="bg-[#161616] border border-subtle p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-6 text-center sm:text-left flex-col sm:flex-row">
            <div className="relative group">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-20 h-20 rounded-full object-cover border border-[#A68F68] shadow-md"
              />
              <button
                onClick={() => setShowEditProfileModal(true)}
                className="absolute inset-0 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <h2 className="font-serif italic text-2xl text-[#E2E2E2]">
                  {userProfile.name}
                </h2>
                {userProfile.isPro && (
                  <span className="px-2.5 py-0.5 bg-[#A68F68] text-[#0D0D0D] font-sans text-[9px] uppercase tracking-[0.2em] font-bold">
                    Pro Patron
                  </span>
                )}
              </div>
              <p className="font-sans text-xs text-[#E2E2E2]/60">
                {userProfile.email}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowEditProfileModal(true)}
            className="px-6 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A] transition-colors cursor-pointer"
          >
            Edit Profile
          </button>
        </div>

        {/* Reading Goals Section */}
        <div className="bg-[#161616] border border-subtle p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex justify-between items-center border-b border-subtle pb-4">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A68F68] font-bold">Milestones</span>
              <h2 className="font-serif italic text-xl text-[#E2E2E2]">
                Literary Targets
              </h2>
            </div>
            <button
              onClick={() => setShowGoalsModal(true)}
              className="text-[#A68F68] font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:underline cursor-pointer"
            >
              Update Targets
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#0D0D0D] p-5 border border-subtle space-y-3">
              <div className="flex justify-between font-sans text-xs text-[#E2E2E2]">
                <span className="font-bold uppercase tracking-wider text-[#A68F68]">Monthly Target</span>
                <span className="text-[#E2E2E2]/60">
                  {userProfile.monthlyCompleted} / {userProfile.monthlyTarget} volumes
                </span>
              </div>
              <div className="w-full bg-[#161616] h-2 border border-subtle overflow-hidden">
                <div
                  className="bg-[#A68F68] h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (userProfile.monthlyCompleted / userProfile.monthlyTarget) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div className="bg-[#0D0D0D] p-5 border border-subtle space-y-3">
              <div className="flex justify-between font-sans text-xs text-[#E2E2E2]">
                <span className="font-bold uppercase tracking-wider text-[#A68F68]">Yearly Target</span>
                <span className="text-[#E2E2E2]/60">
                  {userProfile.yearlyCompleted} / {userProfile.yearlyTarget} volumes
                </span>
              </div>
              <div className="w-full bg-[#161616] h-2 border border-subtle overflow-hidden">
                <div
                  className="bg-[#A68F68] h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      (userProfile.yearlyCompleted / userProfile.yearlyTarget) * 100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Storage Management Card */}
        <div className="bg-[#161616] border border-subtle p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-subtle pb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A68F68] font-bold">Offline Archives</span>
            <h2 className="font-serif italic text-xl text-[#E2E2E2]">
              Storage & Local Cache
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between font-sans text-xs text-[#E2E2E2]">
              <span className="font-bold uppercase tracking-wider text-[#A68F68]">Local Storage Used</span>
              <span>
                {userProfile.storageUsedGB.toFixed(1)} GB / {userProfile.storageTotalGB.toFixed(1)} GB
              </span>
            </div>

            <div className="w-full bg-[#0D0D0D] h-2 border border-subtle overflow-hidden">
              <div
                className="bg-[#A68F68] h-full transition-all duration-500"
                style={{
                  width: `${(userProfile.storageUsedGB / userProfile.storageTotalGB) * 100}%`,
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="font-serif text-xs text-[#E2E2E2]/60 italic">
                {userProfile.downloadedBooksCount} books downloaded for offline reading
              </p>
              <button
                onClick={handleClearCache}
                className="px-4 py-2 bg-[#0D0D0D] text-[#E2E2E2] hover:border-white border border-subtle font-sans text-[10px] uppercase font-bold tracking-[0.2em] transition-colors cursor-pointer"
              >
                Clear Offline Cache
              </button>
            </div>
          </div>
        </div>

        {/* Notifications & Preferences */}
        <div className="bg-[#161616] border border-subtle p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-subtle pb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A68F68] font-bold">Communications</span>
            <h2 className="font-serif italic text-xl text-[#E2E2E2]">
              Notifications & Preferences
            </h2>
          </div>

          <div className="space-y-4 font-serif">
            <label className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-subtle cursor-pointer">
              <div>
                <span className="font-serif italic text-base text-[#E2E2E2] block">Editorial Dispatch</span>
                <span className="font-sans text-[10px] text-[#E2E2E2]/50 block mt-0.5">
                  Receive weekly digests and curated recommendations
                </span>
              </div>
              <input
                type="checkbox"
                checked={userProfile.emailUpdates}
                onChange={(e) => onUpdateProfile({ emailUpdates: e.target.checked })}
                className="w-5 h-5 accent-[#A68F68] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-subtle cursor-pointer">
              <div>
                <span className="font-serif italic text-base text-[#E2E2E2] block">New Releases</span>
                <span className="font-sans text-[10px] text-[#E2E2E2]/50 block mt-0.5">
                  Get alerted when authors in your library release new works
                </span>
              </div>
              <input
                type="checkbox"
                checked={userProfile.newReleases}
                onChange={(e) => onUpdateProfile({ newReleases: e.target.checked })}
                className="w-5 h-5 accent-[#A68F68] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-subtle cursor-pointer">
              <div>
                <span className="font-serif italic text-base text-[#E2E2E2] block">Reading Reminders</span>
                <span className="font-sans text-[10px] text-[#E2E2E2]/50 block mt-0.5">
                  Receive gentle notifications to maintain your daily streak
                </span>
              </div>
              <input
                type="checkbox"
                checked={userProfile.readingReminders}
                onChange={(e) => onUpdateProfile({ readingReminders: e.target.checked })}
                className="w-5 h-5 accent-[#A68F68] cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-[#161616] border border-subtle p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-subtle pb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A68F68] font-bold">Security</span>
            <h2 className="font-serif italic text-xl text-[#E2E2E2]">
              Privacy & Telemetry
            </h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-subtle cursor-pointer">
              <div>
                <span className="font-serif italic text-base text-[#E2E2E2] block">Public Bookshelf</span>
                <span className="font-sans text-[10px] text-[#E2E2E2]/50 block mt-0.5">
                  Allow other Books Library 97 members to see your bookshelf and reviews
                </span>
              </div>
              <input
                type="checkbox"
                checked={userProfile.publicProfile}
                onChange={(e) => onUpdateProfile({ publicProfile: e.target.checked })}
                className="w-5 h-5 accent-[#A68F68] cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-subtle cursor-pointer">
              <div>
                <span className="font-serif italic text-base text-[#E2E2E2] block">Personalized Analytics</span>
                <span className="font-sans text-[10px] text-[#E2E2E2]/50 block mt-0.5">
                  Use reading habits to refine collection recommendations
                </span>
              </div>
              <input
                type="checkbox"
                checked={userProfile.dataSharing}
                onChange={(e) => onUpdateProfile({ dataSharing: e.target.checked })}
                className="w-5 h-5 accent-[#A68F68] cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleProfileSave} className="bg-[#161616] border border-subtle max-w-md w-full p-8 space-y-6 shadow-2xl relative text-[#E2E2E2]">
            <button
              type="button"
              onClick={() => setShowEditProfileModal(false)}
              className="absolute top-4 right-4 text-[#E2E2E2]/60 hover:text-[#A68F68]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-serif italic text-2xl text-[#E2E2E2]">Edit Profile</h3>

            <div>
              <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
                className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowEditProfileModal(false)}
                className="flex-1 py-3 border border-subtle text-[#E2E2E2] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#0D0D0D]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Goals Modal */}
      {showGoalsModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleGoalsSave} className="bg-[#161616] border border-subtle max-w-md w-full p-8 space-y-6 shadow-2xl relative text-[#E2E2E2]">
            <button
              type="button"
              onClick={() => setShowGoalsModal(false)}
              className="absolute top-4 right-4 text-[#E2E2E2]/60 hover:text-[#A68F68]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-serif italic text-2xl text-[#E2E2E2]">Reading Goals Target</h3>

            <div>
              <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                Monthly Target Books
              </label>
              <input
                type="number"
                min={1}
                max={50}
                value={monthlyGoalInput}
                onChange={(e) => setMonthlyGoalInput(Number(e.target.value))}
                required
                className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#A68F68] mb-2">
                Yearly Target Books
              </label>
              <input
                type="number"
                min={1}
                max={365}
                value={yearlyGoalInput}
                onChange={(e) => setYearlyGoalInput(Number(e.target.value))}
                required
                className="w-full px-4 py-3 border border-subtle bg-[#0D0D0D] font-serif text-sm text-[#E2E2E2] focus:outline-none focus:border-[#A68F68]"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowGoalsModal(false)}
                className="flex-1 py-3 border border-subtle text-[#E2E2E2] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#0D0D0D]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#A68F68] text-[#0D0D0D] font-sans text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#BCA37A]"
              >
                Save Targets
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

