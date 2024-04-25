import React, { useState } from 'react'
import { MyContext } from './MyContext'

export default function Context({ children }) {
    const [IsSignup, setIsSignup] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isCategory, setIsCategory] = useState(false);
    const [notfound, setnotfound] = useState(false)
    const [IsMyaccount, setIsMyaccount] = useState(false);
    const [IsProfile, setIsProfile] = useState(false)
    const [IsOrder, setIsOrder] = useState(false)
    const [Cart, setCart] = useState(false);
    const [IsmyProducts, setIsmyProducts] = useState(false)

    return (

        <>
            <MyContext.Provider value={{ IsSignup, setIsSignup, isLogin, setIsLogin ,isCategory, setIsCategory, notfound, setnotfound, IsMyaccount, setIsMyaccount, IsProfile, setIsProfile, IsOrder, setIsOrder, Cart, setCart, IsmyProducts, setIsmyProducts }}>
                {children}
            </MyContext.Provider>
        </>
    )
}
