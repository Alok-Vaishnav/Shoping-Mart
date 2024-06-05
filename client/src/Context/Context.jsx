import React, { useState } from 'react'
import { MyContext } from './MyContext'

export default function Context({ 
    children
 }) {
    const [IsSignup, setIsSignup] = useState(false);
    const [IsMyaccount, setIsMyaccount] = useState(false);
    const [IsProfile, setIsProfile] = useState(false)
    const [IsOrder, setIsOrder] = useState(false)
    const [IsCategory, setIsCategory] = useState(false);
    const [IsmyProducts, setIsmyProducts] = useState(false)

    return (

        <>
            <MyContext.Provider value={{ IsSignup, setIsSignup,IsMyaccount, setIsMyaccount,IsCategory,  IsProfile, setIsProfile, IsOrder, setIsOrder, IsmyProducts, setIsmyProducts,setIsCategory}}>
                {children}
            </MyContext.Provider>
        </>
    )
}
