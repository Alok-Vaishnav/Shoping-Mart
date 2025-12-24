import React, { useContext, useMemo, useState } from 'react'
import { MyContext } from '../../../Context/MyContext'
import ClickAwayListener from 'react-click-away-listener'
import { toast } from 'react-toastify'
import AddressModal from '../../Checkout/AddressModal'

const formatINR = (value) => {
  if (value == null || isNaN(value)) return '';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);
}

export default function CartBox() {
  const { setIsCart, setIsMyaccount, cartItems, setCartItems } = useContext(MyContext)
  const isAuthed = Boolean(localStorage.getItem('User'))
  const [showAddressModal, setShowAddressModal] = useState(false)

  // Calculate total
  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }, [cartItems])

  const handleQuantityChange = (itemId, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    }))
  }

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  const handleAddressSubmit = async (address, save) => {
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000'
      const userRaw = localStorage.getItem('User')

      if (save && userRaw) {
        const user = JSON.parse(userRaw)
        const userId = user._id || user.id
        try {
          const res = await fetch(`${API_BASE_URL}/auth/address`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, address })
          })
          const data = await res.json()
          if (res.ok && data.success) {
            localStorage.setItem('User', JSON.stringify(data.user))
          } else {
            toast.error(data.message || 'Failed to save address')
          }
        } catch (err) {
          console.error('Error saving address:', err)
          toast.error('Failed to save address')
        }
      }

      // Place order (for now just clear cart and show success)
      toast.success('Order placed successfully')
      setCartItems([])
      setShowAddressModal(false)
      setIsCart(false)
    } catch (err) {
      console.error('Checkout error:', err)
      toast.error('Checkout failed')
    }
  }

  return (
    <>
    <ClickAwayListener onClickAway={() => { if (!showAddressModal) setIsCart(false); }}>
      <div className="fixed top-0 right-0 h-screen w-full md:w-[450px] lg:w-[500px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
        {/* Cart Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
          <h2 className="text-xl md:text-2xl font-sans font-semibold text-gray-800">Shopping Cart</h2>
          <button 
            onClick={() => setIsCart(false)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="p-4 pb-48">
          {cartItems.length === 0 ? (
            /* Empty Cart Message */
            <div className="flex flex-col items-center justify-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-lg font-sans text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-sm text-gray-500 text-center">Add items to your cart to see them here</p>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-20 h-20 object-contain rounded bg-gray-50" 
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-medium text-gray-800 text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{formatINR(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button 
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={item.quantity <= 1}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed rounded transition-colors"
                      >
                        -
                      </button>
                      <span className="font-medium text-gray-800 min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                      >
                        +
                      </button>
                      <span className="text-sm text-gray-600 ml-auto">
                        {formatINR(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors self-start"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer - Checkout Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-4">
          {isAuthed ? (
            <>
                <div className="flex justify-between items-center text-lg font-sans">
                  <span className="text-gray-700">Total:</span>
                  <span className="font-semibold text-gray-900">{formatINR(total)}</span>
                </div>
                <button 
                  onClick={() => setShowAddressModal(true)}
                  disabled={cartItems.length === 0}
                  className="w-full bg-black text-white py-3 rounded-lg font-sans font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Proceed to Checkout
                </button>
              <button 
                onClick={() => setIsCart(false)}
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-sans font-medium hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800">
                <span>Login to manage your cart and checkout</span>
              </div>
              <button 
                onClick={() => { setIsCart(false); setIsMyaccount(true); }}
                className="w-full bg-primary/90 text-white py-3 rounded-lg font-sans font-medium hover:bg-primary transition-colors"
              >
                Login to Continue
              </button>
              <button 
                onClick={() => setIsCart(false)}
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-sans font-medium hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </button>
            </>
          )}
        </div>
      </div>
    </ClickAwayListener>
    {showAddressModal && (
      <AddressModal
        initialAddress={(() => {
          const u = localStorage.getItem('User')
          if (!u) return {}
          try {
            const parsed = JSON.parse(u)
            const last = parsed.addresses && parsed.addresses.length > 0 ? parsed.addresses[parsed.addresses.length - 1] : {}
            return last || {}
          } catch (e) {
            return {}
          }
        })()}
        onClose={() => setShowAddressModal(false)}
        onSubmit={handleAddressSubmit}
      />
    )}
    </>
  )
}
