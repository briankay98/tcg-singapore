import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Browse Cards', href: '/browse' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const games = [
    { name: 'Pokémon Cards', href: '/browse?game=pokemon' },
    { name: 'Magic: The Gathering', href: '/browse?game=mtg' },
    { name: 'Yu-Gi-Oh!', href: '/browse?game=yugioh' },
    { name: 'Digimon', href: '/browse?game=digimon' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Seller Guide', href: '/seller-guide' },
    { name: 'Buyer Protection', href: '/buyer-protection' },
    { name: 'Shipping Info', href: '/shipping' },
  ];

  const legal = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Community Guidelines', href: '/guidelines' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TCG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TCG Singapore</h3>
                <p className="text-sm text-gray-400">Trading Card Marketplace</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Singapore&apos;s premier marketplace for trading card games. Buy, sell, and trade 
              Pokémon, Magic: The Gathering, Yu-Gi-Oh!, and more with confidence.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Games</h3>
            <ul className="space-y-2">
              {games.map((game) => (
                <li key={game.name}>
                  <Link
                    href={game.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get notified about new card releases, market trends, and exclusive deals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 TCG Singapore. All rights reserved.
            </div>
            
            {/* Legal links */}
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-gray-400 text-sm">
                🔒 Secure payments powered by Stripe & PayPal
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>💳 Visa</span>
                <span>💳 Mastercard</span>
                <span>🏦 DBS</span>
                <span>🏦 OCBC</span>
                <span>📱 PayNow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}