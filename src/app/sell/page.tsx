import { Metadata } from 'next';
import { CameraIcon, QrCodeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sell Cards',
  description: 'List your trading cards for sale on Singapore&apos;s premier TCG marketplace'
};

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sell Your Cards</h1>
          <p className="mt-4 text-lg text-gray-600">
            List your trading cards and reach thousands of Singapore collectors
          </p>
        </div>

        {/* Quick Sell Options */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-200 hover:border-red-300 transition-colors cursor-pointer">
            <div className="text-center">
              <CameraIcon className="mx-auto h-12 w-12 text-red-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Camera Upload</h3>
              <p className="mt-2 text-gray-600">
                Take photos of your cards with your phone camera
              </p>
              <button className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <CameraIcon className="mr-2 h-5 w-5" />
                Take Photos
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
            <div className="text-center">
              <QrCodeIcon className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Scan Barcode</h3>
              <p className="mt-2 text-gray-600">
                Scan card barcodes for instant listing
              </p>
              <button className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <QrCodeIcon className="mr-2 h-5 w-5" />
                Scan Code
              </button>
            </div>
          </div>
        </div>

        {/* Manual Listing Form */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Manual Listing</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                Card Name *
              </label>
              <input
                type="text"
                id="card-name"
                name="card-name"
                placeholder="e.g., Charizard VMAX"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="game" className="block text-sm font-medium text-gray-700">
                  Game *
                </label>
                <select
                  id="game"
                  name="game"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option>Select game</option>
                  <option>Pokemon</option>
                  <option>Magic: The Gathering</option>
                  <option>Yu-Gi-Oh!</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="set" className="block text-sm font-medium text-gray-700">
                  Set/Edition
                </label>
                <input
                  type="text"
                  id="set"
                  name="set"
                  placeholder="e.g., Champion&apos;s Path"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
                  Condition *
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option>Select condition</option>
                  <option>Mint</option>
                  <option>Near Mint</option>
                  <option>Lightly Played</option>
                  <option>Moderately Played</option>
                  <option>Heavily Played</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (SGD) *
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">S$</span>
                  </div>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="pl-8 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="meetup-location" className="block text-sm font-medium text-gray-700">
                Preferred Meetup Location
              </label>
              <select
                id="meetup-location"
                name="meetup-location"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option>Select location</option>
                <option>Orchard Road (ION/Takashimaya)</option>
                <option>Jurong Point Shopping Centre</option>
                <option>Bugis Junction</option>
                <option>Marina Bay Sands</option>
                <option>Tampines Mall</option>
                <option>Causeway Point</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Additional details about the card condition, rarity, etc."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                List Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}