const cartValue  = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {


//    console.log(cartProducts.length);
   
  cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i> `;
};

