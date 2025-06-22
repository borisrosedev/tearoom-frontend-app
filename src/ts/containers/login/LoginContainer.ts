import browserDataSource from "../../data-sources/local-data-sources/browser-data-source";
import ButtonInterface from "../../interfaces/ButtonInterface";
import FieldInterface from "../../interfaces/FieldInterface";
import FormInterface from "../../interfaces/FormInterface";
import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import authService from "../../services/authService";
import userService from "../../services/userService";
import FormComponent from "../../ui/components/form-components/form";
import formFileComponent from "../../ui/components/form-components/form-file";
import titleComponent from "../../ui/components/title/title";

class LoginContainer extends BaseContainer {
  landingSection!: HTMLElement;
  isLoggingIn: boolean;
  constructor(onNavigate: OnNavigateType, isLoggingIn = true) {
    super(onNavigate);
    this.isLoggingIn = isLoggingIn;
    
   
    
    this.onInit(this);



  }

  onInit(instance: LoginContainer) {
    
    const defaultFormValues = {
      formId: "login-form",
      formClassNames: "login__form",
      formFields: [
        {
          id: "email",
          iconName: "fa-envelope",
          placeholder: "Enter your email",
          type: "email",
          classNames: "is-primary",
        },
        {
          id: "password",
          iconName: "fa-lock",
          classNames: "is-primary",
          placeholder: "Enter your password",
          type: "password",
        },
      ] as FieldInterface[],
      formButtons: [
        {
          id: "submit-button",
          type: "submit",
          content: "Submit",
          classNames: "is-primary"
        },
        {
          id: "reset-button",
          type: "reset",
          content: "Reset",
          classNames: "is-danger"
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

      const userEmail =  browserDataSource.get('tearoom:email')
      if(userEmail){
        const emailInput = document.getElementById("email") as HTMLInputElement
        emailInput.value = userEmail
      }


    } else {
      loginSection.insertAdjacentHTML(
        "afterbegin",
        titleComponent({ hType: "h1", content: "Signup", level: 3 }),
      );
      defaultFormValues.formFields.unshift(
        {
          id: "firstName",
          placeholder: "Enter your firstname",
          iconName: "fa-person",
          classNames: "is-primary",
        },
        {
          id: "lastName",
          classNames: "is-primary",
          placeholder: "Enter your lastname",
          iconName: "fa-person",
        },
      );

    
  
      loginSection.insertAdjacentHTML(
        "beforeend",
        FormComponent(defaultFormValues),
      );

      const formFileSection = document.getElementById('form-file-section')
      formFileSection.insertAdjacentHTML('afterbegin', formFileComponent({ id: "photo", content: "Upload a profile picture", classNames: ''}))
      const fileName = document.getElementById('file-name')
      const fileInput = document.getElementById('photo')
      fileInput.addEventListener('change', (event) => {
        const file = event.target as EventTarget & { value: string } 
        fileName.innerText = file.value
        
      })

    }


    const form  = document.getElementById('login-form') as HTMLFormElement

    form.addEventListener('submit', this.onSubmit.bind(instance))
  }


  async onSubmit(event: SubmitEvent) {
    event.preventDefault()
    
    const form  = document.getElementById('login-form') as HTMLFormElement
    const formData = new FormData(form)
    const emailValue = formData.get('email') 
    const passwordValue = formData.get('password')
    const formResult = document.getElementById("form-result")
    const submitButton = document.getElementById('submit-button') as HTMLButtonElement
    submitButton.disabled = true
    if(! (emailValue && passwordValue) ) {
      formResult.innerText = "Fill in the form"
      return
    } 

    if(this.isLoggingIn) {
   
      // login logic
      const emailValue = (document.getElementById("email") as HTMLInputElement).value 
      const passworValue = (document.getElementById("password") as HTMLInputElement).value
      const hasLoggedIn  = await authService.login({ email: emailValue, password: passworValue})
      
      if(!hasLoggedIn){
          formResult.innerText = "You have failed to log in"
          submitButton.disabled = false 
          return
      }

       formResult.innerText = "You have successfully logged in... Redirection to the login page in 2s"
        setTimeout(() => {
          this.onNavigate('#dashboard')
        }, 2000)
        
    } else {

      //signup logic
      const firstnameValue = formData.get('firstName')
      const lastnameValue = formData.get('lastName')

      if(!firstnameValue || !lastnameValue) {
        formResult.innerText = "Fill in the form"
        return 
      }

      const hasSignedUp = await userService.signup(formData)
      
      if(!hasSignedUp){
        submitButton.disabled = false
        formResult.innerText =  "You have failed to sign Up"
        return 
      } 

      formResult.innerText = "You have successfully signed up... Redirection to the login page in 2s"
      setTimeout(() => {
        this.onNavigate('#login')
      }, 2000)
    }

  }



}

export default LoginContainer;
