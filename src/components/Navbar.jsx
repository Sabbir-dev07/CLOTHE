import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoSearch, IoHeartOutline, IoCartOutline, IoPersonOutline, IoMenu, IoChevronDown } from 'react-icons/io5';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useSearch } from '../context/SearchContext';
import MobileMenu from './MobileMenu';
import DropdownMenu from './DropdownMenu';
import logo from '../assets/logo.jpg';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const { isAuthenticated, user } = useAuth();
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const { openSearch } = useSearch();

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const shopCategories = [
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-sm border-b border-border dark:border-dark-border' 
          : 'bg-white dark:bg-dark-bg border-b border-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center h-full py-2">
              <Logo className="h-full w-auto max-h-[60px] text-primary dark:text-gray-50 transition-opacity hover:opacity-90" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8">
              <Link 
                to="/" 
                className={`md:text-sm lg:text-base font-medium transition-colors ${
                  isActive('/') ? 'text-accent' : 'text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                Home
              </Link>
              
              <DropdownMenu 
                trigger={
                  <button className="flex items-center gap-1 md:text-sm lg:text-base font-medium text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
                    Shop
                    <IoChevronDown className="w-4 h-4" />
                  </button>
                }
                items={shopCategories}
              />
              
              <Link 
                to="/shop" 
                className={`md:text-sm lg:text-base font-medium transition-colors ${
                  isActive('/shop') ? 'text-accent' : 'text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                Collections
              </Link>
              
              <Link 
                to="/about" 
                className={`md:text-sm lg:text-base font-medium transition-colors ${
                  isActive('/about') ? 'text-accent' : 'text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent'
                }`}
              >
                About
              </Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={openSearch}
                className="p-2 hover:bg-gray-900/5 dark:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Search"
              >
                <IoSearch className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-gray-200" />
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 hover:bg-gray-900/5 dark:hover:bg-white/10 rounded-full transition-colors group"
                aria-label="Wishlist"
              >
                <IoHeartOutline className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-gray-200 group-hover:scale-110 transition-transform" />
                {getWishlistCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-accent text-white dark:text-primary text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white dark:ring-dark-bg"
                  >
                    {getWishlistCount()}
                  </motion.span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 hover:bg-gray-900/5 dark:hover:bg-white/10 rounded-full transition-colors group"
                aria-label="Cart"
              >
                <IoCartOutline className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-gray-200 group-hover:scale-110 transition-transform" />
                {getCartCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-accent text-white dark:text-primary text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white dark:ring-dark-bg"
                  >
                    {getCartCount()}
                  </motion.span>
                )}
              </Link>

              {/* User / Auth / Mobile Trigger */}
              <div className="flex items-center gap-2">
                <div className="hidden md:block">
                  {isAuthenticated ? (
                    <Link
                      to="/profile"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Profile"
                    >
                      <IoPersonOutline className="w-6 h-6 text-primary dark:text-gray-200" />
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="px-6 py-2 bg-accent text-white dark:text-primary text-sm font-bold rounded-full hover:bg-accent/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Login
                    </Link>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Menu"
                >
                  <IoMenu className="w-6 h-6 text-primary dark:text-gray-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
