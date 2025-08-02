# TCG Singapore Marketplace

A comprehensive trading card marketplace built specifically for Singapore collectors and traders.

## 🚀 Features

### ✅ Completed Features

#### **Homepage & Navigation**
- Modern, responsive design with Singapore-focused branding
- Hero section with search functionality
- Feature highlights (Local Market, Real-time Auctions, Secure Transactions)
- Popular trading card games showcase
- Professional footer with organized links

#### **Authentication System**
- Modal-based login/register system
- Email/password authentication forms
- Facebook OAuth integration ready
- Form validation and user feedback
- Mobile-responsive authentication UI

#### **Card Listing System** (`/sell`)
- Comprehensive sell card form with validation
- Multiple listing types:
  - Auction only
  - Buy It Now only  
  - Auction with Buy It Now option
- Card details form (name, game, condition, rarity)
- Interactive listing type selection
- Pricing configuration for different listing types
- Auction duration selection (3, 5, 7, 10 days)
- Drag & drop image upload interface
- Image preview with remove functionality
- Shipping options and local pickup
- Singapore location selection

#### **Advanced Search & Filtering** (`/search`)
- eBay-style search interface
- Comprehensive filtering system:
  - Price range slider (SGD $0 - $1,000,000)
  - Listing type filters (All, Auction, Buy Now, Hybrid)
  - Condition filters (Mint, Near Mint, Good, Fair, Poor)
  - Game type selection (Pokémon, MTG, Yu-Gi-Oh!, One Piece)
  - Singapore region filtering
- Multiple sort options:
  - Best Match, Price (Low/High), Ending Soon, Newly Listed, Most Watched
- Grid and list view toggle
- Mock card listings with realistic data
- Interactive bidding and buy now buttons
- Pagination controls

#### **Singapore-Specific Features**
- SGD currency throughout
- Singapore regional location options
- Local pickup support
- PayNow payment preparation
- Singapore-focused UI copy and branding

### 🔧 Technical Implementation

#### **Frontend Stack**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Zod** for validation schemas

#### **Architecture**
- Component-based architecture
- Authentication context provider
- Responsive design patterns
- Modern React patterns (hooks, context)

#### **Code Quality**
- TypeScript strict mode
- ESLint configuration
- Consistent code formatting
- Proper error handling

## 📋 Planned Features

### 🔄 Phase 2: Backend Integration
- [ ] PostgreSQL database setup
- [ ] Prisma ORM integration
- [ ] API routes for authentication
- [ ] API routes for listings management
- [ ] File upload handling for images
- [ ] User session management

### 🔄 Phase 3: Real-time Features
- [ ] Socket.io integration for live bidding
- [ ] Real-time auction countdown timers
- [ ] Live bid notifications
- [ ] Automatic bid increments

### 🔄 Phase 4: Advanced Features
- [ ] User profiles and verification
- [ ] Watchlist functionality
- [ ] Seller dashboard with analytics
- [ ] Email notifications
- [ ] Search alerts
- [ ] Message system between buyers/sellers

### 🔄 Phase 5: Payment & Security
- [ ] PayNow integration
- [ ] Credit card processing
- [ ] Escrow system
- [ ] User verification system
- [ ] Rate limiting and security measures

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── sell/page.tsx      # Sell card form
│   ├── search/page.tsx    # Search & filtering
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── AuthModal.tsx      # Login/Register modal
│   └── AuthProvider.tsx   # Authentication context
├── lib/                  # Utilities (planned)
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/briankay98/tcg-singapore.git
cd tcg-singapore
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with Singapore branding
- **Interactive Elements**: Hover effects, smooth transitions, modal overlays
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **User Experience**: Intuitive navigation and clear call-to-actions

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with search
- Feature highlights
- Popular games showcase
- Authentication integration

### Sell Page (`/sell`)
- Comprehensive listing form
- Image upload with preview
- Multiple listing types
- Singapore-specific options

### Search Page (`/search`)
- Advanced filtering sidebar
- Grid/list view toggle
- Sort functionality
- Mock listings display

## 🔐 Authentication

- Modal-based authentication system
- Login and registration forms
- Facebook OAuth ready
- Form validation with user feedback
- Responsive design

## 💡 Future Enhancements

- Real-time bidding system
- User profiles and ratings
- Advanced search with AI recommendations
- Mobile app development
- Integration with Singapore payment systems
- Seller verification program
- Community features and forums

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- Built for the Singapore trading card community
- Inspired by modern marketplace platforms
- Designed with user experience as the top priority
