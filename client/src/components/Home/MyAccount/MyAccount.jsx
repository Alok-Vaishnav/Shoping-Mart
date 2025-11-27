import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../../Context/MyContext';
import ClickAwayListener from 'react-click-away-listener';
export default function MyAccount() {

  const { setIsProfile,  setIsOrderstatus, setIsMyaccount } = useContext(MyContext);
  

  return (
    <ClickAwayListener onClickAway={()=>{
      setIsMyaccount(false)
      setIsProfile(false)
      setIsOrderstatus(false)
    }}>
    <div
      className="h-[300px] md:h-[350px] lg:h-[450px] w-full absolute bottom-0 z-[9999] transition-all duration-[2s] ease-in bg-white">
      <div
        className="h-[70px] md:h-[80px] lg:h-[100px] w-full absolute top-0 border-b-2 border-[#7171713f]">
        <h1 className="text-xl md:text-[25px] lg:text-[35px] font-sans font-thin pt-5 md:pt-[25px] lg:pt-[30px] pl-5 md:pl-10 lg:pl-20">Your Account</h1>
      </div>

      <div className="h-[230px] md:h-[270px] lg:h-[350px] w-full flex flex-col md:flex-row absolute top-[23%] md:top-[22%]">

        <div className="h-[45%] md:h-full w-full md:w-[30%] lg:w-[30%] md:border-r-2 border-b-2 md:border-b-0 border-[#7171713f] flex flex-col">
          <div className="h-[50px] md:h-[60px] lg:h-[80px] w-full border-b-2 border-[#7171713f] flex justify-start items-center">
            <li className="list-none">
              <Link onClick={() => setIsProfile(p => !p)} className="text-center no-underline text-black text-sm md:text-base lg:text-xl font-sans ml-5 md:ml-[30px] lg:ml-[50px]">
                Your Profile
              </Link>
            </li>

          </div>

          <div className="h-[50px] md:h-[60px] lg:h-[80px] w-full border-b-2 border-[#7171713f] flex justify-start items-center">
            <li className="list-none">
              <Link onClick={() =>  setIsOrderstatus(p => !p)} className="text-center no-underline text-black text-sm md:text-base lg:text-xl font-sans ml-5 md:ml-[30px] lg:ml-[50px]">
                Your Order
              </Link>
            </li>
          </div>

        </div>
      </div>
    </div>
    </ClickAwayListener>
  )
}
