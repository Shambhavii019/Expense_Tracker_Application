// Load stored values
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let budget = JSON.parse(localStorage.getItem("budget")) || { amount: 0 };
let theme = localStorage.getItem("theme") || "light";

// Save all expenses
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Add expense
function saveExpense(amount, category, date) {
    const obj = { id: Date.now(), amount: Number(amount), category, date };
    expenses.push(obj);
    saveExpenses();
}

// Update expense
function editExpense(id, amount, category, date) {
    const index = expenses.findIndex(e => e.id === id);
    expenses[index] = { id, amount: Number(amount), category, date };
    saveExpenses();
}

// Delete expense
function deleteExpense(id) {
    expenses = expenses.filter(e => e.id !== id);
    saveExpenses();
}

// Save budget
function saveBudget(amount) {
    budget.amount = Number(amount);
    localStorage.setItem("budget", JSON.stringify(budget));
}

// Current month total
function getMonthlyTotal() {
    const month = new Date().getMonth();
    return expenses
        .filter(e => new Date(e.date).getMonth() === month)
        .reduce((sum, e) => sum + e.amount, 0);
}

// Comparison data
function getMonthComparison() {
    let monthly = Array(12).fill(0);
    expenses.forEach(e => {
        let m = new Date(e.date).getMonth();
        monthly[m] += e.amount;
    });
    return monthly;
}

// Theme control
function applyTheme() {
    document.body.className = theme;
}

function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    applyTheme();
}

applyTheme();
