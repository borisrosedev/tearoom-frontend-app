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

  buttonCreationExecutor(resolve: any) {
    this.landingSection.innerHTML += buttonComponent({
      id: "landing-button",
      content: "Enter",
      classNames: "is-primary animate__animated animate__fadeInUp",
    });
    resolve() ;
  }

  onInit() {
    setTimeout(() => {
      new Promise(this.buttonCreationExecutor.bind(this)).then(() => {
        const landingButton = document.getElementById("landing-button");
        landingButton.addEventListener("click", () => {
           this.onNavigate("#home");
        })
      });
    }, 1500);
  }
}

export default LandingContainer;
