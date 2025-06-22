import appDataSource from "../../data-sources/remote-data-sources/app-data-source"
import tryCatch from "../../utils/try-catch"



const dessertsService = {

    async getAll(){
        return await tryCatch(async function(){
            return await appDataSource.receive("desserts.json")
        })
    }
}

export default dessertsService;