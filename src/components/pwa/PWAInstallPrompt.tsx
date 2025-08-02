'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show install prompt after 30 seconds if not dismissed before
      setTimeout(() => {
        const dismissed = localStorage.getItem('pwa-install-dismissed');
        if (!dismissed) {
          setShowInstallPrompt(true);
        }
      }, 30000);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
        localStorage.setItem('pwa-install-dismissed', 'true');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error('Error during install prompt:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const handleShowInstallPrompt = () => {
    setShowInstallPrompt(true);
  };

  // Don't show if already installed or no prompt available
  if (isInstalled || !deferredPrompt) {
    return null;
  }

  return (
    <>
      {/* Install Banner */}
      {showInstallPrompt && (
        <div className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DevicePhoneMobileIcon className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">
                  Install TCG Singapore
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get faster access and offline browsing on your device
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex space-x-3">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Install App
            </button>
            <button
              onClick={handleDismiss}
              className="flex-1 bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Not Now
            </button>
          </div>
        </div>
      )}

      {/* Floating Install Button (shows after dismissing banner) */}
      {!showInstallPrompt && deferredPrompt && (
        <button
          onClick={handleShowInstallPrompt}
          className="fixed bottom-24 md:bottom-8 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
          title="Install TCG Singapore App"
        >
          <DevicePhoneMobileIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
}