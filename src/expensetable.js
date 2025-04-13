function ExpenseTable ({expenses}){
    return(
        <table className="table">
            <thead className="tablehead">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr>
                        <td>{expense.name}</td>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default ExpenseTable;