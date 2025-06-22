import showCartSection from "./showCartSection";

function showExistingCartUi(cartButtons, cart, dashboardInfoSection) {
  cartButtons.push({
    id: "delete-cart-button",
    content: "Delete your cart",
    classNames: "is-danger",
  });

  if (cart.content) {
    cartButtons.push({
      id: "show-cart-button",
      content: "See your cart",
      classNames: "is-primary",
    });
    dashboardInfoSection.insertAdjacentHTML(
      "beforeend",
      showCartSection(
        { content: "You should take a look a your cart" },
        cartButtons,
      ),
    );
  } else {
    dashboardInfoSection.insertAdjacentHTML(
      "beforeend",
      showCartSection({ content: "Your cart is empty" }, cartButtons),
    );
  }
}

export default showExistingCartUi;
