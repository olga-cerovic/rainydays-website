const baseUrl = "https://olgacerovic.com/rainy-days/wp-json/wc/store/products/";
const bestDeals = document.querySelector(".best-deals");

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
    if (element.categories.find((category) => category.slug === "outlet")) {
      bestDeals.innerHTML += `
      <div class="main-pages">
      <h1>${element.name}</h1>
      <section class="main-content-shop">
        <div class="products">
          <div class="product">
            <div class="product-clickable">
            <img src="${element.images[0].src}" alt="${element.images[0].alt}"/>
            <a href="./detailed-pages/product.html?id=${element.id}" class="show-product-link">Show product</a>
            <div>
                <p>Price: nok ${element.prices.price}</p>
                <p>Name: ${element.name}</p>
                <p>Suitable for: rain, wind</p>
              </div>
            </div>
            </div>
         </div>
      </section>
      </div>
        `;
    }
  });
};
