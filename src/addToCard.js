import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCard = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS() || [];
  
  const currentprodElem = document.querySelector(`#card${id}`);
  if (!currentprodElem) return;
  // console.log(arrLocalStorageProduct);

  // console.log(currentprodElem);
  let quantity = Number(
    currentprodElem.querySelector(".productQuantity").innerText
  );
  let price = currentprodElem.querySelector(".productPrice").innerText;
  // console.log(quantity,price);
  price = price.replace("৳", "");
  let existingProd = arrLocalStorageProduct.find((curProd) => {
 
    return curProd.id === id;
  });

  if (existingProd) {
    return false;
  }
  price = Number(price);

  price = Number((price * quantity).toFixed(0));

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
};
