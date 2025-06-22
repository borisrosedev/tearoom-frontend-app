import cartService from "../../../services/cartService";

async function onCreateCartButtonClick (ancestor){
  const { cart, message } = await cartService.createCart();
  if (message == "invalid token") {
    alert("Your token has expired. You need to log in again");
    ancestor.onNavigate("#login");
    return;
  }

  if(cart){
      ancestor.onNavigate("#dashboard");
  }
     
}

export default onCreateCartButtonClick