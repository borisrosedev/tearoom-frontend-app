import { resolve } from "path";
import buttonComponent from "../../ui/components/button/button";


class LandingContainer {
    landingSection!: HTMLElement;

    constructor(){
        this.landingSection = document.getElementById("landing-section")
        this.onInit()
    }


    buttonCreationExecutor(resolve: any) {
            this.landingSection.innerHTML += buttonComponent({
                id: "landing-button",
                content: "Enter",
                classNames:"is-primary animate__animated animate__fadeInUp"
            })
            resolve()

    }


    onInit() {
        setTimeout(() => {

            new Promise(this.buttonCreationExecutor.bind(this))
                .then(() => {
                    const landingButton = document.getElementById("landing-button")
                    landingButton.addEventListener('click', function(){
                        window.alert("You clicked")
                    })

                })
            
         

        }, 1500)
    }

}

export default LandingContainer