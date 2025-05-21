import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Droplet,
  BarChart2,
  Microscope,
  Waves,
  Package,
  Calendar,
  Home,
  Star,
  Users,
  MessageSquare
} from 'lucide-react';

const Footer = () => {
  const services = [
    { title: 'IoT Irrigation', path: '/services/irrigation', icon: <Droplet className="w-5 h-5" /> },
    { title: 'Crop Monitoring', path: '/services/crop-monitoring', icon: <BarChart2 className="w-5 h-5" /> },
    { title: 'Soil Analysis', path: '/services/soil-analysis', icon: <Microscope className="w-5 h-5" /> },
    { title: 'Water Management', path: '/services/water-management', icon: <Waves className="w-5 h-5" /> },
    { title: 'Inventory Tracking', path: '/services/inventory', icon: <Package className="w-5 h-5" /> },
    { title: 'Harvest Predictions', path: '/services/harvest-predictions', icon: <Calendar className="w-5 h-5" /> },
  ];

  const navItems = [
    { title: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'Features', path: '/#features', icon: <Star className="w-5 h-5" /> },
    { title: 'How It Works', path: '/#how-it-works', icon: <Users className="w-5 h-5" /> },
    { title: 'Benefits', path: '/#benefits', icon: <Star className="w-5 h-5" /> },
    { title: 'Testimonials', path: '/#testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Contact', path: '/#contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const legalLinks = [
    { title: 'Privacy Policy', path: '/privacy' },
    { title: 'Terms of Service', path: '/terms' },
    { title: 'Cookie Policy', path: '/cookies' },
    { title: 'GDPR', path: '/gdpr' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="ml-2 text-xl font-heading font-bold text-white">DigiFarm</span>
            </Link>
            <p className="text-sm mb-6">
              Transforming agriculture through smart technology and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="flex items-center text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">
                Jl. Sudirman No. 123<br />
                Jakarta Pusat, 10220<br />
                Indonesia
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">+62 (21) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">info@digifarm.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DigiFarm. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;