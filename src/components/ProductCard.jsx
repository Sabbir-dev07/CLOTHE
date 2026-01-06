import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoHeartOutline, IoHeart, IoCartOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);
  
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    if (!inWishlist) {
      showToast(`Added ${product.name} to wishlist`, 'success');
    } else {
      showToast(`Removed ${product.name} from wishlist`, 'info');
    }
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    // Add to cart with first available size
    if (product.sizes && product.sizes.length > 0) {
      addToCart(product, product.sizes[0], 1);
      setShowAddedFeedback(true);
      showToast(`Added ${product.name} to cart`, 'success');
      setTimeout(() => setShowAddedFeedback(false), 2000);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-dark-elevated mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
            {/* Wishlist Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistToggle}
              className="p-2.5 bg-white dark:bg-black/40 backdrop-blur-md rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-black/60 transition-all text-gray-900 dark:text-gray-200"
              aria-label="Add to wishlist"
            >
              {inWishlist ? (
                <IoHeart className="w-5 h-5 text-red-500 dark:text-red-400" />
              ) : (
                <IoHeartOutline className="w-5 h-5" />
              )}
            </motion.button>

            {/* Quick Add Button Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleQuickAdd}
              className="p-2.5 bg-white dark:bg-black/40 backdrop-blur-md rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-black/60 transition-all text-gray-900 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              aria-label="Add to cart"
            >
              <IoCartOutline className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Smart Quick Add / Feedback Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: showAddedFeedback ? 1 : undefined, 
              y: showAddedFeedback ? 0 : undefined 
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuickAdd}
            disabled={showAddedFeedback}
            className={`absolute bottom-3 left-3 right-3 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 border backdrop-blur-md ${
              showAddedFeedback 
                ? 'bg-primary dark:bg-accent text-white dark:text-primary border-accent/20 opacity-100' 
                : 'bg-white/90 dark:bg-dark-card/90 text-primary dark:text-gray-100 border-gray-200 dark:border-white/10 hover:border-accent dark:hover:border-accent hover:bg-primary dark:hover:bg-accent hover:text-white dark:hover:text-primary opacity-0 group-hover:opacity-100'
            }`}
          >
            <AnimatePresence mode="wait">
              {showAddedFeedback ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <IoCheckmarkCircle className="w-5 h-5 text-accent dark:text-primary" />
                  <span className="text-sm font-bold tracking-wide whitespace-nowrap uppercase">Added to Cart</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <IoCartOutline className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Quick Add</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <p className="text-xs text-muted dark:text-gray-400 uppercase tracking-widest font-medium">{product.category}</p>
          <h3 className="font-medium text-primary dark:text-gray-50 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-primary dark:text-gray-50 tracking-tight">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
