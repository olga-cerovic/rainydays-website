const handleHamburgerMenuButton = () => {
  const hamburgeMenuDiv = document.querySelector(".navigation-mobile");
  if (hamburgeMenuDiv.classList.contains("test-class")) {
    hamburgeMenuDiv.classList.remove("test-class");
  } else {
    hamburgeMenuDiv.classList.add("test-class");
  }
};
