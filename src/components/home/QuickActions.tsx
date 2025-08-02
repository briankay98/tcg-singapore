'use client';

import Link from 'next/link';
import { 
  CameraIcon, 
  QrCodeIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const actions = [
  {
    name: 'Quick Sell',
    description: 'Photo → List → Sold',
    href: '/sell/quick',
    icon: CameraIcon,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    name: 'PayNow Payment',
    description: 'Scan QR to pay instantly',
    href: '/payment/paynow',
    icon: QrCodeIcon,
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    name: 'Find Meetup',
    description: 'Safe trading locations',
    href: '/meetup',
    icon: MapPinIcon,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    name: 'Live Chat',
    description: 'Connect with traders',
    href: '/chat',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-yellow-500 hover:bg-yellow-600',
  },
];

export function QuickActions() {
  return (
    <section className="py-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {actions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="group block"
            >
              <div className="text-center">
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors ${action.color}`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-sm font-medium text-gray-900 group-hover:text-red-600">
                  {action.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}