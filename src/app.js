import { useState } from "react";
import ExpenseTable from "./expensetable";
import ExpenseForm from "./expenseform";
import ExpenseFilter from "./expensefilter";


function App() {
    const [expenses, setExpenses] =useState([
        {},
        {},
        {},
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const addExpense = (newExpense) => {
        setExpenses([...expenses,newExpense]);
    };

    const filteredExpenses = expenses.filter(expense=> {
        const term = searchTerm.toLowerCase();
        return(
            expense.expense.toLowerCase().includes(term) ||
            expense.description.toLowerCase().includes(term) ||
            expense.company.toLowerCase().includes(term)
        );
    });

    return (
        <div className="app-container">
            <h1>Expense Tracker</h1>

            <div className="form-section">
                <ExpenseForm onAddExpense={addExpense} />
            </div>

            <div className="expenses-section">
                <ExpenseFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ExpenseTable expenses={filteredExpenses}/>
            </div>
        </div>
        
    );
};

export default App;

