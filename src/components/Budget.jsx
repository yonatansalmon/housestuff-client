import { useState, useEffect } from 'react';
import BudgetItem from './BudgetItem';
import BudgetForm from './BudgetForm';
import TotalModal from './TotalModal';
import axios from 'axios';

const Budget = () => {
  const [budgetItems, setBudgetItems] = useState();

  const [plusItems, setPlusItems] = useState([
    {
      _id: '1',
      category: 'Groceries',
      amount: 250,
    },
    {
      _id: '2',
      category: 'Utilities',
      amount: 150,
    },
  ]);
  const [minusItems, setMinusItems] = useState([
    {
      _id: '1',
      category: 'Groceries',
      amount: 250,
    },
    {
      _id: '2',
      category: 'Groceries',
      amount: 444,
    },
  ]);
  const [total, setTotal] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchBudgetItems = async () => {
      const response = await axios.get('http://localhost:8080/api/budget/total');
      calculateTotalBudget(response.data.total);
    };

    fetchBudgetItems();
  }, []);

  const handleOpenModal = () => {
    setShow(true);
  };

  const calculateTotalBudget = (currentBudget) => {
    const plusTotal = plusItems.reduce((acc, item) => acc + item.amount, 0);
    const minusTotal = minusItems.reduce((acc, item) => acc - item.amount, 0);
    const totalAmount = plusTotal + minusTotal;
    const totalBudget = currentBudget + totalAmount;
    setTotal(totalBudget);
  };

  useEffect(() => {
    calculateTotalBudget(total);
  }, [minusItems, plusItems]);

  return (
    <div>
      <BudgetForm />
      <div className='TotalContainer'>
        <h1 className='Total'>Total: {total}₪</h1>
        <span className='EditSymb' onClick={handleOpenModal}>
          &#9998;
        </span>
      </div>
      <div className='plus'>
        {plusItems.map((item) => (
          <BudgetItem item={item} />
        ))}
      </div>

      <div className='minus'>
        {minusItems.map((item) => (
          <BudgetItem key={item.id} item={item} />
        ))}
      </div>
      <TotalModal show={show} setShow={setShow} total={total} setTotal={setTotal} />
    </div>
  );
};

export default Budget;
