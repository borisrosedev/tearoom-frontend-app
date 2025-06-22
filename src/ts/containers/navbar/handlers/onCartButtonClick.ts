import { modalComponent } from "../../../ui/components/modal/modal";

function onCartButtonClick() {
  const main = document.getElementsByTagName("main")[0];

  main.insertAdjacentHTML(
    "beforeend",
    modalComponent({
      modalId: "cart-modal",
      content: "Test",
      modalCloseButtonId: "cart-close-modal-button",
      title: "Cart",
    }),
  );

  const cartModal = document.getElementById("cart-modal");

  cartModal.classList.add("is-active");

  const cartModalCloseButton = document.getElementById(
    "cart-close-modal-button",
  );
  cartModalCloseButton.onclick = () => {
    main.removeChild(cartModal);
  };
}

export default onCartButtonClick;
