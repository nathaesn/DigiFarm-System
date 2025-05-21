import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart as ChartBar, Droplet, Package, CreditCard, User, LogOut, Bell, Menu, X, ChevronRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

interface UserLayoutProps {
  children: React.ReactNode;
  title: string;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children, title }) => {
  const { pathname } = useLocation();
  const { logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/crop-stats', icon: <ChartBar size={20} />, label: 'Crop Stats' },
    { path: '/irrigation', icon: <Droplet size={20} />, label: 'Irrigation' },
    { path: '/inventory', icon: <Package size={20} />, label: 'Inventory' },
    { path: '/subscription', icon: <CreditCard size={20} />, label: 'Subscription' },
    { path: '/profile', icon: <User size={20} />, label: 'Profile' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <div className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="ml-2 text-xl font-heading font-bold text-primary-800">DigiFarm</span>
          </Link>
        </div>
        <nav className="mt-8">
          <div className="px-4 mb-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Main Menu</p>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                  {pathname === item.path && (
                    <ChevronRight size={16} className="ml-auto" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 mt-8 mb-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Account</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center w-full px-6 py-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
          >
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg md:hidden"
          >
            <div className="p-6 flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                  <path d="M21 12a9 9 0 0 0-9-9v9h9z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span className="ml-2 text-xl font-heading font-bold text-primary-800">DigiFarm</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            <nav className="mt-8">
              <div className="px-4 mb-4">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Main Menu</p>
              </div>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                        pathname === item.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                      {pathname === item.path && (
                        <ChevronRight size={16} className="ml-auto" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4 mt-8 mb-4">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Account</p>
              </div>
              <button
                onClick={() => {
                  setSidebarOpen(false);
                  logout();
                }}
                className="flex items-center w-full px-6 py-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              >
                <LogOut size={20} className="mr-3" />
                Logout
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="mr-4 md:hidden">
                <Menu size={24} className="text-gray-500" />
              </button>
              <div>
                <h1 className="text-2xl font-heading font-semibold text-gray-800">{title}</h1>
                <nav className="text-sm text-gray-500">
                  <ol className="flex items-center">
                    <li>
                      <Link to="/" className="hover:text-primary-600">Dashboard</Link>
                    </li>
                    {pathname !== '/' && (
                      <>
                        <span className="mx-2">/</span>
                        <li className="text-gray-900 font-medium">{title}</li>
                      </>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-medium">
                  {user?.name.charAt(0)}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;