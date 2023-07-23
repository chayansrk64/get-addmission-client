import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../shared/SocialLogIn/SocialLogIn";

 
const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'LogIn Successfull',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })

    }



    return (
        <div>
        <div >
    <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left md:w-1/2">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
</div>
<div className="card flex-shrink-0   md:w-1/2 max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <input className="btn btn-primary" type="submit" value="Login" />
    </div>
  </form>
     <p className='p-3'><small>New here? <Link to='/register' className='text-warning'>Create an Account</Link> </small></p>
     <div className='text-center mb-4 p-3'>
       <SocialLogin></SocialLogin>
     </div>
</div>
</div>
</div>
</div>

    </div>
    );
};

export default Login;