import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// Define the auth context type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The static user credentials
const ADMIN_USER: User = {
  id: 'admin-123',
  name: 'Admin User',
  email: 'admin@digifarm.com',
  role: 'admin',
};

const DEMO_USER: User = {
  id: 'user-123',
  name: 'Demo User',
  email: 'user@digifarm.com',
  role: 'user',
};

// Create the auth provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('digifarm_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === ADMIN_USER.email && password === 'admin123') {
      setUser(ADMIN_USER);
      localStorage.setItem('digifarm_user', JSON.stringify(ADMIN_USER));
      navigate('/');
    } else if (email === DEMO_USER.email && password === 'user123') {
      setUser(DEMO_USER);
      localStorage.setItem('digifarm_user', JSON.stringify(DEMO_USER));
      navigate('/');
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create a new user (in a real app, this would be saved to a database)
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: 'user',
    };
    
    setUser(newUser);
    localStorage.setItem('digifarm_user', JSON.stringify(newUser));
    
    setIsLoading(false);
    navigate('/');
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('digifarm_user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};