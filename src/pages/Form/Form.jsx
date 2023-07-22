import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

 
const Form = () => {
    const data = useLoaderData()
    console.log(data);

    const handleAddStudent = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const select = form.select.value;
        const email = form.email.value;
        const phone = parseInt(form.phone.value);
        const address = form.address.value;
        const dob = form.dob.value;
        const image = form.image.value;
        

        const student = {name, email, select, image, phone, address, dob, image  }
        console.log(student);
    }

    return (
        <div>
            <SectionTitle heading="Addmission Form"></SectionTitle>
            <h2 className="text-center text-2xl mb-5">{data.college_name}</h2>
            {/* form */}
            <div className="my-10 md:w-1/2 mx-auto ">

                <form onSubmit={handleAddStudent} className="form-control ">
                 
                <input type="text" name="name" placeholder="Candidate Name" className="mb-3 input input-bordered w-full  " />
                <select name="select" className="select mb-3 select-primary w-full ">
                    <option disabled selected>Select Subject</option>
                    <option>English</option>
                    <option>Mathemetics</option>
                    <option>Computer Science</option>
                    <option>Economics</option>
                </select>
                <input type="email" name="email" placeholder="Candidate Email" className="mb-3 input input-bordered w-full " />
                <input type="number" name="phone" placeholder="Candidate Phone" className="mb-3 input input-bordered w-full " />
                 <input type="text" name="address" placeholder="Candidate  address" className="mb-3 input input-bordered w-full  " /> 
                 <input type="date" name="dob" placeholder="Candidate  dob" className="mb-3 input input-bordered w-full  " /> 
                <input type="text" name="image" placeholder="Candidate  image" className="mb-3 input input-bordered w-full  " />
                <input type="submit" value="Submit"  className="mb-3 input input-bordered w-1/2 btn btn-primary  " />

                </form>
            </div>
        </div>
    );
};

export default Form;