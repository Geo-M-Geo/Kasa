import DisplayCards from "../../components/AllCards"
import HomeBanner from "../../components/Banners/HomeBanner"


// Home page that contain the HomeBanner Component and the Display card component.
function Home(){
    return ( 
        <div>
            <HomeBanner />
            <DisplayCards />
        </div>
    )
}

export default Home