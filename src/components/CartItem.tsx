
import React from 'react';
import { useCart, CartItem as CartItemType } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeItem(product.id);
    }
  };

  const handleRemove = () => {
    removeItem(product.id);
  };

  return (
    <div className="flex py-4 border-b">
      {/* Product image */}
      <div className="h-20 w-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product details */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-500">${product.price.toFixed(2)} each</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>

        {/* Quantity controls */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleDecreaseQuantity} 
              className="h-6 w-6"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="mx-2 text-sm w-6 text-center">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleIncreaseQuantity} 
              className="h-6 w-6"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleRemove}
            className="h-6 w-6 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
