 
import { Link } from 'react-router-dom';
 
const CollegeCard = ({colleges}) => {
    // console.log(colleges);
    const {_id, college_name, college_image, admission_dates, ratings
    ,events, research_history, sports, number_of_research,
    } =  colleges;
    return (
        <>
            <div className="card  card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={college_image} alt="Image" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {college_name} </h2>
                <div>
                    <p>College Ratings: {ratings} </p>
                </div>
                <div>
                    <p>Number of Research: {number_of_research} </p>
                </div>
                <div>
                   <p> Addmission Date:</p>
                 <div className="flex"><p>{admission_dates.fall}</p>
                <p>{admission_dates.spring}</p></div>
                </div>
                 
                <div className="card-actions justify-end">
                <Link to={`/college/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
            </div>
        </>
        
    );
};

export default CollegeCard;