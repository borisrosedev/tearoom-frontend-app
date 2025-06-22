import browserDataSource from "../data-sources/local-data-sources/browser-data-source";
import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch";

const userService = {
  async deleteAccount() {
    return await tryCatch(async function () {
      const { message } = await apiDataSource.receive(
        "api/v1/users",
        true,
        "DELETE",
      );
      return message;
    });
  },

  async editProfile(data: FormData) {
    return await tryCatch(async function () {
      const { message, user } = await apiDataSource.send(
        "api/v1/users",
        data,
        true,
        true,
        "PUT",
      );

      if (message) {
        return message;
      }

      const browserUser = {
        email: user.email,
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
        role: user.role,
      };

      browserDataSource.set("tearoom:user", browserUser);
      browserDataSource.set("tearoom:email", user.email);

      return "Profile updated.";
    });
  },

  async me() {
    return await tryCatch(async function () {
      const { user, err } = await apiDataSource.receive(
        "api/v1/users/me",
        true,
      );
      if (!user && !user.email) {
        return err;
      }

      const browserUser = {
        email: user.email,
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
        role: user.role,
      };

      if (user.cart) {
        browserDataSource.set("tearoom:cart", user.cart);
      }

      browserDataSource.set("tearoom:user", browserUser);
    });
  },

  async signup(data) {
    return await tryCatch(async function () {
      const { user } = await apiDataSource.send("api/v1/users", data, true);
      if (!user && !user.email) {
        return false;
      }
      browserDataSource.set("tearoom:email", user.email);
      return true;
    });
  },
};

export default userService;
