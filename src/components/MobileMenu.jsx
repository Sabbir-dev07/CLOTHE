import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useAuth } from '../context/AuthContext';

const MobileMenu = ({ isOpen, onClose }) => {
  const [shopOpen, setShopOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
    setShopOpen(false);
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-dark-card shadow-2xl z-50 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-2xl font-heading font-bold text-primary dark:text-gray-50">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <IoClose className="w-6 h-6 text-gray-900 dark:text-gray-50" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6 space-y-2">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* Shop Accordion */}
              <div>
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                >
                  <span>Shop</span>
                  {shopOpen ? <IoChevronUp /> : <IoChevronDown />}
                </button>
                
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        <Link
                          to="/men"
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                        >
                          Men
                        </Link>
                        <Link
                          to="/women"
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                        >
                          Women
                        </Link>
                        <Link
                          to="/kids"
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                        >
                          Kids
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/shop"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
              >
                Collections
              </Link>

              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
              >
                About
              </Link>

              <div className="border-t border-gray-200 dark:border-white/10 my-4"></div>

              {/* Auth Links */}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-base font-medium text-error hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent rounded-lg transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium text-white bg-accent hover:bg-accent/90 rounded-lg transition-colors text-center"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
