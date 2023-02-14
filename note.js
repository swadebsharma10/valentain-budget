document.getElementById('kitkat-buy-btn').addEventListener('click',
function(){
    const kitQuantity = document.getElementById('kitkat-quantity');
    const kitQuantityString = kitQuantity.value ;
    const quantity = parseInt(kitQuantityString);

    kitQuantity.value = '';

    const kitPriceElement = document.getElementById('kitkat-price');
    const kitPriceString =kitPriceElement.innerText;
    const kitPrice = parseInt(kitPriceString);
    
    const kitTotalCost = kitPrice * quantity;
    // console.log(kitTotalCost);

    const kitPreviousTotal = document.getElementById('chocolate');
    const kitPreviousTotalString = kitPreviousTotal.innerText;
    const kitPreviousAmount = parseInt(kitPreviousTotalString);

    kitPreviousTotal.innerText = kitTotalCost
    // console.log(typeof kitPreviousAmount)
    


})
