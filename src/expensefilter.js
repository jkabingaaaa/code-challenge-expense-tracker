function ExpenseFilter ({searchTerm, setSearchTerm}) {
    return(
        <input 
        type="text"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="Search Expenses"
        />
    )
}

export default ExpenseFilter;