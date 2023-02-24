import React from 'react';
import ProductsPage from '../../Components/ProductsPage';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'KSTORE your online store',
  keywords: ['KSTORE', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Al Mamun Khan' }],
  icons: {
    shortcut: '/logoDark.svg',
  },
  title: {
    default: 'Products',
    template: '%s | KSTORE',
  },
};
// export const dynamic = 'force-dynamic';

function page() {
  return <ProductsPage />;
}

export default page;
