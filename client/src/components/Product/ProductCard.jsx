import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContext'
import { toast } from 'react-toastify'

const formatINR = (value) => {
  if (value == null || isNaN(value)) return '';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);
}

function ProductCard({ id, thumbnail, title, description, rating, price, ...rest }) {
  const { setIsMyaccount, setIsCart, cartItems, setCartItems, setPendingCartItem } = useContext(MyContext)
  const product = { id, thumbnail, title, description, rating, price, ...rest }

  const handleAddToCart = () => {
    const isAuthed = Boolean(localStorage.getItem('User'))
    
    if (!isAuthed) {
      // Store item to add after login
      setPendingCartItem(product)
      toast.info('Please login to add items to cart')
      setIsMyaccount(true)
      return
    }

    // Check if item already in cart
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      // Increase quantity
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
      toast.success('Quantity updated in cart')
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }])
      toast.success('Added to cart')
    }
    
    setIsCart(true)
  }
  
  return (
    <div className="group relative flex w-full max-w-[280px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg sm:max-w-[300px] lg:max-w-[320px]">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img 
          src={thumbnail} 
          alt={title || "Product"} 
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-sm font-medium text-gray-900 sm:text-base">
            {title}
          </h3>
          
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900 sm:text-xl">
              {formatINR(price)}
            </p>
            {rating && (
              <div className="flex items-center gap-1">
                <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span className="text-sm text-gray-600">{rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
            onClick={handleAddToCart}
          className="mt-4 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default ProductCard;
