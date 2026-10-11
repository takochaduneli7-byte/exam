'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';

export default function ProductDetailsPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 font-medium text-slate-600">იტვირთება დეტალები...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-red-500 font-medium">პროდუქტი ვერ მოიძებნა</div>;
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
      <Link href="/products" className="text-sm text-indigo-600 font-medium hover:underline mb-6 inline-block">
        ← უკან დაბრუნება
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-80 flex items-center justify-center p-4">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold mt-3 mb-2 text-slate-800">{product.title}</h1>
          <p className="text-2xl font-bold text-indigo-600 mb-4">${product.price}</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>
          
          {product.rating && (
            <div className="flex items-center space-x-2 border-t pt-4 border-slate-100 text-sm">
              <span className="font-semibold text-amber-500">★ {product.rating.rate}</span>
              <span className="text-slate-400">({product.rating.count} შეფასება)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}