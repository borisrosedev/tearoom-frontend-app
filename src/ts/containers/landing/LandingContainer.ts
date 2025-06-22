import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import buttonComponent from "../../ui/components/button/button";

class LandingContainer extends BaseContainer {
  landingSection!: HTMLElement;

  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.landingSection = document.getElementById("landing-section");
    this.onInit();
  }

  onInit() {
    setTimeout(() => {
      this.landingSection.insertAdjacentHTML(
        "beforeend",
        buttonComponent({
          id: "landing-button",
          content: "Enter",
          classNames: "is-primary animate__animated animate__fadeInUp",
        }),
      );

      const landingButton = document.getElementById("landing-button");
      landingButton.onclick = () => this.onNavigate("#home");
    }, 2000);
  }
}

export default LandingContainer;
