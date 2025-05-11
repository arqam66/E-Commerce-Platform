
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { ShoppingBag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ShoppingCart: React.FC = () => {
  const { items, isOpen, toggleCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-hidden flex flex-col animate-fade-in">
        {/* Header */}
        <div className="py-4 px-6 bg-brand text-white flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Cart
          </h2>
          <Button variant="ghost" size="icon" onClick={toggleCart} className="text-white hover:bg-brand-light">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
              <Button variant="outline" onClick={toggleCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="py-4">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-lg font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Shipping</span>
              <span className="text-sm">{totalPrice > 50 ? 'Free' : '$4.99'}</span>
            </div>
            <Separator className="my-3" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold">Total</span>
              <span className="text-xl font-bold">
                ${(totalPrice > 50 ? totalPrice : totalPrice + 4.99).toFixed(2)}
              </span>
            </div>
            <Button asChild className="w-full">
              <Link to="/checkout" onClick={toggleCart}>
                Proceed to Checkout
              </Link>
            </Button>
            <Button variant="outline" className="w-full mt-2" onClick={toggleCart}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
