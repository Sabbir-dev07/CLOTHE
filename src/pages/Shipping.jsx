import { motion } from 'framer-motion';
import { FiTruck, FiRotateCcw, FiShield, FiInfo, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Shipping = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const policies = [
    {
      title: "Shipping Options",
      content: "We offer several shipping methods to meet your needs. Standard shipping (3-5 business days) is complimentary on all orders over $150. Express shipping (1-2 business days) is available for a flat fee of $25. All orders are processed Monday through Friday, excluding holidays."
    },
    {
      title: "Tracking Your Order",
      content: "Once your order has been dispatched, you will receive a confirmation email containing a tracking number and a link to monitor your shipment's progress. Please allow 24-48 hours for tracking information to populate."
    },
    {
      title: "Return Policy",
      content: "If you are not entirely satisfied with your purchase, we accept returns within 30 days of delivery. Items must be in their original condition, unworn, unwashed, and with all tags attached. Returns are complimentary for all domestic orders."
    },
    {
      title: "International Shipping",
      content: "CLOTHE currently ships to over 50 countries worldwide. International shipping rates and delivery times vary by location and will be calculated at checkout. Please note that customs duties and taxes are the responsibility of the recipient."
    }
  ];

  const coreCards = [
    {
      icon: <FiTruck />,
      title: "Global Shipping",
      description: "Fast and secure delivery to over 50 countries with real-time tracking."
    },
    {
      icon: <FiRotateCcw />,
      title: "30-Day Returns",
      description: "Complimentary returns and exchanges on all domestic orders within 30 days."
    },
    {
      icon: <FiShield />,
      title: "Secure Delivery",
      description: "Every shipment is insured and requires a signature upon arrival for your peace of mind."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&h=600&fit=crop" 
            alt="Shipping Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
          >
            Shipping & <span className="text-accent">Returns</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light"
          >
            Everything you need to know about receiving and returning your CLOTHE pieces.
          </motion.p>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-dark-elevated p-10 rounded-2xl shadow-soft border border-gray-100 dark:border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-3xl mx-auto mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-3">{card.title}</h3>
                <p className="text-accent-muted dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details Accordion */}
      <section className="py-20 bg-white dark:bg-dark-bg transition-colors">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white mb-4">Detailed Policies</h2>
              <p className="text-accent-muted dark:text-gray-400">Please review our full terms regarding delivery and returns below.</p>
            </div>

            <div className="space-y-4">
              {policies.map((policy, idx) => (
                <div 
                  key={idx}
                  className="border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden bg-background dark:bg-dark-card"
                >
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-all hover:bg-white dark:hover:bg-dark-elevated"
                  >
                    <span className="text-lg font-heading font-bold text-primary dark:text-white">{policy.title}</span>
                    <FiChevronDown 
                      className={`text-xl text-accent transition-transform duration-300 ${activeAccordion === idx ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: activeAccordion === idx ? 'auto' : 0,
                      opacity: activeAccordion === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-dark-card"
                  >
                    <div className="px-8 pb-8 text-accent-muted dark:text-gray-400 leading-relaxed">
                      {policy.content}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-background dark:bg-dark-bg transition-colors">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary p-12 rounded-3xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-accent text-4xl shrink-0">
                <FiInfo />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold">Holiday Shipping Notice</h3>
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                  Due to high seasonal demand, please allow an additional 2-3 business days for order processing. We recommend placing your orders early to ensure delivery before the holiday period.
                </p>
                <Link to="/shop" className="inline-block pt-2">
                  <Button variant="secondary">Continue Shopping</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
