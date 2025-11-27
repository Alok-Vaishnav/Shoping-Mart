import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../Context/MyContext';

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
  }, [Navigate])

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

      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMyaccount(false)}
        />

        <ClickAwayListener onClickAway={() => setIsMyaccount(false)}>
          <form
            className="relative w-full max-w-md flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-md md:p-7 lg:p-8"
            onSubmit={getlogin}
          >
            <div className="mb-2 text-center">
              <h1 className="text-xl font-semibold tracking-tight md:text-2xl text-gray-900">Welcome back</h1>
              <p className="mt-1 text-sm text-gray-600">Sign in to continue</p>
            </div>

            <div className="grid gap-3">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:border-primary focus:ring-2"
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="grid gap-3">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/30 focus:border-primary focus:ring-2"
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <button
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
              type='submit'
            >
              Login
            </button>

            <div className="mt-2 flex items-center justify-center text-sm text-gray-700">
              <span>New here?</span>
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="ml-2 font-semibold text-primary hover:underline"
              >
                Create an account
              </button>
            </div>
          </form>
        </ClickAwayListener>
      </div>
  )
}

export default Login;
