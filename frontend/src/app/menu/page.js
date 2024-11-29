'use client';

import { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import Image from 'next/image';
import Card from './Card';

export default function Menu() {
  const categories = [
    { image: '/menu1.jpg', title: 'Pre-Work Energy Boosters' },
    { image: '/menu2.jpg', title: 'Post-Workout Recovery' },
    { image: '/menu3.jpg', title: 'Anytime Healthy Snacks' },
    { image: '/menu4.jpg', title: 'Beverages' },
    { image: '/menu5.jpg', title: 'Specialty Items' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity + amount, 0) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <h2 className="text-2xl text-center mb-8 mt-5 font-mono">Our Categories</h2>
      <section className="flex justify-center overflow-x-auto mb-12">
        <div className="flex gap-6 flex-nowrap">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
              <h3 className="mt-4 font-semibold">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-lg w-1/2"
        />
      </div>

      <section>
        <Card
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onQuantityChange={handleQuantityChange}
        />
      </section>

      <div className="fixed top-4 right-4 bg-white shadow-lg p-4 rounded-lg w-64">
        <h2 className="text-lg font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.item_name}</span>
                  <span>x {item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => {
                  const cartSummary = cart.map(
                    (item) => `${item.item_name} x ${item.quantity}`
                  ).join(", ");
                  const totalAmount = cart.reduce((total, item) => total + item.amount * item.quantity, 0);
                  const message = `Hi! Here's my order: ${cartSummary}. Total: ₹${totalAmount}. Please let me know the delivery address.`;

                  window.location.href = `https://wa.me/14155238886?text=${encodeURIComponent(message)}`;
                }}
              >
                Place order and go back to Whatsapp
            </button>

              <span className="font-bold">
                ₹{cart.reduce((total, item) => total + item.amount * item.quantity, 0)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



