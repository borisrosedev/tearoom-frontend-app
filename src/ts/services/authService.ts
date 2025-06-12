import localDataSource from "../data-sources/local-data-sources/browser-data-source";
import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch";




const authService = {

    async login(data: any){
        return await tryCatch(async function(){
            const { token }  =  await apiDataSource.send("api/v1/auth/login",data, false)
            if(!token){
                console.log("fail to log in")
                return false
            }

            localDataSource.set("tearoom:token", token)
            return true
        })
    },

    logout(){
        localDataSource.delete("tearoom:token")
        return "user has logged out"
    }

}


export default authService