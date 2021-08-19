import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setYearSelected(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={yearSelected}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
