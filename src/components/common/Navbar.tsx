import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor?.hash && anchor.pathname === location.pathname) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/#features', label: 'Features' },
    { to: '/#how-it-works', label: 'How It Works' },
    { to: '/#benefits', label: 'Benefits' },
    { to: '/#testimonials', label: 'Testimonials' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="ml-2 text-xl font-heading font-bold text-primary-800">DigiFarm</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {!user ? (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link to="/login" className="ml-4 btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
              </>
            ) : (
              <>
                {user.role === 'admin' ? (
                  <>
                    <Link to="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    <Link to="/users" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Users</Link>
                    <Link to="/crops" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Crops</Link>
                    <Link to="/subscriptions" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Subscriptions</Link>
                  </>
                ) : (
                  <>
                    <Link to="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    <Link to="/crop-stats" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Crop Stats</Link>
                    <Link to="/irrigation" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Irrigation</Link>
                    <Link to="/inventory" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Inventory</Link>
                    <Link to="/subscription" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Subscription</Link>
                  </>
                )}
                <div className="ml-4 relative">
                  <button 
                    onClick={() => logout()} 
                    className="btn btn-accent"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!user ? (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  to="/login" 
                  className="block w-full text-center my-2 btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block w-full text-center my-2 btn btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {user.role === 'admin' ? (
                  <>
                    <Link 
                      to="/" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/users" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Users
                    </Link>
                    <Link 
                      to="/crops" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Crops
                    </Link>
                    <Link 
                      to="/subscriptions" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Subscriptions
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/crop-stats" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Crop Stats
                    </Link>
                    <Link 
                      to="/irrigation" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Irrigation
                    </Link>
                    <Link 
                      to="/inventory" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Inventory
                    </Link>
                    <Link 
                      to="/subscription" 
                      className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Subscription
                    </Link>
                  </>
                )}
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }} 
                  className="block w-full text-center my-2 btn btn-accent"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;