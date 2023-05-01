// Retrieve Inputs
const billTotal = document.querySelector('#billTotal');
const tipInput = document.querySelector('#tipInput');
const tipOutput = document.querySelector('#tipOutput');
const numPeople = document.querySelector('#numPeople');
const tipAmount = document.querySelector('#tipAmount');
const totalBillWithTip = document.querySelector('#totalBillWithTip');
const totalPerPerson = document.querySelector('#totalPerPerson');

// Calculate and display tip amount, total bill with tip, and total per person
function calculateTip() {
  // Get values from input elements
  const bill = parseFloat(billTotal.value);
  const tipPercent = parseInt(tipInput.value);
  const people = parseInt(numPeople.value);

  // Calculate tips
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const perPerson = total / people;

  // show calculated values
  tipAmount.value = tip.toFixed(2);
  totalBillWithTip.value = total.toFixed(2);
  totalPerPerson.value = perPerson.toFixed(2);
}

// Update tip display
tipInput.addEventListener('input', () => {
  tipOutput.textContent = tipInput.value + '%';
});

// Recalculate tip when change
billTotal.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
numPeople.addEventListener('input', calculateTip);
