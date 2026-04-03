import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const categories = ['All', 'Perfume', 'Skin', 'Hair', 'Cloth'];

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [filter]);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-12 md:mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop" 
            alt="Products" 
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
            {t('products.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
            {t('products.desc')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold-500 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 pb-24">

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex overflow-x-auto justify-start md:justify-center gap-4 mb-12 md:mb-16 pb-2 px-4 -mx-4 md:px-0 md:mx-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`whitespace-nowrap snap-center px-4 md:px-6 py-2 text-xs md:text-sm font-medium uppercase tracking-widest transition-all duration-300 border-b-2 ${
                filter === category 
                  ? 'border-gold-500 text-gold-600 dark:text-gold-400' 
                  : 'border-transparent text-gray-500 hover:text-black dark:hover:text-white'
              }`}
            >
              {t(`products.${category.toLowerCase()}`)}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-x-8 md:gap-y-12">
          {isLoading ? (
            // Skeletons
            [...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 mb-2 md:mb-6 rounded-sm"></div>
                <div className="h-2 md:h-3 bg-gray-200 dark:bg-gray-800 w-1/4 mx-auto mb-2 md:mb-3 rounded-sm"></div>
                <div className="h-3 md:h-5 bg-gray-200 dark:bg-gray-800 w-3/4 mx-auto mb-2 md:mb-3 rounded-sm"></div>
                <div className="h-2 md:h-4 bg-gray-200 dark:bg-gray-800 w-1/3 mx-auto rounded-sm"></div>
              </div>
            ))
          ) : (
            filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/products/${product.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-2 md:mb-6 bg-white dark:bg-black">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center px-1">
                    <p className="text-[9px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{t(`products.${product.category.toLowerCase()}`)}</p>
                    <h3 className="text-[11px] md:text-lg font-heading font-medium mb-1 md:mb-2 group-hover:text-gold-500 transition-colors line-clamp-2 md:line-clamp-none leading-tight">{product.name}</h3>
                    <p className="text-[10px] md:text-base text-gold-600 dark:text-gold-400 font-medium">{product.price.toFixed(2)} Birr</p>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
