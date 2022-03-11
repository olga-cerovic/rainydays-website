let itemsInCart = {};

const addToCart = (name, itemId, src, price) => {
  const sizeValue = document.getElementById("size").value;

  // console.log(itemsInCart[itemId]?.size, sizeValue);

  const itemKey = `${itemId}-${sizeValue}`;
  if (itemsInCart[itemKey]) {
    const selectedItem = itemsInCart[itemKey];
    itemsInCart[itemKey] = {
      name: selectedItem.name,
      src: selectedItem.src,
      price: selectedItem.price,
      timesAdded: ++selectedItem.timesAdded,
      size: selectedItem.size,
    };
  } else {
    itemsInCart[itemKey] = {
      name: name,
      src: src,
      price: price,
      timesAdded: 1,
      size: sizeValue,
    };
  }
  showCart();
  // console.log(itemsInCart);
};

const showCart = () => {
  // console.log("123");
  const cartDiv = document.querySelector("#cart-div");
  let liElements = "";

  for (const key in itemsInCart) {
    const item = itemsInCart[key];
    liElements += `<li>
                        <span class="cart-img">
                        <img src=${item.src} alt=${item.name}/>
                        </span>
                        <span>${item.price}$</span>
                        <span>${item.size}</span>
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
