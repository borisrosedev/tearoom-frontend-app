import MessageInterface from "../../../interfaces/MessageInterface";

function messageComponent(data: MessageInterface) {
  return `
        
            <article id="${data.id}" class="message ${data.classNames ?? "is-primary"}">
                <section class="message-header">
                    <p>${data.header}</p>
                    ${data.buttonId ? `<button id=${data.buttonId} class="delete" aria-label="delete"></button>` : ""}
                </section>
                <section class="message-body">
                    ${data.body}
                </section>
            </article>
                        
        
        `;
}

export default messageComponent;
