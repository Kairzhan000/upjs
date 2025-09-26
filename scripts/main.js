document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerButton");
  const menu = document.getElementById("floatingMenu");
  const overlay = document.getElementById("floatingOverlay");

  const toggleMenu = () => {
    const isVisible = menu.style.display === "block";
    menu.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
  };

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
