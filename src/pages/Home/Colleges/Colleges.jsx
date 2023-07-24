import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import './Colleges.css'
import { useEffect } from 'react';
import College from '../College/College';

const colleges = () => {

    const [colleges, setColleges] = useState([]);

    // for search 
    // const searchRef = useRef(null);
    // const [search, setSearch] = useState('');
    
     

    useEffect(()=> {
        // fetch(`https://get-addmission-server.vercel.app/college?search=${search}`)
        fetch('https://get-addmission-server.vercel.app/college')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])

   
    // const handleSearch = () => {
    //     console.log(searchRef.current.value);
    //     setSearch(searchRef.current.value);
    // }

    return (
        <div className='pt-20'>
            <SectionTitle heading="Colleges"></SectionTitle>


            <div className=''>
            <div className="form-control">
                <div className="input-group justify-center">
                    <input    type="text"   placeholder="Search…" className="input input-bordered" />
                    <button    className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </div>
            </div>



           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
           {
                colleges.slice(0, 3).map(college => <College key={college._id} college={college}></College> )
            }
           </div>
            
        </div>
    );
};

export default colleges;