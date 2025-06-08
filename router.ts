import HomeContainer from "./src/ts/containers/home/HomeContainer";
import LandingContainer from "./src/ts/containers/landing/LandingContainer";
import LoginContainer from "./src/ts/containers/login/LoginContainer";
import NavBarContainer from "./src/ts/containers/navbar/NavBarContainer";
import navBarLayout from "./src/ts/ui/layout/navbar/navbar";
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
  rootDiv.insertAdjacentHTML('beforeend',navBarLayout())
  new NavBarContainer(window.onNavigate);
  switch (hash) {
    case "":
      rootDiv.insertAdjacentHTML('beforeend', landingPage()) 
      new LandingContainer(window.onNavigate);
      console.log("🚀 you are on the landing page");
      break;
    case "#home":
       rootDiv.insertAdjacentHTML('beforeend', homePage()) 
      new HomeContainer(window.onNavigate);
      console.log("🚩you are on the home page");
      break;
    case "#login":
      rootDiv.insertAdjacentHTML('beforeend', loginPage()) 
      new LoginContainer(window.onNavigate)
      console.log("🍧 you are on the login page");
      break;
    case "#signup":
      rootDiv.insertAdjacentHTML('beforeend', loginPage())
      new LoginContainer(window.onNavigate, false) 
      console.log("🍧 you are on the login page");
      break;  
    default:
       rootDiv.insertAdjacentHTML('beforeend', notFoundPage()) 
      console.log("❌you are elsewhere");
      break;
  }
}

export default function router() {
  navigateTo(window.location.hash);
}
