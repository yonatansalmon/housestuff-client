import React from 'react';

const BudgetForm = () => {
  return (
    <div className='form'>
      <input type='text' placeholder='Item' className='supermarketitem'/>
      <input type='number' placeholder='Quantity' />
      <button>Add Item</button>
    </div>
  );
};

export default BudgetForm;
