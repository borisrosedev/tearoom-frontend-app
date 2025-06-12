interface formFileComponentProps {
    content: string 
    id: string
    classNames?: string
}

export default function formFileComponent(data: formFileComponentProps) {
    return(
        `
        <article class="file is-info has-name ${data.classNames ?? 'is-primary'}">
            <label class="file-label">
                <input id="${data.id}" class="file-input" type="file" name="${data.id}" />
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> ${data.content} </span>
                  
                </span>
                <span class="file-name" id="file-name"></span>
            </label>
        </article>
        
        
        `
    )
}