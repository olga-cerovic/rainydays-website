const baseUrl =
  "https://olgacerovic.com/rainy-days/wp-json/wc/v3/products?per_page=100&consumer_key=ck_92e53f56a8b5ef67bac0f725653ad59cad14474e&consumer_secret=cs_f9d3a80620c9bb4aabe29aa34ec8a7d1bb6f0800";
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
                <p>Price: nok ${element.price}</p>
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
