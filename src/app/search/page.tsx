'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [filters, setFilters] = useState({
    listingType: 'all',
    condition: 'all',
    game: 'all',
    rarity: 'all',
    location: 'all',
  });
  const [sortBy, setSortBy] = useState('best_match');

  // Mock data for demonstration
  const mockCards = [
    {
      id: 1,
      title: 'Charizard Base Set Holo',
      game: 'Pokemon',
      condition: 'Near Mint',
      currentPrice: 1250.00,
      buyNowPrice: 1500.00,
      listingType: 'auction_with_buy_now',
      timeLeft: '2d 5h',
      location: 'Central Singapore',
      image: '/api/placeholder/200/280',
      bids: 15
    },
    {
      id: 2,
      title: 'Black Lotus Alpha',
      game: 'Magic: The Gathering',
      condition: 'Good',
      currentPrice: 50000.00,
      listingType: 'buy_now',
      location: 'East Singapore',
      image: '/api/placeholder/200/280',
      bids: 0
    },
    {
      id: 3,
      title: 'Blue-Eyes White Dragon LOB-001',
      game: 'Yu-Gi-Oh!',
      condition: 'Mint',
      currentPrice: 850.00,
      listingType: 'auction',
      timeLeft: '1d 12h',
      location: 'West Singapore',
      image: '/api/placeholder/200/280',
      bids: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">TCG Singapore</Link>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/sell" className="text-gray-600 hover:text-blue-600">Sell</Link>
              <a href="#" className="text-gray-600 hover:text-blue-600">Sign In</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-6">Filters</h3>
              
              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Card name, set, etc..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Price Range (SGD)
                </label>
                <div className="px-3">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000000])}
                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Listing Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Listing Type</label>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Listings' },
                    { value: 'auction', label: 'Auction' },
                    { value: 'buy_now', label: 'Buy It Now' },
                    { value: 'auction_with_buy_now', label: 'Auction + Buy Now' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="listingType"
                        value={option.value}
                        checked={filters.listingType === option.value}
                        onChange={(e) => setFilters({...filters, listingType: e.target.value})}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Condition</label>
                <select
                  value={filters.condition}
                  onChange={(e) => setFilters({...filters, condition: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Conditions</option>
                  <option value="mint">Mint</option>
                  <option value="near_mint">Near Mint</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>

              {/* Game Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Game</label>
                <select
                  value={filters.game}
                  onChange={(e) => setFilters({...filters, game: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Games</option>
                  <option value="pokemon">Pokémon</option>
                  <option value="magic">Magic: The Gathering</option>
                  <option value="yugioh">Yu-Gi-Oh!</option>
                  <option value="onepiece">One Piece</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Seller Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Singapore</option>
                  <option value="central">Central Singapore</option>
                  <option value="north">North Singapore</option>
                  <option value="south">South Singapore</option>
                  <option value="east">East Singapore</option>
                  <option value="west">West Singapore</option>
                </select>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold">Search Results</h2>
                  <p className="text-gray-600 text-sm mt-1">Showing 1-{mockCards.length} of {mockCards.length} results</p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="best_match">Best Match</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                    <option value="ending_soon">Ending Soon</option>
                    <option value="newly_listed">Newly Listed</option>
                    <option value="most_watched">Most Watched</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {mockCards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Card Image */}
                  <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <div className={`bg-gray-200 rounded-t-lg ${viewMode === 'list' ? 'rounded-l-lg rounded-tr-none h-full' : 'aspect-[4/5]'} flex items-center justify-center`}>
                      <span className="text-gray-400">Card Image</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1 mb-3">
                      <p>{card.game} • {card.condition}</p>
                      <p>📍 {card.location}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {card.listingType === 'auction' || card.listingType === 'auction_with_buy_now' ? (
                          <div>
                            <p className="text-lg font-bold text-green-600">
                              ${card.currentPrice.toFixed(2)}
                            </p>
                            <p className="text-xs text-gray-500">{card.bids} bids • {card.timeLeft}</p>
                          </div>
                        ) : (
                          <p className="text-lg font-bold text-blue-600">
                            ${card.currentPrice.toFixed(2)}
                          </p>
                        )}
                        
                        {card.buyNowPrice && card.listingType === 'auction_with_buy_now' && (
                          <p className="text-sm text-gray-600">
                            Buy Now: ${card.buyNowPrice.toFixed(2)}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        {card.listingType === 'auction' || card.listingType === 'auction_with_buy_now' ? (
                          <button className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700">
                            Bid Now
                          </button>
                        ) : null}
                        
                        {card.listingType === 'buy_now' || card.listingType === 'auction_with_buy_now' ? (
                          <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700">
                            Buy Now
                          </button>
                        ) : null}
                        
                        <button className="border border-gray-300 text-gray-700 px-3 py-1 text-sm rounded hover:bg-gray-50">
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}