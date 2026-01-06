import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => setLoading(false), 500);

    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange === 'under50') {
      filtered = filtered.filter(p => p.price < 50);
    } else if (priceRange === '50to100') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
    } else if (priceRange === 'over100') {
      filtered = filtered.filter(p => p.price > 100);
    }

    // Sort
    if (sortBy === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    if (category === 'Men') {
      window.location.href = '/men';
    } else if (category === 'Women') {
      window.location.href = '/women';
    } else if (category === 'Kids') {
      window.location.href = '/kids';
    } else {
      setSelectedCategory('All');
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  };

  const categories = ['All', 'Men', 'Women', 'Kids'];

  return (
    <div className="min-h-screen">
      {/* Collections Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop"
            alt="Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-4"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Discover our curated selection of premium fashion for every style and occasion.
          </motion.p>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-start">
          {/* Categories */}
          <div className="flex-1">
            <span className="block text-xs font-bold tracking-widest text-accent uppercase mb-4">Categories</span>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg scale-105 dark:bg-accent dark:text-primary'
                      : 'bg-white text-primary border border-gray-200 hover:border-accent dark:bg-dark-card dark:text-gray-200 dark:border-white/10 dark:hover:border-accent'
                  }`}
                >
                  {category}
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
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent text-sm dark:bg-dark-card dark:border-white/10 dark:text-gray-200"
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
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent text-sm dark:bg-dark-card dark:border-white/10 dark:text-gray-200"
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
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <p className="text-accent-muted dark:text-gray-400 text-sm font-medium">
            Exploring <span className="text-primary dark:text-white">{filteredProducts.length}</span> curated pieces
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-2">No products found</p>
            <p className="text-accent-muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
