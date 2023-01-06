import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses ];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
