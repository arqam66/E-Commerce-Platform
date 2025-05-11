
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define user roles
export type UserRole = 'user' | 'admin' | 'vendor';

// Define user type
export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

// Define context type
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: User[] = [
  { id: '1', email: 'user@example.com', name: 'Regular User', role: 'user' },
  { id: '2', email: 'admin@example.com', name: 'Admin User', role: 'admin' },
  { id: '3', email: 'vendor@example.com', name: 'Vendor User', role: 'vendor' }
];

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('ecommerce-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsers.find(u => u.email === email);
        
        if (foundUser && password === 'password') {
          setUser(foundUser);
          localStorage.setItem('ecommerce-user', JSON.stringify(foundUser));
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500); // Simulate network delay
    });
  };

  const signup = async (email: string, password: string, name: string) => {
    // In a real app, this would be an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find(u => u.email === email);
        
        if (existingUser) {
          reject(new Error('User already exists'));
          return;
        }
        
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
          role: 'user' // Default role for new users
        };
        
        setUser(newUser);
        localStorage.setItem('ecommerce-user', JSON.stringify(newUser));
        resolve();
      }, 500); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecommerce-user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
