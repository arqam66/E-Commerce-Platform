
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, Product } from '../context/CartContext';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();

  // Handle adding to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  // Generate star rating display
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className={cn("group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg", className)}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pt-[100%]">
          <img
            src={product.image}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover object-center p-4"
          />
          {product.stock <= 0 && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-1 truncate group-hover:text-primary">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex mr-2">{renderRating()}</div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </Button>
          </div>

          {product.stock > 0 && product.stock < 10 && (
            <p className="mt-2 text-xs text-red-600">
              Only {product.stock} left in stock
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
