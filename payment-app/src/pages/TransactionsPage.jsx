import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:5000/transactions');
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-grid">
      {transactions.map((transaction) => (
        <div className="transaction-card" key={transaction.transactionID}>
          <p>Name: {transaction.name}</p>
          <p>Amount: {transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionsPage;
