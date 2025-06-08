interface navBarButtonProps {
    id: string 
    content: string
    classNames?: string 
    
}


function navBarButton (data: navBarButtonProps) {
    return(

        `
                <a id="${data.id}" class="button ${data.classNames ?? 'is-primary'}">
                    <strong>${data.content}</strong>
                </a>
        
        `
    )

}

export default navBarButton;