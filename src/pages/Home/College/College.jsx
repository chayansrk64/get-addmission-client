import { Link } from "react-router-dom";

 
const College = ({college}) => {
//    console.log(college);
   const {_id, college_name, college_image, admission_dates, events, research_history, sports
   } =  college;
    return (
        <>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={college_image} alt="Image" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {college_name} </h2>
                <div>
                   <p className="font-bold"> Addmission Date:</p>
                 <div className="flex"><p>{admission_dates.fall}</p>
                <p>{admission_dates.spring}</p></div>
                </div>
                <div className="font-semibold flex">
                   Events: &nbsp; {events.map(event => <p>{event.event_name}</p> )}
             </div>
                <p> <span className="font-bold">Research History:</span> {research_history}</p>
                <div className="flex">
                    <p className="font-bold">Sports:</p>
                    {sports.map(sport => <p>
                        {sport.sport_name} 
                    </p>)}
                </div>
                <div className="card-actions justify-end">
                <Link to={`/college/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
            </div>
        </>
    );
};

export default College;