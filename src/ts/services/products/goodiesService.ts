import appDataSource from "../../data-sources/remote-data-sources/app-data-source"
import tryCatch from "../../utils/try-catch"



const goodiesService = {

    async getAll(){
        return await tryCatch(async function(){
            return await appDataSource.receive("goodies.json")
        })
    }
}

export default goodiesService;