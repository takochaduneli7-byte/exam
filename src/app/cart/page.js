'use client';

import { useState } from 'react';

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      quantity: 2,
    },
  ]);

  const handleIncrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">კალათა</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-medium text-slate-800 text-sm max-w-xs">{item.title}</h3>
                <p className="text-indigo-600 font-bold text-sm mt-1">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 rounded-lg p-1">
              <button
                onClick={() => handleDecrease(item.id)}
                disabled={item.quantity <= 1}
                className="w-8 h-8 rounded bg-white font-bold text-slate-700 shadow-sm border disabled:opacity-40 hover:bg-slate-100"
              >
                -
              </button>
              <span className="font-semibold text-slate-800 px-2 text-sm">{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                disabled={item.quantity >= 10}
                className="w-8 h-8 rounded bg-white font-bold text-slate-700 shadow-sm border disabled:opacity-40 hover:bg-slate-100"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 flex justify-between items-center shadow-sm">
        <span className="text-lg font-medium text-slate-600">სულ ჯამი:</span>
        <span className="text-2xl font-bold text-indigo-600">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}