import DisplayCards from "../../components/AllCards"
import HomeBanner from "../../components/Banners/HomeBanner"

function Home(){
    return ( 
        <div>
            <HomeBanner />
            <DisplayCards />
        </div>
    )
}

export default Home