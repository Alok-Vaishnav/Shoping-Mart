import React, { useContext, useEffect, useRef, useState } from 'react'
import { useClickAway } from "use-click-away";
import Styles from "../../../../styles/Home/Navbar/MyAccount/MyAccount.module.css";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../.././Context/MyContext';
import ClickAwayListener from 'react-click-away-listener';
export default function MyAccount() {
  const { setIsProfile, setIsOrder, setIsMyaccount } = useContext(MyContext);
  const clickRef = useRef("");

  useClickAway(clickRef, () => {
    setIsMyaccount(false)
  });

  return (
    <ClickAwayListener onClickAway={()=>{
      setIsMyaccount(false)
      setIsProfile(false)
      setIsOrder(false)
    }}>
    <div
      className={Styles.Container}
      >
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
              <Link onClick={() => setIsOrder(p => !p)}>
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
