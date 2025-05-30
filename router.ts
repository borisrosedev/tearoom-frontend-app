import LandingContainer from "./src/ts/containers/landing/LandingContainer";
import landingPage from "./src/ts/ui/pages/landing/landing";
import loginPage from "./src/ts/ui/pages/login/login";
import notFoundPage from "./src/ts/ui/pages/not-found/not-found";

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

  const rootDiv = document.getElementById("root") as HTMLElement;
  rootDiv.innerHTML = "";
  switch (hash) {
    case "":
      rootDiv.innerHTML += landingPage();
      new LandingContainer();
      console.log("🚀 you are on the landing page");
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
