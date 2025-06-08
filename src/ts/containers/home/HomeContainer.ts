import { OnNavigateType } from "../../interfaces/OnNavigateType";
import ProductInterface from "../../interfaces/ProductInterface";
import BaseContainer from "../../models/BaseContainer";
import cardComponent from "../../ui/components/card/card";

class HomeContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }

  async onInit() {
    const serverResponse = await fetch("/data/teas.json");
    const teas: ProductInterface[] = await serverResponse.json();
    console.log(teas);

    const homeHeroSignaturesSection = document.getElementById(
      "home-hero-signatures",
    );
    teas.forEach((tea) => {
      homeHeroSignaturesSection.innerHTML += cardComponent(tea);
    });
  }
}

export default HomeContainer;
