import { motion } from 'framer-motion';
import Logo from './Logo';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-dark-bg"
    >
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border-t-2 border-r-2 border-accent/30"
        />
        
        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-accent/50"
        />

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Logo className="w-16 h-16 text-primary dark:text-white" />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center"
      >
        <h2 className="text-xl font-heading font-bold text-primary dark:text-white tracking-widest uppercase">
          CLOTHE
        </h2>
        <div className="mt-2 w-48 h-[2px] bg-gray-100 dark:bg-white/5 overflow-hidden rounded-full">
          <motion.div
            animate={{ 
              x: [-200, 200]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1/2 h-full bg-accent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
