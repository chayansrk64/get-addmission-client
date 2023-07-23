import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
 
 
const Review = () => {

    
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const ratings = parseInt(form.ratings.value);
        const reviewData = {review, ratings};
        console.log(reviewData);

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Review Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            }
        })

    }

    
    return (
        <div>
            <SectionTitle heading="Give us review"></SectionTitle>

            <div className="md:w-1/2 mx-auto my-10">

             <form onSubmit={handleReview}>
             <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Review</span> 
                </label>
                <textarea name="review" className="textarea textarea-bordered h-24 mb-3" placeholder="Review"></textarea>
                
                <select name="ratings" className="select select-primary mb-3 ">
                <option disabled selected>Give Us Ratings</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary " />
             </form>

            </div>
        </div>
    );
};

export default Review;