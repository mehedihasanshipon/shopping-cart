// Get phone price input
let phonePriceNumber = getInputNumber("phonePrice");
let casePriceNumber = getInputNumber("caseprice");


//Phone Plus button even handler
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener('click',function(){
    // const phoneItem = document.getElementById('phoneInputValue').value;
    // let phoneItemNumber = parseFloat(phoneItem);
    // let phoneItems = phoneItemNumber + 1;

    let phoneQuantity = incrementFunction('phoneInputValue');
    document.getElementById('phoneInputValue').value = phoneQuantity;
    // Phone price
    let totalPrice = phoneQuantity * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
})

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click',function(){
    // const phoneItem = document.getElementById('phoneInputValue').value;
    // let phoneItemNumber = parseFloat(phoneItem);
    // let phoneItems = phoneItemNumber - 1;
    let phoneQuantity = decrementFunction('phoneInputValue');
    document.getElementById('phoneInputValue').value = phoneQuantity;
    // Phone price
    let totalPrice = phoneQuantity * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
})

// Case Plus button even handler
const casePlusBtn = document.getElementById("casePlusBtn");
casePlusBtn.addEventListener('click',function(){
    let caseQuantity = incrementFunction('caseInputValue');
    document.getElementById('caseInputValue').value = caseQuantity;
    // Phone price
    let totalCasePrice = caseQuantity * casePriceNumber;
    document.getElementById("caseprice").innerText = totalCasePrice;
})
// Case Minus button even handler
const caseMinusBtn = document.getElementById('caseMinusBtn');
caseMinusBtn.addEventListener('click',function(){
    let caseQuantity = decrementFunction('caseInputValue');
    document.getElementById('caseInputValue').value = caseQuantity;
    // Phone price
    let totalCasePrice = caseQuantity * casePriceNumber;
    document.getElementById("caseprice").innerText = totalCasePrice;
})

// Get input number function 
function getInputNumber(id){
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Quantity increment function
function incrementFunction(id){
    const item = document.getElementById(id).value;
    let itemNumber = parseFloat(item);
    let items = itemNumber + 1;
    return items;
}

// Quantity Decrement function
function decrementFunction(id){
    const item = document.getElementById(id).value;
    let itemNumber = parseFloat(item);
    let items = itemNumber - 1;
    return items;
}