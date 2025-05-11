
import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Truck, RefreshCw, CreditCard } from 'lucide-react';

const Index = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Hero />
      
      {/* Features Section */}
      <div className="container-custom py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center p-4 rounded-lg border border-gray-200">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <Truck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Free Shipping</h3>
            <p className="text-sm text-gray-500">On orders over $50</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-lg border border-gray-200">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <RefreshCw className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Easy Returns</h3>
            <p className="text-sm text-gray-500">30 day return policy</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-lg border border-gray-200">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Secure Shopping</h3>
            <p className="text-sm text-gray-500">100% protected payments</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 rounded-lg border border-gray-200">
          <div className="rounded-full bg-primary/10 p-3 mr-4">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Multiple Payment Options</h3>
            <p className="text-sm text-gray-500">Credit card, PayPal, & more</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container-custom">
        <FeaturedProducts />
      </div>
      
      {/* Call to action */}
      <div className="bg-gray-100 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
