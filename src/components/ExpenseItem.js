import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2022, 1, 7);
    const expenseTitle = 'Cleaning Products';
    const expenseAmount = 180.34;

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2 >{expenseTitle}</h2>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;