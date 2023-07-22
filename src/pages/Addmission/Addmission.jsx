import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";

 
const Addmission = () => {
    const [myColleges, setMyColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setMyColleges(data))
    }, [])
    return (
        <div className="my-5">
            <SectionTitle heading="Choose Your College"></SectionTitle>
            <div className="flex flex-col items-center gap-3 my-10">
                {myColleges.map(myCollege =>  
                    
                    <Link to={`/form/${myCollege._id}`}>{myCollege.college_name}</Link>

                    )} 
            </div>
        </div>
    );
};

export default Addmission;