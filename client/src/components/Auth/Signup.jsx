import React, { useEffect, useState } from 'react'
import Styles from "../../styles/Auth/Signup.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem("User");
    if (auth) {
      Navigate("/")
    }
  }, [])
  const getsignup = async (data, e) => {
    e.preventDefault()
    let user = await fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      })
    });
    user = await user.json()
    console.log(user)
    if (user.message) {
      toast.warn(user.message)
    } else {

      localStorage.setItem("User", JSON.stringify(user))
      Navigate("/")

    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.Formcontainer}>

        <form className={Styles.Form} onSubmit={handleSubmit(getsignup)}>
          <h1 className={Styles.heading}>SignUp.....</h1>

          <din className={Styles.inputFilds}>
            <input className={Styles.name} type='text' placeholder='First Name'{...register('firstname', { required: true })} />
            {errors.firstname && <p className={Styles.errors}>This field can't be empty </p>}

            <input className={Styles.name} type='text' placeholder='Last Name'  {...register('lastname', { required: true })} />
            {errors.lastname && <p className={Styles.errors}>This field can't be empty </p>}
          </din>

          <div className={Styles.inputFilds}>
            <input className={Styles.input} type='Email' placeholder='Enter Your Email'  {...register('email', { required: true })} />
            {errors.email && <p className={Styles.errors}>This field can't be empty </p>}
          </div>

          <div className={Styles.inputFilds}>
            <input className={Styles.input} type='password' placeholder='Enter Your Password' {...register('password', { required: true, minLength: 8 })} />
            {errors.password && <p className={Styles.errors}>Use atleast 8 char </p>}
          </div>

          <button className={Styles.btn} type='submit'>Create Account</button>

          <li className={Styles.login}>I have a Account<Link to="/login"> Login</Link></li>
        </form>
      </div>
    </div>

  )
}

export default Signup;
