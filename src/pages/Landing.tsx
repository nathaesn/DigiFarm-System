import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { 
  Droplet, 
  BarChart2, 
  CloudLightning, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Leaf,
  TrendingUp,
  Users,
  Star,
  Quote
} from 'lucide-react';

const Landing = () => {
  useEffect(() => {
    document.title = 'DigiFarm - Smart Agricultural IoT Solutions';
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] mix-blend-overlay opacity-30 bg-center bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Smart Irrigation for Tomato & Chili Farming
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Take control of your crops with advanced IoT technology. Monitor, analyze, and optimize your farming operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn btn-accent px-8 py-3 text-lg">
                  Get Started
                </Link>
                <a href="#features" className="btn bg-white text-primary-800 hover:bg-gray-100 px-8 py-3 text-lg">
                  Learn More
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Smart Farming with DigiFarm" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,74.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Smart Features for Modern Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DigiFarm combines IoT technology with agriculture expertise to help you grow better crops with less effort.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div 
              className="card text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto">
                <Droplet size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Smart Irrigation</h3>
              <p className="text-gray-600">
                Automated watering based on real-time soil moisture data. Save water and improve crop health.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="card text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-6 mx-auto">
                <BarChart2 size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Crop Analytics</h3>
              <p className="text-gray-600">
                Track vital crop statistics for tomatoes and chilies. Monitor growth, health, and yield predictions.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="card text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-6 mx-auto">
                <CloudLightning size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Weather Integration</h3>
              <p className="text-gray-600">
                Integrate local weather forecasts to adjust irrigation schedules automatically.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              className="card text-center hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-full mb-6 mx-auto">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Mobile Control</h3>
              <p className="text-gray-600">
                Manage your farm from anywhere using our responsive web application on any device.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose DigiFarm?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of farming with our comprehensive benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card bg-white hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Sustainable Farming</h3>
                <p className="text-gray-600">
                  Reduce water usage by up to 40% with smart irrigation systems while maintaining optimal crop health.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card bg-white hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Increased Yield</h3>
                <p className="text-gray-600">
                  Boost your crop productivity by up to 30% with data-driven insights and optimized growing conditions.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="card bg-white hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Expert Support</h3>
                <p className="text-gray-600">
                  Access to agricultural experts and 24/7 technical support to help you succeed in your farming journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful farmers who have transformed their operations with DigiFarm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card bg-primary-50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-600 mb-4" />
                <p className="text-gray-700 mb-6">
                  "DigiFarm has revolutionized our tomato farming. The smart irrigation system has reduced our water usage by 35% while increasing our yield. The mobile app makes it so easy to monitor everything!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Farmer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Budi Santoso</h4>
                    <p className="text-sm text-gray-600">Tomato Farmer, West Java</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card bg-primary-50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-600 mb-4" />
                <p className="text-gray-700 mb-6">
                  "The weather integration feature is a game-changer. We've been able to protect our chili crops from unexpected weather changes and maintain consistent quality throughout the season."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Farmer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Siti Rahayu</h4>
                    <p className="text-sm text-gray-600">Chili Farmer, East Java</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card bg-primary-50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-600 mb-4" />
                <p className="text-gray-700 mb-6">
                  "The analytics dashboard has given us insights we never had before. We can now make data-driven decisions that have improved our crop quality and market value significantly."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Farmer"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ahmad Hidayat</h4>
                    <p className="text-sm text-gray-600">Mixed Crop Farmer, Central Java</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How DigiFarm Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to implement smart farming technology in just a few simple steps.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step line (desktop only) */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-primary-200">
              <div className="absolute left-1/6 right-1/6 h-1 bg-primary-200"></div>
            </div>
            
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Install Sensors</h3>
              <p className="text-gray-600">
                Place our IoT sensors in your fields to monitor soil moisture, temperature, and other key metrics.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Connect to App</h3>
              <p className="text-gray-600">
                Connect your sensors to the DigiFarm platform and set up your dashboard with your crop preferences.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Optimize & Grow</h3>
              <p className="text-gray-600">
                Let the system analyze your data and provide actionable insights to improve your crop yield.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/register" className="btn btn-primary px-8 py-3 text-lg inline-flex items-center">
              Start Growing Smarter <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your farming needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div 
              className="card border border-gray-200 hover:border-primary-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">Basic</h3>
                <p className="text-gray-600">For small farms</p>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-4xl font-bold">Rp 299K</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 5 IoT sensors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic crop statistics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manual irrigation control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>7-day data history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="btn btn-primary w-full">Choose Basic</Link>
              </div>
            </motion.div>
            
            {/* Pro Plan */}
            <motion.div 
              className="card border-2 border-primary-500 relative transform scale-105 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600">For medium farms</p>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-4xl font-bold">Rp 599K</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 15 IoT sensors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced crop analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated irrigation scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>30-day data history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority email and chat support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weather integration</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="btn btn-primary w-full">Choose Pro</Link>
              </div>
            </motion.div>
            
            {/* Enterprise Plan */}
            <motion.div 
              className="card border border-gray-200 hover:border-primary-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">For large operations</p>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-4xl font-bold">Rp 999K</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited IoT sensors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI-powered irrigation optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>365-day data history</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <div className="text-center">
                <Link to="/register" className="btn btn-primary w-full">Choose Enterprise</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about DigiFarm? Our team is here to help.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <div>
                <img 
                  src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Contact DigiFarm" 
                  className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-md mr-4">
                      <Phone size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="text-gray-600">+62 (21) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-md mr-4">
                      <Mail size={24} className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <p className="text-gray-600">info@digifarm.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;