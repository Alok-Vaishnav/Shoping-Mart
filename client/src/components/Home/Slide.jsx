import React, { useState } from 'react'
import Image1 from "../../../src/assets/Image/Image1.jpg"
import Image2 from "../../../src/assets/Image/Image2.jpg"


export default function Slide() {

    const handleNext = () => {
        if (index >= images.length - 1) {
            setindex(0)
        }
        else {
            setindex(index + 1)
        }
    }

    const handlePrev = () => {
        if (index === 0) {
            setindex(images.length - 1)
        }
        else {
            setindex(index - 1)
        }
    }
    const [index, setindex] = useState(0)
    const images = [Image1, Image2]

    return (
        <div className="h-[300px] md:h-[450px] lg:h-[650px] w-full flex flex-row relative border-t-2 border-gray-500">
            <div className="h-full w-full flex flex-row">
                <div className="h-[25px] md:h-[30px] w-[25px] md:w-[30px] absolute top-[50%] md:top-[45%] left-[1%] md:left-[2%] transition-all duration-100 ease-in cursor-pointer bg-white rounded-full flex justify-center items-center text-black hover:bg-gray-500 hover:transition-all hover:duration-200 hover:ease-in"
                    onClick={handlePrev}>
                    <i className="fa-solid fa-chevron-left"></i>

                </div>

                <div className="h-full w-full flex flex-row">
                    <img src={images[index]} alt={`Promotional slide ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute h-[25px] md:h-[30px] w-[25px] md:w-[30px] top-[50%] md:top-[45%] right-[1%] md:right-[2%] transition-all duration-100 ease-in cursor-pointer bg-white rounded-full flex justify-center items-center text-black hover:bg-gray-500 hover:transition-all hover:duration-200 hover:ease-in"
                    onClick={handleNext}
                ><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    )
}
