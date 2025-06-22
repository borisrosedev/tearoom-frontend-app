import ButtonInterface from "../../../interfaces/ButtonInterface";
import FieldInterface from "../../../interfaces/FieldInterface";
import FormInterface from "../../../interfaces/FormInterface";
import authService from "../../../services/authService";
import userService from "../../../services/userService";
import FormComponent from "../../../ui/components/form-components/form";
import formFileComponent from "../../../ui/components/form-components/form-file";
import { formModalComponent } from "../../../ui/components/modal/modal";
import {  hasOneNotNullValue } from "../../../utils/hasNullValue";

export default function onEditAccountButtonClick(){

    const editFormData = {
      formId: "edit-form",
      formFields : [
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
      formButtons : [
        {
          id: "modal-submit-button",
          type: "submit",
          content: "Submit",
          classNames: "is-primary"
        },
        {
          id: "modal-cancel-button",
          type: "button",
          content: "Cancel",
          classNames: "is-danger"
        },
      ] as ButtonInterface[]

    } as FormInterface

    const modalContent = FormComponent(editFormData)
    const mainComponent = document.getElementById("dashboard-main");
    mainComponent.insertAdjacentHTML(
      "beforeend",
      formModalComponent({
        modalId: "edit-profile-modal",
        modalCloseButtonId: "edit-profile-close-modal-button",
        title: "Edit Profile", 
        content: modalContent
      })
    )

    const formFileSection = document.getElementById('form-file-section')
    formFileSection.insertAdjacentHTML('afterbegin', formFileComponent({ id: "photo", content: "Upload a profile picture", classNames: ''}))
    const fileName = document.getElementById('file-name')
    const fileInput = document.getElementById('photo')
    fileInput.addEventListener('change', (event) => {
      const file = event.target as EventTarget & { value: string } 
      fileName.innerText = file.value
      
    })

    const editProfileModal = document.getElementById("edit-profile-modal");
    const editProfileCloseModalButton = document.getElementById(
      "edit-profile-close-modal-button",
    ) as HTMLButtonElement

    const modalCancelButton = document.getElementById('modal-cancel-button') as HTMLButtonElement
    modalCancelButton.onclick = () => {
        const editFormModal = document.getElementById('edit-profile-modal')
        mainComponent.removeChild(editFormModal)
    }

    editProfileModal.classList.toggle("is-active");

    editProfileCloseModalButton.onclick = () => {
      const editFormModal = document.getElementById('edit-profile-modal')
      mainComponent.removeChild(editFormModal)
    };

    const editForm = document.getElementById('edit-form') as HTMLFormElement
    editForm.onsubmit = async(e) => {
      e.preventDefault()
      const submitButton = document.getElementById("modal-submit-button") as HTMLButtonElement
      submitButton.disabled = true
      const formData = new FormData(editForm)
      const formResult = document.getElementById("form-result")

    const hasFormDataNotNullValue = hasOneNotNullValue(formData)
    console.log("hasFormDataNotNullValue", hasFormDataNotNullValue)
    if ( !  hasFormDataNotNullValue ) {
        formResult.innerText = "Do fill in the form or Cancel"
        submitButton.disabled = false
        return
    }


     const message = await userService.editProfile(formData)

     
      if(message == "invalid token"){
          formResult.innerText = "Your token has expired, redirection in 2 seconds"
          setTimeout(() => {
            this.onNavigate("#login")
            authService.logout()
          }, 2000)
      }


      formResult.innerText = message + " " + "Hold on, we are updating your dashboard"
      modalCancelButton.disabled = true
      editProfileCloseModalButton.disabled = true
      setTimeout(() => {
          this.onNavigate("#dashboard")
      }, 2000)
    }
  }