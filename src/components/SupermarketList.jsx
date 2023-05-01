import React, { useState, useEffect } from 'react';
import SupermarketItem from './SupermarketItem';
import BudgetForm from './BudgetForm';
import  SupermarketForm  from './SupermarketForm';
import axios from 'axios';

const SupermarketList = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/supermarket-list`);
        setListItems(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchListItems();
  }, []);

  const handleAddItem = async (item) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BE_URL}/api/supermarket-list`, item);
      console.log(response.data)
      setListItems([...listItems, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BE_URL}/api/supermarket-list/${id}`);
      if (response.status === 200) {
        const newListItems = listItems.filter((item) => item._id !== id);
        setListItems(newListItems);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Supermarket List</h1>
      <SupermarketForm onAddItem={handleAddItem} />
      <hr />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item) => (
            <SupermarketItem key={item._id} item={item} onDeleteItem={handleDeleteItem} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SupermarketList;
