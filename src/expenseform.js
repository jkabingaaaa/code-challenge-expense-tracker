import { useState } from "react";

function ExpenseForm ({onAddExpense}) {
    const [Expense, setExpense] = useState('');
    const [Description, SetDescription] = useState('');
    const [Amount, SetAmount] = useState('');
    const [Company, SetCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault;
        if (!Expense || !Company) return;

        onAddExpense({
            Expensexpense,
            Description,
            Amount:parseFloat(Amount),
            Company,
        });

        setExpense('')
        SetDescription('')
        SetAmount('')
        SetCompany('')
    };

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <div>
                <label>Expense Name*</label>
                <input
                type="text"
                value = {Expense}
                onChange={(e)=>setExpense(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                type="text"
                value = {Description}
                onChange={(e)=>SetDescription(e.target.value)}
            />
            </div>
            <div>
                <label>Amount*</label>
                <input
                type="number"
                value = {Amount}
                onChange={(e)=>SetAmount(e.target.value)}
                min={0.01}
                step={0.01}
                required
                />
            </div>
            <div>
                <label>Company</label>
                <input
                type="text"
                value= {Company}
                onChange={(e)=>SetCompany(e.target.value)}
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;