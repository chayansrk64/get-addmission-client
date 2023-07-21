import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import './Colleges.css'
import { useEffect } from 'react';
import College from '../College/College';

const colleges = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])

    return (
        <div>
            <SectionTitle heading="Colleges"></SectionTitle>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
           {
                colleges.map(college => <College key={college._id} college={college}></College> )
            }
           </div>
            
        </div>
    );
};

export default colleges;