import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoTrashOutline, IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <IoCartOutline className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Your cart is empty
          </h2>
          <p className="text-accent-muted mb-8">
            Start shopping to add items to your cart
          </p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Shopping Cart ({getCartCount()})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.cartItemId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white dark:bg-dark-card rounded-xl shadow-soft p-6 transition-colors"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg text-primary dark:text-gray-50 hover:text-accent dark:hover:text-accent transition-colors mb-1">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-accent-muted dark:text-gray-400 mb-2">
                      Size: {item.selectedSize}
                    </p>
                    <p className="text-lg font-bold text-primary dark:text-gray-50">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                      aria-label="Remove item"
                    >
                      <IoTrashOutline className="w-5 h-5 text-error" />
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-white/10 rounded hover:border-primary dark:hover:border-accent text-primary dark:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="font-semibold w-8 text-center text-primary dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-white/10 rounded hover:border-primary dark:hover:border-accent text-primary dark:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-soft p-6 sticky top-24 transition-colors">
              <h2 className="text-2xl font-heading font-bold text-primary dark:text-gray-50 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-accent-muted dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-accent-muted dark:text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {subtotal > 0 && subtotal <= 100 && (
                  <p className="text-sm text-accent">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="border-t border-gray-200 dark:border-white/10 pt-4">
                  <div className="flex justify-between text-xl font-bold text-primary dark:text-gray-50">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <Link to="/shop">
                <button className="w-full mt-4 text-accent hover:text-accent/80 transition-colors font-medium">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
