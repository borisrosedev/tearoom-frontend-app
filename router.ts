import DashboardContainer from "./src/ts/containers/dashboard/DashboardContainer";
import HomeContainer from "./src/ts/containers/home/HomeContainer";
import LandingContainer from "./src/ts/containers/landing/LandingContainer";
import LoginContainer from "./src/ts/containers/login/LoginContainer";
import NavBarContainer from "./src/ts/containers/navbar/NavBarContainer";
import DessertsContainer from "./src/ts/containers/products/desserts/DessertsContainer";
import GoodiesContainer from "./src/ts/containers/products/goodies/GoodiesContainer";
import TeasContainer from "./src/ts/containers/products/teas/TeasContainer";
import navBarLayout from "./src/ts/ui/layout/navbar/navbar";
import dashboardPage from "./src/ts/ui/pages/dashboard/dashboard";
import homePage from "./src/ts/ui/pages/home/home";
import landingPage from "./src/ts/ui/pages/landing/landing";
import loginPage from "./src/ts/ui/pages/login/login";
import notFoundPage from "./src/ts/ui/pages/not-found/not-found";
import dessertsPage from "./src/ts/ui/pages/products/desserts/desserts";
import goodiesPage from "./src/ts/ui/pages/products/goodies/goodies";
import teasPage from "./src/ts/ui/pages/products/teas/teas";


declare global {
  interface Window {
    onNavigate: (h: string) => void;
  }
}

window.onNavigate = navigateTo;

window.onpopstate = function () {
  navigateTo(window.location.hash);
};

function navigateTo(hash: string) {
  window.history.pushState({}, "", window.location.pathname + hash);

  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  rootDiv.insertAdjacentHTML("beforeend", navBarLayout());
  new NavBarContainer(window.onNavigate);
  switch (hash) {
    case "":
      rootDiv.insertAdjacentHTML("beforeend", landingPage());
      new LandingContainer(window.onNavigate);
      console.log("🚀 you are on the landing page");
      break;
    case "#home":
      rootDiv.insertAdjacentHTML("beforeend", homePage());
      new HomeContainer(window.onNavigate);
      console.log("🚩you are on the home page");
      break;
    case "#login":
      rootDiv.insertAdjacentHTML("beforeend", loginPage());
      new LoginContainer(window.onNavigate);
      console.log("🍧 you are on the login page");
      break;
    case "#signup":
      rootDiv.insertAdjacentHTML("beforeend", loginPage());
      new LoginContainer(window.onNavigate, false);
      console.log("🍧 you are on the login page");
      break;
    case "#dashboard":
      rootDiv.insertAdjacentHTML("beforeend", dashboardPage());
      new DashboardContainer(window.onNavigate);
      console.log("🕵️‍♂️ you are on the dashboard page");
      break;
    case "#teas":
      console.log("🕵️‍♂️ you are on the teas page");
      rootDiv.insertAdjacentHTML("beforeend", teasPage());
      new TeasContainer(window.onNavigate);
      break;
    case "#goodies":
      rootDiv.insertAdjacentHTML("beforeend", goodiesPage());
      new GoodiesContainer(window.onNavigate);
      console.log("🕵️‍♂️ you are on the goodies page");
      break;
    case "#desserts":
      rootDiv.insertAdjacentHTML("beforeend", dessertsPage());
      new DessertsContainer(window.onNavigate);
      console.log("🕵️‍♂️ you are on the desserts page");
      break;
    default:
      rootDiv.insertAdjacentHTML("beforeend", notFoundPage());
      console.log("❌you are elsewhere");
      break;
  }
  
}

export default function router() {
  navigateTo(window.location.hash);
}
