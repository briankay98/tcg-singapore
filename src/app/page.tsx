import Link from 'next/link';
import { SearchIcon, TrendingUpIcon, ShieldCheckIcon, TruckIcon } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Mock data for featured cards
const featuredCards = [
  {
    id: '1',
    name: 'Charizard VMAX',
    game: 'Pokemon',
    set: 'Champion\'s Path',
    price: 299.99,
    image: '/placeholder-card.jpg',
    rarity: 'Ultra Rare',
    condition: 'Near Mint',
  },
  {
    id: '2',
    name: 'Black Lotus',
    game: 'Magic: The Gathering',
    set: 'Alpha',
    price: 15000.00,
    image: '/placeholder-card.jpg',
    rarity: 'Rare',
    condition: 'Played',
  },
  {
    id: '3',
    name: 'Blue-Eyes White Dragon',
    game: 'Yu-Gi-Oh!',
    set: 'Legend of Blue Eyes',
    price: 899.99,
    image: '/placeholder-card.jpg',
    rarity: 'Ultra Rare',
    condition: 'Near Mint',
  },
  {
    id: '4',
    name: 'Pikachu Illustrator',
    game: 'Pokemon',
    set: 'Promo',
    price: 25000.00,
    image: '/placeholder-card.jpg',
    rarity: 'Promo',
    condition: 'Near Mint',
  },
];

const categories = [
  { name: 'Pokémon', slug: 'pokemon', color: 'bg-yellow-500', icon: '⚡' },
  { name: 'Magic: The Gathering', slug: 'mtg', color: 'bg-purple-500', icon: '🔮' },
  { name: 'Yu-Gi-Oh!', slug: 'yugioh', color: 'bg-blue-500', icon: '👁️' },
  { name: 'Digimon', slug: 'digimon', color: 'bg-orange-500', icon: '🦾' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Singapore&apos;s Premier
              <span className="block text-yellow-400">TCG Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Buy, sell, and trade Pokémon, Magic: The Gathering, Yu-Gi-Oh!, and other 
              trading cards with confidence in Singapore&apos;s most trusted marketplace.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for cards, sets, or sellers..."
                  className="w-full pl-12 pr-6 py-4 rounded-lg text-gray-900 text-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
                />
                <SearchIcon className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse Cards
              </Link>
              <Link
                href="/register"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Start Selling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Game</h2>
            <p className="text-gray-600 text-lg">Find cards from your favorite trading card games</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/browse?game=${category.slug}`}
                className="group"
              >
                <div className={`${category.color} rounded-xl p-8 text-center text-white group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Cards</h2>
              <p className="text-gray-600 text-lg">Discover rare and valuable cards from trusted sellers</p>
            </div>
            <Link
              href="/browse"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Card Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{card.game} • {card.set}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium">{card.rarity}</span>
                    <span className="text-sm text-green-600">{card.condition}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${card.price.toLocaleString()}
                    </span>
                    <Link
                      href={`/card/${card.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TCG Singapore?</h2>
            <p className="text-gray-600 text-lg">Experience the best in trading card marketplace</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buyer Protection</h3>
              <p className="text-gray-600">
                Shop with confidence knowing your purchases are protected by our comprehensive buyer protection program.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Local Shipping</h3>
              <p className="text-gray-600">
                Enjoy fast and secure delivery across Singapore with tracking and insurance on all orders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600">
                Stay informed with real-time market prices, trends, and analytics for all your favorite cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Game</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get notified about new releases, price drops, and exclusive deals delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
