import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Cards',
  description: 'Browse and search for trading cards in Singapore marketplace'
};

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Browse Cards</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover amazing trading cards from Singapore&apos;s top sellers
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search for specific cards..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>All Games</option>
                <option>Pokemon</option>
                <option>Magic: The Gathering</option>
                <option>Yu-Gi-Oh!</option>
                <option>Other</option>
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>All Conditions</option>
                <option>Mint</option>
                <option>Near Mint</option>
                <option>Lightly Played</option>
                <option>Moderately Played</option>
                <option>Heavily Played</option>
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>All Locations</option>
                <option>Orchard Road</option>
                <option>Jurong Point</option>
                <option>Bugis Junction</option>
                <option>Marina Bay</option>
                <option>Tampines Mall</option>
              </select>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="text-gray-400 text-lg">
              🔍 Card listings will appear here
            </div>
            <p className="mt-2 text-gray-600">
              Browse functionality coming soon with advanced search and filtering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}