const params = new URLSearchParams(window.location.search);
const mainPage = document.querySelector(".main-page");

const productUrl = `https://olgacerovic.com/rainy-days/wp-json/wc/store/products/${params.get(
  "id"
)}`;

const getProduct = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    createHtml(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getProduct(productUrl);

const createHtml = (product) => {
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

              <img src="${product.images[0].src}" alt="${product.images[0].alt}"/>
              <div class="product-checkout">
                <div class="sizes">
                  <p>Choose your size:</p>
                  <ul><li>S</li><li>M</li><li>L</li><li>XL</li></ul>
                </div>
                <div class="price-details">
                <p>Price: nok ${product.prices.price}</p>
                <p>Name: ${product.name}</p>
                  <p>Suitable for: rain, wind</p>
                </div>
                <div class="product-checkout-button">
                  <button class="cta" type="text" onclick="addToCart(${product.name}, ${product.id}, ${product.images[0].src}, ${product.prices.price}); snackbarFunction()">Add to Cart</button>                      

                </div>
              </div>
              </div>
            </div>
          </div>`;
  document.title = product.name;
};
