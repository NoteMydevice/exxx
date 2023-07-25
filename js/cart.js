var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var discountCode = document.getElementById('discount_code1');

const  discount_code = () => {
let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let error_trw = document.getElementById('error_trw');
if(discountCode.value === 'thapa'){
let newtotalamt = totalamtcurr - 15;
total_cart_amt.innerHTML = newtotalamt;
error_trw.innerHTML = "Hurray! code is valid";
}else{
error_trw.innerHTML = "Try Again!";
}
}