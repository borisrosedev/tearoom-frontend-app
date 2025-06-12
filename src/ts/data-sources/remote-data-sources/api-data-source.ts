import tryCatch from "../../utils/try-catch";
import browserDataSource from "../local-data-sources/browser-data-source";


const apiDataSource = {

    async receive(endpoint: string, isTokenRequired?: boolean) {

        return await tryCatch(async function () {

            const requestInit =  {
                method: "GET",
                headers: {}
            } as { method: string, headers: any, body?: any}

            if(isTokenRequired){
                requestInit.headers["Authorization"] = "Bearer " + browserDataSource.get('tearoom:token')
            }

            const serverResponse = await fetch("http://localhost:3000/" + endpoint, requestInit)

            return await serverResponse.json()
        })

    },
    async send(endpoint: string, data: any,  isMultipartForm?: boolean ,isTokenRequired?: boolean, method: string = "POST") {


        const requestInit =  {
            method: method,
            headers : {},
            body: null
        } 


     
        if(isTokenRequired){
 
            requestInit.headers["Authorization"] = "Bearer " + browserDataSource.get('tearoom:token')
        }

        if(!isMultipartForm){
        
            requestInit.headers["Content-Type"] = "application/json"
            requestInit.body = JSON.stringify(data)
           
            
        }  else {
            requestInit.body = data
        }

        return await tryCatch(async function () {
            const serverResponse = await fetch("http://localhost:3000/" + endpoint, requestInit)

            return await serverResponse.json()
        })
 
    }

}


export default apiDataSource;