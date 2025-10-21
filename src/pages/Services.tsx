import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any;
    return Icon || Icons.HelpCircle;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing you with exceptional service at every step of your shopping journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(service => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                onClick={() => setSelectedService(service.id)}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const service = services.find(s => s.id === selectedService);
                  if (!service) return null;
                  const Icon = getIcon(service.icon);
                  return (
                    <>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                            <Icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {service.title}
                          </h2>
                        </div>
                        <button
                          onClick={() => setSelectedService(null)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Icons.X className="w-6 h-6" />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Overview
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Details
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.details}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedService(null)}
                        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
