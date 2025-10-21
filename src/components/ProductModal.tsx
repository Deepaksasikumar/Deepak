import { X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product modal"
            title="Close"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {product.category}
              </span>
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                ${product.price.toFixed(2)}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onAddToCart();
                    onClose();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
                <button
                  onClick={onClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
