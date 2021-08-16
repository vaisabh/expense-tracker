import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const ExpenseDate = new Date(2021, 7, 16);
  const ExpenseTitle = 'Car Insurance';
  const ExpensePrice = 249.67;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
