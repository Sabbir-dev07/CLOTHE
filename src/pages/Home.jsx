import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowForward, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import Button from '../components/Button';

const Home = () => {
  // Initial default reviews
  const defaultReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      rating: 5,
      review: "Absolutely love the quality and style! The fabrics are premium and the fit is perfect. CLOTHE has become my go-to store for all my fashion needs.",
      verified: true,
      color: "from-accent to-yellow-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      initials: "MC",
      rating: 5,
      review: "Fast shipping, excellent customer service, and the clothes exceeded my expectations. The attention to detail is remarkable. Highly recommended!",
      verified: true,
      color: "from-primary to-gray-700"
    },
    {
      id: 3,
      name: "Emma Peterson",
      initials: "EP",
      rating: 5,
      review: "I'm impressed by the sustainable practices and ethical sourcing. Beautiful designs that make me feel confident and stylish every day!",
      verified: true,
      color: "from-accent/80 to-accent"
    }
  ];

  // State for reviews and carousel
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  
  // State for review form
  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    review: ''
  });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('clotheReviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      setReviews(defaultReviews);
      localStorage.setItem('clotheReviews', JSON.stringify(defaultReviews));
    }
  }, []);

  // Update reviews per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle review form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: Date.now(),
      name: reviewForm.name,
      initials: reviewForm.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      rating: reviewForm.rating,
      review: reviewForm.review,
      verified: false,
      color: "from-gray-600 to-gray-800"
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('luxeReviews', JSON.stringify(updatedReviews));
    
    // Reset form
    setReviewForm({ name: '', rating: 5, review: '' });
    alert('Thank you for your review! 🌟');
  };

  // Carousel navigation
  const nextReview = () => {
    setCurrentReviewIndex((prev) => 
      prev + reviewsPerPage >= reviews.length ? 0 : prev + reviewsPerPage
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => 
      prev - reviewsPerPage < 0 ? Math.max(0, reviews.length - reviewsPerPage) : prev - reviewsPerPage
    );
  };

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const heroSlides = [
    {
      id: 1,
      title: "Elevate Your Style",
      subtitle: "Discover timeless fashion pieces that define modern elegance",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop",
      tag: "NEW ARRIVALS",
      accent: "from-accent to-yellow-600"
    },
    {
      id: 2,
      title: "Luxury Essentials",
      subtitle: "Crafted with the finest materials for those who appreciate quality",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop",
      tag: "SPRING '26",
      accent: "from-gray-400 to-gray-600"
    },
    {
      id: 3,
      title: "Ethical Craft",
      subtitle: "Fashion that feels good and does good for the planet",
      image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1920&h=1080&fit=crop",
      tag: "SUSTAINABLE",
      accent: "from-green-400 to-emerald-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20
    });
  };

  const categories = [
    {
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&h=1000&fit=crop",
      link: "/men"
    },
    {
      name: "Women's Collection",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
      link: "/women"
    },
    {
      name: "Kids' Collection",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=1000&fit=crop",
      link: "/kids"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <section 
        className="relative h-screen flex items-center overflow-hidden bg-primary"
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Parallax Image */}
            <motion.div
              style={{
                x: mousePos.x,
                y: mousePos.y,
                scale: 1.1
              }}
              className="absolute inset-0"
            >
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
            </motion.div>

            {/* Content Overlay */}
            <div className="container-custom relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl w-full">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`inline-block px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white bg-gradient-to-r ${heroSlides[currentSlide].accent} mb-4 sm:mb-6`}
                >
                  {heroSlides[currentSlide].tag}
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                  {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'text-accent block md:inline' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed font-light"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                >
                  <Link to="/shop">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      <span className="flex items-center justify-center gap-2">
                        Shop Collection
                        <IoArrowForward />
                      </span>
                    </Button>
                  </Link>
                  <Link to="/about" className="w-full sm:w-auto">
                    <button className="w-full px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium backdrop-blur-sm">
                      Our Story
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 md:gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative px-2 sm:px-3 md:px-4 py-2"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-8 sm:w-10 md:w-12 bg-accent' : 'w-4 sm:w-5 md:w-6 bg-white/30 group-hover:bg-white/50'}`}></div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:flex absolute bottom-8 right-8 xl:right-12 z-20 flex-col items-center gap-4 text-white/40"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase vertical-text">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="container-custom py-12 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-accent-muted dark:text-gray-400 max-w-2xl mx-auto">
              Explore our curated collections for men, women, and kids
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft-lg"
              >
                <Link to={category.link}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                      Explore
                      <IoArrowForward className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="bg-background dark:bg-dark-bg py-12 md:py-20 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1000&fit=crop"
                alt="Featured"
                className="rounded-2xl shadow-soft-lg w-full"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-gray-50 mb-6">
                Premium Quality, Timeless Design
              </h2>
              <p className="text-lg text-accent-muted dark:text-gray-400 leading-relaxed mb-8">
                Every piece in our collection is carefully curated to bring you the perfect blend of comfort, style, and durability. We believe in fashion that lasts.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2">100+</h3>
                  <p className="text-accent-muted dark:text-gray-400">Premium Products</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2">24/7</h3>
                  <p className="text-accent-muted dark:text-gray-400">Customer Support</p>
                </div>
              </div>
              <Link to="/shop">
                <Button variant="primary" size="lg">
                  Discover More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-gray-800 to-gray-900 dark:from-black dark:via-dark-bg dark:to-black relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Join Our Fashion Community
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Subscribe to our newsletter and get exclusive access to new collections, special offers, and style tips delivered to your inbox.
              </p>
            </motion.div>
            
            <motion.form
              variants={itemVariants}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing! 🎉');
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-dark-elevated text-primary dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent shadow-soft-lg transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full transition-all duration-300 shadow-soft-lg hover:shadow-xl hover:scale-105"
              >
                Subscribe Now
              </button>
            </motion.form>
            
            <motion.p variants={itemVariants} className="text-sm text-gray-300 mt-4">
              🔒 We respect your privacy. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 md:py-20 bg-background dark:bg-dark-bg transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-gray-50 mb-4">
                Special Offers
              </h2>
              <p className="text-lg text-accent-muted dark:text-gray-400 max-w-2xl mx-auto">
                Don't miss out on our exclusive deals and limited-time promotions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Offer 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-accent to-yellow-600 rounded-2xl p-8 text-primary overflow-hidden shadow-soft-lg group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🎁</div>
                  <h3 className="text-2xl font-bold mb-2">New Customer</h3>
                  <p className="text-5xl font-bold mb-3">20% OFF</p>
                  <p className="text-gray-800 mb-6">Your first purchase with code: WELCOME20</p>
                  <Link to="/shop">
                    <button className="w-full px-6 py-3 bg-primary hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Offer 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-gray-800 to-primary rounded-2xl p-8 text-white overflow-hidden shadow-soft-lg group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🚚</div>
                  <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
                  <p className="text-5xl font-bold mb-3 text-accent">$50+</p>
                  <p className="text-gray-200 mb-6">On all orders over $50. No code needed!</p>
                  <Link to="/shop">
                    <button className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full transition-all duration-300 shadow-lg">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Offer 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-accent/90 to-accent rounded-2xl p-8 text-primary overflow-hidden shadow-soft-lg group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
                  <p className="text-5xl font-bold mb-3">UP TO 50%</p>
                  <p className="text-gray-800 mb-6">Limited time offers on selected items</p>
                  <Link to="/shop">
                    <button className="w-full px-6 py-3 bg-primary hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
                      View Deals
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="py-12 md:py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-gray-50 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-accent-muted dark:text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied customers who love our products
              </p>
            </motion.div>

            {/* Reviews Carousel */}
            {reviews.length > 0 && (
              <div className="relative mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {reviews.slice(currentReviewIndex, currentReviewIndex + reviewsPerPage).map((review) => (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="bg-background dark:bg-dark-card rounded-2xl p-8 shadow-soft-lg dark:shadow-none border border-gray-200 dark:border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-xl ${i < review.rating ? 'text-accent' : 'text-gray-300'}`}>★</span>
                          ))}
                        </div>
                        <p className="text-accent-muted dark:text-gray-400 mb-6 leading-relaxed">
                          "{review.review}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold`}>
                            {review.initials}
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary dark:text-gray-50">{review.name}</h4>
                            <p className="text-sm text-accent-muted dark:text-gray-500">
                              {review.verified ? 'Verified Buyer' : 'Customer Review'}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Carousel Navigation */}
                {reviews.length > reviewsPerPage && (
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={prevReview}
                      className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-primary flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="Previous reviews"
                    >
                      <IoChevronBack className="text-xl" />
                    </button>
                    <span className="text-accent-muted dark:text-gray-400">
                      {Math.floor(currentReviewIndex / reviewsPerPage) + 1} / {Math.ceil(reviews.length / reviewsPerPage)}
                    </span>
                    <button
                      onClick={nextReview}
                      className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-primary flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="Next reviews"
                    >
                      <IoChevronForward className="text-xl" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Review Submission Form */}
            <motion.div
              variants={itemVariants}
              className="max-w-2xl mx-auto bg-background dark:bg-dark-card rounded-2xl p-8 shadow-soft-lg dark:shadow-none border border-gray-200 dark:border-white/10"
            >
              <h3 className="text-2xl font-heading font-bold text-primary dark:text-gray-50 mb-2 text-center">
                Share Your Experience
              </h3>
              <p className="text-accent-muted dark:text-gray-400 text-center mb-6">
                We'd love to hear about your shopping experience with CLOTHE
              </p>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="reviewName" className="block text-sm font-semibold text-primary dark:text-gray-200 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="reviewName"
                    required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-elevated border border-gray-300 dark:border-white/10 text-primary dark:text-gray-50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all placeholder:text-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Rating Selector */}
                <div>
                  <label className="block text-sm font-semibold text-primary dark:text-gray-200 mb-2">
                    Your Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className="text-4xl transition-all hover:scale-110"
                      >
                        <span className={star <= reviewForm.rating ? 'text-accent' : 'text-gray-300 dark:text-gray-600'}>★</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label htmlFor="reviewText" className="block text-sm font-semibold text-primary dark:text-gray-200 mb-2">
                    Your Review *
                  </label>
                  <textarea
                    id="reviewText"
                    required
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-elevated border border-gray-300 dark:border-white/10 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-primary dark:text-gray-50 transition-all resize-none placeholder:text-gray-400"
                    placeholder="Tell us about your experience with our products..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
