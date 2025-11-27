import React from 'react'
import iPhone from '../../assets/Image/Phone.jpg'


export default function Categories() {
  return (
    <div className="w-full h-auto min-h-[120px] md:h-[130px] lg:h-[150px] flex flex-row justify-evenly items-center border-t-[3px] border-b-[1.5px] border-gray-500 flex-wrap p-[10px_5px] md:p-[10px_0] gap-[5px] md:gap-0">
      <div className="h-[100px] md:h-[110px] lg:h-[130px] w-[70px] md:w-[90px] lg:w-[110px] overflow-hidden">
        <img src={iPhone} alt="phone" className="w-full h-[70%] md:h-[80%] object-contain cursor-pointer" />
        <h1 className="font-sans text-[11px] md:text-[13px] lg:text-[15px] text-center cursor-pointer text-[brown] mt-[5px] md:mt-0">iPhone</h1>
      </div>

      <div className="h-[100px] md:h-[110px] lg:h-[130px] w-[70px] md:w-[90px] lg:w-[110px] overflow-hidden">
        <img src={iPhone} alt="" className="w-full h-[70%] md:h-[80%] object-contain cursor-pointer" />
        <h1 className="font-sans text-[11px] md:text-[13px] lg:text-[15px] text-center cursor-pointer text-[brown] mt-[5px] md:mt-0">iPhone</h1>
      </div>

      <div className="h-[100px] md:h-[110px] lg:h-[130px] w-[70px] md:w-[90px] lg:w-[110px] overflow-hidden">
        <img src="https://media.croma.com/image/upload/v1708672572/Croma%20Assets/Communication/Mobiles/Images/261932_0_bieudy.png" alt="" className="w-full h-[70%] md:h-[80%] object-contain cursor-pointer" />
        <h1 className="font-sans text-[11px] md:text-[13px] lg:text-[15px] text-center cursor-pointer text-[brown] mt-[5px] md:mt-0">iPhone</h1>
      </div>

      <div className="h-[100px] md:h-[110px] lg:h-[130px] w-[70px] md:w-[90px] lg:w-[110px] overflow-hidden">
      <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_5_3.png" alt="" className="w-full h-[70%] md:h-[80%] object-contain cursor-pointer" />
        <h1 className="font-sans text-[11px] md:text-[13px] lg:text-[15px] text-center cursor-pointer text-[brown] mt-[5px] md:mt-0">iPhone</h1>
      </div>

      <div className="h-[100px] md:h-[110px] lg:h-[130px] w-[70px] md:w-[90px] lg:w-[110px] overflow-hidden">
        <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_5_3.png" alt="" className="w-full h-[70%] md:h-[80%] object-contain cursor-pointer" />
        <h1 className="font-sans text-[11px] md:text-[13px] lg:text-[15px] text-center cursor-pointer text-[brown] mt-[5px] md:mt-0">iPhone</h1>
      </div>

    </div>
  )
}
