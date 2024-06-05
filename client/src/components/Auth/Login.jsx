import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Styles from "../../styles/Auth/Login.module.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../context/MyContext';

function Login() {

  const { setIsMyaccount,setIsSignup } = useContext(MyContext);


  const Navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      Navigate("/home")
    }

  }, [])

  const getlogin = async (e) => {
    // console.log(email, password)
    e.preventDefault()
    let user = await fetch(`${process.env.REACT_APP_SERVER_PORT}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    user = await user.json()
    if (!user.status) {
      toast.warn(user.message)
    } else {
      toast.warn("WelCome User")
      localStorage.setItem("User", JSON.stringify(user))
      Navigate("/")

    }
  }

  return (

    <ClickAwayListener
      onClickAway={() => {
        setIsMyaccount(false)
      }}>

      <div className={Styles.container}>
        <div className={Styles.Formcontainer}>

          <form className={Styles.form} onSubmit={getlogin}>
            <h1 className={Styles.heading} >Login....</h1>

            <input className={Styles.input} type='Email' placeholder='Enter Your Email' value={email} onChange={(e) => setemail(e.target.value)} />

            <input className={Styles.input} type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setpassword(e.target.value)} />

            <button className={Styles.btn} type='submit'>Create Account</button>

            <h1 className={Styles.login}>
              Create a Account
              <li onClick={() => {
                setIsSignup(true)
              }}
              >
                Signup
              </li>
            </h1>
          </form>
        </div>

      </div>
    </ClickAwayListener>
  )
}

export default Login;
