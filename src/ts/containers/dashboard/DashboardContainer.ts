import browserDataSource from "../../data-sources/local-data-sources/browser-data-source";
import { OnNavigateType } from "../../interfaces/OnNavigateType";
import BaseContainer from "../../models/BaseContainer";
import userService from "../../services/userService";
import figureComponent from "../../ui/components/figure/figure";

class DashboardContainer extends BaseContainer {

    constructor(onNavigate: OnNavigateType){
        super(onNavigate)
        this.onInit()
    }

    async onInit(){
        const dashboardInfoSection = document.getElementById("dashboard-info-section")

        let user = browserDataSource.get("tearoom:user")

        if(!user){
            await userService.me()
        }

        user = browserDataSource.get("tearoom:user")

        if(!user){
            this.onNavigate("#login")
        }

        dashboardInfoSection.insertAdjacentHTML('afterbegin', figureComponent({
                id: "dashboard-profile-picture",
                src: "http://localhost:3000/static/files/photos/" + user.photo,
                alt: "Profile Picture of " + user.fullName
        }))

    }
}


export default DashboardContainer