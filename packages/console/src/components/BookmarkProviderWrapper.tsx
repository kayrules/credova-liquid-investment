import { BookmarkProvider } from '../contexts/BookmarkContext';
import type React from 'react';

export default function BookmarkProviderWrapper({ children }: { children: React.ReactNode }) {
  return <BookmarkProvider>{children}</BookmarkProvider>;
}
