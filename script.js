const transactionEl = document.querySelector('.transactions');
const balanceNumber = document.querySelector('.balance-number');
const incomeNumber = document.querySelector('.number-income');
const expensesNumber = document.querySelector('.number-expenses');

// form variables
const formEl = document.querySelector('.form');
const descriptionInput = document.querySelector('.input-description');
const amountInput = document.querySelector('.input-amount');

// function for form features
const formHandler = (event) => {
    // prevent default behavior
    event.preventDefault();

    // get input values
    const description = descriptionInput.value;
    const amount = +amountInput.value;
    console.log(description, amount);

    // create transaction item
    const transactionItem = `
        <li class="transaction transaction-${amount > 0 ? 'income' : 'expense'}">
            <span class="transaction_text">${description}</span>
            <span class="transaction_amount">${amount > 0 ? '+' : ''} ${amount}</span>
            <button class="transaction_btn">X</button>
        </li>
    `;

    // append transaction item
    transactionEl.insertAdjacentHTML('beforeend', transactionItem);

    // clear form inputs
    descriptionInput.value = '';
    amountInput.value = '';

    // blur the input when submitted
    descriptionInput.blur();
    amountInput.blur();

    // update income or expense
    if (amount > 0) {
        // if positive update income
        const currentIncome = +incomeNumber.textContent;
        const updatedIncome = currentIncome + amount;
        incomeNumber.textContent = updatedIncome;
    } else {
        // if negative update expense
        const currentExpense = +expensesNumber.textContent; 
        const updatedExpense = currentExpense + (amount * -1);
        expensesNumber.textContent = updatedExpense;
    }

    // update balance
    const incomeBalance = +incomeNumber.textContent;
    const expenseBalance = +expensesNumber.textContent;
    const updatedBalance = incomeBalance - expenseBalance;
    balanceNumber.textContent = updatedBalance
}

formEl.addEventListener('submit', formHandler); 

const clickHandler = (event) => {
    // Remove Transaction
    const clickedEl = event.target.parentNode;
    clickedEl.remove();

    // Update Expense and Income
    const amountEl = clickedEl.querySelector('.transaction_amount');
    const amount = +amountEl.textContent;

    // Check if the amount is Positive and Negative
    if (amount > 0) {
        // if positive update income
        const currentIncome = +incomeNumber.textContent;
        const updatedIncome = currentIncome - amount;
        incomeNumber.textContent = updatedIncome;
    } else {
        // if negative update expense
        const currentExpense = +expensesNumber.textContent; 
        const updatedExpense = currentExpense - (amount * -1);
        expensesNumber.textContent = updatedExpense;
    }

    // update balance
    const expenseBalance = +expensesNumber.textContent;
    const incomeBalance = +incomeNumber.textContent;

    balanceNumber.textContent = incomeBalance - expenseBalance;

    if (incomeBalance - expenseBalance < 0) {
        balanceNumber.style.color = 'red';
    } else if (incomeBalance - expenseBalance == 0) {
        balanceNumber.style.color = 'black';
    }
        console.log(balanceNumber)
}

// don't put () in func so it will run only when click happens
transactionEl.addEventListener('click', clickHandler);