import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock authentication - in production, this would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple validation
        if (!email || !password) {
          reject(new Error('Email and password are required'));
          return;
        }

        // Mock successful login
        const userData = {
          id: 1,
          name: email.split('@')[0],
          email: email,
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        resolve(userData);
      }, 1000);
    });
  };

  const register = async (name, email, password) => {
    // Mock registration - in production, this would call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simple validation
        if (!name || !email || !password) {
          reject(new Error('All fields are required'));
          return;
        }

        // Mock successful registration
        const userData = {
          id: Date.now(),
          name: name,
          email: email,
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        resolve(userData);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
