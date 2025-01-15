import React, { useContext } from 'react'
import Styles from "../../../styles/Home/MyAccount/MyAccount.module.css";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../context/MyContext';
import ClickAwayListener from 'react-click-away-listener';
export default function MyAccount() {

  const { setIsProfile,  setIsOrderstatus, setIsMyaccount } = useContext(MyContext);
  

  return (
    <ClickAwayListener onClickAway={()=>{
      setIsMyaccount(false)
      setIsProfile(false)
      setIsOrderstatus(false)
    }}>
    <div
      className={Styles.Container}>
      <div
        className={Styles.HeadingContainer}>
        <h1 className={Styles.Heading}>Your Account</h1>
      </div>

      <div className={Styles.UserContainer}>

        <div className={Styles.ProfileContainer}>
          <div className={Styles.Profile}>
            <li>
              <Link onClick={() => setIsProfile(p => !p)}>
                Your Profile
              </Link>
            </li>

          </div>

          <div className={Styles.Order}>
            <li>
              <Link onClick={() =>  setIsOrderstatus(p => !p)}>
                Your Order
              </Link>
            </li>
          </div>

        </div>
      </div>
    </div>
    </ClickAwayListener>
  )
}
