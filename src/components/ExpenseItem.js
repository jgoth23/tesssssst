import './ExpenseItem.css';

function ExpenseItem() {

const expenseDate = new Date(2021, 2, 18);
const expenseTitle = 'Health Insurance';
const expenseAmount = 55.85;

  return (
    <div className="expense-item">
      <div>March 18th 2021</div>
      <div className="expense-item__description">
        <h2>Health Insurance </h2>
      </div>
      <div className="expense-item__price">55.85</div>
    </div>
  );
}

export default ExpenseItem;
