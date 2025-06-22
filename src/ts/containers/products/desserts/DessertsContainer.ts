import { OnNavigateType } from "../../../interfaces/OnNavigateType";
import BaseContainer from "../../../models/BaseContainer";
import dessertsService from "../../../services/products/dessertsService";
import cardComponent from "../../../ui/components/card/card";

export default class DessertsContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }

  async onInit() {
    const desserts = await dessertsService.getAll();

    const dessertsListSection = document.getElementById(
      "desserts-list-section",
    );

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

    desserts.forEach((tea: any) => {
      dessertsListSection.insertAdjacentHTML(
        "beforeend",
        cardComponent(tea, teaCardButtons),
      );
    });
  }
}
