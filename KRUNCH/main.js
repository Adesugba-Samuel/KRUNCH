var MenuItems = document.getElementById("MenuItems");
    
MenuItems.style.height = "0px";

function menutoggle() {
  if (MenuItems.style.height == "0px")
  {
    MenuItems.style.height = "530px";
  }
  else
  {
    MenuItems.style.height = "0px";
  }
}

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
})
