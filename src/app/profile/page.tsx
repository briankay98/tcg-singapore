import { Metadata } from 'next';
import { UserIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Manage your TCG Singapore profile and trading history'
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center">
              <UserIcon className="h-10 w-10 text-red-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600">CardTrader_SG</p>
              <div className="flex items-center mt-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-green-600 font-medium">SingPass Verified</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-lg font-semibold">4.8</span>
              </div>
              <p className="text-sm text-gray-600">125 reviews</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-red-600">47</div>
            <div className="text-sm text-gray-600">Cards Listed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">S$2,340</div>
            <div className="text-sm text-gray-600">Total Sales</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">89</div>
            <div className="text-sm text-gray-600">Successful Trades</div>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Listings</h3>
            <p className="text-gray-600 mb-4">Manage your active card listings</p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
              View Listings
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection</h3>
            <p className="text-gray-600 mb-4">Track your card collection</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              View Collection
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Watchlist</h3>
            <p className="text-gray-600 mb-4">Cards you&apos;re interested in</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              View Watchlist
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h3>
            <p className="text-gray-600 mb-4">View your buying and selling history</p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              View History
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">PayNow Settings</h3>
            <p className="text-gray-600 mb-4">Manage payment preferences</p>
            <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
              Payment Settings
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
            <p className="text-gray-600 mb-4">Update your profile information</p>
            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Sold: Charizard VMAX</p>
                <p className="text-sm text-gray-600">2 hours ago • S$145.00</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900">Listed: Pikachu VMAX</p>
                <p className="text-sm text-gray-600">1 day ago • S$35.00</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Active
              </span>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Bought: Blue-Eyes White Dragon</p>
                <p className="text-sm text-gray-600">3 days ago • S$89.00</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}