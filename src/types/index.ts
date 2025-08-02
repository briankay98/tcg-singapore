// Types for the TCG Singapore marketplace

export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  location?: string;
  bio?: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  game: string;
  cardName: string;
  condition: 'MINT' | 'NEAR_MINT' | 'GOOD' | 'FAIR' | 'POOR';
  rarity: string;
  listingType: 'AUCTION' | 'BUY_NOW' | 'AUCTION_WITH_BUY_NOW';
  startingPrice: number;
  buyNowPrice?: number;
  reservePrice?: number;
  currentPrice: number;
  endTime?: Date;
  isActive: boolean;
  sellerId: string;
  seller: User;
  images: ListingImage[];
  bids: Bid[];
  watchers: number;
  shippingCost?: number;
  allowLocalPickup: boolean;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListingImage {
  id: string;
  url: string;
  thumbnail?: string;
  isPrimary: boolean;
  order: number;
}

export interface Bid {
  id: string;
  amount: number;
  bidderId: string;
  bidder: User;
  listingId: string;
  createdAt: Date;
}

export interface SearchFilters {
  search?: string;
  game?: string;
  condition?: string;
  listingType?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'best_match' | 'price_low' | 'price_high' | 'ending_soon' | 'newly_listed' | 'most_watched';
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface ListingsResponse {
  listings: Listing[];
  pagination: PaginationInfo;
}