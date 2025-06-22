import { CardProductType } from "../../../interfaces/ProductInterface";
import buttonComponent from "../button/button";

function tagsListComponent(data: Array<string>) {
  return `
            ${data.map((el: string) => `<a href="#">#${el}</a>`).join("")}
        
        `;
}

function contentComponent(data: { description: string; tags: Array<string> }) {
  return `
            <div class="content">
                 ${data.description} ${tagsListComponent(data.tags)}
            </div>
            
        
        `;
}

function mediaComponent(data: Partial<CardProductType>) {
  return `
        
        <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img
                            src="assets/${data.mainCategory}/${data.src}"
                            alt="${data.alt}"
                        />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${data.name}</p>
                        <p class="subtitle is-6">@${data.name}</p>
                    </div>
                </div>
        
        `;
}

function cardContentComponent(data: Partial<CardProductType>, buttons?: any[]) {
  return `
            <div class="card-content"> 
                ${mediaComponent({ src: data.src, alt: data.alt, name: data.name, mainCategory: data.mainCategory })}
                ${contentComponent({ description: data.description, tags: data.tags })}
                ${
                  buttons && buttons.length > 0
                    ? `
                   <section class="buttons">
                    ${buttons.map((btn) => buttonComponent({ ...btn, id: `${btn.id}-${data.id}` })).join("")}
                   </section>
                    `
                    : ""
                }
            </div>
        
         
        `;
}

function cardImageComponent(data: Partial<CardProductType>) {
  return `
           <div class="card-image">
                    <figure class="image is-4by3">
                    <img
                        src="/assets/${data.mainCategory}/${data.src}"
                        alt="${data.alt}"
                    />
                    </figure>
            </div>
        
        
        
        `;
}

export default function cardComponent(data: CardProductType, buttons?: any[]) {
  return `
        
            <div class="card" data-product-id="${data.id}">
                ${cardImageComponent({ mainCategory: data.mainCategory, src: data.photo ?? data.url ?? data.src, alt: data.name ?? data.alt })}
                ${cardContentComponent({ id: data.id, mainCategory: data.mainCategory, src: data.src ?? data.url ?? data.photo, description: data.description, tags: data.tags, alt: data.alt ?? data.name, name: data.name }, buttons)}
            </div>
                        
        
        
        `;
}
