import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
