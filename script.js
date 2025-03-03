const balance = 5000;
const description = 'Salary';
const newTransaction = true;

// const balanceNumberEl = document.querySelector('.balance-number');
// balanceNumberEl.textContent = balance;
const text = 'Hello';
const salary = 2000;
const isExpense = false;
const expenses = [1000, 30, 25];
const transaction = {
    description : 'Salary',
    amount : 4000
}
transaction.description = 'Worker';

const error = {
    description: 'Not Found',
    statusCode: 404,
    retry: false
};
console.log(error);

// function shortcut
// function calculateBalance(income, expense) {
//     return income - expense;
// };

// one line function
const calculateBalance = (income, expense) => income - expense;

// function declaration
// function calculateBalance(income, expense) {
//     // const income = 5000;
//     // const expense = 1000;
//     const balance = income - expense;
//     return balance
//     // console.log(balance);
// };

// function expression
// var calculateBalance = function(income, expense) {
//     const balance = income - expense;
//     return balance;
// };

// arrow function
// const calculateBalance = (income, expense) => {
//     const balance = income - expense;
//     return balance;
// };

// calculateBalance(10000, 1000);
const result = calculateBalance(10000, 5000);
console.log(result);

// DOM Manipulation
document.getElementById('add').addEventListener("click", function(){
    // const changeNum = document.querySelector('.balance-number')
    // changeNum.textContent = "Insufficient Balance"

    // alert(error.description + " " + error.statusCode);
});

// change heading DOM
// const headingEl = document.querySelector('.first-heading');
// headingEl.textContent = "Welcome to the Bank";

// click event listner DOM
// const balanceEl = document.querySelector('.balance-number');
// balanceEl.addEventListener('click', function clickHandler(){
//     const balance = 5000 - 2000
//     balanceEl.textContent = balance
//     console.log(balance)
// });

// change css style DOM
// const balanceEl = document.querySelector('.balance-number');
// balanceEl.addEventListener('click', () => {
//     balanceEl.classList.add('balance-number--special')
//     // balanceEl.style.color = 'red'
//     // balanceEl.style.fontSize = '5rem'
//     // balanceEl.style.fontWeight = '800'
// });

// change html tag DOM
const balanceEl = document.querySelector('.balance-number');
// balanceEl.innerHTML = '<span class="special">Unavailable</span>';
// balanceEl.textContent = 'Unavailable';
// balanceEl.insertAdjacentHTML('beforeend', '<span>2000</span>');

console.log(b);
var b = 200;
console.log(b);

// String concatenation vs Template literals
// const balanceText = `Your Remaining Balance is ${b}`;
// const bText = `
//     <li>
//         <span>${description}</span>
//     <li>
//     `;
// console.log(balanceText);

// control flow modified if-else ternary operator
// if b(var) > 0 then positive else negative
b > 0 ? console.log('Positive') : console.log('Negative');

const incomes = [5000, 2000, 10, 300, 40];

for (let i = 0; i < incomes.length; i++) {
    const element = incomes[i];
    console.log(element + '-' + i)
}

// incomes.forEach((income) => {
//     let i = 1
//     console.log(income + " " + i);
//     i++
// });

// arrow function for loop
// incomes.forEach(income => console.log(income + 10));