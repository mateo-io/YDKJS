var balance = prompt("Enter the $$ ");
var payment = 0;

const PHONE = 99.99;
const TAX_RATE = 0.13;

var doCheckout = function(cost){

  cost*=(1+TAX_RATE);
  if(balance>cost){
    balance-=cost;
    return true
  }
  else{
    return false
  }
}


while ( (balance-PHONE)>0 ){
  //Buy a phone
  payment += PHONE;

  var purchase_options = prompt("Enter the desired option:"
    + "\n1. Extra charger 11.99"
    + "\n2. Battery 19.99"
    + "\n3. Case 12.99");

  switch(parseInt(purchase_options)){
    case 1:
      payment +=11.99;
      break;
    case 2:
      payment +=19.99;
      break;
    case 3:
      payment +=12.99;
      break;
    default:
    
      alert(purchase_options);
      alert("There was a problem adding your accessory");
}

  var checkout = prompt("Enter y/yes to go to checkout");
  if(checkout=='y' || checkout=='yes'){
    if (doCheckout(payment)){
      alert("Thanks for your purchase!\nNew balance: " + Math.floor(balance))
      break;
    }
    else {
      alert("You have insuficient funds dude");
      break;
    }
  }


}

