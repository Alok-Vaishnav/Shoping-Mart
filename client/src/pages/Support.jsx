import React from 'react'
import { Link} from 'react-router-dom';
import Img from "../assets/Image/Styles.jpg"

export default function Support() {


    // const navigate = useNavigate();


    // useEffect(() => {
    //     const auth = localStorage.getItem("User");
    //     if (!auth) {

    //         navigate("/signup")
    //     }
    // }, [])

    return (
        <div className="h-screen w-screen flex flex-col">
            <nav className="h-[10%] w-full flex items-center justify-between">
                <h1 className="text-left pl-[5%] text-2xl md:text-[30px] font-sans font-extralight text-black cursor-pointer">
                    Shoping-Mart
                </h1>

                <li className="list-none">
                    <Link to="/" className="pr-[20px] md:pr-[60px] no-underline text-base md:text-lg text-black font-sans">
                        Shop
                    </Link>
                </li>
            </nav>

            <div className="h-[40%] w-full flex flex-row justify-around bg-black">
                <img
                    className="w-[12%] h-[70%] mt-[3%] cursor-pointer ml-[10%]"
                    src={Img}
                    alt='Styles' >

                </img>

                <div className="h-full w-[50%]">
                    <h1
                        className="text-center pt-[10%] text-white cursor-pointer">
                        Hey, how can we help you?
                    </h1>

                    <div className="flex justify-center items-center w-[12%] h-[12%] relative top-[12%] bg-secondary rounded-tl-[10px] rounded-bl-[10px]">
                        <label className="text-white text-lg font-thin cursor-pointer">Search</label>
                    </div>
                    
                    <input
                        className="h-[12%] w-[90%] p-[10px] relative left-[12%] text-xl"
                        type="search" />
                </div>

                <img
                    className="w-[12%] h-[70%] mt-[3%] cursor-pointer mr-[10%]"
                    src={Img}
                    alt='Styles' >
                </img>

            </div>

        </div>
    )
}
