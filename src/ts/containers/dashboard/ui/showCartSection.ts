import buttonComponent from "../../../ui/components/button/button";
import titleComponent from "../../../ui/components/title/title";

export default function showCartSection(data, btns) {
    return `
          <section class="info__cart">
            ${titleComponent({ hType: "h1", content: "Cart Info", level: 5 })}
            <section id="cart-result">
              ${data.content}
            </section>
            <section class="cart__buttons">
                  ${btns.map((el: any) => buttonComponent(el)).join("")}
            </section>
          </section>
    
    `;
  }