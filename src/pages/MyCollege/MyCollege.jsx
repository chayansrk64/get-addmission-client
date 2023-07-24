import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Student from "../Student/Student";

 
const MyCollege = () => {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://get-addmission-server.vercel.app/students')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    return (
        <div className="pt-20 mb-10">
           <SectionTitle heading="Students & Colleges info"></SectionTitle>

        <div className="mt-10">

            {
                students.map(student =>  <Student student={student} key={student._id}></Student> )
            }
        </div>
        </div>
    );
};

export default MyCollege;