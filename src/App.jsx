import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import FAQ from './pages/FAQ';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Slightly longer for better effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        <Router>
          <ScrollToTop />
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <SearchProvider>
                  <div className="flex flex-col min-h-screen bg-background dark:bg-dark-bg text-primary dark:text-gray-100 transition-colors duration-300">
                    <Navbar />
                    <SearchModal />
                    <DarkModeToggle />
                    
                    <main className="flex-1">
                      <AnimatePresence mode="wait">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/shop" element={<Shop />} />
                          <Route path="/men" element={<Men />} />
                          <Route path="/women" element={<Women />} />
                          <Route path="/kids" element={<Kids />} />
                          <Route path="/product/:id" element={<Product />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/wishlist" element={<Wishlist />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/register" element={<Register />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/shipping" element={<Shipping />} />
                          <Route path="/faq" element={<FAQ />} />
                          <Route
                            path="/profile"
                            element={
                              <ProtectedRoute>
                                <Profile />
                              </ProtectedRoute>
                            }
                          />
                        </Routes>
                      </AnimatePresence>
                    </main>

                    <Footer />
                  </div>
                </SearchProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
