import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpnese from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Papper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insraunce",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //    /*REACT LIBARY*/
  //    //3 attributumot vár: 1.: a tag amibe benne van, 2.: a tartalom amit megjelenit, 3.: a szöveg ami a tagen belűl van
  //  return React.createElement(
  //    "div",
  //    {},
  //    React.createElement("h2", {}, "Let'S GO started!"),
  //    React.createElement(Expenses, {items: expenses})
  //  );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  /*JSX COD*/
  return (
    <div>
      <NewExpnese onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
