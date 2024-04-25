import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import Styles from "../../../../src/styles/Home/Navbar/Navbar.module.css";
import { MyContext } from '../../../Context/MyContext';
// import logo from '../../assets/Image/logo.jpg';
import Cart from "../../../../src/assets/cart.svg"

function Navbar() {
    const { setIsMyaccount, setnotfound, setIsSignup, setIsmyProducts } = useContext(MyContext);
    const [search, setSearch] = useState("");

    async function getSearch() {
        let Searches = await fetch(`http://localhost:5000/products/search?query=${search}`, {
            method: "get",
            headers: {
                "Content-Type": 'application/json'
            },
        });

        Searches = await Searches.json();
        console.log(Searches.length)

        if (Searches?.length === 0 || !Searches) {
            setIsmyProducts(true)
            setnotfound(false)
            setIsmyProducts("Product Not Found")
        }
        else {
            setIsmyProducts(p => Searches)
        }
    }

    function handleChange(e) {
        setSearch(p => e.target.value)
        getSearch()
    }

    return (
        <div className={Styles.container}>
            <h1 className={Styles.heading}>Shopimg-Cart</h1>
            <nav className={Styles.Navbar}>
                <ul className={Styles.navul}>

                    <li className={Styles.Categories}>
                        <Link>
                            Categories
                        </Link>
                    </li>

                    <li className={Styles.Support}>
                        <Link to="/Support">Support</Link>
                    </li>

                </ul>
                <div className={Styles.searchContainer}>
                    
                    <input
                        type="search"
                        className={Styles.Search}
                        placeholder="Search Product"
                        value={search}
                        onChange={handleChange}
                    />

                    <label htmlFor="search" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            className={Styles.searchIcon}
                        >
                            <path d="M21.707 20.293l-5.446-5.447c1.033-1.566 1.646-3.445 1.646-5.493C17.907 4.917 14.99 2 11.453 2 7.916 2 5 4.917 5 8.454c0 3.537 2.917 6.454 6.454 6.454 2.048 0 3.927-.613 5.493-1.646l5.446 5.447a1 1 0 0 0 1.414-1.414zM11.453 12.908c-2.754 0-4.999-2.245-4.999-4.999S8.699 2.91 11.453 2.91s4.999 2.245 4.999 4.999-2.245 4.999-4.999 4.999z" />
                        </svg>
                    </label>
                </div>

                <li
                    className={Styles.Profile}>
                    <Link>
                        <i
                            className="fa-solid fa-user"
                            onClick={() =>{
                                setIsMyaccount(p => !p)
                                setIsSignup(p=>!p)
                            } }>

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
