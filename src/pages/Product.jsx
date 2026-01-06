import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHeartOutline, IoHeart, IoCheckmarkCircle } from 'react-icons/io5';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/Button';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Product not found</h2>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    setAdding(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(product, selectedSize, quantity);
    setAdding(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category */}
            <p className="text-sm text-accent-muted dark:text-gray-400 uppercase tracking-wide font-medium">{product.category}</p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-gray-50">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-3xl font-bold text-primary dark:text-gray-50">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-lg text-secondary dark:text-gray-400 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white dark:bg-accent dark:border-accent dark:text-primary'
                        : 'border-gray-200 dark:border-gray-700 text-primary dark:text-gray-200 hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium text-primary dark:text-gray-200 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-accent text-primary dark:text-gray-200 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center text-primary dark:text-gray-50">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-accent text-primary dark:text-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                loading={adding}
                disabled={!selectedSize}
                className="flex-1"
                size="lg"
              >
                {added ? (
                  <span className="flex items-center gap-2">
                    <IoCheckmarkCircle className="w-5 h-5" />
                    Added to Cart
                  </span>
                ) : (
                  'Add to Cart'
                )}
              </Button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleWishlist(product)}
                className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-error dark:hover:border-error transition-colors"
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {inWishlist ? (
                  <IoHeart className="w-6 h-6 text-error" />
                ) : (
                  <IoHeartOutline className="w-6 h-6 text-primary dark:text-gray-200 hover:text-error" />
                )}
              </motion.button>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <p className="text-success flex items-center gap-2">
                <IoCheckmarkCircle className="w-5 h-5" />
                In Stock
              </p>
            ) : (
              <p className="text-error">Out of Stock</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
