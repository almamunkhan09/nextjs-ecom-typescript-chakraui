import React from 'react';
import Checkout from '../../Components/Checkout';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'KSTORE your online store',
  keywords: ['KSTORE', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Al Mamun Khan' }],
  icons: {
    shortcut: '/logoDark.svg',
  },
  title: {
    default: 'Checkout',
    template: '%s | KSTORE',
  },
};

function page() {
  return <Checkout />;
}

export default page;
