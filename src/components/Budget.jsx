import React, { useState, useEffect } from 'react';
import BudgetItem from './BudgetItem';

const Budget = () => {
  const [budgetItems, setBudgetItems] = useState([
    {
      _id: '1',
      category: 'Groceries',
      amount: 250,
    },
    {
      _id: '2',
      category: 'Utilities',
      amount: 150,
    }
  ]);

  useEffect(() => {
    const fetchBudgetItems = async () => {
      // const response = await api.get('/budget');
      // setBudgetItems(response.data);
    };

    fetchBudgetItems();
  }, []);

  return (
    <div>
      <h1>Budget</h1>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item) => (
            <BudgetItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
