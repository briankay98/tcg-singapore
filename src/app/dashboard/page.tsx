import Link from 'next/link';
import { PlusIcon, PackageIcon, DollarSignIcon, EyeIcon, TrendingUpIcon, SettingsIcon } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DashboardPage() {
  const stats = [
    { label: 'Active listings', value: '24', icon: PackageIcon, change: '+3 this week' },
    { label: 'Total earnings', value: 'S$2,450', icon: DollarSignIcon, change: '+S$340 this month' },
    { label: 'Profile views', value: '1,234', icon: EyeIcon, change: '+89 this week' },
    { label: 'Success rate', value: '98.5%', icon: TrendingUpIcon, change: '+0.3% this month' },
  ];

  const recentListings = [
    {
      id: '1',
      name: 'Charizard VMAX',
      game: 'Pokemon',
      price: 299.99,
      status: 'Active',
      views: 45,
      watchers: 12,
      listedAt: '2024-01-20',
    },
    {
      id: '2',
      name: 'Black Lotus',
      game: 'Magic: The Gathering',
      price: 15000.00,
      status: 'Active',
      views: 156,
      watchers: 28,
      listedAt: '2024-01-18',
    },
    {
      id: '3',
      name: 'Blue-Eyes White Dragon',
      game: 'Yu-Gi-Oh!',
      price: 899.99,
      status: 'Sold',
      views: 89,
      watchers: 15,
      listedAt: '2024-01-15',
    },
  ];

  const recentSales = [
    {
      id: '1',
      cardName: 'Pikachu V',
      buyer: 'collector123',
      amount: 89.99,
      date: '2024-01-22',
      status: 'Completed',
    },
    {
      id: '2',
      cardName: 'Mana Crypt',
      buyer: 'mtgpro',
      amount: 199.99,
      date: '2024-01-21',
      status: 'Shipped',
    },
    {
      id: '3',
      cardName: 'Dark Magician',
      buyer: 'yugiohfan',
      amount: 129.99,
      date: '2024-01-20',
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your listings and track your sales</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Link
              href="/dashboard/new-listing"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              New Listing
            </Link>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center">
              <SettingsIcon className="h-4 w-4 mr-2" />
              Settings
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Listings */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Listings</h2>
                <Link href="/dashboard/listings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentListings.map((listing) => (
                <div key={listing.id} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{listing.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{listing.game}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">S${listing.price}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{listing.views} views</span>
                      <span>❤️ {listing.watchers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Sales</h2>
                <Link href="/dashboard/sales" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentSales.map((sale) => (
                <div key={sale.id} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{sale.cardName}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      sale.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {sale.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Buyer: {sale.buyer}</p>
                      <p className="text-xs text-gray-500">{sale.date}</p>
                    </div>
                    <p className="font-bold text-lg text-green-600">+S${sale.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/dashboard/new-listing"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PlusIcon className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Create Listing</p>
                <p className="text-sm text-gray-600">List a new card</p>
              </div>
            </Link>
            
            <Link
              href="/dashboard/inventory"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PackageIcon className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Manage Inventory</p>
                <p className="text-sm text-gray-600">Update your cards</p>
              </div>
            </Link>
            
            <Link
              href="/dashboard/analytics"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <TrendingUpIcon className="h-6 w-6 text-purple-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">View Analytics</p>
                <p className="text-sm text-gray-600">Track performance</p>
              </div>
            </Link>
            
            <Link
              href="/dashboard/profile"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SettingsIcon className="h-6 w-6 text-orange-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Profile Settings</p>
                <p className="text-sm text-gray-600">Update your info</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-4">💡 Seller Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <p className="font-medium mb-1">High-quality photos sell faster</p>
              <p>Use natural lighting and show multiple angles of your cards</p>
            </div>
            <div>
              <p className="font-medium mb-1">Accurate condition descriptions</p>
              <p>Be honest about card condition to build trust with buyers</p>
            </div>
            <div>
              <p className="font-medium mb-1">Competitive pricing</p>
              <p>Check market prices to price your cards competitively</p>
            </div>
            <div>
              <p className="font-medium mb-1">Fast communication</p>
              <p>Respond to buyer questions quickly to increase sales</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}