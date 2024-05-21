import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create-checkout-session', { name, amount });
      const { sessionId } = response.data;

      // Redirect to Stripe Checkout page
      const stripe = await loadStripe('pk_test_51PIo8OSI0oT3bKNcWX9C6Ot440ztQgUy3FoCG7CFYQMevF1CYvmy8xt7OehotF7qeA6tGxaFXy7ZW92uaBLclZU400qo0hddCj');
      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Error creating checkout session', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentPage;
