import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch"

const cartService = {


    async createCart(){
        return await tryCatch(async function(){
            
            return await apiDataSource.receive("api/v1/carts", true)

        })
    },

    async addItem(data){
        return await tryCatch(async function(){
            
            return await apiDataSource.send("api/v1/carts/", data, false, true, "PUT")

        })
    }
}


export default cartService;