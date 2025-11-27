import React, { useContext } from 'react'
import { MyContext } from '../../../Context/MyContext'
import ClickAwayListener from 'react-click-away-listener'

export default function CartBox() {
  const { setIsCart, setIsMyaccount } = useContext(MyContext)
  const isAuthed = Boolean(localStorage.getItem('User'))

  return (
    <ClickAwayListener onClickAway={() => setIsCart(false)}>
      <div className="fixed top-0 right-0 h-screen w-full md:w-[450px] lg:w-[500px] bg-white shadow-2xl z-[99999] transform transition-transform duration-300 ease-in-out overflow-y-auto">
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
        <div className="p-4">
          {/* Empty Cart Message */}
          <div className="flex flex-col items-center justify-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-lg font-sans text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-sm text-gray-500 text-center">Add items to your cart to see them here</p>
          </div>

          {/* Cart Items will go here */}
          {/* Uncomment when you have cart items
          <div className="space-y-4">
            <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
              <img src="" alt="Product" className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-sans font-medium text-gray-800">Product Name</h3>
                <p className="text-sm text-gray-600">$99.99</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>1</span>
                  <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          */}
        </div>

        {/* Cart Footer - Checkout Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-4">
          {isAuthed ? (
            <>
              <div className="flex justify-between items-center text-lg font-sans">
                <span className="text-gray-700">Total:</span>
                <span className="font-semibold text-gray-900">$0.00</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-sans font-medium hover:bg-gray-800 transition-colors">
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
  )
}
