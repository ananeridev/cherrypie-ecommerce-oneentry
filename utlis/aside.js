export const openModalShopFilter = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("shopFilterAside");
  pageOverlay.classList.add("page-overlay_visible");
  shopFilter.classList.add("aside_visible");
};
export const closeModalShopFilter = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("shopFilterAside");
  pageOverlay.classList.remove("page-overlay_visible");
  shopFilter.classList.remove("aside_visible");
};
export const openModalUserlogin = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("userAside");
  pageOverlay.classList.add("page-overlay_visible");
  shopFilter.classList.add("aside_visible");
};
export const closeModalUserlogin = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("userAside");
  pageOverlay.classList.remove("page-overlay_visible");
  shopFilter.classList.remove("aside_visible");
};
export const openModalProductDescription = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productDescription");
  pageOverlay.classList.add("page-overlay_visible");
  shopFilter.classList.add("aside_visible");
};
export const closeModalProductDescription = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productDescription");
  pageOverlay.classList.remove("page-overlay_visible");
  shopFilter.classList.remove("aside_visible");
};
export const openModalProductAdditionalInformation = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productAdditionalInformation");
  pageOverlay.classList.add("page-overlay_visible");
  shopFilter.classList.add("aside_visible");
};
export const closeModalProductAdditionalInformation = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productAdditionalInformation");
  pageOverlay.classList.remove("page-overlay_visible");
  shopFilter.classList.remove("aside_visible");
};
export const openModalProductReviews = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productReviews");
  pageOverlay.classList.add("page-overlay_visible");
  shopFilter.classList.add("aside_visible");
};
export const closeModalProductReviews = () => {
  const pageOverlay = document.getElementById("pageOverlay");
  const shopFilter = document.getElementById("productReviews");
  pageOverlay.classList.remove("page-overlay_visible");
  shopFilter.classList.remove("aside_visible");
};
