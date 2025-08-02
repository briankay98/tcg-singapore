import Link from 'next/link';
import { HeartIcon, ShareIcon, EyeIcon, ShieldCheckIcon, TruckIcon } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Mock data - in real app this would come from API/database
const mockCard = {
  id: '1',
  name: 'Charizard VMAX',
  description: 'Ultra-rare Charizard VMAX card from the Champion\'s Path set. This card features stunning artwork and is a must-have for any serious collector. Card is in near mint condition with sharp corners and no visible wear.',
  game: 'Pokemon',
  set: 'Champion\'s Path',
  cardNumber: '74/73',
  price: 299.99,
  condition: 'Near Mint',
  rarity: 'Ultra Rare',
  foil: true,
  isAuction: false,
  stock: 1,
  views: 1234,
  listedAt: '2024-01-15',
  images: [
    '/placeholder-card.jpg',
    '/placeholder-card.jpg',
    '/placeholder-card.jpg',
  ],
  seller: {
    id: 'seller1',
    username: 'CardMaster88',
    rating: 4.9,
    totalSales: 245,
    joinedAt: '2022-03-15',
    location: 'Singapore',
    verified: true,
  },
};

const relatedCards = [
  { id: '2', name: 'Charizard V', price: 89.99, image: '/placeholder-card.jpg' },
  { id: '3', name: 'Charizard GX', price: 129.99, image: '/placeholder-card.jpg' },
  { id: '4', name: 'Pikachu VMAX', price: 199.99, image: '/placeholder-card.jpg' },
];

export default async function CardDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/browse" className="hover:text-gray-700">Browse</Link>
          <span className="mx-2">/</span>
          <Link href={`/browse?game=${mockCard.game.toLowerCase()}`} className="hover:text-gray-700">
            {mockCard.game}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{mockCard.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Main Card Image
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {mockCard.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    Image {index + 2}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{mockCard.name}</h1>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-red-500 border border-gray-300 rounded-lg">
                    <HeartIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-500 border border-gray-300 rounded-lg">
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-lg text-gray-600">{mockCard.game} • {mockCard.set} • #{mockCard.cardNumber}</p>
            </div>

            {/* Card Attributes */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg">
              <div>
                <span className="text-sm text-gray-600">Condition:</span>
                <p className="font-semibold text-green-600">{mockCard.condition}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Rarity:</span>
                <p className="font-semibold text-blue-600">{mockCard.rarity}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Foil:</span>
                <p className="font-semibold">{mockCard.foil ? 'Yes' : 'No'}</p>
              </div>
              <div className="flex items-center">
                <EyeIcon className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{mockCard.views} views</span>
              </div>
            </div>

            {/* Price and Purchase */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-3xl font-bold text-gray-900">S${mockCard.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Stock</p>
                  <p className="text-lg font-semibold text-green-600">{mockCard.stock} available</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Buy Now
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Make Offer
                </button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-gray-600">
                    {mockCard.seller.username.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{mockCard.seller.username}</h4>
                    {mockCard.seller.verified && (
                      <ShieldCheckIcon className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{mockCard.seller.rating}</span>
                    </span>
                    <span>{mockCard.seller.totalSales} sales</span>
                    <span>{mockCard.seller.location}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                      Contact Seller
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust & Safety */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                <span>Buyer Protection</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TruckIcon className="h-5 w-5 text-blue-500" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{mockCard.description}</p>
        </div>

        {/* Related Cards */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((card) => (
              <Link key={card.id} href={`/card/${card.id}`} className="group">
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Card Image</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      {card.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">S${card.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}