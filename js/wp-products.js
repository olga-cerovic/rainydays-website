const baseUrl = "https://olgacerovic.com/rainy-days/wp-json/wc/store/products";
const productsDiv = document.querySelector(".products");

const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getProducts(baseUrl);

const createHtml = (products) => {
  products.forEach((element) => {
    productsDiv.innerHTML += `
        <div class="product">
              <div class="product-clickable">
                <img src="${element.images[0].src}"/>
                <a href="./detailed-pages/product.html?id=${element.id}" class="show-product-link">Show product</a>
                <div>
                  <p>Price: nok ${element.prices.price}</p>
                  <p>Name: ${element.name}</p>
                  <p>Suitable for: rain, wind</p>
                </div>
              </div>
              
            </div>
        `;
  });
};
