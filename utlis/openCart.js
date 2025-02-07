export const openCart = () => {
  document
    .getElementById("cartDrawerOverlay")
    .classList.add("page-overlay_visible");
  document.getElementById("cartDrawer").classList.add("aside_visible");
};
