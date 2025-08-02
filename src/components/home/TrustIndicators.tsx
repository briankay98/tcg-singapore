'use client';

import { ShieldCheckIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const trustStats = [
  {
    name: 'Verified Users',
    value: '2,500+',
    icon: ShieldCheckIcon,
    description: 'SingPass verified traders'
  },
  {
    name: 'Safe Transactions',
    value: '15,000+',
    icon: CurrencyDollarIcon,
    description: 'Completed with PayNow'
  },
  {
    name: 'Community Members',
    value: '8,000+',
    icon: UsersIcon,
    description: 'Active TCG traders'
  }
];

export function TrustIndicators() {
  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {trustStats.map((stat) => (
            <div key={stat.name} className="text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center">
                <stat.icon className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <p className="text-sm font-medium text-gray-900">{stat.name}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}