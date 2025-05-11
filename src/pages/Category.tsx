
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { featuredProducts } from '../components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Convert slug back to category name (replace hyphens with spaces and capitalize)
  const categoryName = categorySlug
    ? categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('&-', '& ') // Special case for "Home & Kitchen"
    : '';
  
  // Filter products by category
  const categoryProducts = featuredProducts.filter(product => {
    // Handle special case for "Home & Kitchen" since the URL might be "home-kitchen"
    if (categorySlug === 'home-kitchen' && product.category === 'Home & Kitchen') {
      return true;
    }
    
    return product.category.toLowerCase() === categoryName.toLowerCase();
  });

  return (
    <div className="container-custom py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{categoryName || 'Category'}</h1>
      </div>
      
      {categoryProducts.length > 0 ? (
        <ProductGrid products={categoryProducts} />
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-4">No products found in this category</h2>
          <Button asChild>
            <Link to="/">Browse All Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Category;
