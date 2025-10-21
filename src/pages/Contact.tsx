import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackForm from '../components/FeedbackForm';
import SuccessModal from '../components/SuccessModal';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { closeSuccessModal } from '../redux/feedbackSlice';

export default function Contact() {
  const dispatch = useAppDispatch();
  const showSuccessModal = useAppSelector(state => state.feedback.showSuccessModal);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@shophub.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Commerce Street',
      subtitle: 'Business District, NY 10001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9am-6pm',
      subtitle: 'Sat-Sun: Closed'
    }
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl p-6 shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 font-medium mb-1">
                {info.details}
              </p>
              <p className="text-sm text-gray-600">
                {info.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FeedbackForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated support team is here to help you with any questions about products, orders, or our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Product Inquiries
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Need more information about a specific product? We're happy to provide detailed specifications and recommendations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Feedback & Suggestions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We value your opinion! Share your thoughts on how we can improve your shopping experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partnership Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Interested in partnering with us? Let's discuss how we can work together to create value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Check out our FAQ section or browse our help center for instant answers
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Visit Help Center
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => dispatch(closeSuccessModal())} />
        )}
      </AnimatePresence>
    </div>
  );
}
