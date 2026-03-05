import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar />
        
        <div className="flex-1">
          {/* Hero Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12"
          >
            <img 
              src="https://picsum.photos/seed/shopping/1200/400" 
              alt="Hero Banner"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mega Sale!</h1>
                <p className="text-xl text-white/90 mb-6">Up to <span className="font-bold text-orange-400">50% OFF</span> on all items.</p>
                <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
