import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SuccessPage = () => {
  const location = useLocation();
  const [transactions] = useState([]);


  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('https://swio-assignment-backend.onrender.com/transactions');
      fetchTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const saveTransaction = async () => {
      const urlParams = new URLSearchParams(location.search);
      const sessionId = urlParams.get('session_id');
      const response = await axios.post('https://swio-assignment-backend.onrender.com/retrieve-checkout-session', { sessionId });
      const { customerName, amount, transactionID } = response.data;

      await axios.post('https://swio-assignment-backend.onrender.com/save-transaction', {
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
      <h1 className='textwhite'>Payment Successful!</h1>
    
        <div className="transactions-grid">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.transactionID}>
            <p className='textwhite'>Name: {transaction.name}</p>
            <p className='textwhite'>Amount: {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;
