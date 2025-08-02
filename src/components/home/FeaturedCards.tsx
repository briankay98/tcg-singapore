'use client';

import Link from 'next/link';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const featuredCards = [
  {
    id: 1,
    name: 'Charizard VMAX',
    set: 'Champion&apos;s Path',
    price: 'S$145.00',
    condition: 'Near Mint',
    seller: 'CardMaster_SG',
    rating: 4.9,
    location: 'Orchard Road',
    image: '/cards/charizard-vmax.jpg',
    featured: true,
    liked: false,
  },
  {
    id: 2,
    name: 'Black Lotus',
    set: 'Alpha',
    price: 'S$15,000.00',
    condition: 'Lightly Played',
    seller: 'VintageCards_SG',
    rating: 5.0,
    location: 'Marina Bay',
    image: '/cards/black-lotus.jpg',
    featured: true,
    liked: true,
  },
  {
    id: 3,
    name: 'Blue-Eyes White Dragon',
    set: 'LOB-001',
    price: 'S$89.00',
    condition: 'Near Mint',
    seller: 'DuelMaster88',
    rating: 4.7,
    location: 'Bugis Junction',
    image: '/cards/blue-eyes.jpg',
    featured: true,
    liked: false,
  },
  {
    id: 4,
    name: 'Pikachu VMAX',
    set: 'Vivid Voltage',
    price: 'S$35.00',
    condition: 'Mint',
    seller: 'PokemonTrader_SG',
    rating: 4.8,
    location: 'Tampines Mall',
    image: '/cards/pikachu-vmax.jpg',
    featured: true,
    liked: true,
  },
];

export function FeaturedCards() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured Cards
          </h2>
          <Link
            href="/browse?featured=true"
            className="text-red-600 hover:text-red-500 font-medium"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCards.map((card) => (
            <div key={card.id} className="group cursor-pointer bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <div className="aspect-square w-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Card Image</span>
                </div>
                
                {/* Featured Badge */}
                {card.featured && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                
                {/* Like Button */}
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                  {card.liked ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{card.set}</p>
                
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-red-600">{card.price}</span>
                  <span className="text-sm text-gray-500">{card.condition}</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{card.rating}</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{card.seller}</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {card.location}
                </div>

                <button className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-6 text-center sm:hidden">
          <p className="text-sm text-gray-500">
            👆 Swipe to see more cards
          </p>
        </div>
      </div>
    </section>
  );
}