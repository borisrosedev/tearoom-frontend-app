import tryCatch from "../../utils/try-catch"



const appDataSource = {

    async receive(endpoint: string){
        return await tryCatch(async function(){
            const serverResponse = await fetch("../../../../data/"+endpoint)
            return await serverResponse.json()
        })
    
    }

}


export default appDataSource;