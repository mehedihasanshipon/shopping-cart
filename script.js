// Get phone price input
let phonePriceNumber = getInputNumber("phonePrice");
let casePriceNumber = getInputNumber("caseprice");

//Phone Plus button even handler
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener('click',function(){
    let phoneQuantity = incrementFunction('phoneInputValue');
    document.getElementById('phoneInputValue').value = phoneQuantity;
    // Phone price
    let totalPrice = phoneQuantity * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
    // subtotal price
    // updateSpanText("subtotal",phonePriceNumber)
    test();
})

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click',function(){
    let phoneQuantity = decrementFunction('phoneInputValue');
    document.getElementById('phoneInputValue').value = phoneQuantity;
    // Phone price
    let totalPrice = phoneQuantity * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
    test();
})

// Case Plus button even handler
const casePlusBtn = document.getElementById("casePlusBtn");
casePlusBtn.addEventListener('click',function(){
    let caseQuantity = incrementFunction('caseInputValue');
    document.getElementById('caseInputValue').value = caseQuantity;
    // Case price
    let totalCasePrice = caseQuantity * casePriceNumber;
    document.getElementById("caseprice").innerText = totalCasePrice;
    test();
})
// Case Minus button even handler
const caseMinusBtn = document.getElementById('caseMinusBtn');
caseMinusBtn.addEventListener('click',function(){
    let caseQuantity = decrementFunction('caseInputValue');
    document.getElementById('caseInputValue').value = caseQuantity;
    // Case price
    let totalCasePrice = caseQuantity * casePriceNumber;
    document.getElementById("caseprice").innerText = totalCasePrice;
    test()
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
    itemNumber++;
    
    return itemNumber;
}

// Quantity Decrement function
function decrementFunction(id){
    const item = document.getElementById(id).value;
    let itemNumber = parseFloat(item);
    itemNumber --;
    return itemNumber;
}
// Update span text
// function updateSpanText(id,addedNumber){
//     const current = document.getElementById(id).innerText;
//     const currentNumber = parseFloat(current);
//     console.log(currentNumber);
//     const totalAmount = addedNumber + currentNumber;
//     document.getElementById(id).innerText = totalAmount;
// }

function test(){
    const phone = document.getElementById("phonePrice").innerText;
    const phoneNumber = parseFloat(phone);
    const casePrice = document.getElementById("caseprice").innerText;
    const caseNumber = parseFloat(casePrice);

    let total = phoneNumber + caseNumber;

    document.getElementById("subtotal").innerText = total;
}