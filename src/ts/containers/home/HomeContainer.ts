import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";

class HomeContainer extends BaseContainer {
 
    constructor(onNavigate: OnNavigateType){
        super(onNavigate);
    }

    onInit(){}
}

export default HomeContainer