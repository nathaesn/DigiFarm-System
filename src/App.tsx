import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/user/Dashboard';
import UserProfile from './pages/user/Profile';
import CropStats from './pages/user/CropStats';
import Irrigation from './pages/user/Irrigation';
import Inventory from './pages/user/Inventory';
import Subscription from './pages/user/Subscription';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminCrops from './pages/admin/Crops';
import AdminSubscriptions from './pages/admin/Subscriptions';

// Public routes - accessible to all
const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

// User routes - accessible to authenticated users
const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<UserDashboard />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/crop-stats" element={<CropStats />} />
    <Route path="/irrigation" element={<Irrigation />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

// Admin routes - accessible to admins only
const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminDashboard />} />
    <Route path="/users" element={<AdminUsers />} />
    <Route path="/crops" element={<AdminCrops />} />
    <Route path="/subscriptions" element={<AdminSubscriptions />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  // User exists and is admin
  if (user && user.role === 'admin') {
    return <AdminRoutes />;
  }

  // User exists and is not admin (regular user)
  if (user) {
    return <UserRoutes />;
  }

  // No user (not authenticated)
  return <PublicRoutes />;
}

export default App;