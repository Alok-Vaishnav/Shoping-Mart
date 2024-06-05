import { React, useContext, useEffect} from 'react'
import Styles from "../../styles/Auth/Signup.module.css"
import {useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../context/MyContext';




function Signup() {

  const { setIsSignup, setIsMyaccount} = useContext(MyContext);



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
  })

  const getsignup = async (data, e) => {
    e.preventDefault()
    let user = await fetch(`${process.env.REACT_APP_SERVER_PORT}/auth/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        password: data.password
      })
    });
    
    user = await user.json()
    console.log(user)
    if (user.message) {
      toast.warn(user.message)
    } else {

      localStorage.setItem("User", JSON.stringify(user));
      Navigate("/");
    }
  }

  return (

    <ClickAwayListener onClickAway={() => {
      setIsMyaccount(false)
    }}>

      <div className={Styles.container}>
        <form className={Styles.Form} onSubmit={handleSubmit(getsignup)}>
          <h1 className={Styles.heading}>SignUp.....</h1>

          <din className={Styles.inputFilds}>
            <input className={Styles.input}
              type='text'
              placeholder='Your Name'{...register('firstname', { required: true })} />
            {errors.firstname &&
              <p className={Styles.errors}>This field can't be empty </p>
            }
          </din>

          <div className={Styles.inputFilds}>
            <input className={Styles.input}
              type='Email' placeholder='Enter Your Email'  {...register('email', { required: true })} />
            {errors.email &&
              <p className={Styles.errors}>This field can't be empty </p>
            }
          </div>

          <div className={Styles.inputFilds}>
            <input className={Styles.input}
              type='password'
              placeholder='Enter Your Password' {...register('password', { required: true, minLength: 8 })} />
            {errors.password &&
              <p className={Styles.errors}>Use atleast 8 char </p>
            }
          </div>

          <button className={Styles.btn} type='submit'>Create Account</button>

          <h1 className={Styles.login}>
            Have a Account
            <li onClick={() => {
              setIsSignup(false)
            }}
            >
              Login!!
            </li>
          </h1>


        </form>


      </div>

    </ClickAwayListener>
  )
}

export default Signup;
