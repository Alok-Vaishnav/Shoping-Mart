import React, { useContext } from 'react'
import Styles from "../../../styles/Home/MyAccount/Order.module.css"
import ClickAwayListener from 'react-click-away-listener';
import { MyContext } from '../../../context/MyContext';

export default function Order() {
  const { setIsOrder } = useContext(MyContext);
  return (
    <ClickAwayListener onClickAway={() => setIsOrder(false)}>
      <div className={Styles.Container}>
        <h1 className={Styles.Heading}>Work On It</h1>
      </div>
    </ClickAwayListener >
  )
}
