
import React, { useState } from "react";
 import NewExpense from './expense'
 import "./App.css";
 
 function App() {
   const [expenses, setExpenses] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const handleAddExpense = (e) => {
     e.preventDefault();
     const form = e.target;
     const newExpense = {
       name: form.name.value,
       description: form.description.value,
       category: form.category.value,
       amount: parseFloat(form.amount.value),
       
     };
     setExpenses([newExpense, ...expenses]);
     form.reset();
   };
   const filteredExpenses = expenses
   .filter((expense) =>
     expense.name.toLowerCase().includes(searchQuery.toLowerCase()) || expense.description.toLowerCase().includes(searchQuery.toLowerCase())
   )
 
   return (
     <div className="app-container">
       <div className="form-container">
         <h2>Add New Expense</h2>
         <form onSubmit={handleAddExpense} className="expense-form">
           <input type="text" name="name" placeholder="Name" required />
           <input type="text" name="description" placeholder="Description" required />
           <input type="text" name="category" placeholder="Category" required />
           <input type="number" name="amount" placeholder="Amount" required />
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
 
     <h2>All Expenses</h2>
     <table className="expenses-table">
       <thead>
         <tr>
           <th>Name</th>
           <th>Description</th>
           <th>Category</th>
           <th>Amount</th>
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


