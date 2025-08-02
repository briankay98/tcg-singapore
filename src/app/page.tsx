import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  CameraIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { FeaturedCards } from '@/components/home/FeaturedCards';
import { QuickActions } from '@/components/home/QuickActions';
import { TrustIndicators } from '@/components/home/TrustIndicators';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Singapore&apos;s Premier
              <span className="block text-red-200">TCG Marketplace 🇸🇬</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-red-100">
              Buy, sell, and trade Pokemon, Magic: The Gathering, Yu-Gi-Oh! cards safely 
              with PayNow integration and local meetup spots.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for cards..."
                  className="w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
                />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-red-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
                Browse Cards
              </Link>
              <Link
                href="/sell"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                <CameraIcon className="mr-2 h-5 w-5" />
                Sell Cards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Quick Actions */}
      <QuickActions />

      {/* Featured Cards */}
      <FeaturedCards />

      {/* Singapore Features */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Built for Singapore Traders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Local features designed specifically for the Singapore TCG community
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <CreditCardIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">PayNow Integration</h3>
              <p className="mt-2 text-gray-600">
                Instant payments with PayNow QR codes. No more cash handling at meetups.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <MapPinIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">MRT Meetup Spots</h3>
              <p className="mt-2 text-gray-600">
                Popular meetup locations at major MRT stations and shopping centers.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                <ShieldCheckIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">SingPass Verified</h3>
              <p className="mt-2 text-gray-600">
                Identity verification with SingPass for trusted trading relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Recent Activity
            </h2>
            <Link
              href="/browse"
              className="text-red-600 hover:text-red-500 font-medium"
            >
              View all
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Sample activity cards */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <div className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Card Image</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Charizard VMAX
                  </h3>
                  <div className="mt-1 flex items-center">
                    <span className="text-lg font-bold text-red-600">S$45.00</span>
                    <div className="ml-2 flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">4.8</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Jurong Point</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
