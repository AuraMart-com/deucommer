import { Link } from 'react-router-dom';
import { Product } from '../data';

interface ProductCardProps {
  product: Product;
  key?: number | string;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-gray-900 font-medium mb-1 group-hover:text-orange-500 transition-colors">{product.title}</h4>
        <span className="text-orange-500 font-bold text-lg block mb-3">{product.price}</span>
        <div 
          className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Buy Now
        </div>
      </div>
    </Link>
  );
}
