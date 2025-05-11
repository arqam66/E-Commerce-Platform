
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand text-white">
      {/* Main footer content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopZone</h3>
            <p className="text-gray-300 text-sm">
              Your one-stop destination for all shopping needs. Quality products, competitive prices, and exceptional customer service.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/electronics" className="text-gray-300 hover:text-white">Electronics</Link>
              </li>
              <li>
                <Link to="/category/clothing" className="text-gray-300 hover:text-white">Clothing</Link>
              </li>
              <li>
                <Link to="/category/books" className="text-gray-300 hover:text-white">Books</Link>
              </li>
              <li>
                <Link to="/category/home-and-kitchen" className="text-gray-300 hover:text-white">Home & Kitchen</Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-gray-300 hover:text-white">Beauty</Link>
              </li>
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-300 hover:text-white">Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white">Wishlist</Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Commerce St,<br />
                  Shopping District, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">support@shopzone.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-brand-light py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ShopZone. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-sm text-gray-400 hover:text-white">
              Shipping Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
