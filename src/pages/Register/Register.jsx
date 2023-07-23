import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogIn/SocialLogIn";

 
const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.email)
            .then(()=> {

                const saveUser = {name: data.name, email: data.email}

                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                           position: 'top-center',
                           icon: 'success',
                           title: 'User Profile Updated',
                           showConfirmButton: false,
                           timer: 1500
                         })
                         navigate('/')
                    }
                })

               
            })
            .catch(error => console.log(error))
        })
      }
    
    //   console.log(watch("example")) 


    return (
        <div>
        <div >
    <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left md:w-1/2">
  <h1 className="text-5xl font-bold">Register now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0   md:w-1/2 max-w-sm shadow-2xl bg-base-100">
  <form  onSubmit={handleSubmit(onSubmit)}  className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
      {errors.name && <span className="text-red-500">Name field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
      {errors.email && <span className="text-red-500">Email field is required</span>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" {...register("password", { 
             required: true,
             minLength:6,
             maxLength: 20, 
             pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}/
           })} placeholder="password"  className="input input-bordered" />
            {errors.password && <span className="text-red-600">Password at least 6 and not more than 20 characters</span>}
           {errors.password && <span className="text-red-600">Password should uppercase, lowercase and special characters</span>}
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit" value="Register" />
    </div>
  </form>
     <p className='p-3'><small>Already Have an Account? <Link to='/login' className='text-warning'>Login</Link> </small></p>
     <div className='text-center mb-4'>
        <SocialLogin></SocialLogin>
     </div>
</div>
</div>
</div>
</div>

    </div>
    );
};

export default Register;