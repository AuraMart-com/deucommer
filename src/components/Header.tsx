import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Edu<span className="text-orange-500">Commerce</span>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-orange-500 font-medium">About</Link>
          <Link to="#" className="text-gray-600 hover:text-orange-500 font-medium">Login</Link>
          <Link to="#" className="flex items-center text-gray-600 hover:text-orange-500 font-medium">
            <ShoppingCart className="w-5 h-5 mr-1" />
            <span>Cart (0)</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
