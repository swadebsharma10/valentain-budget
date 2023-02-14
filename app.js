document.getElementById('kitkat-buy-btn').addEventListener('click', 
function(){
    const quantity = getInputQuantity('kitkat-quantity');
    const kitkatCost = quantity * 200;
    setInnerText('chocolate', kitkatCost);
    totalCost();
});

document.getElementById('rose-buy-btn').addEventListener('click', 
function(){
    const quantity = getInputQuantity('rose-quantity');
    const roseCost = quantity * 100;
    setInnerText('rose', roseCost);
    totalCost();
});

document.getElementById('diary-buy-btn').addEventListener('click', 
function(){
    // const quantity = document.getElementById('diary-quantity').value;
    const quantity =getInputQuantity('diary-quantity');
    const dairyCost = quantity * 100;
    // document.getElementById('diary').innerText = dairyCost;
    setInnerText('diary', dairyCost);
    totalCost();
});

// function start

function getInputQuantity(id){
    const quantity = document.getElementById(id).value;
    return parseInt(quantity);

}

function setInnerText(id , value){
    document.getElementById(id).innerText = value;
    
}

function totalCost(){
   const chocolateString = document.getElementById('chocolate').innerText;
   const chocolate = parseInt(chocolateString);

   const roseString = document.getElementById('rose').innerText;
   const rose = parseInt(roseString);

   const dairyString = document.getElementById('diary').innerText;
   const dairy = parseInt(dairyString);

   const totalSum = chocolate + rose + dairy;
//    console.log(totalSum);
        // set the total cost
//    document.getElementById('total').innerText = totalSum;  
   setInnerText('total', totalSum);   
}


document.getElementById('apply-btn').addEventListener('click',
function(){
    const promoCode = getInputQuantity('promo-code');
    if(promoCode == 101){
        const totalString = document.getElementById('total').innerText;
        const total = parseInt(totalString);
        const sum =  total - total * 0.1;
        setInnerText('all-total', sum);
       
    }
    else{
      alert('Wrong Promo code try again with valid code')  
    }
    
    

})