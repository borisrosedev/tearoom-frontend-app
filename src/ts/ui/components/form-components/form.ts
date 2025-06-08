import ButtonInterface from "../../../interfaces/ButtonInterface";
import FieldInterface from "../../../interfaces/FieldInterface";
import FormInterface from "../../../interfaces/FormInterface";
import buttonComponent from "../button/button";
import formFieldComponent from "./form-field";

export default function FormComponent (data: FormInterface) {

    return(
        `
            <form id="${data.formId}" class="${data.formClassNames ?? ''}">
                <section id="form-fields-section">
                    ${data.formFields.map((el: FieldInterface) => formFieldComponent(el)).join("")}
                </section>
                <section id="form-buttons-section">
                    ${data.formButtons.map((el: ButtonInterface) => buttonComponent(el)).join("")}
                </section>

            </form>
        
        `
    )
}