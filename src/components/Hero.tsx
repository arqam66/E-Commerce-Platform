
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand to-primary text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-md">
              Shop the latest trends in electronics, fashion, home goods, and more with fast shipping and easy returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-black font-medium">
                <Link to="/category/electronics">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand">
                <Link to="/deals">
                  View Deals
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main hero image */}
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
                alt="Shopping Experience" 
                className="rounded-lg shadow-2xl w-full max-w-md object-cover object-center"
              />
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-black p-4 rounded-lg shadow-lg flex items-center">
                <div className="text-2xl font-bold mr-2">50%</div>
                <div>
                  <div className="font-semibold">Summer Sale</div>
                  <div className="text-xs">Limited time offer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
