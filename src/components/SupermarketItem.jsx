import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SupermarketItem = ({ item, onDeleteItem, onEditItem }) => {
  const [editedItem, setEditedItem] = useState(false);
  const [checked, setChecked] = useState(item.checked || false);

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
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear() % 100; // Get the last two digits of the year
    const formattedDate = `${day}/${month}//${year}`;
    return formattedDate;
  };

  return (
    <tr>
      <td  className={checked ? 'first-column line-through ' : 'first-column'}><span>{item.name}</span></td>
      <td className='second-column'>{item.quantity}</td>
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
