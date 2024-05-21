require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const stripe = Stripe(process.env.STRIPE);

const db = mysql.createConnection('mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}');

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
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
      success_url: 'http://localhost:3000/successpage?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancelpage',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.post('/save-transaction', (req, res) => {
  const { name, amount, transactionID } = req.body;
  const query = 'INSERT INTO transactions (name, amount, transactionID) VALUES (?, ?, ?)';
  db.query(query, [name, amount, transactionID], (err, result) => {
    if (err) throw err;
    res.send('Transaction saved');
  });
});

app.get('/transactions', (req, res) => {
  const query = 'SELECT * FROM transactions';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
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


app.listen(process.env.PORT, () => {
  console.log('Server running on port 5000');
});
