import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import Styles from "../../../../src/styles/Home/Navbar/Navbar.module.css";
import { MyContext } from '../../../Context/MyContext';
// import logo from '../../assets/Image/logo.jpg';
import Cart from "../../../../src/assets/cart.svg"

function Navbar() {
    const { setIsCategory, setIsMyaccount, setmyProducts, notfound, setnotfound } = useContext(MyContext);
    const [search, setSearch] = useState("")
    const navigate=useNavigate()
    // useEffect(() => {
    //     const auth = localStorage.getItem("User");
    //     if (!auth) {
    //         navigate("/login")
    //     }
    // }, [])

    // async function getSearch() {
    //     let Searches = await fetch(`http://localhost:5000/Search?query=${search}`, {
    //         method: "get",
    //         headers: {
    //             "Content-Type": 'application/json'
    //         },
    //     });
    //     Searches = await Searches.json();
    //     console.log(Searches)
    //     if (Searches.result) {
    //         setnotfound(true)
    //         setmyProducts("")
    //     }
    //     else {
    //         setmyProducts(p => Searches)
    //     }
    // }
    // function handleChange(e) {
    //     setSearch(p => e.target.value)
    //     getSearch()

    // }

    return (
        <div className={Styles.container}>
            <h1 className={Styles.heading}>Shopimg-Cart</h1>
            <nav className={Styles.Navbar}>
                <ul className={Styles.navul}>

                    <li className={Styles.Categories}>
                        <Link

                            onClick={() => setIsCategory(p => !p)}>
                            Categories
                        </Link>
                    </li>

                    <li className={Styles.Support}>
                        <Link to="/Support">Support</Link>
                    </li>

                </ul>

                <input type="search" className={Styles.Search} placeholder='Search Product' />
                <li
                    className={Styles.Profile}>
                    <Link>
                        <i
                            className="fa-solid fa-user"
                            onClick={() => setIsMyaccount(p => !p)}>

                        </i>

                    </Link>
                </li>

                <div className={Styles.Cart}>
                    <img src={Cart} alt="Cart" />
                </div>
            </nav>



        </div>
    )
}

export default Navbar;
