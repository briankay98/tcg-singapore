'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SellPage() {
  const [listingType, setListingType] = useState('auction');
  const [dragActive, setDragActive] = useState(false);
  const [images, setImages] = useState<File[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setImages(prev => [...prev, ...imageFiles].slice(0, 8)); // Max 8 images
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      setImages(prev => [...prev, ...imageFiles].slice(0, 8));
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

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
              <Link href="/search" className="text-gray-600 hover:text-blue-600">Browse Cards</Link>
              <a href="#" className="text-gray-600 hover:text-blue-600">Sign In</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">List Your Card for Sale</h1>
          
          <form className="space-y-8">
            {/* Card Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Name *
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Charizard Base Set"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Game *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Game</option>
                  <option value="pokemon">Pokémon</option>
                  <option value="magic">Magic: The Gathering</option>
                  <option value="yugioh">Yu-Gi-Oh!</option>
                  <option value="onepiece">One Piece</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Condition</option>
                  <option value="MINT">Mint</option>
                  <option value="NEAR_MINT">Near Mint</option>
                  <option value="GOOD">Good</option>
                  <option value="FAIR">Fair</option>
                  <option value="POOR">Poor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rarity
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Rare Holo, Mythic Rare"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your card's condition, special features, etc..."
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Photos (Up to 8 images)
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="mb-4">
                  <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">
                  Drag and drop images here, or{' '}
                  <label className="text-blue-600 cursor-pointer hover:underline">
                    browse files
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileInput}
                    />
                  </label>
                </p>
                <p className="text-sm text-gray-500">PNG, JPG, GIF up to 5MB each</p>
              </div>

              {/* Image Preview */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                        width={200}
                        height={128}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Listing Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Listing Type *
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                <label className="relative">
                  <input
                    type="radio"
                    name="listingType"
                    value="auction"
                    checked={listingType === 'auction'}
                    onChange={(e) => setListingType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    listingType === 'auction' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}>
                    <h3 className="font-semibold">Auction</h3>
                    <p className="text-sm text-gray-600 mt-1">Let buyers bid on your card</p>
                  </div>
                </label>
                
                <label className="relative">
                  <input
                    type="radio"
                    name="listingType"
                    value="buy_now"
                    checked={listingType === 'buy_now'}
                    onChange={(e) => setListingType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    listingType === 'buy_now' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}>
                    <h3 className="font-semibold">Buy It Now</h3>
                    <p className="text-sm text-gray-600 mt-1">Set a fixed price</p>
                  </div>
                </label>
                
                <label className="relative">
                  <input
                    type="radio"
                    name="listingType"
                    value="auction_with_buy_now"
                    checked={listingType === 'auction_with_buy_now'}
                    onChange={(e) => setListingType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                    listingType === 'auction_with_buy_now' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}>
                    <h3 className="font-semibold">Auction + Buy Now</h3>
                    <p className="text-sm text-gray-600 mt-1">Both options available</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-6">
              {(listingType === 'auction' || listingType === 'auction_with_buy_now') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price (SGD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              )}
              
              {(listingType === 'buy_now' || listingType === 'auction_with_buy_now') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buy It Now Price (SGD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Auction Duration */}
            {(listingType === 'auction' || listingType === 'auction_with_buy_now') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Auction Duration
                </label>
                <select className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="3">3 days</option>
                  <option value="5">5 days</option>
                  <option value="7">7 days</option>
                  <option value="10">10 days</option>
                </select>
              </div>
            )}

            {/* Shipping */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Options</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Cost (SGD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Location</option>
                    <option value="central">Central Singapore</option>
                    <option value="north">North Singapore</option>
                    <option value="south">South Singapore</option>
                    <option value="east">East Singapore</option>
                    <option value="west">West Singapore</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">Allow local pickup (meet in person)</span>
                </label>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                List Card for Sale
              </button>
              <button
                type="button"
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}