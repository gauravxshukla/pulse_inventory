export const shops = [
    {
      id: 1,
      name: 'SuperMart',
      bio: 'Your friendly neighborhood supermarket',
      address: '123 Main Street, Cityville, USA',
      products: [
        { id: 101, name: 'Apples', description: 'Fresh red apples', price: 2.99, available_stock: 100 },
        { id: 102, name: 'Bananas', description: 'Ripe yellow bananas', price: 1.99, available_stock: 75 },
        { id: 103, name: 'Milk', description: '2% reduced fat milk', price: 3.49, available_stock: 50 },
        { id: 104, name: 'Bread', description: 'Whole wheat bread', price: 2.49, available_stock: 30 },
        { id: 105, name: 'Eggs', description: 'Dozen large eggs', price: 2.79, available_stock: 60 },
      ],
    },
    {
      id: 2,
      name: 'Tech Haven',
      bio: 'Your go-to electronics store',
      address: '789 Gadget Road, Tech City, USA',
      products: [
        { id: 201, name: 'Smartphone', description: 'Latest smartphone model', price: 799.99, available_stock: 25 },
        { id: 202, name: 'Laptop', description: 'High-performance laptop', price: 1299.99, available_stock: 15 },
        { id: 203, name: 'Headphones', description: 'Noise-canceling headphones', price: 149.99, available_stock: 50 },
        { id: 204, name: 'Smartwatch', description: 'Fitness and smartwatch', price: 199.99, available_stock: 35 },
        { id: 205, name: 'Tablet', description: '10-inch tablet', price: 299.99, available_stock: 20 },
      ],
    },
    {
      id: 3,
      name: 'Fashion Boutique',
      bio: 'Trendy fashion for all occasions',
      address: '456 Style Avenue, Fashion City, USA',
      products: [
        { id: 301, name: 'Dress', description: 'Elegant evening dress', price: 49.99, available_stock: 30 },
        { id: 302, name: 'Shoes', description: 'High heels for parties', price: 39.99, available_stock: 45 },
        { id: 303, name: 'T-Shirt', description: 'Casual cotton t-shirt', price: 14.99, available_stock: 60 },
        { id: 304, name: 'Jeans', description: 'Slim-fit denim jeans', price: 34.99, available_stock: 40 },
        { id: 305, name: 'Hat', description: 'Stylish sun hat', price: 19.99, available_stock: 55 },
      ],
    },
    {
      id: 4,
      name: 'Sports World',
      bio: 'Everything for your active lifestyle',
      address: '567 Fitness Lane, Sportstown, USA',
      products: [
        { id: 401, name: 'Yoga Mat', description: 'Non-slip eco-friendly yoga mat', price: 29.99, available_stock: 100 },
        { id: 402, name: 'Running Shoes', description: 'Lightweight running shoes', price: 69.99, available_stock: 45 },
        { id: 403, name: 'Dumbbells', description: 'Set of adjustable dumbbells', price: 49.99, available_stock: 30 },
        { id: 404, name: 'Bike', description: 'Mountain bike for off-road adventures', price: 399.99, available_stock: 10 },
        { id: 405, name: 'Fitness Tracker', description: 'Track your workouts and health', price: 59.99, available_stock: 20 },
      ],
    },
    {
      id: 5,
      name: 'Book Nook',
      bio: 'Your destination for great books',
      address: '101 Reading Lane, Booksville, USA',
      products: [
        { id: 501, name: 'Novel', description: 'Bestseller mystery novel', price: 14.99, available_stock: 50 },
        { id: 502, name: 'Cookbook', description: 'Delicious recipes for foodies', price: 24.99, available_stock: 25 },
        { id: 503, name: 'Children\'s Book', description: 'Fun and educational books for kids', price: 9.99, available_stock: 70 },
        { id: 504, name: 'Textbook', description: 'Educational textbook for students', price: 39.99, available_stock: 40 },
        { id: 505, name: 'Magazine', description: 'Latest fashion and lifestyle magazine', price: 5.99, available_stock: 100 },
      ],
    },
    {
      id: 6,
      name: 'Home Decor Emporium',
      bio: 'Transform your home with style',
      address: '345 Decor Drive, Homestead, USA',
      products: [
        { id: 601, name: 'Sofa', description: 'Comfy and stylish living room sofa', price: 399.99, available_stock: 10 },
        { id: 602, name: 'Table Lamp', description: 'Elegant table lamp for your desk', price: 29.99, available_stock: 30 },
        { id: 603, name: 'Art Print', description: 'Beautiful canvas art for your walls', price: 49.99, available_stock: 20 },
        { id: 604, name: 'Cookware Set', description: 'Premium non-stick cookware set', price: 79.99, available_stock: 15 },
        { id: 605, name: 'Rug', description: 'Soft and cozy area rug', price: 59.99, available_stock: 25 },
      ],
    },
    {
      id: 7,
      name: 'Gourmet Delights',
      bio: 'Discover the finest gourmet foods',
      address: '789 Foodie Boulevard, Culinary Town, USA',
      products: [
        { id: 701, name: 'Truffle Oil', description: 'Exquisite white truffle-infused oil', price: 24.99, available_stock: 40 },
        { id: 702, name: 'Artisan Cheese', description: 'Handcrafted cheese selection', price: 19.99, available_stock: 30 },
        { id: 703, name: 'Wine Collection', description: 'Premium wine assortment', price: 39.99, available_stock: 25 },
        { id: 704, name: 'Balsamic Vinegar', description: 'Aged balsamic vinegar from Modena', price: 14.99, available_stock: 50 },
        { id: 705, name: 'Chocolates', description: 'Luxury chocolate truffles', price: 15.99, available_stock: 60 },
      ],
    },
    {
      id: 8,
      name: 'Outdoor Adventure Gear',
      bio: 'Explore the great outdoors with the best gear',
      address: '567 Campsite Road, Adventure City, USA',
      products: [
        { id: 801, name: 'Tent', description: 'Durable 4-person camping tent', price: 149.99, available_stock: 20 },
        { id: 802, name: 'Sleeping Bag', description: 'Warm and cozy sleeping bag', price: 49.99, available_stock: 30 },
        { id: 803, name: 'Backpack', description: 'Spacious hiking backpack', price: 79.99, available_stock: 25 },
        { id: 804, name: 'Hiking Boots', description: 'Waterproof hiking boots', price: 89.99, available_stock: 35 },
        { id: 805, name: 'Camping Stove', description: 'Portable camp stove with fuel', price: 39.99, available_stock: 15 },
      ],
    },
    {
      id: 9,
      name: 'Health & Wellness',
      bio: 'Support your health and well-being',
      address: '101 Wellness Avenue, Healthville, USA',
      products: [
        { id: 901, name: 'Vitamins', description: 'Multivitamins for daily nutrition', price: 12.99, available_stock: 100 },
        { id: 902, name: 'Protein Powder', description: 'High-quality whey protein powder', price: 19.99, available_stock: 75 },
        { id: 903, name: 'Fitness Equipment', description: 'Exercise equipment for home workouts', price: 59.99, available_stock: 30 },
        { id: 904, name: 'Yoga Accessories', description: 'Yoga mat and accessories bundle', price: 34.99, available_stock: 45 },
        { id: 905, name: 'Aromatherapy Oils', description: 'Relaxing essential oils set', price: 29.99, available_stock: 60 },
      ],
    },
    {
      id: 10,
      name: 'Pet Paradise',
      bio: 'Everything for your furry friends',
      address: '123 Pet Park, Petropolis, USA',
      products: [
        { id: 1001, name: 'Dog Food', description: 'Premium dog food for all breeds', price: 19.99, available_stock: 100 },
        { id: 1002, name: 'Cat Litter', description: 'Clumping cat litter for easy cleaning', price: 14.99, available_stock: 50 },
        { id: 1003, name: 'Fish Tank', description: 'Stylish aquarium with accessories', price: 79.99, available_stock: 20 },
        { id: 1004, name: 'Pet Toys', description: 'Interactive toys for pets', price: 9.99, available_stock: 60 },
        { id: 1005, name: 'Bird Cage', description: 'Spacious cage for pet birds', price: 29.99, available_stock: 40 },
      ],
    },
  ];
  

  