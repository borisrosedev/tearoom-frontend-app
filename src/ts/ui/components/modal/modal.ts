interface modalComponentProps {
  modalId: string;
  modalCloseButtonId: string;
  content: string;
  title: string;
  positiveButtonId: string;
  negativeButtonId: string;
  positiveButtonContent: string;
  negativeButtonContent: string;
}

export function modalComponent(data: Partial<modalComponentProps>) {
  return `
        <div id="${data.modalId}" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content custom-modal-content">
                ${data.content}
            </div>
            <button id="${data.modalCloseButtonId}"class="modal-close is-large" aria-label="close"></button>
        </div>
        
        
        
        
        `;
}

export function formModalComponent(data: Partial<modalComponentProps>) {
  return `
         <div id="${data.modalId}" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">${data.title}</p>
                <button id="${data.modalCloseButtonId}" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    ${data.content}
                </section>
            </div>
        </div>
        
        `;
}

export function cardModalComponent(data: modalComponentProps) {
  return `   
        <div id="${data.modalId}" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">${data.title}</p>
                <button id="${data.modalCloseButtonId}" class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    ${data.content}
                </section>
                <footer class="modal-card-foot">
                    <div class="buttons">
                        <button id="${data.positiveButtonId}" class="button is-success">${data.positiveButtonContent}</button>
                        <button id="${data.negativeButtonId}" class="button">${data.negativeButtonContent}</button>
                    </div>
                </footer>
            </div>
            </div>
        
        
        
        `;
}
