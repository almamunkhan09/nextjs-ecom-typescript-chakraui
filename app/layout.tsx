import './globals.css';
import { ChakraUiWrapper } from '../Components/ChakraUiWrapper';

export const metadata = {
  generator: 'Next.js',
  applicationName: 'KSTORE your online store',
  keywords: ['KSTORE', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Al Mamun Khan' }],
  icons: {
    shortcut: '/logoDark.svg',
  },
  title: {
    default: 'KSTORE ',
    template: '%s | KSTORE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <ChakraUiWrapper> {children}</ChakraUiWrapper>
      </body>
    </html>
  );
}
