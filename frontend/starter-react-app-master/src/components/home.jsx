import HomeHeader from "./HomeHeader"
import CorouselComponent from "./CorouselComponent";
import Footer from "./Footer";
const Home = () => { 
    return(
        <div className="fill-window">
        <HomeHeader />
            <div >
                 <CorouselComponent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;