import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import HomePage from "./homepage";
import React from "react"
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";


function LoginPage() {
    return (
        <div className="flex h-screen">
            {/* Background Image Section */}
            <div className="bg-[url(./assets/loginpg.png)] w-[50%] bg-cover bg-center"></div>

            {/* Login Form Section */}
            <div className="flex items-center justify-center w-1/2">
                <div className=" ">
                <img className="mb-[15px] rounded-[4px]  bg-[#0034D1] h-[80%]  w-[30%] border-blue-500 "
 src="https://s3-alpha-sig.figma.com/img/9533/58bd/8fcfa53cf99bf9ff2ab7efd0b2189fa1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GjyOxVImGx3QYF2w5P5o6z1zp3qxhGbS2X9NvHVrCZUc7deaR~yAQmibtQujacykCdD-jKWxgNNLU1dSWmNQWXIFe~trJBTMAXz7DuzQTY-dJ89OfOgVZPz~jD5rJE3H3Naul5aYpY47JXAALxN9mVBsuUYLl5uowGCOYzB-iPruFPXI8EYfw7MIn7Kz1TVikh62aD1AS1dKv74EE4oB2NO80xY9zWVDQa2575nqG6mXlwyKdKIFlRqI0vIEbZiypWPGOsS~U5VnAPB6i6i2~uJGs5L~SBeEDL7-U-w6ZFf3cKHDwivGZ2yDo9PRuk8at4CkRHskK-0y4AChLAzVyQ__" alt="" />

                    <p className="font-inter font-[600] mb-[15px] text-[28px] leading-[43.57px]">Log in to your account</p>
                    <div className="mb-5">
                        <div className="flex w-fill h-hug rounded-lg border border-gray-300 p-top p-right p-bottom p-left mb-3">
                            <IoPersonOutline className="ml-2 mt-[11px] " />
                            <input type="firsname" className="block w-full p-2" placeholder="First Name" />  
                        </div>
                        <div className="flex w-fill h-hug rounded-lg border border-gray-300 p-top p-right p-    bottom p-left mb-3">
                            <IoPersonOutline className="ml-2 mt-[11px]" />         
                            <input type="lastname" className="block w-full p-2" placeholder="Last Nae" />  
                        </div>  
                    </div>
                    <Link to="/home" className="block  w-full bg-[#0034D1] text-white p-2 mb-2 text-center">
                        Login
                    </Link> 
                    <div className="text-center">--- or ---</div>
                    <div className="flex bg-red-100 mt-2">
                        <div className=" bg-[url(./assets/Social_Button.png)] w-[50px] h-fit bg-cover bg-center"/>
                        <div className=" bg-[url(./assets/Social_Button.png)] w-[56px] bg-cover bg-center"/>
                    </div>
                    <div className="flex">
                        <h1 className="mr-2">Don't have an account? </h1>
                        <Link className="color-red-100" to='/singup' >Sign Up</Link>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;