import figureComponent from "../../components/figure/figure";

function homePage () {
    return(
        `
            <main class="tearoom-main home__main">

                <section id="home-hero" class="home__hero-section">
                    ${figureComponent({
                        id: "home-hero-figure",
                        src: "/assets/bg-tearoom-hero.webp"
                    })}
                
                </section>
                <section id="home-history" class="home__history-section"></section>
                <section id="home-praise" class="home__praise-section"></section>
            
            </main>
        
        `
    )
}

export default homePage;