import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import CollegeCard from "../CollegeCard/CollegeCard";

 

const AllCollege = () => {
    const [allCollege, setAllCollege] = useState([])
    useEffect(()=> {
        fetch('https://get-addmission-server.vercel.app/college')
        .then(res => res.json())
        .then(data => setAllCollege(data))
    }, [])

    return (
        <div className="pt-20">
            <SectionTitle heading="Colleges"></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
            {allCollege.map(colleges =>  <CollegeCard colleges={colleges} key={colleges._id}></CollegeCard>  )}
            </div>


        </div>
    );
};

export default AllCollege;