import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Button from '../components/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      detail: "concierge@luxe-brand.com",
      description: "Our team responds within 24 hours."
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      detail: "+1 (888) 123-4567",
      description: "Mon-Fri, 9am - 6pm EST"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Our Flagship",
      detail: "721 Fashion Ave, New York, NY",
      description: "Experience the collection in person."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
          >
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto italic"
          >
            Whether you have a question about our collections or need assistance with an order, our concierge team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-elevated p-10 rounded-2xl shadow-soft border border-gray-100 dark:border-white/10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-soft-lg hover:border-accent/30 dark:hover:border-accent/30"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary dark:text-white mb-2">{info.title}</h3>
                <p className="text-primary dark:text-gray-200 font-semibold mb-2">{info.detail}</p>
                <p className="text-accent-muted dark:text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Messaging */}
      <section className="py-20 bg-white dark:bg-dark-bg transition-colors">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-heading font-bold text-primary dark:text-white leading-tight">
                We'd love to hear <br /> from you.
              </h2>
              <p className="text-lg text-accent-muted dark:text-gray-400 leading-relaxed">
                At CLOTHE, we believe in exceptional service as much as exceptional style. If you have any inquiries regarding your order, our sizing, or our sustainability practices, please don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary dark:text-gray-200">
                  <FiClock className="text-accent" />
                  <span>Available Mon-Fri, 9am - 6pm EST</span>
                </div>
                <div className="flex items-center gap-4 text-primary dark:text-gray-200">
                  <FiSend className="text-accent" />
                  <span>Expect a response within 24 hours</span>
                </div>
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=500&fit=crop" 
                  alt="Customer Support" 
                  className="rounded-2xl shadow-soft-lg grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background dark:bg-dark-card p-10 rounded-3xl border border-gray-100 dark:border-white/10 transition-colors"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto text-4xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary dark:text-white">Message Sent Successfully</h3>
                    <p className="text-accent-muted dark:text-gray-400">Thank you for reaching out. A member of our concierge team will be in touch shortly.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary dark:text-gray-200">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-elevated border border-gray-200 dark:border-white/10 focus:border-accent dark:focus:border-accent text-primary dark:text-white outline-none transition-all placeholder:text-gray-400"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary dark:text-gray-200">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-elevated border border-gray-200 dark:border-white/10 focus:border-accent dark:focus:border-accent text-primary dark:text-white outline-none transition-all placeholder:text-gray-400"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary dark:text-gray-200">Subject</label>
                      <input 
                        type="text" 
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-elevated border border-gray-200 dark:border-white/10 focus:border-accent dark:focus:border-accent text-primary dark:text-white outline-none transition-all placeholder:text-gray-400"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary dark:text-gray-200">Message</label>
                      <textarea 
                        rows="5"
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-elevated border border-gray-200 dark:border-white/10 focus:border-accent dark:focus:border-accent text-primary dark:text-white outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      className="w-full py-4 text-lg"
                      loading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flagship Store Map Section */}
      <section className="h-[450px] relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.317531773!2d-73.987501!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x51b051390ea13b19!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="hover:filter-none transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-8 left-8 z-10">
          <div className="bg-white/95 dark:bg-dark-card/95 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border border-white/20 dark:border-white/10">
            <FiMapPin className="text-accent text-3xl mb-2" />
            <h4 className="font-heading font-bold text-primary dark:text-white">CLOTHE Flagship Store</h4>
            <p className="text-sm text-accent-muted dark:text-gray-400 underline decoration-accent/30 decoration-2">721 Fashion Ave, New York, NY</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
