import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Styles from "../../../styles/Home/Navbar/Support.module.css"
import Img from "../../../../src/assets/Image/Styles.jpg"
export default function Support() {


    // const navigate = useNavigate();


    // useEffect(() => {
    //     const auth = localStorage.getItem("User");
    //     if (!auth) {

    //         navigate("/signup")
    //     }
    // }, [])

    return (
        <div className={Styles.Container}>
            <nav className={Styles.navbar}>
                <h1 className={Styles.Heading}>
                    Shoping-Mart
                </h1>

                <li className={Styles.home}>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </nav>

            <div className={Styles.main}>
                <img
                    id={Styles.leftImage}
                    className={Styles.image}
                    src={Img}
                    alt='Styles' >

                </img>

                <div className={Styles.searchContainer}>
                    <h1
                        className={Styles.helpHeading}>
                        Hey, how can we help you?
                    </h1>

                    <div className={Styles.LabelContainer}>
                        <label className={Styles.Searchlabel}>Search</label>
                    </div>
                    
                    <input
                        className={Styles.HelpInput}
                        type="search" />
                </div>

                <img
                    id={Styles.RightImage}
                    className={Styles.image}
                    src={Img}
                    alt='Styles' >
                </img>

            </div>

        </div>
    )
}
