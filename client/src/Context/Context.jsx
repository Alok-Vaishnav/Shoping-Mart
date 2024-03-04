import React, { useState } from 'react'
import { MyContext } from './MyContext'

export default function Context({ children }) {
    const [isCategory, setIsCategory] = useState(false);
    const [IsMyaccount, setIsMyaccount,] = useState(false);
    const [myProducts, setmyProducts] = useState([]);
    const [notfound, setnotfound] = useState(false)
    const [Cart, setCart] = useState(false);
    return (

        <>
            <MyContext.Provider value={{ isCategory, setIsCategory,IsMyaccount, setIsMyaccount, myProducts, setmyProducts, Cart, setCart, notfound, setnotfound }}>
                {children}
            </MyContext.Provider>
        </>
    )
}
