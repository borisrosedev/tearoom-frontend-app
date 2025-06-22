import browserDataSource from "../../../data-sources/local-data-sources/browser-data-source";
import authService from "../../../services/authService";
import cartService from "../../../services/cartService";

export default async function (data, ancestor) {
  let newContent;
  try {
    const cartContentItems =
      browserDataSource.get("tearoom:cart")["content"]["items"];
      console.log("cartcontentitems", cartContentItems)
    let inTheCart;
    const updatedCartContentItems = cartContentItems
    for(const item of updatedCartContentItems){
      if(Number(item.id) == data.id) {
        console.log("yes")
        item.quantity += 1
        inTheCart = true
      } 
    }

    if(!inTheCart){
        newContent = [
          ...updatedCartContentItems,
          { id: data.id, name: data.name, price: data.price, quantity: 1 },
        ];

    } else {
         newContent = [
          ...updatedCartContentItems,
        ];
    }


  } catch (err) {
    console.log(err);
    newContent = [{ id: data.id, name: data.name, price: data.price, quantity: 1 }];
  } finally {
    const { message, err, cart } = await cartService.addItem({
      items: newContent,
    });
    if (message) {
      alert("message: " + message);
    }

    if (err) {
      console.log("err", err);
      if (err.name == "TokenExpiredError") {
        ancestor.onNavigate("#login");
        authService.logout();
        return;
      }
    }

    if (cart) {
      browserDataSource.set("tearoom:cart", cart);
    }
  }
}
