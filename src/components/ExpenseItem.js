import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Aug 19th 2021</div>
      <div className="expense-item__description">
        <h2>Health Insurance </h2>
      </div>
      <div className="expense-item__price">55.85</div>
    </div>
  );
}

export default ExpenseItem;
