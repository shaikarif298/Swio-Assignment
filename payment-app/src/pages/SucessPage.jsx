import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SuccessPage = () => {
  const location = useLocation();
  const [transactions] = useState([]);


  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:5000/transactions');
      fetchTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const saveTransaction = async () => {
      const urlParams = new URLSearchParams(location.search);
      const sessionId = urlParams.get('session_id');
      const response = await axios.post('http://localhost:5000/retrieve-checkout-session', { sessionId });
      const { customerName, amount, transactionID } = response.data;

      await axios.post('http://localhost:5000/save-transaction', {
        name: customerName,
        amount,
        transactionID
      });
    };

    if (location.search.includes('session_id')) {
      saveTransaction();
    }
  }, [location]);

  return (
    <div>
      <h1>Payment Successful!</h1>
    
        <div className="transactions-grid">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.transactionID}>
            <p>Name: {transaction.name}</p>
            <p>Amount: {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;
