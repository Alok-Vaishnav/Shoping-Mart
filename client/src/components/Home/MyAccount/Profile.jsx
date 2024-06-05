import { useNavigate } from 'react-router-dom';
import Styles from "../../../styles/Home/MyAccount/Profile.module.css";
import { useContext , React} from 'react';
import { MyContext } from '../../../context/MyContext';
import ClickAwayListener from 'react-click-away-listener';

function Profile() {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();
  const { setIsProfile } = useContext(MyContext);
  console.log(auth)

  function logout() {
    localStorage.clear(auth);
    navigate("/")

  }
  return (
    <ClickAwayListener onClickAway={() => setIsProfile(false)}>
      <div className={Styles.Container}>

        <div className={Styles.UserContainer}>
          <h1 className={Styles.userName}>
            Hey👋
            {JSON.parse(auth).firstname}
          </h1>

          <h1 className={Styles.userEmail}>
            Your Email:
            {JSON.parse(auth).email}
          </h1>

          <li onClick={logout}>Logout</li>
        </div>

        <div className={Styles.AddressContainer}>
          <h1 className={Styles.OrderHeading}>Work On It</h1>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Profile;