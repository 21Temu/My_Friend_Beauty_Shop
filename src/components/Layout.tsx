import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, ChevronUp, Instagram, Facebook, Send } from 'lucide-react';
import clsx from 'clsx';
import { useLanguage } from '../context/LanguageContext';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-heading font-bold tracking-wider text-gradient">
            MELAKE COSMETICS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-80',
                  location.pathname === link.path ? 'text-gold-500' : 'text-gradient'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="px-3 py-1 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {language === 'en' ? 'አማ' : 'EN'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="px-2 py-1 text-xs font-medium border border-gray-300 dark:border-gray-700 rounded-sm"
            >
              {language === 'en' ? 'አማ' : 'EN'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-heading font-medium tracking-widest text-gradient hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-heading font-bold tracking-wider text-gold-500 mb-6">MELAKE COSMETICS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.desc')}
              </p>
            </div>

            <div>
              <h4 className="font-heading font-medium tracking-widest uppercase mb-6 text-sm">{t('footer.contact')}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>ደብረማርቆስ ምንጣፍ ተራ ሱቅ ቁጥር 27</li>
                <li>0900924448</li>
                <li><a href="mailto:mihiretmelake990@gmail.com" className="hover:text-gold-500 transition-colors">mihiretmelake990@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-medium tracking-widest uppercase mb-6 text-sm">{t('footer.follow')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://t.me/abu_orthodox" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all font-bold">
                  t
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center">
            <p>&copy; {new Date().getFullYear()} Melake Cosmetics. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-gold-500 text-black rounded-full shadow-lg hover:bg-gold-400 transition-colors z-40"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
