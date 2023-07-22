import College from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";

 
const Home = () => {
    return (
        <div>
            {/* components will be called here */}
            <College></College>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;