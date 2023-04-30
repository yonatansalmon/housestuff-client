import React from 'react';

const SupermarketItem = ({ item, onDeleteItem }) => {
  const handleDeleteItem = () => {
    onDeleteItem(item._id);
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>
        {item.quantity} {item.unit}
      </td>
      <td>
        <button onClick={handleDeleteItem}>Delete</button>
      </td>
    </tr>
  );
};

export default SupermarketItem;
