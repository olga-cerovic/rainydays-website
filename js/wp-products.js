const baseUrl =
  "https://olgacerovic.com/rainy-days/wp-json/wc/v3/products?per_page=100&consumer_key=ck_92e53f56a8b5ef67bac0f725653ad59cad14474e&consumer_secret=cs_f9d3a80620c9bb4aabe29aa34ec8a7d1bb6f0800";
const productsDiv = document.querySelector(".products");
const loadingIndicator = document.querySelector(".loading-indicator");
const searchButton = document.querySelector(".search-button");
const inputField = document.querySelector("#inputField");

const getProducts = async (url, searchInputValue = null) => {
  loadingIndicator.innerHTML = "Loading...";
  productsDiv.innerHTML = "";
  try {
    const response = await fetch(url);
    const result = await response.json();
    const filteredResults = searchInputValue
      ? result.filter((product) =>
          product.name.toLowerCase().includes(searchInputValue.toLowerCase())
        )
      : result;
    createHtml(filteredResults);
    console.log(filteredResults);
  } catch (error) {
    console.log(error);
  }
  loadingIndicator.innerHTML = "";
};

getProducts(baseUrl);
const createHtml = (products) => {
  const isForWomen = window.location.href.includes("women");
  const isForOutlet = window.location.href.includes("outlet");
  const categorySlug = isForWomen
    ? "jacket-for-women"
    : isForOutlet
    ? "outlet"
    : "jacket-for-men";
  products.forEach((element) => {
    if (element.categories.find((category) => category.slug === categorySlug)) {
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
    }
  });
};

searchButton.onclick = function searchJackets() {
  getProducts(baseUrl, inputField.value);
};
