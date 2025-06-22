import browserDataSource from "../data-sources/local-data-sources/browser-data-source";
import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch";




const authService = {

    async login(data: any){
        return await tryCatch(async function(){
            const { token }  =  await apiDataSource.send("api/v1/auth/login",data, false)
            if(!token){
                return false
            }

            browserDataSource.set("tearoom:token", token)
            return true
        })
    },

    logout(){
        browserDataSource.delete("tearoom:token")
        browserDataSource.delete("tearoom:user")
        browserDataSource.delete("tearoom:email")
        browserDataSource.delete("tearoom:cart")
        return "user has logged out"
    }

}


export default authService