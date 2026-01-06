import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHeartOutline, IoTrashOutline } from 'react-icons/io5';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      addToCart(product, product.sizes[0], 1);
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center">
          <IoHeartOutline className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Your wishlist is empty
          </h2>
          <p className="text-accent-muted mb-8">
            Save your favorite items for later
          </p>
          <Link to="/shop">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-gray-50 mb-8">
          My Wishlist ({wishlistItems.length})
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {wishlistItems.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-dark-elevated mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm rounded-full shadow-soft hover:bg-white dark:hover:bg-dark-card transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <IoTrashOutline className="w-5 h-5 text-error" />
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-accent-muted dark:text-gray-400 uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-medium text-primary dark:text-gray-50 group-hover:text-accent dark:group-hover:text-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary dark:text-gray-50">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 py-2 bg-primary dark:bg-accent text-white dark:text-primary rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors text-sm font-medium"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Wishlist;
