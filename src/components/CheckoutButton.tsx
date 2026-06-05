'use client';

import { useState } from 'react';

interface CheckoutButtonProps {
  priceId: string;
  label?: string;
}

export default function CheckoutButton({ priceId, label = 'Buy Now' }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error('Checkout failed:', data.error);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-6 py-3 font-bold text-black uppercase transition duration-300 bg-white border-2 border-transparent hover:bg-black hover:text-white hover:border-white disabled:opacity-50"
    >
      {loading ? 'Processing...' : label}
    </button>
  );
}
