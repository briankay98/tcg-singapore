// Core types for TCG Singapore marketplace

export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  isVerified: boolean;
  rating: number;
  totalSales: number;
  totalPurchases: number;
  joinedAt: Date;
  location?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

export interface Card {
  id: string;
  name: string;
  description: string;
  category: Category;
  game: 'pokemon' | 'mtg' | 'yugioh' | 'digimon' | 'other';
  setName: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'ultra_rare' | 'secret_rare';
  condition: 'mint' | 'near_mint' | 'excellent' | 'good' | 'played' | 'poor';
  language: string;
  foil: boolean;
  price: number;
  images: string[];
  seller: User;
  isAuction: boolean;
  auctionEndTime?: Date;
  currentBid?: number;
  buyItNowPrice?: number;
  stock: number;
  views: number;
  listedAt: Date;
  updatedAt: Date;
  status: 'active' | 'sold' | 'ended' | 'draft';
}

export interface Bid {
  id: string;
  cardId: string;
  bidderId: string;
  bidder: User;
  amount: number;
  placedAt: Date;
  isWinning: boolean;
}

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  buyer: User;
  seller: User;
  card: Card;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  shippingAddress: Address;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  unit?: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  game?: string;
  rarity?: string[];
  condition?: string[];
  priceMin?: number;
  priceMax?: number;
  sortBy?: 'newest' | 'price_low' | 'price_high' | 'ending_soon' | 'most_watched';
  isAuction?: boolean;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}