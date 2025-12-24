import React, { useState, useEffect } from 'react'
import { MyContext } from './MyContext'

export default function Context({ 
    children
 }) {
    const [IsSignup, setIsSignup] = useState(false);
    const [IsMyaccount, setIsMyaccount] = useState(false);
    const [IsProfile, setIsProfile] = useState(false);
    const [IsOrderstatus, setIsOrderstatus] = useState(false);
    const [Iscart, setIsCart] = useState(false);
    const [IsmyProducts, setIsmyProducts] = useState([]);
    const [notfound, setnotfound] = useState(false);
    
    // Initialize cart from localStorage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : []
    });
    
    const [pendingCartItem, setPendingCartItem] = useState(null);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    return (

        <>
            <MyContext.Provider value={{ 
                IsSignup, setIsSignup,
                IsMyaccount, setIsMyaccount,
                IsProfile, setIsProfile,
                IsOrderstatus, setIsOrderstatus,
                Iscart, setIsCart,
                IsmyProducts, setIsmyProducts,
                notfound, setnotfound,
                cartItems, setCartItems,
                pendingCartItem, setPendingCartItem
            }}>
                {children}
            </MyContext.Provider>
        </>
    )
}
