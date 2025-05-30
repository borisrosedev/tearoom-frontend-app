import HomeContainer from "./src/ts/containers/home/HomeContainer";
import LandingContainer from "./src/ts/containers/landing/LandingContainer";
import homePage from "./src/ts/ui/pages/home/home";
import landingPage from "./src/ts/ui/pages/landing/landing";
import loginPage from "./src/ts/ui/pages/login/login";
import notFoundPage from "./src/ts/ui/pages/not-found/not-found";



declare global {
  interface Window {
    onNavigate: (h: string) => void
  }
}


window.onNavigate = navigateTo



window.onpopstate = function () {
  navigateTo(window.location.hash);
};

/* 
    Below you can see a definition of a function 
    its name is navigateTo
    it takes one parameter which is named "hash"
    it is a string
*/
function navigateTo(hash: string) {
  // I change the window history by adding the hash to it
  window.history.pushState({}, "", window.location.pathname + hash);

  // control flow
  // considering the value held by hash one case will be applied

  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  switch (hash) {
    case "":
      rootDiv.innerHTML += landingPage();
      new LandingContainer(window.onNavigate);
      console.log("🚀 you are on the landing page");
      break;
    case "#home":
      rootDiv.innerHTML += homePage();
      new HomeContainer(window.onNavigate);
      console.log("🚩you are on the home page");
      break;
    case "#login":
      rootDiv.innerHTML += loginPage();
      console.log("🍧 you are on the login page");
      break;
    default:
      rootDiv.innerHTML += notFoundPage();
      console.log("❌you are elsewhere");
      break;
  }
}

export default function router() {
  navigateTo(window.location.hash);
}
