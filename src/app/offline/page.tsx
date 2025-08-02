'use client';

import { WifiIcon } from '@heroicons/react/24/outline';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <WifiIcon className="mx-auto h-24 w-24 text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            You&apos;re Offline
          </h1>
          <p className="text-gray-600">
            No internet connection detected. Please check your connection and try again.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What you can do offline:
          </h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li>• Browse previously loaded cards</li>
            <li>• View your saved listings</li>
            <li>• Prepare new card listings</li>
            <li>• Check your profile information</li>
          </ul>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>

        <div className="mt-6 text-sm text-gray-500">
          <p>💡 Your actions will be synced when you&apos;re back online</p>
        </div>
      </div>
    </div>
  );
}