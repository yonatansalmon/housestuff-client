// SupermarketItem.js
import React, { useState, useEffect } from 'react';

const SupermarketItem = ({ item, onDeleteItem, onEditItem }) => {
  const [editedItem, setEditedItem] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: item.name,
    quantity: item.quantity,
  });

  useEffect(() => {
    setInputValues({
      name: item.name,
      quantity: item.quantity,
    });
  }, [item]);

  const handleDeleteItem = () => {
    onDeleteItem(item._id);
  };
  const handleEditItem = () => {
    if (editedItem) {
      onEditItem(item._id, inputValues);
    }
    setEditedItem(!editedItem);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <tr>
      <td className='first-column'>
        {editedItem ? (
          <input value={inputValues.name} name="name" onChange={handleChange} />
        ) : (
          item.name
        )}
      </td>
      <td className='second-column'>
        {editedItem ? (
          <input value={inputValues.quantity} name="quantity" type='number' onChange={handleChange} />
        ) : (
          `${item.quantity} x`
        )}
      </td>
      <td>
        <button onClick={handleEditItem}>{editedItem ? 'Save' : 'Edit'}</button>
        <button onClick={handleDeleteItem}>Delete</button>
      </td>
    </tr>
  );
};

export default SupermarketItem;
