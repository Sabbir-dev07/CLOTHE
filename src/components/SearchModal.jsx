import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useSearch } from '../context/SearchContext';

const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, handleSearch, searchResults } = useSearch();

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    
    if (isSearchOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, closeSearch]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-card shadow-soft-lg border-b border-gray-200 dark:border-white/10"
          >
            <div className="container-custom py-8">
              {/* Search Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 relative">
                  <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                    className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-dark-elevated text-primary dark:text-white rounded-xl focus:border-accent focus:outline-none transition-colors placeholder:text-gray-400"
                  />
                </div>
                <button
                  onClick={closeSearch}
                  className="p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-primary dark:text-white"
                  aria-label="Close search"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery && searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={closeSearch}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors text-primary dark:text-gray-200"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm text-primary dark:text-white truncate">{product.name}</h3>
                          <p className="text-sm text-accent-muted dark:text-gray-400">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchQuery && searchResults.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500 dark:text-gray-400">No products found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Try searching with different keywords</p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500 dark:text-gray-400">Start typing to search products</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
