import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import teasService from "../../services/products/teasService";
import cardComponent from "../../ui/components/card/card";

class HomeContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }

  async onInit() {
    const teas = await teasService.getAll();
    const homeHeroSignaturesSection = document.getElementById(
      "home-hero-signatures",
    );

    const productCardButtons = [
      {
        id: "product-info-button",
        type: "button",
        content: "More",
        classNames: "is-info",
      },
    ];

    teas.forEach((tea) => {
      homeHeroSignaturesSection.innerHTML += cardComponent(
        tea,
        productCardButtons,
      );
    });
  }
}

export default HomeContainer;
