
import React from 'react';
import ProductGrid from './ProductGrid';
import { Product } from '../context/CartContext';

// Sample featured products data
export const featuredProducts: Product[] = [
  // Electronics Category
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with noise cancellation and long battery life.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Electronics',
    rating: 4.5,
    stock: 15,
    vendor: 'AudioTech'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Advanced smartwatch with health monitoring and notification features.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Electronics',
    rating: 4.0,
    stock: 8,
    vendor: 'TechGear'
  },
  {
    id: '7',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 20-hour battery life.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    category: 'Electronics',
    rating: 4.4,
    stock: 23,
    vendor: 'SoundWave'
  },
  {
    id: '9',
    name: 'Ultra HD Smart TV 55"',
    description: '4K Ultra HD Smart TV with AI voice control and immersive sound.',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    category: 'Electronics',
    rating: 4.7,
    stock: 7,
    vendor: 'VisionTech'
  },
  {
    id: '13',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1618577820912-4b90bc600ae4',
    category: 'Electronics',
    rating: 4.3,
    stock: 26,
    vendor: 'PowerUp'
  },
  {
    id: '15',
    name: 'Noise Cancelling Earbuds',
    description: 'Premium wireless earbuds with active noise cancellation and transparent mode.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
    category: 'Electronics',
    rating: 4.6,
    stock: 12,
    vendor: 'AudioTech'
  },
  {
    id: '16',
    name: 'Digital Camera DSLR',
    description: 'Professional DSLR camera with 24.2MP sensor and 4K video recording.',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'Electronics',
    rating: 4.8,
    stock: 5,
    vendor: 'FotoTech'
  },
  
  // Clothing Category
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and eco-friendly t-shirt made from 100% organic cotton.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    category: 'Clothing',
    rating: 4.7,
    stock: 35,
    vendor: 'EcoFashion'
  },
  {
    id: '17',
    name: 'Slim Fit Jeans',
    description: 'Classic slim fit jeans with stretch denim for comfort and durability.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    category: 'Clothing',
    rating: 4.5,
    stock: 28,
    vendor: 'UrbanThreads'
  },
  {
    id: '18',
    name: 'Winter Parka Jacket',
    description: 'Warm winter jacket with down insulation, waterproof exterior and multiple pockets.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    category: 'Clothing',
    rating: 4.8,
    stock: 14,
    vendor: 'OutdoorLife'
  },
  {
    id: '19',
    name: 'Casual Sneakers',
    description: 'Versatile casual sneakers with memory foam insoles for all-day comfort.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    category: 'Clothing',
    rating: 4.4,
    stock: 22,
    vendor: 'StreetWalker'
  },
  {
    id: '20',
    name: 'Summer Dress',
    description: 'Light and flowy summer dress with floral pattern, perfect for warm days.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    category: 'Clothing',
    rating: 4.6,
    stock: 17,
    vendor: 'ChicStyles'
  },
  
  // Home & Kitchen Category
  {
    id: '4',
    name: 'Professional Chef Knife',
    description: 'High-carbon stainless steel chef knife for precise cutting.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546',
    category: 'Home & Kitchen',
    rating: 4.8,
    stock: 12,
    vendor: 'CulinaryPro'
  },
  {
    id: '8',
    name: 'Stainless Steel Water Bottle',
    description: 'Vacuum insulated water bottle that keeps drinks cold for 24 hours.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'Home & Kitchen',
    rating: 4.3,
    stock: 31,
    vendor: 'EcoLiving'
  },
  {
    id: '11',
    name: 'Premium Coffee Maker',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1570942872213-1242607a35eb',
    category: 'Home & Kitchen',
    rating: 4.6,
    stock: 18,
    vendor: 'BrewMaster'
  },
  {
    id: '21',
    name: 'Cast Iron Skillet',
    description: 'Pre-seasoned cast iron skillet for perfect cooking and heat retention.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1620197544022-8d7eff4e8470',
    category: 'Home & Kitchen',
    rating: 4.9,
    stock: 15,
    vendor: 'KitchenCraft'
  },
  {
    id: '22',
    name: 'Robot Vacuum Cleaner',
    description: 'Smart robot vacuum with mapping technology and app control.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1662643100011-8547cee447ca',
    category: 'Home & Kitchen',
    rating: 4.7,
    stock: 9,
    vendor: 'CleanTech'
  },
  {
    id: '23',
    name: 'Luxury Bed Sheets Set',
    description: '100% Egyptian cotton bed sheets, 1000 thread count, ultra soft and durable.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2',
    category: 'Home & Kitchen',
    rating: 4.8,
    stock: 24,
    vendor: 'DreamSleep'
  },
  
  // Books Category
  {
    id: '5',
    name: 'Bestselling Novel',
    description: 'Award-winning fiction novel that topped charts for weeks.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    category: 'Books',
    rating: 4.9,
    stock: 27,
    vendor: 'BookWorld'
  },
  {
    id: '24',
    name: 'Self-Improvement Guide',
    description: 'Practical guide to personal development and building healthy habits.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    category: 'Books',
    rating: 4.7,
    stock: 32,
    vendor: 'MindfulReads'
  },
  {
    id: '25',
    name: 'Cookbook: World Cuisines',
    description: 'Collection of authentic recipes from around the world with step-by-step instructions.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
    category: 'Books',
    rating: 4.8,
    stock: 19,
    vendor: 'FoodiePress'
  },
  {
    id: '26',
    name: 'Children\'s Illustrated Adventure',
    description: 'Beautifully illustrated adventure story for children ages 6-10.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    category: 'Books',
    rating: 4.9,
    stock: 35,
    vendor: 'KidsCorner'
  },
  {
    id: '27',
    name: 'Science & Technology Encyclopedia',
    description: 'Comprehensive modern encyclopedia of scientific discoveries and technological innovations.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    category: 'Books',
    rating: 4.6,
    stock: 15,
    vendor: 'SciencePublishing'
  },
  
  // Beauty Category
  {
    id: '6',
    name: 'Natural Face Serum',
    description: 'Hydrating serum with natural ingredients for all skin types.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    category: 'Beauty',
    rating: 4.6,
    stock: 19,
    vendor: 'BeautyNaturals'
  },
  {
    id: '28',
    name: 'Luxury Perfume',
    description: 'Premium fragrance with notes of jasmine, vanilla, and sandalwood.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1566977776052-050fa089aa16',
    category: 'Beauty',
    rating: 4.7,
    stock: 11,
    vendor: 'LuxeScents'
  },
  {
    id: '29',
    name: 'Professional Hair Dryer',
    description: 'Salon-quality hair dryer with ionic technology to reduce frizz and add shine.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a',
    category: 'Beauty',
    rating: 4.5,
    stock: 14,
    vendor: 'HairPro'
  },
  {
    id: '30',
    name: 'Organic Skincare Set',
    description: 'Complete skincare routine with cleanser, toner, moisturizer, and serum made from organic ingredients.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af',
    category: 'Beauty',
    rating: 4.8,
    stock: 16,
    vendor: 'PureGlow'
  },
  {
    id: '31',
    name: 'Makeup Brush Set',
    description: 'Professional 12-piece makeup brush set with synthetic bristles and bamboo handles.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1613114220691-902479685fd4',
    category: 'Beauty',
    rating: 4.6,
    stock: 23,
    vendor: 'MakeupArtistry'
  },
  
  // Toys Category
  {
    id: '32',
    name: 'Educational Building Blocks',
    description: 'Creative building blocks set that helps develop motor skills and imagination for ages 3+.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b',
    category: 'Toys',
    rating: 4.7,
    stock: 28,
    vendor: 'KidLearn'
  },
  {
    id: '33',
    name: 'Remote Control Car',
    description: 'High-speed remote control car with off-road capabilities and rechargeable battery.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f',
    category: 'Toys',
    rating: 4.4,
    stock: 17,
    vendor: 'SpeedToys'
  },
  {
    id: '34',
    name: 'Plush Teddy Bear',
    description: 'Super soft plush teddy bear, hypoallergenic and machine washable, perfect for all ages.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1562040506-a9b32cb51b94',
    category: 'Toys',
    rating: 4.9,
    stock: 34,
    vendor: 'CuddlePals'
  },
  {
    id: '35',
    name: 'Beginner Chess Set',
    description: 'Classic wooden chess set with tutorial book for beginners and intermediate players.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461',
    category: 'Toys',
    rating: 4.8,
    stock: 21,
    vendor: 'StrategyGames'
  },
  {
    id: '36',
    name: 'Arts and Crafts Kit',
    description: 'Complete arts and crafts set with over 100 pieces for endless creative projects.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78',
    category: 'Toys',
    rating: 4.6,
    stock: 24,
    vendor: 'CreativeKids'
  },
  
  // Sports & Outdoors
  {
    id: '14',
    name: 'Yoga Mat',
    description: 'Eco-friendly non-slip yoga mat with alignment markings.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1599447292461-29ef1058cdd7',
    category: 'Sports & Outdoors',
    rating: 4.7,
    stock: 22,
    vendor: 'ZenFitness'
  },
  {
    id: '37',
    name: 'Mountain Bike',
    description: 'Durable mountain bike with 21 speeds, front suspension, and disc brakes.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91',
    category: 'Sports & Outdoors',
    rating: 4.6,
    stock: 7,
    vendor: 'TrailRiders'
  },
  {
    id: '38',
    name: 'Tennis Racket Pro',
    description: 'Professional tennis racket with carbon fiber frame for power and control.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1617083934555-efe2b550b13e',
    category: 'Sports & Outdoors',
    rating: 4.5,
    stock: 13,
    vendor: 'CourtMasters'
  },
  {
    id: '39',
    name: 'Camping Tent 4-Person',
    description: 'Waterproof camping tent that fits up to 4 people, easy setup in minutes.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    category: 'Sports & Outdoors',
    rating: 4.7,
    stock: 9,
    vendor: 'OutdoorLife'
  },
  {
    id: '40',
    name: 'Fitness Tracker Watch',
    description: 'Advanced fitness tracker with heart rate monitor, GPS, and 7-day battery life.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e',
    category: 'Sports & Outdoors',
    rating: 4.4,
    stock: 18,
    vendor: 'FitTech'
  },
  
  // Home & Office
  {
    id: '10',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support for all-day comfort.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8',
    category: 'Home & Office',
    rating: 4.5,
    stock: 14,
    vendor: 'WorkComfort'
  },
  {
    id: '41',
    name: 'Desk Lamp with Wireless Charger',
    description: 'Modern LED desk lamp with built-in wireless charging pad and USB port.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1534126874-5f6762c6f8a3',
    category: 'Home & Office',
    rating: 4.3,
    stock: 19,
    vendor: 'TechDesk'
  },
  {
    id: '42',
    name: 'Portable Monitor',
    description: '15.6" portable monitor with USB-C connection, perfect for work on the go.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1525971977907-20d22c75ad1c',
    category: 'Home & Office',
    rating: 4.5,
    stock: 11,
    vendor: 'ScreenTech'
  },
  {
    id: '43',
    name: 'Wireless Keyboard and Mouse Combo',
    description: 'Ergonomic wireless keyboard and mouse set with long battery life.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
    category: 'Home & Office',
    rating: 4.4,
    stock: 22,
    vendor: 'InputPro'
  },
  {
    id: '44',
    name: 'Filing Cabinet',
    description: 'Metal 3-drawer filing cabinet with lock, perfect for home or office use.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826',
    category: 'Home & Office',
    rating: 4.2,
    stock: 7,
    vendor: 'OfficeSolutions'
  },
  
  // Accessories
  {
    id: '12',
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID blocking technology.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1517254797898-48f7892a27c2',
    category: 'Accessories',
    rating: 4.8,
    stock: 42,
    vendor: 'LeatherCraft'
  },
  {
    id: '45',
    name: 'Polarized Sunglasses',
    description: 'Stylish polarized sunglasses with UV protection and durable frame.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    category: 'Accessories',
    rating: 4.6,
    stock: 31,
    vendor: 'ShadeStyle'
  },
  {
    id: '46',
    name: 'Vintage Wristwatch',
    description: 'Classic analog wristwatch with leather band and stainless steel case.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    category: 'Accessories',
    rating: 4.7,
    stock: 15,
    vendor: 'TimeClassics'
  },
  {
    id: '47',
    name: 'Canvas Backpack',
    description: 'Durable canvas backpack with laptop compartment and multiple pockets.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa',
    category: 'Accessories',
    rating: 4.5,
    stock: 24,
    vendor: 'UrbanPack'
  },
  {
    id: '48',
    name: 'Silk Scarf',
    description: 'Premium silk scarf with colorful pattern, perfect for all seasons.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d',
    category: 'Accessories',
    rating: 4.7,
    stock: 19,
    vendor: 'LuxeFabrics'
  }
];

const FeaturedProducts: React.FC = () => {
  return <ProductGrid products={featuredProducts} title="Featured Products" />;
};

export default FeaturedProducts;
