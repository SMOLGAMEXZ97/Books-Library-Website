export type ActiveTab = 
  | 'home' 
  | 'library' 
  | 'browse' 
  | 'wishlist' 
  | 'detail' 
  | 'reader' 
  | 'settings' 
  | 'history';

export interface Chapter {
  id: string;
  number: number;
  title: string;
  content: string[];
}

export interface Review {
  id: string;
  author: string;
  initial: string;
  rating: number;
  text: string;
}

export interface AuthorBio {
  name: string;
  image: string;
  bio: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  reviewsCount: number;
  description: string;
  category: 'Fiction' | 'Non-Fiction' | 'Essays' | 'Philosophy' | 'Design' | 'Science';
  pages: number;
  published: string;
  language: string;
  progress: number;
  minsLeft: number;
  isTrending?: boolean;
  isWishlist?: boolean;
  inBookshelf?: boolean;
  authorBio?: AuthorBio;
  reviews?: Review[];
  chapters?: Chapter[];
}

export interface Collection {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  bookIds: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  isPro: boolean;
  monthlyTarget: number;
  monthlyCompleted: number;
  yearlyTarget: number;
  yearlyCompleted: number;
  storageUsedGB: number;
  storageTotalGB: number;
  downloadedBooksCount: number;
  emailUpdates: boolean;
  newReleases: boolean;
  readingReminders: boolean;
  publicProfile: boolean;
  dataSharing: boolean;
}

export interface ReaderSettings {
  fontFamily: 'serif' | 'sans';
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  theme: 'light' | 'sepia' | 'dark';
  lineSpacing: 'tight' | 'normal' | 'loose';
}

export interface ReadingHistoryItem {
  id: string;
  bookId: string;
  bookTitle: string;
  author: string;
  coverImage: string;
  lastReadDate: string;
  progressPercent: number;
  timeSpentMins: number;
}
