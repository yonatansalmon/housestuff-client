import React, { useState } from 'react';

const BudgetForm = () => {
  const [isPlus, setIsPlus] = useState(true);

  const handleRadioChange = (e) => {
    console.log('first');
  };

  return (
    <div className='form'>
      <div className='inputsCont'>
        <input type='text' placeholder='Name' className='TransactionInput' />
        <input type='number' placeholder='Amount' className='AmountInput' />
      </div>
      <div className='transaction-type'>
        <label className='PlusLabel'>
          <input type='radio' name='transaction' value='income' onChange={handleRadioChange} />
          Plus
        </label>
        <label className='MinusLabel'>
          <input type='radio' name='transaction' value='expense' onChange={handleRadioChange} />
          Minus
        </label>
      </div>
    </div>
  );
};

export default BudgetForm;
