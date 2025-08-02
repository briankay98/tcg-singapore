import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FilterIcon, GridIcon, ListIcon, SortAscIcon } from 'lucide-react';

// Mock data for demonstration
const mockCards = [
  {
    id: '1',
    name: 'Charizard VMAX',
    game: 'Pokemon',
    set: "Champion's Path",
    price: 299.99,
    condition: 'Near Mint',
    rarity: 'Ultra Rare',
    seller: 'CardMaster88',
    rating: 4.9,
    views: 1234,
  },
  {
    id: '2',
    name: 'Black Lotus',
    game: 'Magic: The Gathering',
    set: 'Alpha',
    price: 15000.00,
    condition: 'Played',
    rarity: 'Rare',
    seller: 'VintageCards',
    rating: 4.8,
    views: 5678,
  },
  {
    id: '3',
    name: 'Blue-Eyes White Dragon',
    game: 'Yu-Gi-Oh!',
    set: 'Legend of Blue Eyes',
    price: 899.99,
    condition: 'Near Mint',
    rarity: 'Ultra Rare',
    seller: 'DuelMaster',
    rating: 4.7,
    views: 2345,
  },
  // Add more mock cards...
  {
    id: '4',
    name: 'Pikachu V',
    game: 'Pokemon',
    set: 'Vivid Voltage',
    price: 45.99,
    condition: 'Mint',
    rarity: 'Rare',
    seller: 'PokemonPro',
    rating: 5.0,
    views: 890,
  },
  {
    id: '5',
    name: 'Mana Crypt',
    game: 'Magic: The Gathering',
    set: 'Eternal Masters',
    price: 199.99,
    condition: 'Near Mint',
    rarity: 'Mythic Rare',
    seller: 'MTGExpert',
    rating: 4.9,
    views: 1567,
  },
  {
    id: '6',
    name: 'Dark Magician',
    game: 'Yu-Gi-Oh!',
    set: 'Dark Magicians',
    price: 129.99,
    condition: 'Excellent',
    rarity: 'Ultra Rare',
    seller: 'YugiohKing',
    rating: 4.6,
    views: 987,
  },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span> <span className="mx-2">/</span> <span className="text-gray-900">Browse Cards</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Trading Cards</h1>
          <p className="text-gray-600">Discover amazing cards from trusted sellers across Singapore</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <FilterIcon className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              {/* Game Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Game
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">All Games</option>
                  <option value="pokemon">Pokémon</option>
                  <option value="mtg">Magic: The Gathering</option>
                  <option value="yugioh">Yu-Gi-Oh!</option>
                  <option value="digimon">Digimon</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (SGD)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition
                </label>
                <div className="space-y-2">
                  {['Mint', 'Near Mint', 'Excellent', 'Good', 'Played', 'Poor'].map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rarity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rarity
                </label>
                <div className="space-y-2">
                  {['Common', 'Uncommon', 'Rare', 'Ultra Rare', 'Secret Rare'].map((rarity) => (
                    <label key={rarity} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{rarity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Listing Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Listing Type
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Buy It Now</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-700">Auction</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <p className="text-gray-600">
                    Showing <span className="font-medium text-gray-900">1-12</span> of{' '}
                    <span className="font-medium text-gray-900">2,847</span> results
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <div className="flex items-center space-x-2">
                    <SortAscIcon className="h-4 w-4 text-gray-500" />
                    <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="newest">Newest First</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="ending_soon">Ending Soon</option>
                      <option value="most_watched">Most Watched</option>
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button className="p-2 text-blue-600 bg-blue-50 rounded-l-lg">
                      <GridIcon className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-r-lg">
                      <ListIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCards.map((card) => (
                <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                  {/* Card Image */}
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative">
                    <span className="text-gray-400">Card Image</span>
                    <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                      ❤️
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                      {card.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {card.game} • {card.set}
                    </p>
                    
                    <div className="flex items-center space-x-3 mb-3 text-xs">
                      <span className="text-blue-600 font-medium">{card.rarity}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-green-600">{card.condition}</span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        ${card.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {card.seller.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span>{card.seller}</span>
                        <span className="text-yellow-500">★</span>
                        <span>{card.rating}</span>
                      </div>
                      <span>{card.views} views</span>
                    </div>

                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg ${
                      page === 1
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  237
                </button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}