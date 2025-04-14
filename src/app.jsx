import React, { useState } from "react";
import NewExpense from './expense'
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const form = e.target;
    const newExpense = {
      id: Date.now(),
      name: form.name.value,
      description: form.description.value,
      category: form.category.value,
      amount: parseFloat(form.amount.value),
      date: form.date.value,
    };
    setExpenses([newExpense, ...expenses]);
    form.reset();
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase()) || expense.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortAlphabetically) return 0;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Add New Expense</h2>
        <form onSubmit={handleAddExpense} className="expense-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="category" placeholder="Category" required />
          <input type="number" name="amount" placeholder="Amount" required />
          <input type="date" name="date" required />
          <button type="submit">Add Expense</button>
        </form>
      </div>

  <div className="expenses-container">
    <input
      type="text"
      placeholder="Search by name..."
      className="search-bar"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />

    <label className="sort-toggle">
      <input
        type="checkbox"
        checked={sortAlphabetically}
        onChange={(e) => setSortAlphabetically(e.target.checked)}
      />
      Sort
    </label>

    <h2>All Expenses</h2>
    <table className="expenses-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => (
          <NewExpense
            key={expense.id}
            expense={expense}
            onDelete={() => handleDeleteExpense(expense.id)}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default App;





