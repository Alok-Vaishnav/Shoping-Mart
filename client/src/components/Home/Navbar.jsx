import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/MyContext';
import Cart from "../../assets/cart.svg"

function Navbar() {
    const { setIsMyaccount, setnotfound, setIsSignup, setIsmyProducts, setIsCart, cartItems } = useContext(MyContext);
    const [search, setSearch] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    async function getSearch() {
        try {
            const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
            const q = (search || '').trim();
            if (!q) {
                setIsmyProducts([]);
                setnotfound(false);
                return;
            }

            const res = await fetch(`${API_BASE_URL}/products/search?query=${encodeURIComponent(q)}`, {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json'
                },
            });

            if (!res.ok) {
                throw new Error(`Search failed: ${res.status}`);
            }

            const data = await res.json();
            console.log('Search results:', data);

            if (Array.isArray(data) && data.length > 0) {
                setIsmyProducts(data);
                setnotfound(false);
            } else {
                setIsmyProducts([]);
                setnotfound(true);
            }
        } catch (err) {
            console.error('Search error:', err);
            setIsmyProducts([]);
            setnotfound(true);
        }
    }

    function handleChange(e) {
        const val = e.target.value;
        setSearch(val);
        // Trigger search only when user types something
        if (val && val.trim().length > 0) {
            getSearch();
        } else {
            setIsmyProducts([]);
            setnotfound(false);
        }
    }

    return (
        <div className="fixed z-30 h-[60px] w-full bg-[rgb(20,20,20)] px-3 md:px-6">
            <div className="flex h-full items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <h1 className="cursor-pointer font-sans text-base font-thin text-white md:text-lg lg:text-xl">
                        Shopping-Cart
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden h-full flex-1 items-center justify-between md:flex md:px-6 lg:px-8">
                    {/* Nav Links */}
                    <ul className="flex list-none items-center gap-6 lg:gap-8">
                        <li>
                            <Link className="cursor-pointer font-sans text-sm font-thin text-white no-underline transition-colors hover:text-gray-400 lg:text-base">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link to="/Support" className="cursor-pointer font-sans text-sm font-thin text-white no-underline transition-colors hover:text-gray-400 lg:text-base">
                                Support
                            </Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <div className="relative mx-4 flex-1 max-w-md">
                        <input
                            type="search"
                            className="h-9 w-full rounded-lg border-none px-3 text-sm font-sans placeholder:text-gray-500 lg:h-10"
                            placeholder="Search Product"
                            value={search}
                            onChange={handleChange}
                        />
                        <label className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" onClick={getSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-gray-500">
                                <path d="M21.707 20.293l-5.446-5.447c1.033-1.566 1.646-3.445 1.646-5.493C17.907 4.917 14.99 2 11.453 2 7.916 2 5 4.917 5 8.454c0 3.537 2.917 6.454 6.454 6.454 2.048 0 3.927-.613 5.493-1.646l5.446 5.447a1 1 0 0 0 1.414-1.414zM11.453 12.908c-2.754 0-4.999-2.245-4.999-4.999S8.699 2.91 11.453 2.91s4.999 2.245 4.999 4.999-2.245 4.999-4.999 4.999z" />
                            </svg>
                        </label>
                    </div>

                    {/* User & Cart Icons */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        <Link className="cursor-pointer text-white transition-colors hover:text-primary">
                            <i
                                className="fa-solid fa-user text-lg lg:text-xl"
                                onClick={() => {
                                    setIsMyaccount(p => !p)
                                    setIsSignup(true)
                                }}
                            />
                        </Link>
                        <button onClick={() => setIsCart(p => !p)} className="cursor-pointer relative" aria-label="Open cart">
                            <span className="inline-flex items-center">
                                <img src={Cart} alt="Cart" className="h-6 w-6 lg:h-7 lg:w-7 filter invert" />
                                <span className="sr-only">Cart</span>
                            </span>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="flex items-center gap-3 md:hidden">
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white p-1"
                        aria-label="Toggle menu"
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>

                    {/* Mobile Icons */}
                    <Link className="text-white">
                        <i
                            className="fa-solid fa-user text-base"
                            onClick={() => {
                                setIsMyaccount(p => !p)
                                setIsSignup(true)
                            }}
                        />
                    </Link>
                    <button onClick={() => setIsCart(p => !p)} className="relative">
                        <img src={Cart} alt="Cart" className="h-5 w-5 filter invert" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold text-[10px]">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute left-0 top-[60px] w-full bg-[rgb(20,20,20)] border-t border-gray-700 md:hidden">
                    <div className="flex flex-col p-4 space-y-4">
                        {/* Mobile Search */}
                        <div className="relative w-full">
                            <input
                                type="search"
                                className="h-9 w-full rounded-lg border-none px-3 text-sm font-sans placeholder:text-gray-500"
                                placeholder="Search Product"
                                value={search}
                                onChange={handleChange}
                            />
                            <label className="absolute right-2 top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-gray-500">
                                    <path d="M21.707 20.293l-5.446-5.447c1.033-1.566 1.646-3.445 1.646-5.493C17.907 4.917 14.99 2 11.453 2 7.916 2 5 4.917 5 8.454c0 3.537 2.917 6.454 6.454 6.454 2.048 0 3.927-.613 5.493-1.646l5.446 5.447a1 1 0 0 0 1.414-1.414zM11.453 12.908c-2.754 0-4.999-2.245-4.999-4.999S8.699 2.91 11.453 2.91s4.999 2.245 4.999 4.999-2.245 4.999-4.999 4.999z" />
                                </svg>
                            </label>
                        </div>

                        {/* Mobile Nav Links */}
                        <Link
                            className="text-white font-sans text-base py-2 border-b border-gray-700 hover:text-gray-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Categories
                        </Link>
                        <Link
                            to="/Support"
                            className="text-white font-sans text-base py-2 border-b border-gray-700 hover:text-gray-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Support
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
