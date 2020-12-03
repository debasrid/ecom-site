import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Mobile',
      category: 'electronics',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'iphone',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Teddy Bears',
      category: 'Toys',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Cuddle',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Lacoste Shoes',
      category: 'Shoes',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Red Dress',
      category: 'women wear',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'M&S',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Harry Potter-1',
      category: 'Books',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'HP-series',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Christmas balls',
      category: 'Decoration',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'unknown',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
