import { io } from "socket.io-client";
import { messageComponentWithoutButton } from "../ui/components/message/message";

class WebSocketService {
  socket: any;
  constructor() {
    try {
      this.socket = io("http://localhost:3002");
      this.socket.on("new_user", (data) => {
        const body = document.getElementsByTagName("body")[0];
        body.insertAdjacentHTML(
          "afterbegin",
          messageComponentWithoutButton({
            id: "new-user-notification",
            header: "New User",
            body: data.message,
            classNames:
              "custom-notification custom-notification--fixed is-info",
          }),
        );

        const newUserNotification = document.getElementById(
          "new-user-notification",
        );
        setTimeout(() => {
          body.removeChild(newUserNotification);
        }, 5000);
      });
    } catch (err) {
      console.log(err);
      console.log("Failed to connect to the websocket server");
    }
  }
}

export default WebSocketService;
