import { OnNavigateType } from "../../../interfaces/OnNavigateType";
import BaseContainer from "../../../models/BaseContainer";
import goodiesService from "../../../services/products/goodiesService";
import cardComponent from "../../../ui/components/card/card";



export default class GoodiesContainer extends BaseContainer {
    constructor(onNavigate: OnNavigateType){
        super(onNavigate)
        this.onInit()
    }


    async onInit(){
        const goodies = await goodiesService.getAll()
        
        const goodiesListSection = document.getElementById("goodies-list-section")
        
        const teaCardButtons = [
            {
                id: "info-tea-card-button",
                content: "More",
                classNames: "is-info"
            },
            {
                id: "add-to-cart-tea-card-button",
                content: "Add to Cart",
                classNames: "is-primary"
            }
        ]

        goodies.forEach((tea: any) => {
            
            goodiesListSection.insertAdjacentHTML("beforeend", cardComponent(tea,  teaCardButtons),)
        })

    }
}