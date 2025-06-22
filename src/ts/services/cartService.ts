import browserDataSource from "../data-sources/local-data-sources/browser-data-source";
import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch"

const cartService = {


    async createCart(){
        return await tryCatch(async function(){
            
            const {message, error, cart } = await apiDataSource.receive("api/v1/carts", true)

            if(cart){
                browserDataSource.set("tearoom:cart", cart)
            }

            return { message, error }
        })
    },

    async addItem(data){
        return await tryCatch(async function(){
            
            return await apiDataSource.send("api/v1/carts/", data, false, true, "PUT")

        })
    }
}


export default cartService;