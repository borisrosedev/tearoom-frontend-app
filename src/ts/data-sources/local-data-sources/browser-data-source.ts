



const browserDataSource = {

    set(key: string, data: any){
        localStorage.setItem(key,JSON.stringify(data))
        return "item set"
    },

    get(key: string){
        return JSON.parse(localStorage.getItem(key))
    },

    update(key: string, data: any){
        const item = this.get(key)
        const newItem = { ...item, ...data }
        this.set(key, newItem)
        return "item updated"
    },

    delete(key: string){
        localStorage.removeItem(key)
        return "item deleted"
    }



}

export default browserDataSource;