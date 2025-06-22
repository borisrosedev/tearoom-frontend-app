import onCreateCartButtonClick from "../handlers/onCreateCartButtonClick";
import showCartSection from "./showCartSection";

export default function showNoneExistingCartUi(
  cartButtons,
  dashboardInfoSection,
  ancestor,
) {
  cartButtons.push({
    id: "create-cart-button",
    content: "Create a cart",
    classNames: "is-primary",
  });

  dashboardInfoSection.insertAdjacentHTML(
    "beforeend",
    showCartSection({ content: "You do not have a cart" }, cartButtons),
  );

  const createCartButton = document.getElementById("create-cart-button");
  createCartButton.onclick = () => onCreateCartButtonClick(ancestor);
}
