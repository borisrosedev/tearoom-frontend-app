import browserDataSource from "../../data-sources/local-data-sources/browser-data-source";
import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import authService from "../../services/authService";
import burgerMenuComponent from "../../ui/components/burger-menu/burger-menu";
import navBarDropDown from "../../ui/layout/navbar/navbar-dropdown";
import {
  navBarItem,
  navBarItemWithButtons,
  navBarItemWithDropdown,
} from "../../ui/layout/navbar/navbar-item";
import navBarMenu from "../../ui/layout/navbar/navbar-menu";

class NavBarContainer extends BaseContainer {
  constructor(onNavigate: OnNavigateType) {
    super(onNavigate);
    this.onInit();
  }

  onInit() {
    const navBar = document.getElementById("navbar");
    const navBarBrand = document.getElementById("navbar-brand");
    navBarBrand.insertAdjacentHTML(
      "beforeend",
      burgerMenuComponent("navbar-burger-menu", "navbar-menu"),
    );
    navBar.insertAdjacentHTML("beforeend", navBarMenu("navbar-menu"));
    const navBarStart = document.getElementById("navbar-start");
    navBarStart.insertAdjacentHTML(
      "beforeend",
      navBarItem({ isSelected: false, href: "#teas", content: "Our Teas" }),
    );
    navBarStart.insertAdjacentHTML(
      "beforeend",
      navBarItemWithDropdown("navbar-menu-dropdown"),
    );

    const navBarMenuDropdown = document.getElementById("navbar-menu-dropdown");
    const dropdownLists = {
      mainList: [
        {
          href: "",
          content: "About us",
          isSelected: false,
        },
      ],
      secondaryList: [
        {
          href: "",
          content: "Legal Information",
          isSelected: false,
        },
      ],
    };

    navBarMenuDropdown.insertAdjacentHTML(
      "beforeend",
      navBarDropDown(dropdownLists),
    );
    const navBarEnd = document.getElementById("navbar-end");

    
    const navBarEndButtons = []

    const token = browserDataSource.get('tearoom:token')
    if(!token){

      navBarEndButtons.push(
      {
        id: "signup-button",
        classNames: "is-primary",
        content: "Sign up",
      },
      {
        id: "login-button",
        classNames: "is-light",
        content: "Log in",
      },
      );


        navBarEnd.insertAdjacentHTML(
          "beforeend",
          navBarItemWithButtons(navBarEndButtons),
      );


          const signUpButton = document.getElementById("signup-button");
          const logInButton = document.getElementById("login-button");

          signUpButton.onclick = () => this.onNavigate("#signup");
          logInButton.onclick = () => this.onNavigate("#login");

  
    } else {

      navBarEndButtons.push(
        {
          id: "dashboard-button",
          classNames: "is-primary",
          content: "Dashboard"
        },
        {
          id: "logout-button",
          classNames: "is-danger",
          content: "Log out", 
        }
      )

      
        navBarEnd.insertAdjacentHTML(
          "beforeend",
          navBarItemWithButtons(navBarEndButtons),
      );

        const dashboardButton = document.getElementById("dashboard-button")
        dashboardButton.addEventListener("click", () => {
          this.onNavigate("#dashboard")
        })


        const logoutButton = document.getElementById("logout-button")
        logoutButton.addEventListener("click", () => {
          authService.logout()
          this.onNavigate("#login")
        })
    }


  

    const navBarBurgerMenu = document.getElementById("navbar-burger-menu");

    //burger click-handling
    navBarBurgerMenu.addEventListener("click", () => {
      navBarBurgerMenu.classList.toggle("is-active");
      const targetId = navBarBurgerMenu.dataset.target;
      const navMenu = document.getElementById(targetId);
      navMenu.classList.toggle("is-active");
    });

    //sign-up and log in click-handling


  }
}

export default NavBarContainer;
