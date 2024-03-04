import { useNavigate } from 'react-router-dom';
import Styles from "../../../../styles/Home/Navbar/MyAccount/Profile.module.css";
function Profile() {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    console.warn("logout")
    navigate("/signup")
  }
  return (
    <div className={Styles.Container}>
      <h1>User Data</h1>
      {/* <li>Name:{JSON.parse(auth).user.firstname}</li>
      <li>Email:{JSON.parse(auth).email}</li>
      <li>Nmae:{localStorage.getItem( firstname)}</li> */}
      <li onClick={logout}>Logout</li>
    </div>
  )
}

export default Profile;