export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Fast Delivery',
    description: 'Get your orders delivered within 24-48 hours with our express shipping service.',
    icon: 'Truck',
    details: 'We partner with leading courier services to ensure your packages arrive quickly and safely. Track your order in real-time and receive notifications at every step.'
  },
  {
    id: '2',
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available around the clock to assist you.',
    icon: 'Headphones',
    details: 'Reach out via phone, email, or live chat any time you need help. Our expert team is committed to resolving your queries and ensuring a smooth shopping experience.'
  },
  {
    id: '3',
    title: 'Easy Returns',
    description: 'Not satisfied? Return products within 30 days for a full refund, no questions asked.',
    icon: 'RefreshCcw',
    details: 'We offer hassle-free returns with prepaid shipping labels. Simply initiate a return through your account, pack the item, and drop it off at any courier location.'
  },
  {
    id: '4',
    title: 'Secure Payments',
    description: 'Shop with confidence using our encrypted payment gateway and fraud protection.',
    icon: 'Shield',
    details: 'We accept all major credit cards, PayPal, and digital wallets. Your payment information is encrypted and never stored on our servers.'
  },
  {
    id: '5',
    title: 'Quality Guarantee',
    description: 'All products are carefully inspected and backed by our quality assurance promise.',
    icon: 'Award',
    details: 'Every item undergoes rigorous quality checks before shipping. We stand behind our products with extended warranties and comprehensive customer protection.'
  },
  {
    id: '6',
    title: 'Gift Wrapping',
    description: 'Add a special touch with our complimentary gift wrapping service.',
    icon: 'Gift',
    details: 'Choose from elegant wrapping options at checkout. Perfect for birthdays, holidays, or any special occasion. We can also include a personalized message card.'
  }
];
