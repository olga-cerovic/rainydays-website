const baseUrl =
  "https://olgacerovic.com/rainy-days/wp-json/wc/v3/products?consumer_key=ck_92e53f56a8b5ef67bac0f725653ad59cad14474e&consumer_secret=cs_f9d3a80620c9bb4aabe29aa34ec8a7d1bb6f0800";
const productsDiv = document.querySelector(".products");
const loadingIndicator = document.querySelector(".loading-indicator");

const getProducts = async (url) => {
  loadingIndicator.innerHTML = "Loading...";
  try {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  loadingIndicator.innerHTML = "";
};

getProducts(baseUrl);

const createHtml = (products) => {
  console.log(products);
  products.forEach((element) => {
    productsDiv.innerHTML += `
        <div class="product">
              <div class="product-clickable">
                <img src="${element.images[0].src}"/>
                <a href="./detailed-pages/product.html?id=${element.id}" class="show-product-link">Show product</a>
                <div>
                  <p>Price: nok ${element.price}</p>
                  <p>Name: ${element.name}</p>
                  <p>Suitable for: rain, wind</p>
                </div>
              </div>
              
            </div>
        `;
  });
};
