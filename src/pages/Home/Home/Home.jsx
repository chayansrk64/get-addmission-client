import College from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";
import ReviewSection from "../ReviewSection/ReviewSection";

 
const Home = () => {
    return (
        <div>
            {/* components will be called here */}
            <College></College>
            <Gallery></Gallery>
            <Research></Research>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;