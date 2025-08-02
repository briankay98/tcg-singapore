# TCG Singapore - Trading Card Marketplace 🇸🇬

Singapore's premier mobile-first trading card marketplace with PayNow integration and local features.

## Features

### 🔥 Core Features
- **Mobile-First PWA**: Optimized for mobile devices with offline support
- **PayNow Integration**: Instant payments with QR codes
- **SingPass Verification**: Identity verification for trusted trading
- **MRT Meetup Locations**: Safe trading spots at popular MRT stations
- **Camera Integration**: Quick card listing with phone camera
- **Real-time Notifications**: Push notifications for bids, payments, etc.

### 🇸🇬 Singapore-Specific Features
- **Local Payment**: PayNow QR codes and bank integration
- **MRT Station Picker**: Popular meetup locations with safety ratings
- **SGD Currency**: Proper Singapore Dollar formatting
- **Local Business Hours**: Optimized for Singapore timezone
- **Delivery Options**: HDB, condo, void deck delivery options
- **GST Calculation**: 7% GST for business sellers

### 📱 PWA Features
- **Offline Mode**: Browse cached listings when offline
- **Install Prompt**: Add to home screen functionality
- **Service Worker**: Background sync and caching
- **Push Notifications**: Auction alerts and payment reminders
- **Responsive Design**: Works on all screen sizes

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **PWA**: next-pwa with Workbox
- **Icons**: Heroicons + Lucide React
- **TypeScript**: Full type safety
- **Mobile-First**: Responsive design

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── browse/            # Card browsing page
│   ├── sell/              # Card listing page
│   ├── profile/           # User profile page
│   └── offline/           # PWA offline page
├── components/
│   ├── home/              # Homepage components
│   ├── layout/            # Navigation and layout
│   ├── payment/           # PayNow payment components
│   ├── pwa/               # PWA install prompt
│   ├── providers/         # React context providers
│   └── singapore/         # Singapore-specific components
public/
├── icons/                 # PWA icons
├── manifest.json          # Web app manifest
└── sw-custom.js          # Custom service worker
```

## Key Features Implemented

### Mobile-First Navigation
- Desktop: Horizontal navigation with notification badges
- Mobile: Bottom tab navigation + collapsible header menu
- Touch-optimized buttons and layouts

### PayNow Payment Component
- QR code display for instant payments
- Manual PayNow details fallback
- Payment confirmation flow
- Proper SGD currency formatting

### MRT Location Picker
- Popular MRT stations with safety ratings
- MRT line color coding and station codes
- Nearby facilities information
- Safety tips for meetups

### PWA Features
- Install prompt with smart dismissal logic
- Offline page with helpful information
- Service worker for caching and background sync
- Web app manifest with proper icons

## Singapore Market Focus

Built specifically for the Singapore trading card community:
- PayNow payment integration ready
- MRT station meetup locations with safety ratings
- Singapore Dollar (SGD) currency formatting
- Local business considerations
- Mobile-first design for Singapore users

## Screenshots

- **Desktop**: Full marketplace homepage with Singapore branding
- **Mobile**: Touch-optimized interface with bottom navigation
- **Browse Page**: Advanced search and filtering for mobile
- **Sell Page**: Camera integration and MRT location selection

## Deployment

The app is optimized for deployment on Vercel, Netlify, or any Node.js hosting platform.

## License

This project is licensed under the MIT License.

---

Built with ❤️ for the Singapore TCG community
