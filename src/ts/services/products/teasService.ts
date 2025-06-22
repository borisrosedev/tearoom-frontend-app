import appDataSource from "../../data-sources/remote-data-sources/app-data-source";
import tryCatch from "../../utils/try-catch";

const teasService = {
  async getAll() {
    return await tryCatch(async function () {
      return await appDataSource.receive("teas.json");
    });
  },
};

export default teasService;
