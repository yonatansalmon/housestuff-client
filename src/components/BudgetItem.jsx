import React from 'react'

const BudgetItem = ({item}) => {
  return (
    <tr key={item.id}>
    <td>{item.category}</td>
    <td>{item.amount}₪</td>
    <td>Delete</td>
  </tr>
  )
}

export default BudgetItem