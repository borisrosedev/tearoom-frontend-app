import ButtonInterface from "../../../interfaces/ButtonInterface";

function buttonComponent(data: ButtonInterface) {
  return `
            <button 
                id="${data.id}" 
                type="${data.type ?? "text"}" 
                class="button ${data.classNames ?? ""}">
                ${data.content}
                </button>
        
        `;
}

export default buttonComponent;
