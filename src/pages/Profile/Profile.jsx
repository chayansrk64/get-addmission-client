import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SectionTitle from "../../components/SectionTitle";
import { Link } from "react-router-dom";

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState([]);
    useEffect(() => {
        fetch(`https://get-addmission-server.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserProfile(data);
            
        })
    }, [])
    return (
        <div className="pt-20 min-h-screen">
           <SectionTitle heading="User Profile"></SectionTitle>
            <div>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className="text-lg">Name</th>
        <th className="text-lg">Email</th>
        <th className="text-lg">Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td className="text-lg">{userProfile.name}</td>
        <td className="text-lg">{userProfile.email}</td>
        <td> <Link className="btn btn-primary" to='/edit'>Edit</Link> </td>
      </tr>
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Profile;