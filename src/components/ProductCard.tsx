import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/cartSlice';
import type { Product } from '../data/products';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
      >
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-opacity"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </motion.button>
          </div>
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <ProductModal
            product={product}
            onClose={() => setShowModal(false)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>
    </>
  );
}
