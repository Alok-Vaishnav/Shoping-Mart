import React, { useEffect } from 'react'
import { useState } from 'react'
import Styles from "../../styles/Auth/Login.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
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
    let user = await fetch("http://localhost:5000/login", {
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
      localStorage.setItem("User", JSON.stringify(user.user))
      Navigate("/")

    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.Formcontainer}>

        <form className={Styles.form} onSubmit={getlogin}>
          <h1 className={Styles.heading} >Login....</h1>

          <input className={Styles.input} type='Email' placeholder='Enter Your Email' value={email} onChange={(e) => setemail(e.target.value)} />

          <input className={Styles.input} type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setpassword(e.target.value)} />
          <li className={Styles.forget}>Forget Password<Link to="/login">Login</Link></li>

          <button className={Styles.btn} type='submit'>Create Account</button>
        </form>
      </div>

    </div>
  )
}

export default Login;
