import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/products" className="text-xl font-bold tracking-wide text-indigo-400">
          FakeStore
        </Link>
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/products" className="hover:text-indigo-400 transition">
            Products
          </Link>
          <Link href="/profile" className="hover:text-indigo-400 transition">
            Profile
          </Link>
          <Link href="/cart" className="hover:text-indigo-400 transition">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}