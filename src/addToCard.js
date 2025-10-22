import { getCartProductFromLS } from "./getCartProduct";
const arrLocalStorageProduct = getCartProductFromLS()

export const addToCard = (event, id, stock)=>{

const currentprodElem = document.querySelector(`#card${id}`)
// console.log(arrLocalStorageProduct);

// console.log(currentprodElem);

let quantity = currentprodElem.querySelector('.productQuantity').innerText;
let price = currentprodElem.querySelector('.productPrice').innerText;
console.log(quantity,price);
price = price.replace("৳" , "") 
price = parseFloat((price * quantity).toFixed());

console.log("Quantity:", quantity, " Price:", price, );

arrLocalStorageProduct.push({id,price,quantity})
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))
    
}