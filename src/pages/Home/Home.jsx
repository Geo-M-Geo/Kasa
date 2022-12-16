import DisplayCards from "../../components/AllCards/AllCards"
import HomeBanner from "../../components/Banners/Home-banner/HomeBanner"
import '../Home/Home.scss'

// Home page that contain the HomeBanner Component and the Display card component.
function Home(){
    return ( 
        <div className="home-container">
            <HomeBanner />
            <div className="home-container">
            <DisplayCards />
            </div>
        </div>
    )
}

export default Home