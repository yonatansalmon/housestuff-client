import React, { useState } from 'react';

const SupermarketForm = ({ onAddItem }) => {
  const [item, setItem] = useState({ name: '', quantity: 1, date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(item);

    setItem({ name: '', quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' name='name' value={item.name} onChange={handleChange} placeholder='Item' className='smitem' />
      <input type='number' name='quantity' value={item.quantity} onChange={handleChange} placeholder='Quantity' className='smamount' />
      <button className="button-3">Add Item</button>
    </form>
  );
};

export default SupermarketForm;
