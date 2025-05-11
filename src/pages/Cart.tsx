
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, CartItem } from '../context/CartContext';
import { ShoppingCart, ArrowRight, Trash2, Plus, Minus, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  // Handle quantity change
  const handleUpdateQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity);
  };

  // Calculate shipping cost
  const shippingCost = totalPrice > 50 ? 0 : 4.99;
  const totalWithShipping = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8 text-gray-600">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Button asChild>
          <Link to="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-bold mb-8 flex items-center">
        <ShoppingCart className="mr-3 h-6 w-6" />
        Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b text-sm font-medium text-gray-500">
              <div className="col-span-6">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-3">Quantity</div>
              <div className="col-span-1 text-right">Total</div>
            </div>

            {/* Cart items */}
            <div className="divide-y">
              {items.map((item: CartItem) => (
                <div key={item.product.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                  {/* Product */}
                  <div className="col-span-6 flex items-center mb-4 md:mb-0">
                    <div className="h-20 w-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        <Link to={`/product/${item.product.id}`} className="hover:text-primary">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">Vendor: {item.product.vendor}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-gray-900 mb-2 md:mb-0">
                    <div className="md:hidden font-medium text-xs text-gray-500 uppercase mb-1">Price:</div>
                    ${item.product.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div className="col-span-3 mb-2 md:mb-0">
                    <div className="md:hidden font-medium text-xs text-gray-500 uppercase mb-1">Quantity:</div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-3 w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 text-right font-medium">
                    <div className="md:hidden font-medium text-xs text-gray-500 uppercase mb-1">Total:</div>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove - visible on all screen sizes */}
                  <div className="col-span-12 mt-2 md:mt-0 md:col-span-1 text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeItem(item.product.id)}
                      className="h-8 w-8 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continue shopping button */}
          <div className="mt-6">
            <Button variant="outline" asChild>
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            {/* Subtotal */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            
            {/* Shipping */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            
            {/* Tax */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tax</span>
              <span>Calculated at checkout</span>
            </div>
            
            <Separator className="my-4" />
            
            {/* Total */}
            <div className="flex justify-between mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">${totalWithShipping.toFixed(2)}</span>
            </div>
            
            {/* Checkout button */}
            <Button asChild className="w-full mb-4">
              <Link to="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            {/* Promo code */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Apply Promo Code</h3>
              <div className="flex space-x-2">
                <Input placeholder="Enter code" className="flex-1" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
            
            {/* Security badges */}
            <div className="mt-6">
              <div className="flex items-center justify-center mb-2">
                <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-xs text-gray-500">Secure Payment</span>
              </div>
              <div className="flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-xs text-gray-500">Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
