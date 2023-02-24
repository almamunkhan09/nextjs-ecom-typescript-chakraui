import React from 'react';
import ThankYou from '../../Components/ThankYou';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'KSTORE your online store',
  keywords: ['KSTORE', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Al Mamun Khan' }],
  icons: {
    shortcut: '/logoDark.svg',
  },
  title: {
    default: 'Thank You for Your order',
    template: '%s | KSTORE',
  },
};

function page() {
  return <ThankYou />;
}

export default page;
