import React from 'react';

const BudgetItem = ({ item }) => {
  return (
    <>
      <div>{item.category}</div>
      <div>{item.amount}₪</div>
      <div>&times;</div>
    </>
  );
};

export default BudgetItem;
