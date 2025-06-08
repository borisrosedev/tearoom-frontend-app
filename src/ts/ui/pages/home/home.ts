import figureComponent from "../../components/figure/figure";
import messageComponent from "../../components/message/message";

function homePage () {
    return(
        `
            <main class="tearoom-main home__main">

                <section id="home-hero" class="home__hero-section">
                    ${figureComponent({
                        id: "home-hero-figure",
                        src: "/assets/bg-tearoom-hero.webp"
                    })}
                    <section class="home-hero__speech-section">

                    ${messageComponent({
                        id: "home-hero-message",
                        header: "What makes us unique",
                        body: "We are committed to making you feel as comfortable as possible in our tearoom. We work with the finest tea makers, and each of us is dedicated to offering you the very best. You will experience elegance and glamour while enjoying your time here."
                    })}
                    
                    </section>

                    <section id="home-hero-signatures"></section>
                
                </section>
                <section id="home-history" class="home__history-section"></section>
                <section id="home-praise" class="home__praise-section"></section>
            
            </main>
        
        `
    )
}

export default homePage;