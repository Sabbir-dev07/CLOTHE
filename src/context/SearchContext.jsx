import { createContext, useContext, useState } from 'react';
import { searchProducts } from '../data/products';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchProducts(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const value = {
    searchQuery,
    searchResults,
    isSearchOpen,
    handleSearch,
    openSearch,
    closeSearch,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
