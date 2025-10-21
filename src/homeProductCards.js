import { homeQuantityToggle } from "./homeQuantityToggle";

const productTemplate = document.querySelector("#productTemplate");
const productContainer = document.querySelector("#productContainer");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const {
      brand,
      category,
      description,
      id,
      image,
      name,
      price,
      stock,
      discount,
    } = curProd;
    const discountedPrice = discount ? price - (price * discount) / 100 : null;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".productName").textContent = name;
    if (discount) {
      productClone.querySelector(".category").textContent = `${discount}%`;
    } else {
      productClone.querySelector(".category").style.display = "none";
    }
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;

    if (discountedPrice) {
      productClone.querySelector(
        ".productPrice"
      ).textContent = `৳${discountedPrice}`;
      productClone.querySelector(
        ".productActualPrice"
      ).textContent = `${price}`;
    } else {
      productClone.querySelector(".productPrice").textContent = `৳${price}`;
      productClone.querySelector(".productActualPrice").style.display = "none";
    }
    productClone.querySelector('.stockElement').addEventListener("clike", (event) =>{


      homeQuantityToggle(event,id,stock)
    })

    productContainer.append(productClone);
  });
};
