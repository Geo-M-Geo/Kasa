import DisplayCards from "../../components/AllCards/AllCards"
import HomeBanner from "../../components/Banners/Home-banner/HomeBanner"
import styled from "styled-components"

// Home page that contain the HomeBanner Component and the Display card component.
function Home(){
    return ( 
        <div className="home-container">
            <HomeBanner />
            <DisplayCards />
        </div>
    )
}

export default Home