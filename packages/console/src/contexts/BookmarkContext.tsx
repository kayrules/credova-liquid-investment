import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface BookmarkContextType {
  bookmarkedIds: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Load bookmarks from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('bookmarkedReceivables');
    if (stored) {
      try {
        setBookmarkedIds(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse bookmarks:', e);
      }
    }
  }, []);

  // Save bookmarks to sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem('bookmarkedReceivables', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev =>
      prev.includes(id)
        ? prev.filter(bookmarkId => bookmarkId !== id)
        : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarkedIds.includes(id);

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmark must be used within a BookmarkProvider');
  }
  return context;
}
