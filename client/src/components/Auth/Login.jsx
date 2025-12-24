import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ClickAwayListener from 'react-click-away-listener'
import { MyContext } from '../../Context/MyContext'

function Login() {
  const { 
    setIsMyaccount, 
    setIsSignup, 
    pendingCartItem, 
    setPendingCartItem, 
    cartItems, 
    setCartItems, 
    setIsCart 
  } = useContext(MyContext)

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  // Validation function
  const validateForm = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!data.success) {
        toast.error(data.message || "Login failed")
        return
      }

      // Store user data
      localStorage.setItem("User", JSON.stringify(data.user))
      toast.success("Welcome back! ✨")

      // Handle pending cart item
      if (pendingCartItem) {
        const existingItem = cartItems.find(item => item.id === pendingCartItem.id)

        if (existingItem) {
          setCartItems(cartItems.map(item =>
            item.id === pendingCartItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ))
        } else {
          setCartItems([...cartItems, { ...pendingCartItem, quantity: 1 }])
        }

        toast.success("Item added to cart")
        setPendingCartItem(null)
        setIsCart(true)
      }

      // Close modal and redirect
      setIsMyaccount(false)
      navigate("/")

    } catch (error) {
      console.error("Login error:", error)
      toast.error("Connection error. Please try again.")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsMyaccount(false)}
      />

      <ClickAwayListener onClickAway={() => setIsMyaccount(false)}>
        <form
          className="relative w-full max-w-md rounded-2xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-md md:p-8"
          onSubmit={handleLogin}
        >
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) {
                  setErrors({ ...errors, email: "" })
                }
              }}
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors outline-none ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) {
                  setErrors({ ...errors, password: "" })
                }
              }}
              className={`w-full px-4 py-2.5 rounded-lg border transition-colors outline-none ${
                errors.password
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors mb-4"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
            </div>
          </div>

          {/* Switch to Signup */}
          <button
            type="button"
            onClick={() => setIsSignup(true)}
            className="w-full py-2.5 px-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Create New Account
          </button>
        </form>
      </ClickAwayListener>
    </div>
  )
}

export default Login