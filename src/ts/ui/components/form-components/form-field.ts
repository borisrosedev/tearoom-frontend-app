import FieldInterface from "../../../interfaces/FieldInterface";

export default function formFieldComponent (data: FieldInterface) {

    return(

        `
        
            <div class="field">
                <p class="control has-icons-left">
                    <input id="${data.id}" class="input ${data.classNames ?? ''}" type="${data.type ?? 'text'}" placeholder="${data.placeholder}">
                    <span class="icon is-small is-left">
                        <i class="fas ${data.iconName}"></i>
                    </span>           
                </p>
            </div>
         
                    
        
        
        `
    )
}