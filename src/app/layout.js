import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FakeStore App',
  description: 'Next.js assignment project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <NavBar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}