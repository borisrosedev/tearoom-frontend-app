import { navBarItem } from "./navbar-item";

interface navBarDropDownProps {
  mainList: any[];
  secondaryList: any[];
}

function navBarDropDown(data: navBarDropDownProps) {
  return `   
        <div class="navbar-dropdown">
            ${data.mainList.map((el: any) => navBarItem(el)).join("")}
            <hr class="navbar-divider">
            ${data.secondaryList.map((el: any) => navBarItem(el)).join("")}
        </div>

        `;
}

export default navBarDropDown;
