// Utility functions for the TCG Singapore marketplace

/**
 * Format currency to Singapore Dollar
 * @param amount - The amount to format
 * @returns Formatted SGD string
 */
export function formatSGD(amount: number): string {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date to relative time (e.g., "2 days ago")
 * @param date - The date to format
 * @returns Relative time string
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else {
    return 'Just now';
  }
}

/**
 * Calculate remaining time for auctions
 * @param endTime - The auction end time
 * @returns Object with days, hours, minutes, and formatted string
 */
export function calculateTimeRemaining(endTime: Date) {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      formatted: 'Ended',
      isExpired: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let formatted = '';
  if (days > 0) {
    formatted = `${days}d ${hours}h`;
  } else if (hours > 0) {
    formatted = `${hours}h ${minutes}m`;
  } else {
    formatted = `${minutes}m`;
  }

  return {
    days,
    hours,
    minutes,
    formatted,
    isExpired: false,
  };
}

/**
 * Generate a slug from a string
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate email format
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate a random ID (for demo purposes)
 * @returns Random string ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Get condition color for UI display
 * @param condition - Card condition
 * @returns Tailwind color class
 */
export function getConditionColor(condition: string): string {
  switch (condition.toUpperCase()) {
    case 'MINT':
      return 'text-green-600 bg-green-100';
    case 'NEAR_MINT':
      return 'text-blue-600 bg-blue-100';
    case 'GOOD':
      return 'text-yellow-600 bg-yellow-100';
    case 'FAIR':
      return 'text-orange-600 bg-orange-100';
    case 'POOR':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

/**
 * Get listing type badge color
 * @param listingType - Type of listing
 * @returns Tailwind color class
 */
export function getListingTypeBadge(listingType: string): string {
  switch (listingType) {
    case 'AUCTION':
      return 'text-purple-600 bg-purple-100';
    case 'BUY_NOW':
      return 'text-green-600 bg-green-100';
    case 'AUCTION_WITH_BUY_NOW':
      return 'text-blue-600 bg-blue-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

/**
 * Singapore regions for location dropdown
 */
export const SINGAPORE_REGIONS = [
  { value: 'central', label: 'Central Singapore' },
  { value: 'north', label: 'North Singapore' },
  { value: 'south', label: 'South Singapore' },
  { value: 'east', label: 'East Singapore' },
  { value: 'west', label: 'West Singapore' },
];

/**
 * Popular trading card games
 */
export const TRADING_CARD_GAMES = [
  { value: 'pokemon', label: 'Pokémon' },
  { value: 'magic', label: 'Magic: The Gathering' },
  { value: 'yugioh', label: 'Yu-Gi-Oh!' },
  { value: 'onepiece', label: 'One Piece' },
  { value: 'digimon', label: 'Digimon' },
  { value: 'dragonball', label: 'Dragon Ball' },
  { value: 'other', label: 'Other' },
];

/**
 * Card conditions
 */
export const CARD_CONDITIONS = [
  { value: 'MINT', label: 'Mint' },
  { value: 'NEAR_MINT', label: 'Near Mint' },
  { value: 'GOOD', label: 'Good' },
  { value: 'FAIR', label: 'Fair' },
  { value: 'POOR', label: 'Poor' },
];