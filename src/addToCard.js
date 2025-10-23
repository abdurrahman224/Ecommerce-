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
    if (quantity > 1) {
      // Update existing product quantity and price
      const updatedQuantity = existingProd.quantity + quantity;
  
      
      const updatedPrice = Number(price) * updatedQuantity;

    
      
      // Update the product in array
      arrLocalStorageProduct = arrLocalStorageProduct.map((curProd) => {
        return curProd.id === id ? { ...curProd, quantity: updatedQuantity, price: updatedPrice } : curProd;
      });
      
      // Save to localStorage
      localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
      updateCartValue(arrLocalStorageProduct);
    }
    return;
  }else {
    console.log(existingProd);
  }

  price = Number(price);

  price = Number((price * quantity).toFixed(0));

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
};
