import { React, useContext, useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../Context/MyContext';




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

      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMyaccount(false)}
        />

        <ClickAwayListener onClickAway={() => setIsMyaccount(false)}>
        <form
          className="relative w-full max-w-md rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-md md:p-7 lg:p-8"
          onSubmit={handleSubmit(getsignup)}
        >
          <div className="mb-2 text-center">
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl text-gray-900">Create your account</h1>
            <p className="mt-1 text-sm text-gray-600">It’s quick and easy</p>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-700">Full name</label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:border-primary focus:ring-2"
              type='text'
              placeholder='Your name'
              {...register('firstname', { required: true })}
            />
            {errors.firstname && (
              <p className="text-xs text-red-600">This field can't be empty</p>
            )}
          </div>

          <div className="grid gap-2 mt-3">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:border-primary focus:ring-2"
              type='email'
              placeholder='you@example.com'
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-xs text-red-600">This field can't be empty</p>
            )}
          </div>

          <div className="grid gap-2 mt-3">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:border-primary focus:ring-2"
              type='password'
              placeholder='At least 8 characters'
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && (
              <p className="text-xs text-red-600">Use at least 8 characters</p>
            )}
          </div>

          <button
            className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
            type='submit'
          >
            Create Account
          </button>

          <div className="mt-3 flex items-center justify-center text-sm text-gray-700">
            <span>Already have an account?</span>
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              className="ml-2 font-semibold text-primary hover:underline"
            >
              Login
            </button>
          </div>
        </form>
        </ClickAwayListener>
      </div>

  )
}

export default Signup;
