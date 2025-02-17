import React from "react";

function Navbar() {
    return (
        <div className="flex items-center justify-between bg-white h-[55.28px] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] mb-8 p-1">


                <img className="ml-5 mr-2  rounded-[9.58px]  bg-[#0034D1] h-[76%]  w-[8%] border-blue-500 "
 src="https://s3-alpha-sig.figma.com/img/9533/58bd/8fcfa53cf99bf9ff2ab7efd0b2189fa1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GjyOxVImGx3QYF2w5P5o6z1zp3qxhGbS2X9NvHVrCZUc7deaR~yAQmibtQujacykCdD-jKWxgNNLU1dSWmNQWXIFe~trJBTMAXz7DuzQTY-dJ89OfOgVZPz~jD5rJE3H3Naul5aYpY47JXAALxN9mVBsuUYLl5uowGCOYzB-iPruFPXI8EYfw7MIn7Kz1TVikh62aD1AS1dKv74EE4oB2NO80xY9zWVDQa2575nqG6mXlwyKdKIFlRqI0vIEbZiypWPGOsS~U5VnAPB6i6i2~uJGs5L~SBeEDL7-U-w6ZFf3cKHDwivGZ2yDo9PRuk8at4CkRHskK-0y4AChLAzVyQ__" alt="" />

            <div className="flex-1 flex justify-center">
                <ul className=" text-s font-inter sm:text-base md:text-lg lg:text-lg flex gap-5 font-normal text-gray-950 dark:text-black">
                    <li>Job Search</li>
                    <li>My Application</li>
                    <li>Companies</li>
                    <li>Contact Us</li>
                </ul>
            </div>

 
            <div className="font-open-sans flex justify-center items-center p-4 ">
                <button className="h-9  w-28 text-black mr-4 shadow-lg hover:bg-[#0034D1] hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 border-[1.5px] border-blue-500 ">
                    Login
                </button>
                <button className="h-9 w-28 text-black mr-4 shadow-lg hover:bg-[#0034D1] hover:text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 border-[1.5px] border-blue-500">
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;