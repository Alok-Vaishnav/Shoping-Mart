import React, { useContext } from 'react'
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../../Context/MyContext';

export default function Order() {
  const { setIsOrder } = useContext(MyContext);
  return (
    <ClickAwayListener onClickAway={() => setIsOrder(false)}>
      <div className="fixed bottom-0 left-0 lg:left-[30%] z-[9999] h-[44%] w-full min-h-[150px] md:min-h-[200px]">
        <h1 className="mt-[30px] md:mt-[50px] lg:mt-[130px] text-center lg:text-left lg:ml-[350px] text-2xl md:text-[32px] lg:text-[50px] p-0 md:p-[10px]">Work On It</h1>
      </div>
    </ClickAwayListener >
  )
}
