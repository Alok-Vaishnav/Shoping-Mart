import React, { useContext } from 'react'
import { MyContext } from '../../Context/MyContext';
import Signup from './Signup';
import Login from './Login';

export default function Auth() {
    const { IsSignup } = useContext(MyContext);
  return (
    <div>
      {
        IsSignup?<Signup/>:<Login/>
      }
    </div>
  )
}
