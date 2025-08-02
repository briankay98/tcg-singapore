# TCG Singapore Database Schema (MySQL)

This document outlines the database schema for the TCG Singapore marketplace application.

## Overview

The database is designed to support a comprehensive trading card marketplace with features including:
- User management and authentication
- Product catalog with detailed card information
- Auction and fixed-price listings
- Order processing and payment tracking
- User reviews and ratings
- Search and filtering capabilities

## Tables

### 1. Users Table

Stores user account information and profile data.

```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    avatar_url VARCHAR(500),
    phone VARCHAR(20),
    date_of_birth DATE,
    location ENUM('central', 'north', 'south', 'east', 'west'),
    
    -- Seller metrics
    total_sales INT DEFAULT 0,
    total_purchases INT DEFAULT 0,
    seller_rating DECIMAL(3,2) DEFAULT 0.00,
    seller_rating_count INT DEFAULT 0,
    
    -- Account status
    is_verified BOOLEAN DEFAULT FALSE,
    is_seller_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    is_banned BOOLEAN DEFAULT FALSE,
    
    -- OAuth
    google_id VARCHAR(255),
    facebook_id VARCHAR(255),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_username (username),
    INDEX idx_location (location),
    INDEX idx_seller_rating (seller_rating),
    INDEX idx_created_at (created_at)
);
```

### 2. Categories Table

Defines trading card game categories and sets.

```sql
CREATE TABLE categories (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    game_type ENUM('pokemon', 'mtg', 'yugioh', 'digimon', 'other') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_game_type (game_type),
    INDEX idx_slug (slug),
    INDEX idx_sort_order (sort_order)
);
```

### 3. Cards Table

Main product catalog for trading cards.

```sql
CREATE TABLE cards (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Card Details
    category_id VARCHAR(36) NOT NULL,
    game_type ENUM('pokemon', 'mtg', 'yugioh', 'digimon', 'other') NOT NULL,
    set_name VARCHAR(255) NOT NULL,
    card_number VARCHAR(50),
    rarity ENUM('common', 'uncommon', 'rare', 'ultra_rare', 'secret_rare', 'promo') NOT NULL,
    condition_grade ENUM('mint', 'near_mint', 'excellent', 'good', 'played', 'poor') NOT NULL,
    language VARCHAR(10) DEFAULT 'EN',
    is_foil BOOLEAN DEFAULT FALSE,
    is_first_edition BOOLEAN DEFAULT FALSE,
    
    -- Listing Details
    seller_id VARCHAR(36) NOT NULL,
    listing_type ENUM('fixed_price', 'auction', 'best_offer') NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    starting_bid DECIMAL(10,2),
    current_bid DECIMAL(10,2),
    buy_now_price DECIMAL(10,2),
    reserve_price DECIMAL(10,2),
    
    -- Inventory
    stock_quantity INT DEFAULT 1,
    
    -- Auction Details
    auction_start_time TIMESTAMP,
    auction_end_time TIMESTAMP,
    
    -- Images (JSON array of URLs)
    images JSON,
    
    -- SEO and Search
    search_keywords VARCHAR(500),
    
    -- Metrics
    view_count INT DEFAULT 0,
    watch_count INT DEFAULT 0,
    
    -- Status
    status ENUM('draft', 'active', 'sold', 'ended', 'removed') DEFAULT 'draft',
    is_featured BOOLEAN DEFAULT FALSE,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    published_at TIMESTAMP,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE,
    
    INDEX idx_seller_id (seller_id),
    INDEX idx_category_id (category_id),
    INDEX idx_game_type (game_type),
    INDEX idx_rarity (rarity),
    INDEX idx_condition_grade (condition_grade),
    INDEX idx_listing_type (listing_type),
    INDEX idx_price (price),
    INDEX idx_status (status),
    INDEX idx_auction_end_time (auction_end_time),
    INDEX idx_created_at (created_at),
    INDEX idx_search (name, set_name, search_keywords),
    
    FULLTEXT(name, description, set_name, search_keywords)
);
```

### 4. Bids Table

Tracks auction bids on cards.

```sql
CREATE TABLE bids (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    card_id VARCHAR(36) NOT NULL,
    bidder_id VARCHAR(36) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    is_auto_bid BOOLEAN DEFAULT FALSE,
    max_bid_amount DECIMAL(10,2),
    is_winning BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE CASCADE,
    FOREIGN KEY (bidder_id) REFERENCES users(id) ON DELETE CASCADE,
    
    INDEX idx_card_id (card_id),
    INDEX idx_bidder_id (bidder_id),
    INDEX idx_amount (amount),
    INDEX idx_created_at (created_at),
    
    UNIQUE KEY unique_winning_bid (card_id, is_winning)
);
```

### 5. Orders Table

Manages purchase orders and transactions.

```sql
CREATE TABLE orders (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_number VARCHAR(20) UNIQUE NOT NULL,
    
    -- Parties
    buyer_id VARCHAR(36) NOT NULL,
    seller_id VARCHAR(36) NOT NULL,
    
    -- Order Details
    subtotal DECIMAL(10,2) NOT NULL,
    shipping_cost DECIMAL(10,2) DEFAULT 0.00,
    tax_amount DECIMAL(10,2) DEFAULT 0.00,
    total_amount DECIMAL(10,2) NOT NULL,
    
    -- Payment
    payment_method ENUM('credit_card', 'debit_card', 'paypal', 'bank_transfer', 'cash') NOT NULL,
    payment_status ENUM('pending', 'processing', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_intent_id VARCHAR(255),
    
    -- Shipping
    shipping_method ENUM('standard', 'express', 'overnight', 'pickup') NOT NULL,
    shipping_address JSON NOT NULL,
    tracking_number VARCHAR(100),
    
    -- Status
    status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled', 'disputed') DEFAULT 'pending',
    
    -- Notes
    buyer_notes TEXT,
    seller_notes TEXT,
    admin_notes TEXT,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    
    FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE RESTRICT,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE RESTRICT,
    
    INDEX idx_buyer_id (buyer_id),
    INDEX idx_seller_id (seller_id),
    INDEX idx_status (status),
    INDEX idx_payment_status (payment_status),
    INDEX idx_created_at (created_at),
    INDEX idx_order_number (order_number)
);
```

### 6. Order Items Table

Individual items within orders.

```sql
CREATE TABLE order_items (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id VARCHAR(36) NOT NULL,
    card_id VARCHAR(36) NOT NULL,
    
    -- Item Details at time of purchase
    card_name VARCHAR(255) NOT NULL,
    card_condition VARCHAR(50) NOT NULL,
    card_rarity VARCHAR(50) NOT NULL,
    
    quantity INT NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE RESTRICT,
    
    INDEX idx_order_id (order_id),
    INDEX idx_card_id (card_id)
);
```

### 7. Reviews Table

User reviews and ratings for transactions.

```sql
CREATE TABLE reviews (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    order_id VARCHAR(36) NOT NULL,
    reviewer_id VARCHAR(36) NOT NULL,
    reviewee_id VARCHAR(36) NOT NULL,
    reviewer_type ENUM('buyer', 'seller') NOT NULL,
    
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    
    -- Review categories
    communication_rating INT CHECK (communication_rating >= 1 AND communication_rating <= 5),
    shipping_rating INT CHECK (shipping_rating >= 1 AND shipping_rating <= 5),
    item_accuracy_rating INT CHECK (item_accuracy_rating >= 1 AND item_accuracy_rating <= 5),
    
    is_public BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewee_id) REFERENCES users(id) ON DELETE CASCADE,
    
    INDEX idx_order_id (order_id),
    INDEX idx_reviewer_id (reviewer_id),
    INDEX idx_reviewee_id (reviewee_id),
    INDEX idx_rating (rating),
    INDEX idx_created_at (created_at),
    
    UNIQUE KEY unique_review_per_order (order_id, reviewer_id)
);
```

### 8. Watchlist Table

Users' watchlists for cards they're interested in.

```sql
CREATE TABLE watchlist (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    card_id VARCHAR(36) NOT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE CASCADE,
    
    UNIQUE KEY unique_watchlist_item (user_id, card_id),
    INDEX idx_user_id (user_id),
    INDEX idx_card_id (card_id),
    INDEX idx_created_at (created_at)
);
```

### 9. Messages Table

User-to-user messaging system.

```sql
CREATE TABLE messages (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    sender_id VARCHAR(36) NOT NULL,
    recipient_id VARCHAR(36) NOT NULL,
    card_id VARCHAR(36),
    order_id VARCHAR(36),
    
    subject VARCHAR(255),
    message TEXT NOT NULL,
    
    is_read BOOLEAN DEFAULT FALSE,
    is_system_message BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP,
    
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (recipient_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE SET NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL,
    
    INDEX idx_sender_id (sender_id),
    INDEX idx_recipient_id (recipient_id),
    INDEX idx_card_id (card_id),
    INDEX idx_order_id (order_id),
    INDEX idx_is_read (is_read),
    INDEX idx_created_at (created_at)
);
```

### 10. Search History Table

Track user search queries for analytics and recommendations.

```sql
CREATE TABLE search_history (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36),
    search_query VARCHAR(500) NOT NULL,
    filters JSON,
    results_count INT DEFAULT 0,
    ip_address VARCHAR(45),
    user_agent TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    
    INDEX idx_user_id (user_id),
    INDEX idx_search_query (search_query),
    INDEX idx_created_at (created_at)
);
```

## Indexes and Performance

Key indexes have been added for:
- Primary keys and foreign keys
- Frequently queried columns (status, game_type, rarity, etc.)
- Search functionality (FULLTEXT indexes)
- Sorting and filtering operations
- Time-based queries

## Data Types and Constraints

- UUIDs are used for primary keys to avoid enumeration attacks
- ENUM types restrict values to valid options
- JSON columns store complex data structures (addresses, images)
- Proper foreign key constraints maintain referential integrity
- Check constraints validate rating ranges

## Security Considerations

- Password hashes are stored, never plain text passwords
- User IDs are UUIDs to prevent enumeration
- Sensitive data like payment details are handled by external services
- Proper indexes prevent slow queries that could be exploited

## Scaling Considerations

- Partitioning can be implemented on large tables by date
- Read replicas can handle search and browse queries
- Caching layers can reduce database load
- Archive old data to maintain performance

This schema provides a solid foundation for the TCG Singapore marketplace while allowing for future expansion and optimization.