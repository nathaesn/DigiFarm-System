import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="ml-2 text-xl font-heading font-bold text-white">DigiFarm</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing farming with smart IoT solutions for efficient irrigation and crop management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Features</Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Pricing</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Register</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">IoT Irrigation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Crop Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Soil Analysis</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Water Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Inventory Tracking</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">Harvest Predictions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Farming Way, Agriculture District<br />
                  Jakarta, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+62 (21) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@digifarm.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} DigiFarm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;