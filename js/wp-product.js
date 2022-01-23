const params = new URLSearchParams(window.location.search);
const mainPage = document.querySelector(".main-page");
const loadingIndicator = document.querySelector(".loading-indicator");

const productUrl = `https://olgacerovic.com/rainy-days/wp-json/wc/v3/products/${params.get(
  "id"
)}?consumer_key=ck_92e53f56a8b5ef67bac0f725653ad59cad14474e&consumer_secret=cs_f9d3a80620c9bb4aabe29aa34ec8a7d1bb6f0800`;

const productVariationsUrl = `https://olgacerovic.com/rainy-days/wp-json/wc/v3/products/${params.get(
  "id"
)}/variations?consumer_key=ck_92e53f56a8b5ef67bac0f725653ad59cad14474e&consumer_secret=cs_f9d3a80620c9bb4aabe29aa34ec8a7d1bb6f0800`;

const getProduct = async (url) => {
  loadingIndicator.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    const result = await response.json();
    const variations = await fetch(productVariationsUrl);
    const variationsResult = await variations.json();
    createHtml(result, variationsResult);
  } catch (error) {
    console.log(error);
  }
  loadingIndicator.innerHTML = "";
};

getProduct(productUrl);

const createHtml = (product, productVariations) => {
  mainPage.innerHTML = `<h1>${product.name}</h1>
    <section class="main-content-shop details-page">
            <div>
              <div class="product-image">
                <div class="product-info-main-text">
                  <div class="product-title">
                    <h3>About this jacket</h3>
                    <p>${product.description}</p>
                  </div>
                  <div class="product-review">
                    <h3>Customers reviews</h3><div class="stars">
                      <ul>
                        <li><img src="../images/star-icon.png" alt="star icon"></li>
                        <li><img src="../images/star-icon.png" alt="star icon"></li>
                        <li><img src="../images/star-icon.png" alt="star icon"></li>
                        <li><img src="../images/star-icon.png" alt="star icon"></li>
                        <li><img src="../images/star-icon.png" alt="star icon"></li>
                      </ul>
                    </div>
                    <a href="https://no.trustpilot.com/">Read reviews >></a>
                  </div>
                  </div>

              <img src="${product.images[0].src}" alt="${
    product.images[0].alt
  }"/>
              <div class="product-checkout">
                <div class="sizes">
                  <p>Choose your size:</p>
                  <ul>
                  ${productVariations.map(
                    (variation) => `<li>${variation.attributes[0].option}</li>`
                  )}
                  </ul>
                </div>
                <div class="price-details">
                <p>Price: nok ${product.price}</p>
                <p>Name: ${product.name}</p>
                  <p>Suitable for: rain, wind</p>
                </div>
                <div class="product-checkout-button">
                  <button class="cta" type="text" onclick="addToCart(${
                    product.name
                  }, ${product.id}, ${product.images[0].src}, ${
    product.price
  }); snackbarFunction()">Add to Cart</button>                      

                </div>
              </div>
              </div>
            </div>
          </div>`;
  document.title = product.name;
};
