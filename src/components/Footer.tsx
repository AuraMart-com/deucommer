import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-gray-400 text-sm">
            EduCommerce is a sample project built for educational purposes to demonstrate modern React development with Tailwind CSS.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-white">Shipping Info</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>Email: support@educommerce.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Education St, Web City</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
        <p>&copy; 2025 EduCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
