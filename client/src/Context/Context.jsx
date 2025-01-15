import React, { useState } from 'react'
import { MyContext } from './MyContext'

export default function Context({ 
    children
 }) {
    const [IsSignup, setIsSignup] = useState(false);
    const [IsMyaccount, setIsMyaccount] = useState(false);
    const [IsProfile, setIsProfile] = useState(false);
    const [IsOrderstatus, setIsOrderstatus] = useState(false);
    const[Iscart,setIsCart]=useState(false);

    return (

        <>
            <MyContext.Provider value={{ IsSignup, setIsSignup,IsMyaccount, setIsMyaccount,  IsProfile, setIsProfile, IsOrderstatus, setIsOrderstatus,Iscart,setIsCart}}>
                {children}
            </MyContext.Provider>
        </>
    )
}
