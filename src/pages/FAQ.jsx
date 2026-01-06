import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiSearch, FiShoppingBag, FiCreditCard, FiPackage, FiInfo } from 'react-icons/fi';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Ordering');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Ordering', icon: <FiShoppingBag /> },
    { name: 'Billing', icon: <FiCreditCard /> },
    { name: 'Shipping', icon: <FiPackage /> },
    { name: 'Return/Refund', icon: <FiInfo /> }
  ];

  const faqs = [
    {
      category: 'Ordering',
      question: "How do I place an order?",
      answer: "Wait for items to be added to your cart, then proceed to the checkout page. Follow the prompts to enter your shipping and billing information to complete your order."
    },
    {
      category: 'Ordering',
      question: "Can I change or cancel my order?",
      answer: "We process orders quickly, but we will do our best to accommodate changes if the order hasn't been dispatched. Please contact our concierge team immediately if you need to modify your order."
    },
    {
      category: 'Billing',
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and PayPal."
    },
    {
      category: 'Shipping',
      question: "Do you ship internationally?",
      answer: "Yes, CLOTHE ships to over 50 countries worldwide. Shipping costs and delivery times vary by destination."
    },
    {
      category: 'Return/Refund',
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of delivery. Items must be in their original condition with all tags attached."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'All' || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            How can we <span className="text-accent">help?</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto relative px-4">
            <FiSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input 
              type="text" 
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 border border-white/20 focus:bg-white focus:text-primary focus:border-accent outline-none transition-all placeholder-gray-400"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs & FAQ Content */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4 space-y-4">
              <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-6 px-4">Categories</h3>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 px-4">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                        setActiveCategory(cat.name);
                        setActiveQuestion(null);
                    }}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal ${
                      activeCategory === cat.name 
                        ? 'bg-accent text-primary shadow-lg shadow-accent/20' 
                        : 'bg-white dark:bg-dark-elevated text-accent-muted dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-semibold">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Questions List */}
            <div className="lg:w-3/4 px-4">
              <motion.div 
                key={activeCategory + searchQuery}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      className="bg-white dark:bg-dark-elevated rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-soft hover:shadow-soft-lg transition-all"
                    >
                      <button 
                        onClick={() => setActiveQuestion(activeQuestion === idx ? null : idx)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-heading font-bold text-primary dark:text-white">{faq.question}</span>
                        <FiChevronDown 
                          className={`text-xl text-accent transition-transform duration-300 ${activeQuestion === idx ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeQuestion === idx && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-background/50 dark:bg-black/20"
                          >
                            <div className="px-8 pb-8 text-accent-muted dark:text-gray-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white dark:bg-dark-elevated rounded-3xl border border-gray-100 dark:border-white/10">
                    <div className="text-6xl mb-4 text-gray-200 dark:text-gray-700">🔍</div>
                    <h3 className="text-xl font-heading font-bold text-primary dark:text-white">No results found</h3>
                    <p className="text-accent-muted dark:text-gray-400">Try using different keywords or broadening your search.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Further Help CTA */}
      <section className="py-20 bg-white dark:bg-dark-bg transition-colors text-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-background dark:bg-dark-card p-12 rounded-3xl border border-gray-100 dark:border-white/10">
            <h2 className="text-3xl font-heading font-bold text-primary dark:text-white mb-4">Still have questions?</h2>
            <p className="text-accent-muted dark:text-gray-400 mb-8">Our support team is available mon-fri to answer your queries.</p>
            <Link to="/contact">
              <Button variant="primary" size="lg">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
