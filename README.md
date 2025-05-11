# E-Commerce Platform

A modern multi-vendor marketplace built with Next.js and Firebase.

## Features

- **User System**: Customer, vendor, and admin roles
- **Product Management**: CRUD operations with categories and search
- **Shopping Experience**: Cart, checkout flow, and Stripe payments
- **Reviews**: Product rating system
- **Admin Dashboard**: Comprehensive management interface
- **Real-time Updates**: Inventory and order tracking

## Technologies

- **Frontend**: Next.js 14, React 19, Tailwind CSS
- **State Management**: Redux Toolkit
- **Backend Services**: Firebase Authentication, Firestore
- **Payment Processing**: Stripe API
- **Hosting**: Vercel

## Quick Start

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-platform.git
   cd ecommerce-platform
Install dependencies:

bash
npm install
Configure environment:

bash
cp .env.example .env.local
# Edit .env.local with your credentials
Run development server:

bash
npm run dev
Configuration
Required environment variables (.env.local):

ini
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Stripe
STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
Deployment
Set up Firebase project in console

Configure Stripe account

Deploy to Vercel:

bash
vercel --prod
Project Structure
ecommerce-platform/
├── app/            # Next.js routes
│   ├── (admin)     # Admin pages
│   ├── (vendor)    # Vendor pages
│   └── api/        # API endpoints
├── components/     # UI components
├── lib/            # Utilities and config
└── store/          # Redux state
License
MIT License

