function burgerMenuComponent(id: string, target: string) {
  return `
       <a id="${id}"
       href="javascript:void(0);"
       role="button"
       data-target="${target}" 
       class="navbar-burger custom-navbar-burger" 
       aria-label="menu" 
       aria-expanded="false" 

       >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
     
     `;
}

export default burgerMenuComponent;
