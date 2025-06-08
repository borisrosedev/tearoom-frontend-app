import ButtonInterface from "../../interfaces/ButtonInterface";
import FieldInterface from "../../interfaces/FieldInterface";
import FormInterface from "../../interfaces/FormInterface";
import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import FormComponent from "../../ui/components/form-components/form";
import titleComponent from "../../ui/components/title/title";

class LoginContainer extends BaseContainer {
  landingSection!: HTMLElement;
  isLoggingIn: boolean;
  constructor(onNavigate: OnNavigateType, isLoggingIn = true) {
    super(onNavigate);
    this.isLoggingIn = isLoggingIn;
    this.onInit();
  }

  onInit() {
    const defaultFormValues = {
      formId: "login-form",
      formClassNames: "login__form",
      formFields: [
        {
          id: "email",
          iconName: "fa-envelope",
          placeholder: "Enter your email",
          type: "email",
        },
        {
          id: "password",
          iconName: "fa-lock",
          placeholder: "Enter your password",
          type: "password",
        },
      ] as FieldInterface[],
      formButtons: [
        {
          id: "submit-button",
          type: "submit",
          content: "Submit",
        },
        {
          id: "reset-button",
          type: "reset",
          content: "Reset",
        },
      ] as ButtonInterface[],
    } as FormInterface;

    const loginSection = document.getElementById("login-section");

    if (this.isLoggingIn) {
      loginSection.insertAdjacentHTML(
        "afterbegin",
        titleComponent({ hType: "h1", content: "Login", level: 3 }),
      );
      loginSection.insertAdjacentHTML(
        "beforeend",
        FormComponent(defaultFormValues),
      );
    } else {
      loginSection.insertAdjacentHTML(
        "afterbegin",
        titleComponent({ hType: "h1", content: "Signup", level: 3 }),
      );
      defaultFormValues.formFields.unshift(
        {
          id: "firstname",
          placeholder: "Enter your firstname",
          iconName: "fa-person",
        },
        {
          id: "lastname",
          placeholder: "Enter your lastname",
          iconName: "fa-person",
        },
      );
      loginSection.insertAdjacentHTML(
        "beforeend",
        FormComponent(defaultFormValues),
      );
    }
  }
}

export default LoginContainer;
