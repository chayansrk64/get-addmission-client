
import { useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
 
 
const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch('https://get-addmission-server.vercel.app/users', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'SignUp Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
              navigate(from, {replace: true});
            })



             

        })

    }

    return (
        <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn   btn-outline">
         Google
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;