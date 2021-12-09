const handleHamburgerMenuButton = () => {
  const hamburgeMenuDiv = document.querySelector(".navigation-mobile");
  if (hamburgeMenuDiv.classList.contains("test-class")) {
    /*hamburgeMenuDiv.style.display = "none";*/
    hamburgeMenuDiv.classList.remove("test-class");
  } else {
    /*hamburgeMenuDiv.style.display = "block";
    hamburgeMenuDiv.style.position = "absolute";
    hamburgeMenuDiv.style.left = 0;
    hamburgeMenuDiv.style.right = 0;*/
    hamburgeMenuDiv.classList.add("test-class");
  }
};
