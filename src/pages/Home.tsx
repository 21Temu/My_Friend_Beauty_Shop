import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop" 
            alt="Melake Cosmetics" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block text-gold-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
          >
            {t('home.subtitle')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            {t('home.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-pink-50/90 mb-10 max-w-2xl mx-auto font-light"
          >
            {t('home.desc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-dark-900 font-medium uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 rounded-sm"
            >
              {t('home.shopBtn')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid grid-cols-3 gap-2 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-3 md:mb-6 text-gold-500 transition-colors duration-300">
                <Truck className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[11px] md:text-lg font-heading font-medium mb-1 md:mb-3 dark:text-white transition-colors duration-300">{t('home.delivery')}</h3>
              <p className="text-[9px] md:text-sm text-gray-500 dark:text-gray-400 leading-tight md:leading-relaxed transition-colors duration-300">{t('home.deliveryDesc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-3 md:mb-6 text-gold-500 transition-colors duration-300">
                <Clock className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[11px] md:text-lg font-heading font-medium mb-1 md:mb-3 dark:text-white transition-colors duration-300">{t('home.response')}</h3>
              <p className="text-[9px] md:text-sm text-gray-500 dark:text-gray-400 leading-tight md:leading-relaxed transition-colors duration-300">{t('home.responseDesc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center mb-3 md:mb-6 text-gold-500 transition-colors duration-300">
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[11px] md:text-lg font-heading font-medium mb-1 md:mb-3 dark:text-white transition-colors duration-300">{t('home.quality')}</h3>
              <p className="text-[9px] md:text-sm text-gray-500 dark:text-gray-400 leading-tight md:leading-relaxed transition-colors duration-300">{t('home.qualityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 dark:text-white transition-colors duration-300">{t('home.licenseTitle')}</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-colors duration-300">
            {t('home.licenseDesc')}
          </p>
          
          <div className="max-w-xs md:max-w-sm mx-auto bg-white dark:bg-gray-900 p-4 shadow-sm border border-gray-200 dark:border-gray-800 rounded-sm transition-colors duration-300">
            <img 
              src="/licence.png" 
              alt="Working License" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
