import { useLoaderData } from "react-router-dom";

 
const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const {_id, college_name, college_image, admission_dates, research_history, sports, events} = details;
    return (
        <div>
           
            <div>
                <div className="w-9/12 mx-auto py-5"><img src={college_image} alt="" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex"><h2>Know {college_name} College</h2></div>
                    {/* college details */}
                    <div>
                        <h2 className="text-3xl font-semibold py-3">{college_name}</h2>
                         <div>
                            <h4 className="text-xl font-semibold mt-20">Events:</h4>
                             
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      { events.map(event =>  <tr>
        <th>1</th>
        <td>{event.event_name}</td>
        <td> {event.date} </td>
        <td>{event.location} </td>
      </tr>
      )}
     
    </tbody>
  </table>
</div>

                         </div>
                         <div className="py-5">
                         <h4 className="text-xl font-semibold">Addmission Dates:</h4>
                         <p>Fall: {admission_dates.fall}</p>
                         <p>Spring: {admission_dates.spring}</p>
                         </div>
                         <div>
                            <p className="text-xl font-semibold">Research History:</p>
                            <p>{research_history}</p>
                         </div>
                         <div className="my-5">
                            <p className="text-xl font-semibold">Sports</p>
                            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Season</th>
        <th>Coach</th>
      </tr>
    </thead>
    <tbody>
      {sports.map(sport => <tr>
        <th>1</th>
        <td>{sport.sport_name}</td>
        <td>{sport.season}</td>
        <td>{sport.coach}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;