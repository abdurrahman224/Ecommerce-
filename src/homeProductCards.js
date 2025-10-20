const productTemplate = document.querySelector("#productTemplate");
const productContainer = document.querySelector("#productContainer");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  
  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock ,discount} =
      curProd;

const  discountedPrice   = discount? price-(price *discount):null


    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt  = name;
    productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.productDescription').textContent = description;
        if (discountedPrice ) {
   
      productClone.querySelector('.productPrice').textContent = `৳${discountedPrice}`;
      productClone.querySelector(".productActualPrice").textContent = `₹${price}`;  
    } else {
   
      productClone.querySelector('.productPrice').textContent = `৳${price}`;
      productClone.querySelector('.productActualPrice').style.display = "none"; 
    }

productContainer.append(productClone)

  });
};


 

// const productTemplate = document.querySelector("#productTemplate");
// const productContainer = document.querySelector("#productContainer");

// export const showProductContainer = (products) => {
//   if (!products) return false;

//   products.forEach((curProd) => {
//     const { brand, category, description, id, image, name, price, stock } = curProd;

//     // ✅ Correct line
//     const productClone = document.importNode(productTemplate.content, true);

//     // ✅ Fill data
//     productClone.querySelector(".productName").textContent = name;

//     // ✅ Append to container
//     productContainer.append(productClone);
//   });
// };
