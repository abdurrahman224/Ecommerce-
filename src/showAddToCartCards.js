import produccts from './api/products.json';
import fetchQuantityFromCartLS from './fetchQuantityFromCartLS';
import { getCartProductFromLS } from './getCartProduct';

let cartProducts = getCartProductFromLS();

let filterProducts = produccts.filter(curProd => {
  return cartProducts.some(curElem => curElem.id === curProd.id);
});
console.log(filterProducts);

const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');

const showCartProduct = () => {
  filterProducts.forEach(curProd => {
    const { category, id, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateContainer.content, true);
    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.imageContainer').scr = image;
    productClone.querySelector('.productPrice').textContent =
      lSActualData.price;
    productClone.querySelector('.productQuantity').textContent =
      lSActualData.quantity;
    cartElement.appendChild(productClone);
  });
};

showCartProduct();
