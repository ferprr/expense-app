import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2023, 0, 2),
    },
    {
      title: "Soap",
      amount: 3.5,
      date: new Date(2023, 0, 2),
    },
    {
      title: "Desinfectant",
      amount: 6,
      date: new Date(2023, 0, 2),
    },
    {
      title: "Garbage bag",
      amount: 16.72,
      date: new Date(2023, 0, 2),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date.toISOString()}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date.toISOString()}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date.toISOString()}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
