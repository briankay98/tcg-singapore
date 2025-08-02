'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  MagnifyingGlassIcon, 
  PlusIcon, 
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  MagnifyingGlassIcon as MagnifyingGlassIconSolid, 
  PlusIcon as PlusIconSolid, 
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, activeIcon: HomeIconSolid },
  { name: 'Browse', href: '/browse', icon: MagnifyingGlassIcon, activeIcon: MagnifyingGlassIconSolid },
  { name: 'Sell', href: '/sell', icon: PlusIcon, activeIcon: PlusIconSolid },
  { name: 'Profile', href: '/profile', icon: UserIcon, activeIcon: UserIconSolid },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-red-600">TCG Singapore</span>
                <span className="ml-2 text-sm font-medium text-gray-500">🇸🇬</span>
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium`}
                  >
                    {isActive ? (
                      <item.activeIcon className="mr-2 h-5 w-5" />
                    ) : (
                      <item.icon className="mr-2 h-5 w-5" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
              
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <BellIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600">TCG SG</span>
            <span className="ml-1 text-xs">🇸🇬</span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <button className="relative p-2 text-gray-400">
              <BellIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center">
                3
              </span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      isActive
                        ? 'bg-red-50 border-red-500 text-red-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    } flex items-center border-l-4 py-3 px-4 text-base font-medium`}
                  >
                    {isActive ? (
                      <item.activeIcon className="mr-3 h-6 w-6" />
                    ) : (
                      <item.icon className="mr-3 h-6 w-6" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 flex items-center border-l-4 py-3 px-4 text-base font-medium"
              >
                <ShoppingBagIcon className="mr-3 h-6 w-6" />
                Shopping Cart
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="grid grid-cols-4 gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive ? 'text-red-600' : 'text-gray-400'
                } flex flex-col items-center justify-center py-2 px-1 min-h-[64px] hover:text-red-500 transition-colors`}
              >
                {isActive ? (
                  <item.activeIcon className="h-6 w-6 mb-1" />
                ) : (
                  <item.icon className="h-6 w-6 mb-1" />
                )}
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}