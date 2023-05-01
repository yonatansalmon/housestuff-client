// EditItem.js
import React from 'react';

const EditItem = ({ item, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className='form'>
      <input type='text' name='name' value={item.name} onChange={onChange} placeholder='Item' className='smitem' />
      <input type='number' name='quantity' value={item.quantity} onChange={onChange} placeholder='Quantity' className='smamount' />
      <button type='submit'>Update Item</button>
    </form>
  );
};

export default EditItem;
