'use client';

import { useState, useEffect, useRef } from 'react';
import { SearchItem } from '@/lib/search-utils';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';

interface SearchProps {
  searchIndex: SearchItem[];
}

export function Search({ searchIndex }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
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
    router.push(url);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-9"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full rounded-md border bg-background shadow-lg z-50">
          <div className="py-2 max-h-[300px] overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 hover:bg-accent"
                onClick={() => handleResultClick(result.url)}
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
        </div>
      )}
    </div>
  );
}