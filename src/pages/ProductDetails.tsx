import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Send, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [quantity, setQuantity] = useState<number | ''>(1);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">{t('details.notFound')}</h2>
        <p className="text-gray-500 mb-8">{t('details.notFoundDesc')}</p>
        <Link to="/products" className="text-gold-500 hover:text-gold-600 font-medium uppercase tracking-widest flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> {t('details.backShop')}
        </Link>
      </div>
    );
  }

  const appUrl = window.location.origin;
  const imageUrl = `${appUrl}${product.image}`;
  const parsedQuantity = typeof quantity === 'number' ? quantity : 1;
  const totalPrice = product.price * parsedQuantity;
  const message = `Hello, I would like to order:
Product: ${product.name}
Quantity: ${parsedQuantity}
Total Price: ${totalPrice.toFixed(2)} Birr

Customer Details:
Name: ${name || 'Not provided'}
Phone: ${phone || 'Not provided'}
Delivery Address: ${address || 'Not provided'}

Product Image: ${imageUrl}

*እባክዎ ብር የከፈሉበትን ደረሰኝ ፎቶ በቴሌግራም መላክ አይርሱ እኔን ስለመረጡ አመሰግናለሁ። 
 Please remember to attach your payment screenshot in the Telegram chat.`;
  const telegramLink = `https://t.me/Melee8?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full pt-10 pb-24 bg-white dark:bg-black transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <Link to="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-gold-500 transition-colors mb-10 uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" /> {t('details.back')}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-2/3 max-w-[250px] mx-auto md:w-full md:max-w-none aspect-square md:aspect-[4/5] overflow-hidden bg-white dark:bg-black rounded-sm shadow-sm md:shadow-none"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs md:text-sm text-gold-500 uppercase tracking-widest mb-3 md:mb-4">{t(`products.${product.category.toLowerCase()}`)}</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6 leading-tight">{product.name}</h1>
            <p className="text-xl md:text-2xl text-black dark:text-white mb-6 md:mb-8">{product.price.toFixed(2)} Birr</p>
            
            <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-6 md:mb-8"></div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 md:mb-10 text-base md:text-lg font-light">
              {product.description}
            </p>

            <div className="bg-white text-black dark:bg-black dark:text-white p-5 md:p-6 rounded-sm mb-8 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-base md:text-lg font-heading font-bold mb-3 md:mb-4">{t('details.howToOrder')}</h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {t('details.orderDesc', { price: product.price.toFixed(2) })}
              </p>
              
              <div className="space-y-3 mb-5 md:mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{t('details.bank')}</span>
                  <span className="font-mono font-medium text-sm md:text-base">1000406217756</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{t('details.telebirr')}</span>
                  <span className="font-mono font-medium text-sm md:text-base">0900924448</span>
                </div>
                <div className="text-right text-[10px] md:text-xs text-gray-500 dark:text-gray-400">{t('details.accountName')}: Melake Mihiret</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('details.name')}</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError(false);
                    }}
                    placeholder="Enter your full name"
                    className={`w-full bg-transparent border ${nameError ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs mt-1">{t('details.nameRequired')}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('details.phone')}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneError(false);
                    }}
                    placeholder="Enter your phone number"
                    className={`w-full bg-transparent border ${phoneError ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{t('details.phoneRequired')}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('details.deliveryAddress')}</label>
                  <input 
                    type="text" 
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setAddressError(false);
                    }}
                    placeholder="Enter your delivery address"
                    className={`w-full bg-transparent border ${addressError ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors`}
                  />
                  {addressError && (
                    <p className="text-red-500 text-xs mt-1">{t('details.addressRequired')}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('details.quantity')}</label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '') {
                        setQuantity('');
                      } else {
                        const parsed = parseInt(val);
                        if (!isNaN(parsed) && parsed >= 1) {
                          setQuantity(parsed);
                        }
                      }
                    }}
                    onBlur={() => {
                      if (quantity === '') setQuantity(1);
                    }}
                    className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total:</span>
                  <span className="text-lg font-bold text-gold-500">{totalPrice.toFixed(2)} Birr</span>
                </div>
              </div>

              <a 
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  let hasError = false;
                  if (!name.trim()) {
                    setNameError(true);
                    hasError = true;
                  }
                  if (!phone.trim()) {
                    setPhoneError(true);
                    hasError = true;
                  }
                  if (!address.trim()) {
                    setAddressError(true);
                    hasError = true;
                  }
                  
                  if (hasError) {
                    e.preventDefault();
                  }
                }}
                className="w-full flex items-center justify-center px-4 py-3 md:px-8 md:py-4 bg-gold-500 text-white text-sm md:text-base font-medium uppercase tracking-wider hover:bg-gold-600 transition-all duration-300 rounded-sm"
              >
                {t('details.sendScreenshot')} <Send className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-start">
                <Truck className="w-5 h-5 text-gold-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest mb-1">{t('details.fastDelivery')}</h4>
                  <p className="text-xs text-gray-500">{t('details.deliveryDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-gold-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest mb-1">{t('details.authentic')}</h4>
                  <p className="text-xs text-gray-500">{t('details.authenticDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
