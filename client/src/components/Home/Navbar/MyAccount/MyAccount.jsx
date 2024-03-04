import React from 'react'
import Styles from "../../../../styles/Home/Navbar/MyAccount/MyAccount.module.css";
import { Link } from 'react-router-dom';
import Profile from './Profile';
export default function () {

  return (
    <div className={Styles.Container}>
      <div className={Styles.HeadingContainer}>
        <h1 className={Styles.Heading}>Your Account</h1>
      </div>

      <div className={Styles.UserContainer}>

        <div className={Styles.ProfileContainer}>
          <div className={Styles.Profile}>
            <li>
              <Link>
                Your Data
              </Link>
            </li>
          </div>

          <div className={Styles.Order}>
            <h1>Your Profile</h1>
          </div>

        </div>
      </div>
    </div>
  )
}
