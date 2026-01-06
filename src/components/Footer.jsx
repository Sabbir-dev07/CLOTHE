import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoPinterest } from 'react-icons/io5';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-footer-light dark:bg-dark-bg border-t border-border dark:border-dark-border mt-20 transition-colors duration-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-12 w-auto text-primary dark:text-gray-50" />
            </Link>
            <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium fashion for the modern lifestyle. Discover timeless pieces that elevate your wardrobe with CLOTHE.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-primary dark:text-gray-50 text-base font-bold mb-6 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/men" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/kids" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-primary dark:text-gray-50 text-base font-bold mb-6 uppercase tracking-wider text-sm">Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors text-sm font-medium">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-primary dark:text-gray-50 text-base font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
            <p className="text-secondary dark:text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              Subscribe to get special offers and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-dark-card border border-border dark:border-dark-border text-primary dark:text-gray-100 placeholder-muted dark:placeholder-gray-500 focus:outline-none focus:border-accent transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary dark:bg-accent text-white dark:text-primary rounded-lg transition-all text-sm font-bold hover:bg-primary/90 dark:hover:bg-accent/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors" aria-label="Facebook">
                <IoLogoFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors" aria-label="Instagram">
                <IoLogoInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors" aria-label="Twitter">
                <IoLogoTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors" aria-label="Pinterest">
                <IoLogoPinterest className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted dark:text-gray-500 text-xs font-medium tracking-wide">
              © {new Date().getFullYear()} CLOTHE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
