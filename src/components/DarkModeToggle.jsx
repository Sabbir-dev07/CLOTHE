import { motion } from 'framer-motion';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-yellow-600 dark:from-dark-elevated dark:to-dark-bg shadow-lg hover:shadow-xl border border-transparent dark:border-white/10 transition-all duration-300 flex items-center justify-center group"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <IoSunnyOutline className="w-6 h-6 text-yellow-300" />
        ) : (
          <IoMoonOutline className="w-6 h-6 text-primary" />
        )}
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1 bg-primary dark:bg-white text-white dark:text-primary text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </motion.button>
  );
};

export default DarkModeToggle;
