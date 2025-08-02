'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TCG Singapore</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/search" className="text-gray-600 hover:text-blue-600">Browse Cards</Link>
              <Link href="/sell" className="text-gray-600 hover:text-blue-600">Sell</Link>
              <button 
                onClick={() => openAuthModal('login')}
                className="text-gray-600 hover:text-blue-600"
              >
                Sign In
              </button>
              <button 
                onClick={() => openAuthModal('register')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Register
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Singapore&apos;s Premier TCG Marketplace
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Buy, sell, and trade Pokemon, Magic: The Gathering, Yu-Gi-Oh! and more. 
            Local pickup available across Singapore.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg bg-white p-2">
              <input
                type="text"
                placeholder="Search for cards..."
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 border-0 focus:ring-0 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                <a href="/search">Search</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose TCG Singapore?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Local Singapore Market</h4>
              <p className="text-gray-600">Connect with local collectors and sellers across Singapore. Support in-person meetups and local pickup options.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Real-time Auctions</h4>
              <p className="text-gray-600">Participate in exciting live auctions with real-time bidding. Never miss out on rare cards.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold mb-3">Secure Transactions</h4>
              <p className="text-gray-600">Protected payments with PayNow integration and verified seller system for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Popular Trading Card Games</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {['Pokémon', 'Magic: The Gathering', 'Yu-Gi-Oh!', 'One Piece'].map((game) => (
              <div key={game} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{game.charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-lg">{game}</h4>
                <p className="text-gray-600 text-sm mt-2">Browse {game.toLowerCase()} cards</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Trading?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of collectors in Singapore. List your cards for free and start earning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/sell" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
              Start Selling
            </a>
            <a href="/search" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center">
              Browse Cards
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">TCG Singapore</h4>
              <p className="text-gray-400">Singapore&apos;s premier trading card marketplace</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Marketplace</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/search" className="hover:text-white">Browse Cards</a></li>
                <li><a href="/sell" className="hover:text-white">Sell Cards</a></li>
                <li><a href="#" className="hover:text-white">Auctions</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Account</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sign In</a></li>
                <li><a href="#" className="hover:text-white">Register</a></li>
                <li><a href="#" className="hover:text-white">My Profile</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TCG Singapore. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
      />
    </div>
  );
}
