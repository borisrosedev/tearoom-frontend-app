import browserDataSource from "../../data-sources/local-data-sources/browser-data-source";
import ButtonInterface from "../../interfaces/ButtonInterface";
import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import userService from "../../services/userService";
import figureComponent from "../../ui/components/figure/figure";
;
import onDeleteAccountButtonClick from "./handlers/onDeleteAccountButtonClick";
import onEditAccountButtonClick from "./handlers/onEditAccountButtonClick";

import showExistingCartUi from "./ui/showExistingCartUi";
import showNoneExistingCartUi from "./ui/showNoneExistingCartUi";
import showProfileButtons from "./ui/showProfileButtons";
import showUserInfo from "./ui/showUserInfo";

class DashboardContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }



  
  
  async onInit() {
    const dashboardInfoSection = document.getElementById(
      "dashboard-info-section",
    );

    let user = browserDataSource.get("tearoom:user");

    if (!user) {
      const err = await userService.me();
      if (err) {
        this.onNavigate("#login");
      }
    }

    user = browserDataSource.get("tearoom:user");

    if (!user) {
      this.onNavigate("#login");
    }

    dashboardInfoSection.insertAdjacentHTML(
      "afterbegin",
      figureComponent({
        id: "dashboard-profile-picture",
        src: "http://localhost:3000/static/files/photos/" + user.photo,
        alt: "Profile Picture of " + user.fullName,
      }),
    );

    dashboardInfoSection.insertAdjacentHTML(
      "beforeend",
      showUserInfo(user),
    );

    const profileButtons = [
      {
        id: "edit-button",
        classNames: "is-primary",
        content: "Edit profile",
        type: "button",
      },
      {
        id: "delete-account-button",
        classNames: "is-danger",
        content: "Delete the account",
        type: "button",
      },
    ] as ButtonInterface[];

    dashboardInfoSection.insertAdjacentHTML(
      "beforeend",
      showProfileButtons(profileButtons),
    );

    const cart = browserDataSource.get("tearoom:cart")
      ? browserDataSource.get("tearoom:cart")
      : null;

    const cartButtons = [];

    if (cart && cart.id) {
      showExistingCartUi(cartButtons, cart, dashboardInfoSection)
    } else {
      showNoneExistingCartUi(cartButtons, dashboardInfoSection, this)
    }

    const editButton = document.getElementById("edit-button");
    editButton.addEventListener("click", onEditAccountButtonClick.bind(this));

    const deleteAccountButton = document.getElementById(
      "delete-account-button",
    );

    deleteAccountButton.addEventListener(
      "click",
      onDeleteAccountButtonClick.bind(this),
    );
  }
}

export default DashboardContainer;
