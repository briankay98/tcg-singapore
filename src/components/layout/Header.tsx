'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SearchIcon, MenuIcon, XIcon, UserIcon, HeartIcon, ShoppingCartIcon } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Browse', href: '/browse' },
    { name: 'About', href: '/about' },
  ];

  const games = [
    { name: 'Pokémon', href: '/browse?game=pokemon' },
    { name: 'Magic: The Gathering', href: '/browse?game=mtg' },
    { name: 'Yu-Gi-Oh!', href: '/browse?game=yugioh' },
    { name: 'Digimon', href: '/browse?game=digimon' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-700 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>🇸🇬 Singapore&apos;s Premier TCG Marketplace</p>
            <div className="hidden sm:flex space-x-4">
              <span>📞 Support: +65 8888 8888</span>
              <span>📧 help@tcgsingapore.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TCG</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">TCG Singapore</h1>
                <p className="text-xs text-gray-500">Trading Card Marketplace</p>
              </div>
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for cards, sets, or sellers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* User actions - logged out state */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                Register
              </Link>
            </div>

            {/* Quick actions */}
            <div className="flex items-center space-x-3">
              <button className="text-gray-600 hover:text-red-600">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="text-gray-600 hover:text-blue-600 relative">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <UserIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 pb-4 border-b border-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Games dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
              Games
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {games.map((game) => (
                  <Link
                    key={game.name}
                    href={game.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {game.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium"
          >
            Sell Cards
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search cards..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Mobile navigation */}
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile games */}
            <div className="border-t border-gray-200 pt-4">
              <p className="font-medium text-gray-900 mb-2">Games</p>
              <div className="space-y-2">
                {games.map((game) => (
                  <Link
                    key={game.name}
                    href={game.href}
                    className="block py-1 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {game.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile auth */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full text-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}