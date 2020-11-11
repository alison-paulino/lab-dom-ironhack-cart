// ITERATION 1
let totalValue = 0;
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const  price  =  product . querySelector ( '.price span' ) ; 

  const quantity = product.querySelector('.quantity input');

  const calcSubtotal = parseFloat(price.innerHTML) * quantity.value;
   
  const subtotal = product.querySelector('.subtotal span');
   subtotal.innerHTML = calcSubtotal;
   
   totalValue = calcSubtotal;
   return totalValue;
  //... your code goes here
}

// ITERATION 2
function calculateAll() {

  let allProduct = document.getElementsByTagName('tr');
  let total = 0;
  for( let i = 1; i < allProduct.length; i+= 1){
     updateSubtotal(allProduct[i]);
     total += totalValue;
    }
    
  // ITERATION 3
  const total1 = document.querySelector('#total-value span');
  total1.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
