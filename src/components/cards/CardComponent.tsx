import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon, ClockIcon, EyeIcon } from 'lucide-react';
import { Card as CardType } from '@/lib/types';
import { formatPrice, timeUntil, getGameDisplayName, getRarityColor, getConditionColor } from '@/lib/utils';

interface CardProps {
  card: CardType;
  showWatchlist?: boolean;
}

export default function CardComponent({ card, showWatchlist = true }: CardProps) {
  const isAuction = card.isAuction;
  const timeRemaining = card.auctionEndTime ? timeUntil(card.auctionEndTime) : null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
      {/* Card Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Link href={`/card/${card.id}`}>
          <Image
            src={card.images[0] || '/placeholder-card.jpg'}
            alt={card.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </Link>
        
        {/* Overlay badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {card.foil && (
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
              Foil
            </span>
          )}
          {isAuction && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
              Auction
            </span>
          )}
        </div>

        {/* Watchlist button */}
        {showWatchlist && (
          <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
            <HeartIcon className="h-4 w-4" />
          </button>
        )}

        {/* Time remaining for auctions */}
        {isAuction && timeRemaining && timeRemaining !== 'Ended' && (
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              {timeRemaining} left
            </div>
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-4">
        {/* Title and Game */}
        <div className="mb-2">
          <Link href={`/card/${card.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 line-clamp-2 leading-tight">
              {card.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            {getGameDisplayName(card.game)} • {card.setName}
          </p>
        </div>

        {/* Rarity and Condition */}
        <div className="flex items-center space-x-3 mb-3 text-xs">
          <span className={`font-medium ${getRarityColor(card.rarity)}`}>
            {card.rarity.replace('_', ' ').toUpperCase()}
          </span>
          <span className="text-gray-400">•</span>
          <span className={`${getConditionColor(card.condition)}`}>
            {card.condition.replace('_', ' ').toUpperCase()}
          </span>
        </div>

        {/* Price */}
        <div className="mb-3">
          {isAuction ? (
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current bid:</span>
                <span className="font-bold text-lg text-green-600">
                  {formatPrice(card.currentBid || 0)}
                </span>
              </div>
              {card.buyItNowPrice && (
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-gray-600">Buy now:</span>
                  <span className="font-medium text-blue-600">
                    {formatPrice(card.buyItNowPrice)}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Price:</span>
              <span className="font-bold text-lg text-gray-900">
                {formatPrice(card.price)}
              </span>
            </div>
          )}
        </div>

        {/* Seller and Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                {card.seller.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="hover:text-gray-700">{card.seller.username}</span>
            <span className="text-yellow-500">★</span>
            <span>{card.seller.rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            {card.stock > 1 && (
              <span className="text-green-600 font-medium">
                {card.stock} available
              </span>
            )}
            <div className="flex items-center space-x-1">
              <EyeIcon className="h-3 w-3" />
              <span>{card.views}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          {isAuction ? (
            <>
              <Link
                href={`/card/${card.id}`}
                className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Place Bid
              </Link>
              {card.buyItNowPrice && (
                <Link
                  href={`/card/${card.id}?buyNow=true`}
                  className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                >
                  Buy Now
                </Link>
              )}
            </>
          ) : (
            <Link
              href={`/card/${card.id}`}
              className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}