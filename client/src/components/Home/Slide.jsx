import React, { useState } from 'react'
import Style from "../../styles/Home/Slide.module.css"
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
        <div className={Style.container}>
            <div className={Style.ImageContainer}>
                <div className={Style.prev}
                    onClick={handlePrev}>
                    <i className="fa-solid fa-chevron-left"></i>

                </div>

                <div className={Style.SlidePanel}>
                    <img src={images[index]} alt='ads' />
                </div>
                <div className={Style.next}
                    onClick={handleNext}
                ><i className="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    )
}
