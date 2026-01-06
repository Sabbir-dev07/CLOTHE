import { motion } from 'framer-motion';
import { IoPersonOutline, IoLogOutOutline } from 'react-icons/io5';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-card rounded-2xl shadow-soft-lg p-8 transition-colors"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
              <IoPersonOutline className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold text-primary dark:text-white">
                {user?.name}
              </h1>
              <p className="text-accent-muted dark:text-gray-400">{user?.email}</p>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary dark:text-white">
              Account Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-accent-muted dark:text-gray-400 mb-2">
                  Full Name
                </label>
                <p className="text-lg text-primary dark:text-gray-200">{user?.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-accent-muted dark:text-gray-400 mb-2">
                  Email Address
                </label>
                <p className="text-lg text-primary dark:text-gray-200">{user?.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-accent-muted dark:text-gray-400 mb-2">
                  Member Since
                </label>
                <p className="text-lg text-primary dark:text-gray-200">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-accent-muted dark:text-gray-400 mb-2">
                  Account Status
                </label>
                <p className="text-lg text-success font-medium">Active</p>
              </div>
            </div>
          </div>

          {/* Order History (Mock) */}
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-semibold text-primary dark:text-white mb-4">
              Recent Orders
            </h2>
            <div className="bg-gray-50 dark:bg-dark-elevated rounded-xl p-8 text-center transition-colors">
              <p className="text-accent-muted dark:text-gray-400">No orders yet</p>
              <p className="text-sm text-accent-muted dark:text-gray-400 mt-2">
                Start shopping to see your order history here
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="outline"
            size="lg"
            className="w-full md:w-auto"
          >
            <span className="flex items-center gap-2">
              <IoLogOutOutline className="w-5 h-5" />
              Logout
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
