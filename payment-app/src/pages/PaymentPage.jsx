import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://swio-assignment-backend.onrender.com/create-checkout-session', { name, amount });
      const { sessionId } = response.data;

      // Redirect to Stripe Checkout page
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Error creating checkout session', error);
      
    }
  };

  return (
    <div>
    <h1 className='text-center mb-4 textwhite' style={{marginLeft: '65vh',marginTop: '100px'}}>Fill the Details for Payment</h1>
    <div className='container' style={{display: 'flex', marginLeft: '65vh'}}>
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
    <br />
    </div>
    <p className='textwhite' style={{marginLeft: '80vh',color: 'crimson'}}><br /> thankyou for chosing us</p>
    </div>
  );
};

export default PaymentPage;
