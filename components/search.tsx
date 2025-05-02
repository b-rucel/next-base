'use client';

import { useState, useEffect, useRef } from 'react';
import { SearchItem } from '@/lib/search-utils';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';

interface SearchProps {
  searchIndex: SearchItem[];
}

export function Search({ searchIndex }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [fuse, setFuse] = useState<Fuse<SearchItem>>();

  useEffect(() => {
    const fuseInstance = new Fuse(searchIndex, {
      keys: ['title', 'description'],
      threshold: 0.3,
      includeMatches: true,
    });
    setFuse(fuseInstance);
  }, [searchIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      // Focus the input when modal opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || results.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex < results.length - 1 ? prevIndex + 1 : 0;
            scrollToResult(newIndex);
            return newIndex;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : results.length - 1;
            scrollToResult(newIndex);
            return newIndex;
          });
          break;
        case 'Enter':
          event.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleResultClick(results[selectedIndex].url);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, results, selectedIndex]);

  const scrollToResult = (index: number) => {
    if (resultsRef.current && results.length > 0) {
      const resultItems = resultsRef.current.querySelectorAll('button');
      if (resultItems[index]) {
        resultItems[index].scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  };

  const handleSearch = (value: string) => {
    setQuery(value);
    if (!fuse || !value) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const searchResults = fuse.search(value).map(result => result.item);
    setResults(searchResults);
    setIsOpen(true);
  };

  const handleResultClick = (url: string) => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setIsModalOpen(false);
    router.push(url);
  };

  const openSearchModal = () => {
    setIsModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsModalOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <SearchIcon 
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground cursor-pointer" 
          onClick={openSearchModal}
        />
        <Input
          placeholder="Search..."
          className="pl-9 cursor-pointer"
          onClick={openSearchModal}
          readOnly
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-background rounded-lg shadow-xl border">
            <header className="flex items-center px-4 py-3 border-b">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={inputRef}
                  placeholder="Search..."
                  className="pl-9 pr-10"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                {query && (
                  <button 
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setQuery('')}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <button 
                className="ml-2 px-3 py-1 text-sm text-muted-foreground hover:text-foreground"
                onClick={closeSearchModal}
              >
                Cancel
              </button>
            </header>

            <div className="max-h-[60vh] overflow-y-auto" ref={resultsRef}>
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-3 ${
                        selectedIndex === index ? 'bg-blue-400/30' : 'hover:bg-accent'
                      }`}
                      onClick={() => handleResultClick(result.url)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">{result.title}</span>
                        <span className="text-sm text-muted-foreground line-clamp-1">
                          {result.description}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {result.type === 'doc' ? 'Documentation' : 'Blog'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                  {query ? (
                    <p>No results found for &quot;{query}&quot;</p>
                  ) : (
                    <p>Start typing to search</p>
                  )}
                </div>
              )}
            </div>

            <footer className="flex items-center justify-between px-4 py-2 text-xs text-muted-foreground border-t">
              <div className="flex items-center">
                <span className="mr-1 hidden md:block">Search by</span>
                <span className="font-medium">Next-Base</span>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">↵</kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">↓</kbd>
                  <span>to navigate</span>
                </div>
                <div className="flex items-center">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs mr-1">ESC</kbd>
                  <span>to close</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}