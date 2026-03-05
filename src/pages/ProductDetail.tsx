import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { ArrowLeft, Star, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-orange-500 hover:underline flex items-center justify-center mx-auto"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <button 
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-gray-600 hover:text-orange-500 transition-colors font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Gallery
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm">
        {/* Product Image */}
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-gray-500 text-sm">(124 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{product.price}</p>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="w-5 h-5 mr-3 text-orange-500" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ShieldCheck className="w-5 h-5 mr-3 text-orange-500" />
              <span>2-year warranty included</span>
            </div>
          </div>

          <div className="mt-auto flex gap-4">
            <button 
              className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
              onClick={() => alert(`Added ${product.title} to cart!`)}
            >
              Add to Cart
            </button>
            <button className="px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Star className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
