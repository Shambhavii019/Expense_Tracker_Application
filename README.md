🌸 Expense Tracker Web App
A simple, elegant, lavender-themed Expense Tracker built using HTML, CSS, and JavaScript.
Tracks expenses, manages monthly budget, compares spending across months, and provides charts — all stored locally using LocalStorage.

✨ Features
📌 1. Add Expense
Enter amount, category, and date
Saved in browser using LocalStorage
📜 2. Expense History
View all expenses
Edit any expense
Delete any expense
Shows current month’s total spending
Modern UI cards for every entry
💰 3. Budget Manager
Set monthly budget
Automatically calculates amount left to spend
📊 4. Monthly Comparison Charts
Bar chart comparing spending for all 12 months
Powered by Chart.js
🌙 5. Light & Dark Mode (Persistent)
Toggle theme button
Saves preference in LocalStorage
Modern lavender UI in both themes


🌈 Tech Stack
HTML5 – Structure
CSS3 – Custom lavender UI, glassmorphism style
JavaScript – Logic, routing, storage, theme
LocalStorage – Stores all data persistently
Chart.js – For monthly charts


📁 Project Structure
expense-tracker/
│
├── index.html        # Add Expense Page
├── history.html      # View + Edit + Delete Expenses
├── budget.html       # Budget/Remaining Amount
├── compare.html      # Monthly Comparison Chart
│
├── style.css         # Complete UI styling (light/dark mode)
├── app.js            # Core logic (saving, editing, deleting, charts, theme)
