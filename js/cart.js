let itemsInCart = {};

const addToCart = (name, itemId, src, price) => {
  if (itemsInCart[itemId]) {
    const selectedItem = itemsInCart[itemId];
    itemsInCart[itemId] = {
      name: selectedItem.name,
      src: selectedItem.src,
      price: selectedItem.price,
      timesAdded: ++selectedItem.timesAdded,
    };
  } else {
    itemsInCart[itemId] = { name: name, src: src, price: price, timesAdded: 1 };
  }
  showCart();
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
                        <span>${item.price}$</span>
                        <span>x${item.timesAdded}</span>
                        <span>${item.name}</span>
                        <span>total: ${item.price * item.timesAdded}</span>
                    </li>`;
  }
  cartDiv.innerHTML = `<ul>${liElements}</ul>`;
};

const openOverlay = () => {
  console.log(1230);
  document.querySelector(".overlay").style.transform = "translateX(0)";
};

const closeOverlay = () => {
  console.log(1230);
  document.querySelector(".overlay").style.transform = "translateX(150%)";
};
