import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiInfo, FiX } from 'react-icons/fi';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="pointer-events-auto"
            >
              <div className={`
                relative overflow-hidden flex items-center gap-4 px-6 py-4 rounded-2xl shadow-premium backdrop-blur-md border transition-all
                ${toast.type === 'success' 
                  ? 'bg-white/90 dark:bg-dark-card/90 border-success/20 text-success' 
                  : toast.type === 'error'
                  ? 'bg-white/90 dark:bg-dark-card/90 border-error/20 text-error'
                  : 'bg-white/90 dark:bg-dark-card/90 border-accent/20 text-accent'
                }
              `}>
                <div className="text-xl">
                  {toast.type === 'success' && <FiCheckCircle />}
                  {toast.type === 'error' && <FiXCircle />}
                  {toast.type === 'info' && <FiInfo />}
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary dark:text-white leading-tight">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                >
                  <FiX className="text-gray-400" />
                </button>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  className={`absolute bottom-0 left-0 h-[3px] ${
                    toast.type === 'success' ? 'bg-success' : toast.type === 'error' ? 'bg-error' : 'bg-accent'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
