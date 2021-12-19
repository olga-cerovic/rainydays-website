/******************  WOMAN PAGE   ************************************ */

const productAsideOpeningOW = document.querySelector(
  "#productAsideOrangeWomen"
);

const openProductOrangeWomen = () => {
  const openProductOW = document.querySelector("#openProductOrangeWomen");
  productAsideOpeningOW.style.display = "block";

  let itemsInCart = {};

  const addToCart = (name, itemId, src) => {
    if (itemsInCart[itemId]) {
      const selectedItem = itemsInCart[itemId];
      itemsInCart[itemId] = {
        name: selectedItem.name,
        src: selectedItem.src,
        timesAdded: ++selectedItem.timesAdded,
      };
    } else {
      itemsInCart[itemId] = { name: name, src: src, timesAdded: 1 };
    }

    console.log(itemsInCart);
  };

  const showCart = () => {
    console.log("123");
    const cartDiv = document.querySelector("#cart-div");
    let liElements = "";

    for (const key in itemsInCart) {
      const item = itemsInCart[key];
      liElements += `<li>
                        <span class="cart-img">
                        <img src=${item.src} alt=${item.name}/>
                        </span>
                        <span>x${item.timesAdded}</span>
                        <span>${item.name}</span>
                    </li>`;
    }
    cartDiv.innerHTML = `<ul>${liElements}</ul>`;
  };

  console.log("pljahahaha");
};

/*************************************************************************************************/

const productAsideOpeningBW = document.querySelector("#productAsideBlackWomen");

const openProductBlackWomen = () => {
  const openProductBW = document.querySelector("#openProductBlackWomen");
  productAsideOpeningBW.style.display = "block";

  let itemsInCart = {};

  const addToCart = (name, itemId, src) => {
    if (itemsInCart[itemId]) {
      const selectedItem = itemsInCart[itemId];
      itemsInCart[itemId] = {
        name: selectedItem.name,
        src: selectedItem.src,
        timesAdded: ++selectedItem.timesAdded,
      };
    } else {
      itemsInCart[itemId] = { name: name, src: src, timesAdded: 1 };
    }

    console.log(itemsInCart);
  };

  const showCart = () => {
    console.log("123");
    const cartDiv = document.querySelector("#cart-div");
    let liElements = "";

    for (const key in itemsInCart) {
      const item = itemsInCart[key];
      liElements += `<li>
                        <span class="cart-img">
                        <img src=${item.src} alt=${item.name}/>
                        </span>
                        <span>x${item.timesAdded}</span>
                        <span>${item.name}</span>
                    </li>`;
    }
    cartDiv.innerHTML = `<ul>${liElements}</ul>`;

    console.log("pljahahaha999999");
  };
};

/************************************************************************************************ */

const productAsideOpeningBrW = document.querySelector(
  "#productAsideBrownWomen"
);

const openProductBrownWomen = () => {
  const openProductBrW = document.querySelector("#openProductBrownWomen");
  productAsideOpeningBrW.style.display = "block";

  let itemsInCart = {};

  const addToCart = (name, itemId, src) => {
    if (itemsInCart[itemId]) {
      const selectedItem = itemsInCart[itemId];
      itemsInCart[itemId] = {
        name: selectedItem.name,
        src: selectedItem.src,
        timesAdded: ++selectedItem.timesAdded,
      };
    } else {
      itemsInCart[itemId] = { name: name, src: src, timesAdded: 1 };
    }

    console.log(itemsInCart);
  };

  const showCart = () => {
    console.log("123");
    const cartDiv = document.querySelector("#cart-div");
    let liElements = "";

    for (const key in itemsInCart) {
      const item = itemsInCart[key];
      liElements += `<li>
                        <span class="cart-img">
                        <img src=${item.src} alt=${item.name}/>
                        </span>
                        <span>x${item.timesAdded}</span>
                        <span>${item.name}</span>
                    </li>`;
    }
    cartDiv.innerHTML = `<ul>${liElements}</ul>`;

    console.log("pljahahahaBrown");
  };
};

/************************************************************************************************ */
