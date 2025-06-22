import authService from "../../../services/authService";
import userService from "../../../services/userService";
import { cardModalComponent } from "../../../ui/components/modal/modal";

export default function onDeleteAccountButtonClick() {
    const mainComponent = document.getElementById("dashboard-main");
    mainComponent.insertAdjacentHTML(
      "beforeend",
      cardModalComponent({
        modalId: "delete-account-modal",
        modalCloseButtonId: "delete-account-close-modal-button",
        content: "Do you really want to delete your account ?",
        negativeButtonContent:"Cancel",
        negativeButtonId: "modal-cancel-button",
        positiveButtonContent: "Confirm",
        title: "Deleting Account",
        positiveButtonId: "modal-confirm-button"
      }),
    );

    const deleteAccountModal = document.getElementById("delete-account-modal");
    const deleteAccountCloseModalButton = document.getElementById(
      "delete-account-close-modal-button",
    );

    const modalCancelButton = document.getElementById('modal-cancel-button');
    modalCancelButton.onclick = () => {
        deleteAccountModal.classList.toggle("is-active");
    }

    deleteAccountModal.classList.toggle("is-active");

    deleteAccountCloseModalButton.onclick = () => {
      deleteAccountModal.classList.toggle("is-active");
    };


    const modalConfirmButton = document.getElementById('modal-confirm-button')
    modalConfirmButton.onclick = async() => {
        const message = await userService.deleteAccount()
        if(message == "user destroyed")
        alert("Your profile has been deleted")
        authService.logout()
        this.onNavigate("#signup")
    }

}