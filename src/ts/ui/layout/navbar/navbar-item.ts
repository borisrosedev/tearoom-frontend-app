import navBarButton from "./navbar-button";

export function navBarItemWithDropdown(dropdownsectionId: string) {
  return `
        
            <section id="${dropdownsectionId}" class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    More
                </a>


                
            </section>
        
        
        `;
}

export function navBarItem({ isSelected, href, content }) {
  return `
    
            <a href="${href}" class="navbar-item ${isSelected ? "is-selected" : ""}">
                ${content}
            </a>
        
        
        
        
        
        `;
}

export function navBarItemWithButtons(btns: any[]) {
  return `
        <div class="navbar-item">
            <div class="buttons">
                ${btns.map((btn: any) => navBarButton(btn)).join("")}
            </div>
        </div>
        
        
        `;
}
