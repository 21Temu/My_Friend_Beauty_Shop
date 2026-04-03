import { motion } from 'motion/react';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop" 
            alt="About Melake Cosmetics" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
          >
            {t('about.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto"
          ></motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 dark:text-white transition-colors duration-300">{t('about.subtitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light transition-colors duration-300">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light transition-colors duration-300">
              {t('about.p2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mb-6 transition-colors duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-4 dark:text-white transition-colors duration-300">{t('about.qTitle')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                {t('about.qDesc')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mb-6 transition-colors duration-300">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-4 dark:text-white transition-colors duration-300">{t('about.cTitle')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                {t('about.cDesc')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mb-6 transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-4 dark:text-white transition-colors duration-300">{t('about.rTitle')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                {t('about.rDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
