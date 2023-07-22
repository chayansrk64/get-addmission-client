import College from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";

 
const Home = () => {
    return (
        <div>
            {/* components will be called here */}
            <College></College>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;