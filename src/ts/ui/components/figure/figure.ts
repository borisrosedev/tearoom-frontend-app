import FigureInterface from "../../../interfaces/FigureInterface";

function figureComponent (data: FigureInterface) {

    return (
        `
            <figure id="${data.id}" class="custom-figure ${data.classNames ?? ''}">
                <img 
                    src="${data.url ?? data.src}" 
                    alt="${data.name ?? data.alt}"
                />
            </figure>
        
        `
    )

}

export default figureComponent;