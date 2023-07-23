import { Link } from "react-router-dom";

 
const Student = ({student}) => {
    // console.log(student);
    const {_id, name, email, image, phone, select, dob, address, college, details} = student;
    return (
        <div>
            <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className=" "> Email: {email}</p>
                <p className=" "> Subject: {select}</p>
                <p className=" "> Phone: {phone}</p>
                <p className=" "> Date of birth: {dob}</p>
                <p className=" "> Address: {address}</p>
                <p className=" "> College: {college}</p>
                <p className=" "> Details: {details}</p>
                <Link to="/review" className="btn btn-primary">Add a review</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Student;