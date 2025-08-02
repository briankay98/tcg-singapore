'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';

interface HeaderProps {
  onAuthClick?: (mode: 'login' | 'register') => void;
}

export default function Header({ onAuthClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              TCG Singapore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
              Browse Cards
            </Link>
            <Link href="/sell" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sell
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              My Account
            </Link>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onAuthClick?.('login')}
              >
                Sign In
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => onAuthClick?.('register')}
              >
                Register
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/search" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Cards
              </Link>
              <Link 
                href="/sell" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Account
              </Link>
              <div className="flex flex-col space-y-2 px-3 pt-3 border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => {
                    onAuthClick?.('login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => {
                    onAuthClick?.('register');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}