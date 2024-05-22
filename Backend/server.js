const express = require('express');
const Stripe = require('stripe');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { name, amount } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Custom Amount',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://swio-assignment.onrender.com/successpage?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://swio-assignment.onrender.com/cancelpage',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.post('/save-transaction', async (req, res) => {
  const { name, amount, transactionID } = req.body;
  const query = 'INSERT INTO transactions (name, amount, transactionID) VALUES ($1, $2, $3)';
  try {
    await pool.query(query, [name, amount, transactionID]);
    res.send('Transaction saved');
  } catch (err) {
    console.error('Error saving transaction', err);
    res.status(500).json({ error: 'Failed to save transaction' });
  }
});

app.get('/transactions', async (req, res) => {
  const query = 'SELECT * FROM transactions';
  try {
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching transactions', err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

app.post('/retrieve-checkout-session', async (req, res) => {
  const { sessionId } = req.body;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const customer = await stripe.customers.retrieve(session.customer);
    const customerName = customer.name;
    const amount = session.amount_total / 100;
    const transactionID = session.payment_intent;

    res.json({ customerName, amount, transactionID });
  } catch (error) {
    console.error('Error retrieving checkout session', error);
    res.status(500).json({ error: 'Failed to retrieve checkout session' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
