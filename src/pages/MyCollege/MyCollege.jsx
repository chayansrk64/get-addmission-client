import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Student from "../Student/Student";

 
const MyCollege = () => {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/students')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    return (
        <div>
           <SectionTitle heading="Students & Colleges info"></SectionTitle>

        <div>

        </div>
            {
                students.map(student =>  <Student student={student} key={student._id}></Student> )
            }
        </div>
    );
};

export default MyCollege;