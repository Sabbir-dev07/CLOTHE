import { motion } from 'framer-motion';
import { FiAward, FiClock, FiGlobe, FiShield, FiHeart, FiSmile } from 'react-icons/fi';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const values = [
    {
      icon: <FiAward className="text-3xl" />,
      title: "Quality First",
      description: "We source only the finest materials and partner with master craftsmen to ensure every piece meets our exacting standards."
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "Timeless Design",
      description: "We don't follow passing trends. Our designs are created to be relevant and elegant for years to come."
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Sustainable Focus",
      description: "Commitment to ethical practices and reducing our environmental footprint is at the heart of everything we do."
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Built to Last",
      description: "Durability is modern luxury. Our products are engineered to withstand the test of time and maintain their beauty."
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-dark-bg overflow-hidden transition-colors duration-300">
      {/* Premium Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80 dark:from-dark-bg/80 dark:via-dark-bg/60 dark:to-dark-bg/90"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight drop-shadow-xl"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-2xl mx-auto font-light italic"
          >
            "Redefining modern fashion through the lens of timeless craftsmanship."
          </motion.p>
        </div>
      </section>

      {/* The Origin Section - Split Layout */}
      <section className="py-24 bg-white dark:bg-dark-bg text-primary dark:text-gray-100 transition-colors duration-300">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-block px-4 py-1 bg-accent/10 dark:bg-accent/20 border border-accent/20 rounded-full">
                <span className="text-accent font-semibold tracking-wider text-xs uppercase">Est. 2026</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white leading-tight">
                Crafted for those who <br /> 
                <span className="text-accent">value the exceptional</span>
              </h2>
              <div className="space-y-6 text-lg text-secondary dark:text-gray-300 leading-relaxed">
                <p>
                  CLOTHE began with a simple observation: the world of fashion was moving too fast, sacrificing quality for trends and durability for mass production. We ventured to create an alternative.
                </p>
                <p>
                  Today, we stand as a beacon for those who seek more from their wardrobe. We blend traditional tailoring techniques with modern silhouettes, ensuring that every garment tells a story of precision and passion.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/shop">
                  <Button variant="primary" size="lg">Explore Our Craft</Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 dark:border-accent/10 rounded-2xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=1500&fit=crop"
                alt="Craftsmanship"
                className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-soft-lg dark:shadow-none transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Interactive Cards */}
      <section className="py-24 bg-background-alt dark:bg-dark-elevated relative overflow-hidden transition-colors duration-300">
        {/* Background micro-elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-6">
              The Principles behind CLOTHE
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-secondary dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment goes beyond aesthetics. We are driven by a set of core values that define every interaction and product.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-card p-10 rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-white/10 transition-all duration-300 hover:shadow-soft-lg hover:border-accent/30 group"
              >
                <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-8 transition-colors group-hover:bg-accent group-hover:text-white duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary dark:text-white mb-4">{value.title}</h3>
                <p className="text-secondary dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes / Vision Section */}
      <section className="py-24 bg-primary dark:bg-black text-white overflow-hidden transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=400&fit=crop" className="rounded-2xl object-cover w-full h-full shadow-2xl" alt="Atelier 1" />
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=400&fit=crop" className="rounded-2xl mt-8 object-cover w-full h-full shadow-2xl" alt="Atelier 2" />
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop" className="rounded-2xl -mt-8 object-cover w-full h-full shadow-2xl" alt="Atelier 3" />
              <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=400&fit=crop" className="rounded-2xl object-cover w-full h-full shadow-2xl" alt="Atelier 4" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Our Vision for <br />
                <span className="text-accent italic">The Future</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                  We envision a future where fashion is more thoughtful. A world where the people who make our clothes are empowered, the materials are noble, and the design transcends seasons.
                </p>
                <p>
                  At the CLOTHE Atelier, we are constantly innovating—exploring bio-based textiles and circular production methods that allow us to bring you luxury without compromise.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-1">0%</h4>
                  <p className="text-gray-400 text-sm">Synthetic Waste Goal</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-1">100%</h4>
                  <p className="text-gray-400 text-sm">Ethical Sourcing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-dark-bg text-center transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white mb-8">
              Join the CLOTHE Movement
            </h2>
            <p className="text-xl text-secondary dark:text-gray-300 mb-10 leading-relaxed">
              Experience the harmony of modern elegance and ethical craftsmanship. Start your journey with our latest arrivals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shop">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Shop New Arrivals</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Join Community</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

