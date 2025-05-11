Amazon Clone - Multi-Vendor E-Commerce Platform
E-Commerce Platform Next.js Firebase Stripe

A full-featured multi-vendor e-commerce platform with admin dashboard, inspired by Amazon.

Features
Core Functionality
User Authentication with role-based access (Users/Admins/Vendors)

Product Management with categories, filters, and search

Shopping Cart with persistent storage

Checkout Process with multiple payment options

Order Tracking with real-time updates

Engagement Features
⭐ Reviews & Ratings system

🔍 Advanced Product Search with filters

🔔 Real-time Notifications

📊 Sales Analytics Dashboard

Admin & Vendor Tools
🛒 Product Management (CRUD operations)

📦 Order Management System

👥 User & Vendor Management

📈 Sales & Revenue Reports

Technology Stack
Frontend
React 19 with Next.js 14 (App Router)

State Management: Redux Toolkit with Persist

UI Components: ShadCN UI + Tailwind CSS

Form Handling: React Hook Form + Zod validation

Backend
Authentication: Firebase Auth

Database: Firestore (NoSQL) + MongoDB for complex queries

Serverless Functions: Next.js API Routes

Payments: Stripe API integration

DevOps
Hosting: Vercel (Frontend) + Firebase Hosting

CI/CD: GitHub Actions

Monitoring: Sentry for error tracking

Installation
bash
# Clone the repository
git clone https://github.com/yourusername/amazon-clone.git

# Navigate to project directory
cd amazon-clone

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Fill in your Firebase and Stripe credentials in .env.local

# Run development server
npm run dev
Environment Variables
env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

STRIPE_PUBLISHABLE_KEY=your_stripe_pk
STRIPE_SECRET_KEY=your_stripe_sk
NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET=your_webhook_secret
Project Structure
amazon-clone/
├── app/                    # Next.js app router
│   ├── (admin)            # Admin routes
│   ├── (vendor)           # Vendor routes
│   ├── (user)             # User routes
│   ├── api/               # API routes
├── components/            # Reusable components
├── config/                # App configuration
├── contexts/              # React contexts
├── features/              # Redux slices
├── hooks/                 # Custom hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript types
Implementing Real-Time Features
Stock Updates
javascript
// Example using Firestore real-time listener
import { onSnapshot, doc } from 'firebase/firestore';

const unsubscribe = onSnapshot(doc(db, 'products', productId), (doc) => {
  const stock = doc.data()?.stock;
  dispatch(updateProductStock({ productId, stock }));
});
Order Tracking
javascript
// Real-time order status updates
useEffect(() => {
  const orderRef = doc(db, 'orders', orderId);
  const unsubscribe = onSnapshot(orderRef, (snapshot) => {
    const status = snapshot.data()?.status;
    setOrderStatus(status);
  });
  
  return () => unsubscribe();
}, [orderId]);
Deployment
Set up a Firebase project in Firebase Console

Configure Stripe in developer dashboard

Deploy to Vercel:

bash
vercel --prod
Set up webhooks for Stripe payments

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT



