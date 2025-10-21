export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 99.99,
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'High-quality wireless headphones with noise cancellation and superior sound quality.'
  },
  {
    id: '2',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Feature-rich smartwatch with fitness tracking and heart rate monitoring.'
  },
  {
    id: '3',
    name: 'Laptop Backpack',
    category: 'Accessories',
    price: 49.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Durable laptop backpack with multiple compartments and water-resistant material.'
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1279088/pexels-photo-1279088.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery life.'
  },
  {
    id: '5',
    name: 'Running Shoes',
    category: 'Fashion',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comfortable running shoes with advanced cushioning and breathable fabric.'
  },
  {
    id: '6',
    name: 'Coffee Maker',
    category: 'Home',
    price: 159.99,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.'
  },
  {
    id: '7',
    name: 'Yoga Mat',
    category: 'Sports',
    price: 34.99,
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Non-slip yoga mat with extra cushioning for comfortable workouts.'
  },
  {
    id: '8',
    name: 'Desk Lamp',
    category: 'Home',
    price: 44.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'LED desk lamp with adjustable brightness and flexible neck design.'
  },
  {
    id: '9',
    name: 'Sunglasses',
    category: 'Fashion',
    price: 89.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Stylish sunglasses with UV protection and polarized lenses.'
  },
  {
    id: '10',
    name: 'Water Bottle',
    category: 'Sports',
    price: 24.99,
    image: 'https://images.pexels.com/photos/3528601/pexels-photo-3528601.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.'
  },
  {
    id: '11',
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: 39.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life.'
  },
  {
    id: '12',
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 54.99,
    image: 'https://images.pexels.com/photos/1332984/pexels-photo-1332984.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Premium leather wallet with RFID protection and multiple card slots.'
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Accessories'];
