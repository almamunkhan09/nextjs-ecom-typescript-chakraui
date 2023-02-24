import CartPage from '@/Components/CartPage';
import React from 'react';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'KSTORE your online store',
  keywords: ['KSTORE', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Al Mamun Khan' }],
  icons: {
    shortcut: '/logoDark.svg',
  },
  title: {
    default: 'CART',
    template: '%s | KSTORE',
  },
};

function page() {
  return <CartPage />;
}

export default page;
