import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { useBookmark } from '../contexts/BookmarkContext';

interface BookmarkButtonProps {
  receivableId: string;
}

export default function BookmarkButton({ receivableId }: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const bookmarked = isBookmarked(receivableId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(receivableId);
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
      title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {bookmarked ? (
        <IoBookmark className="w-5 h-5 text-yellow-500" />
      ) : (
        <IoBookmarkOutline className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
}
