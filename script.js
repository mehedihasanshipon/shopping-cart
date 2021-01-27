let phonePrice = document.getElementById("phonePrice").innerText;
let phonePriceNumber = parseFloat(phonePrice);

// Plus button even handler
const plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener('click',function(){
    const phoneItem = document.getElementById('phoneInputValue').value;
    let phoneItemNumber = parseFloat(phoneItem);
    let phoneItems = phoneItemNumber + 1;
    document.getElementById('phoneInputValue').value = phoneItems;
    
    // Phone price
    // let phonePrice = document.getElementById("phonePrice").innerText;
    // let phonePriceNumber = parseFloat(phonePrice);
    let totalPrice = phoneItems * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
})

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click',function(){
    const phoneItem = document.getElementById('phoneInputValue').value;
    let phoneItemNumber = parseFloat(phoneItem);
    let phoneItems = phoneItemNumber - 1;
    document.getElementById('phoneInputValue').value = phoneItems;
    
    let totalPrice = phoneItems * phonePriceNumber;
    document.getElementById("phonePrice").innerText = totalPrice;
})