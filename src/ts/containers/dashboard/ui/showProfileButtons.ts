import buttonComponent from "../../../ui/components/button/button";

export default function showProfileButtons(btns) {
    return `
                <section class="info__buttons">
                    ${btns.map((el: any) => buttonComponent(el)).join("")}
                </section>
            
            `;
  }
