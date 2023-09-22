import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Movie App',
    default: 'Movie App',
  },
  description: 'Final Project for Hactiv8 course',
  image: './favicon.ico',
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <div className="relative">{children}</div>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
