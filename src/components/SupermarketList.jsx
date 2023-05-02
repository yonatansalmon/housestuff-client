import React, { useState, useEffect } from 'react';
import SupermarketItem from './SupermarketItem';
import SupermarketForm from './SupermarketForm';
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

  const handleEditItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_BE_URL}/api/supermarket-list/${id}`, updatedItem);
      setListItems(listItems.map((item) => (item._id === id ? response.data : item)));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className='SuperMarket-List-Title'>Supermarket List</h1>
      <SupermarketForm onAddItem={handleAddItem} />
      <hr />
      <table className='SmTable'>
        <thead className='SmTableHead'>
          <tr>
            <th className='first-column'>Item</th>
            <th className='second-column'>Quantity</th>
          </tr>
        </thead>
        <tbody className='SmTableBody'>
          {listItems.map((item) => (
            <SupermarketItem key={item._id} item={item} onDeleteItem={handleDeleteItem} onEditItem={handleEditItem} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SupermarketList;
