import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SupermarketItem = ({ item, onDeleteItem, onEditItem }) => {
  const [editedItem, setEditedItem] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: item.name,
    quantity: item.quantity,
  });

  const [checked, setChecked] = useState(item.checked || false);

  useEffect(() => {
    setInputValues({
      name: item.name,
      quantity: item.quantity,
    });
  }, [item]);

  const handleDeleteItem = () => {
    onDeleteItem(item._id);
  };

  const handleCheck = async () => {
    setChecked(!checked);
    try {
      const response = await axios.put(`${process.env.REACT_APP_BE_URL}/api/supermarket-list/${item._id}`, { checked: !checked });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDate = () => {
    const date = new Date(item.date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <tr>
      <td className='first-column'>{item.name}</td>
      <td className='second-column'>{item.quantity} x</td>
      <td className='third-column'>{getDate()}</td>
      <td className='Check'>
        <input type='checkbox' checked={checked} onChange={handleCheck}></input>
      </td>
      <td className='editDeleteBtn'>
        <button onClick={handleDeleteItem} className='button-44'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SupermarketItem;

// const handleEditItem = () => {
//   if (editedItem) {
//     onEditItem(item._id, inputValues);
//   }
//   setEditedItem(!editedItem);
// };

// const handleChange = (e) => {
//  const { name, value } = e.target;
//  setInputValues({ ...inputValues, [name]: value });
// };
