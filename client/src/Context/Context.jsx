import React, { useState } from 'react'
import { MyContext } from './MyContext'

export default function Context({ children }) {
    const [isCategory, setIsCategory] = useState(false);
    const [myProducts, setmyProducts] = useState([]);
    const [notfound, setnotfound] = useState(false)
    const [IsMyaccount, setIsMyaccount] = useState(false);
    const[IsProfile,setIsProfile]=useState(false)
    const[IsOrder,setIsOrder]=useState(false)
    const [Cart, setCart] = useState(false);
    return (

        <>
            <MyContext.Provider value={{ isCategory, setIsCategory, myProducts, setmyProducts, notfound, setnotfound,IsMyaccount, setIsMyaccount,IsProfile,setIsProfile,IsOrder,setIsOrder,Cart, setCart }}>
                {children}
            </MyContext.Provider>
        </>
    )
}
