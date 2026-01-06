import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const CategoryLayout = ({ category, title, description, heroImage }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);

  // Get unique sub-categories (types) for this category
  const subCategories = ['All', ...new Set(
    products
      .filter(p => p.category === category)
      .map(p => p.type)
      .filter(Boolean)
  )];

  useEffect(() => {
    setLoading(true);
    
    let filtered = products.filter(p => p.category === category);

    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    if (priceRange === 'under50') {
      filtered = filtered.filter(p => p.price < 50);
    } else if (priceRange === '50to100') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over100') {
      filtered = filtered.filter(p => p.price > 100);
    }

    if (sortBy === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setTimeout(() => {
      setFilteredProducts(filtered);
      setLoading(false);
    }, 400);
  }, [category, selectedType, priceRange, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Category Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            {description}
          </motion.p>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start">
          {/* Sub-categories */}
          <div className="flex-1">
            <span className="block text-xs font-bold tracking-widest text-accent uppercase mb-4">Focus On</span>
            <div className="flex flex-wrap gap-3">
              {subCategories.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-primary dark:bg-accent text-white dark:text-primary shadow-lg scale-105'
                      : 'bg-white dark:bg-dark-elevated text-primary dark:text-gray-200 border border-gray-200 dark:border-white/10 hover:border-accent dark:hover:border-accent'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Sorters */}
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex-1 lg:w-48">
              <span className="block text-xs font-bold tracking-widest text-accent uppercase mb-4">Price</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 bg-white dark:bg-dark-elevated dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent text-sm"
              >
                <option value="all">All Prices</option>
                <option value="under50">Under $50</option>
                <option value="50to100">$50 - $100</option>
                <option value="over100">Over $100</option>
              </select>
            </div>
            <div className="flex-1 lg:w-48">
              <span className="block text-xs font-bold tracking-widest text-accent uppercase mb-4">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-white dark:bg-dark-elevated dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent text-sm"
              >
                <option value="default">Default</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
          <p className="text-accent-muted dark:text-gray-400 text-sm font-medium">
            Discovering <span className="text-primary dark:text-white">{filteredProducts.length}</span> exceptional pieces
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-gray-100 dark:bg-dark-elevated rounded-2xl mb-4"></div>
                <div className="h-4 bg-gray-100 dark:bg-dark-elevated rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-100 dark:bg-dark-elevated rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          >
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-32 bg-gray-50 dark:bg-dark-card rounded-3xl border-2 border-dashed border-gray-200 dark:border-white/10">
            <p className="text-3xl font-heading font-bold text-gray-400 dark:text-gray-500 mb-4">Nothing found in this selection</p>
            <button 
              onClick={() => {setSelectedType('All'); setPriceRange('all');}}
              className="text-accent font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryLayout;
