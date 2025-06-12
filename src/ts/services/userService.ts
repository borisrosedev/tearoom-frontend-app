import browserDataSource from "../data-sources/local-data-sources/browser-data-source";
import localDataSource from "../data-sources/local-data-sources/browser-data-source";
import apiDataSource from "../data-sources/remote-data-sources/api-data-source";
import tryCatch from "../utils/try-catch";



const userService = {


    async me() {
        await tryCatch(async function(){

            const { user, err } = await apiDataSource.receive("api/v1/users/me", true)
            if(!user && !user.email){
                return err
            }

            const browserUser = {
                email: user.email,
                fullName: user.fullName, 
                firstName: user.firstName,
                lastName: user.lastName,
                photo: user.photo,
                role: user.role
            }

            browserDataSource.set("tearoom:user", browserUser)
        })
    },

    async signup(data){
        
        return await tryCatch(async function(){

            const { user } = await apiDataSource.send("api/v1/users", data, true)
            if(!user && !user.email){
                return false
            }
            localDataSource.set("tearoom:email", user.email)
            return true
        })

    }



}


export default userService;