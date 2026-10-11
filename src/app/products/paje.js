import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/products');
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20 font-medium text-slate-600">იტვირთება პროდუქტები...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-slate-800">პროდუქტები</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col hover:shadow-md transition"
          >
            <div className="h-48 w-full flex items-center justify-center p-2 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h2 className="font-semibold text-sm line-clamp-2 mb-2 text-slate-800">
              {product.title}
            </h2>
            <p className="text-indigo-600 font-bold text-lg mt-auto">${product.price}</p>
            <Link
              href={`/products/details/${product.id}`}
              className="mt-3 block text-center bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              დეტალურად
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}