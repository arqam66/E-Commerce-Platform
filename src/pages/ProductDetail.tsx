
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart, Product } from '../context/CartContext';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ChevronRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductGrid from '../components/ProductGrid';
import { toast } from '@/components/ui/use-toast';

// Mock product data
import { featuredProducts } from '../components/FeaturedProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // Fetch product data
  useEffect(() => {
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundProduct = featuredProducts.find(p => p.id === id);
      setProduct(foundProduct || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast({
        title: 'Added to cart',
        description: `${product.name} x ${quantity} added to your cart.`,
      });
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    const max = product?.stock || 10;
    setQuantity(Math.max(1, Math.min(newQuantity, max)));
  };

  // Generate star rating display
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="container-custom py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  // Similar products (mock data)
  const similarProducts = featuredProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container-custom py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900">{product.name}</span>
      </div>

      {/* Product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product image */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex mr-2">{renderRating(product.rating)}</div>
            <span className="text-sm text-gray-500">({product.rating.toFixed(1)})</span>
          </div>
          
          {/* Price */}
          <div className="text-3xl font-bold mb-4">${product.price.toFixed(2)}</div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Stock status */}
          <div className="mb-6">
            {product.stock > 0 ? (
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                In Stock ({product.stock} available)
              </div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Out of Stock
              </div>
            )}
          </div>
          
          {/* Vendor info */}
          <div className="mb-6 text-sm">
            <span className="text-gray-500">Sold by:</span>{' '}
            <Link to={`/vendor/${product.vendor}`} className="text-primary hover:underline">
              {product.vendor}
            </Link>
          </div>
          
          {/* Quantity picker */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              size="lg" 
              className="flex-1" 
              onClick={handleAddToCart} 
              disabled={product.stock <= 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Shipping info */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex">
            <Truck className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-sm">Free Shipping</p>
              <p className="text-xs text-gray-500">
                Free standard shipping on orders over $50. Estimated delivery: 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product details tabs */}
      <Tabs defaultValue="details">
        <TabsList className="w-full justify-start border-b">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="py-6">
          <h2 className="text-xl font-semibold mb-4">About this item</h2>
          <div className="text-gray-700 space-y-4">
            <p>{product.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, 
              mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
            </p>
            <p>
              Sed tincidunt, velit eget consequat tristique, erat est convallis tellus, a consectetur risus nunc vel urna. 
              Proin vulputate risus nec mattis semper. Ut rutrum semper ullamcorper. 
            </p>
          </div>
        </TabsContent>
        <TabsContent value="specs" className="py-6">
          <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Brand</div>
                <div className="w-2/3">{product.vendor}</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Model</div>
                <div className="w-2/3">XYZ-{product.id}</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Category</div>
                <div className="w-2/3">{product.category}</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Weight</div>
                <div className="w-2/3">0.5 kg</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Color</div>
                <div className="w-2/3">Black</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Material</div>
                <div className="w-2/3">Premium Quality</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Dimensions</div>
                <div className="w-2/3">10 x 15 x 5 cm</div>
              </div>
              <div className="flex border-b py-2">
                <div className="w-1/3 font-medium text-gray-600">Warranty</div>
                <div className="w-2/3">1 Year</div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-6">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="flex items-center mb-6">
            <div className="flex mr-3">{renderRating(product.rating)}</div>
            <div className="text-lg font-medium">{product.rating.toFixed(1)} out of 5</div>
          </div>
          <p className="text-gray-500 mb-6">Based on 24 reviews</p>
          
          {/* Sample reviews */}
          <div className="space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">{renderRating(5)}</div>
                <div className="font-medium">Great product!</div>
              </div>
              <p className="text-sm text-gray-500 mb-2">By John D. on May 15, 2023</p>
              <p>
                This is exactly what I was looking for. Great quality and fast shipping.
                Would definitely recommend to others.
              </p>
            </div>
            <div className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">{renderRating(4)}</div>
                <div className="font-medium">Good value for money</div>
              </div>
              <p className="text-sm text-gray-500 mb-2">By Sarah M. on April 3, 2023</p>
              <p>
                Pretty good product overall. It does what it's supposed to do,
                and the price is reasonable. Would buy again.
              </p>
            </div>
          </div>
          
          <Button className="mt-6">Write a Review</Button>
        </TabsContent>
      </Tabs>

      {/* Similar products */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <ProductGrid products={similarProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
