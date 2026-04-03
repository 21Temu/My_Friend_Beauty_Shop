import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CreditCard, Wallet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mihiretmelake990@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Us" 
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
            {t('contact.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-gold-500 mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Payment */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-8">{t('contact.info')}</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mr-6 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-1">{t('contact.address')}</h3>
                  <p className="text-lg">{t('contact.addressVal')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mr-6 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-1">{t('contact.phone')}</h3>
                  <p className="text-lg">0900924448</p>
                  <p className="text-sm text-gray-500 mt-1">Melake Mihiret</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center text-gold-500 mr-6 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-1">{t('contact.email')}</h3>
                  <a href="mailto:mihiretmelake990@gmail.com" className="text-lg hover:text-gold-500 transition-colors">
                    mihiretmelake990@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-heading font-bold mb-8">{t('contact.payment')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm bg-white dark:bg-black text-black dark:text-white hover:border-gold-500 transition-colors duration-300">
                <CreditCard className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">{t('contact.bank')}</h3>
                <p className="text-xl font-mono tracking-wider">1000406217756</p>
                <p className="text-sm text-gray-500 mt-2">Melake Mihiret</p>
              </div>
              
              <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-sm bg-white dark:bg-black text-black dark:text-white hover:border-gold-500 transition-colors duration-300">
                <Wallet className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">{t('contact.telebirr')}</h3>
                <p className="text-xl font-mono tracking-wider">0900924448</p>
                <p className="text-sm text-gray-500 mt-2">Melake Mihiret</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-black text-black dark:text-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300"
          >
            <h2 className="text-2xl font-heading font-bold mb-8">{t('contact.sendMessage')}</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-6 rounded-sm text-center">
                <p className="font-medium text-lg mb-2">{t('contact.success')}</p>
                <p>{t('contact.successDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-gold-500 focus:ring-0 px-4 py-3 outline-none transition-colors duration-300 rounded-sm text-black dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">{t('contact.emailAddr')}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-gold-500 focus:ring-0 px-4 py-3 outline-none transition-colors duration-300 rounded-sm text-black dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">{t('contact.message')}</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-gold-500 focus:ring-0 px-4 py-3 outline-none transition-colors duration-300 rounded-sm resize-none text-black dark:text-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium uppercase tracking-wider hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-white dark:hover:text-white transition-all duration-300 rounded-sm"
                >
                  {t('contact.sendBtn')} <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
