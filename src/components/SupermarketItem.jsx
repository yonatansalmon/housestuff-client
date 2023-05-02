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

  const getDate = () => {
    const date = new Date(item.date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <tr>
      <td className='first-column'>{editedItem ? <input value={inputValues.name} name='name' type='text'   className='editName' onChange={handleChange} /> : item.name}</td>
      <td className='second-column'>
        {editedItem ? (
          <input value={inputValues.quantity} name='quantity' type='number' className='editQuantity' onChange={handleChange} />
        ) : (
          `${item.quantity} x`
        )}
      </td>
      <td className='third-column'>{getDate()}</td>

      <td className='editDeleteBtn'>
        <button onClick={handleEditItem} className={!editedItem ? 'button-4' : 'button-25'}>
          {editedItem ? 'Save' : 'Edit'}
        </button>
        <button onClick={handleDeleteItem} className='button-44'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SupermarketItem;
