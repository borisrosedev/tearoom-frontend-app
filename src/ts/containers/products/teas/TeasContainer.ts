import browserDataSource from "../../../data-sources/local-data-sources/browser-data-source";
import { OnNavigateType } from "../../../interfaces/OnNavigateType";
import BaseContainer from "../../../models/BaseContainer";
import cartService from "../../../services/cartService";
import teasService from "../../../services/products/teasService";
import cardComponent from "../../../ui/components/card/card";
import addToCartHandler from "../handlers/addToCartHandler";

export default class TeasContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }

  async onInit() {
    const teas = await teasService.getAll();

    const teasListSection = document.getElementById("teas-list-section");

    const teaCardButtons = [
      {
        id: "info-tea-card-button",
        content: "More",
        classNames: "is-info",
      },
      {
        id: "add-to-cart-tea-card-button",
        content: "Add to Cart",
        classNames: "is-primary",
      },
    ];

    teas.forEach((tea: any) => {
      teasListSection.insertAdjacentHTML(
        "beforeend",
        cardComponent(tea, teaCardButtons),
      );
      const addToCartButton = document.getElementById(
        `add-to-cart-tea-card-button-${tea.id}`,
      );
      addToCartButton.onclick = () =>
        addToCartHandler(
          { id: tea.id, name: tea.name, price: tea.price },
          this,
        );
    });
  }
}
