import { useNavigate } from 'react-router-dom';
import Styles from "../../../../styles/Home/Navbar/MyAccount/Profile.module.css";
import { useClickAway } from "use-click-away";
import { useContext, useRef } from 'react';
import { MyContext } from '../../../.././Context/MyContext';
import ClickAwayListener from 'react-click-away-listener';
function Profile() {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();
  // const clickRef = useRef("");
  const { setIsProfile } = useContext(MyContext);

  // useClickAway(clickRef, () => {
  //   setIsProfile(false)
  // });

  function logout() {
    localStorage.clear();
    console.warn("logout")
    navigate("/signup")

  }
  return (
    <ClickAwayListener onClickAway={() => setIsProfile(false)}>
      <div className={Styles.Container}
      >
        <div className={Styles.UserContainer}>
          {/* <h1>Hey{JSON.parse(auth).User.firstname}</h1> */}
          {/* <li>Name:{JSON.parse(auth).user.firstname}</li>
      <li>Email:{JSON.parse(auth).email}</li>
      <li>Nmae:{localStorage.getItem( firstname)}</li> */}
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