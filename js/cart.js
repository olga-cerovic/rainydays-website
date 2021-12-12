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

/*
<ul>
  <li>
    <span class="cart-img">
      <img src="./images/red-man.jpg" alt="Red Jacket for Men" />
    </span>
    <span>x1</span>
    <span>98 $</span>
  </li>
  <li>
    <span class="cart-img">
      <img src="./images/red-man.jpg" alt="Red Jacket for Men" />
    </span>
    <span>x1</span>
    <span>98 $</span>
  </li>
  <li class="total">
    <span>Total</span>
    <span>228 $</span>
  </li>
</ul>;
*/
