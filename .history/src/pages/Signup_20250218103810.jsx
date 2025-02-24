import { Button } from "@mui/material";
import React from "react"
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";



function SignUp() {
    return(
        <div className="flex h-screen ">
            <div className="flex items-center justify-center w-1/2">
              <div className="w-[466px] ">
              <img className="mb-[15px] rounded-[4px]  bg-[#0034D1] h-[80%]  w-[30%] border-blue-500 "
 src="https://s3-alpha-sig.figma.com/img/9533/58bd/8fcfa53cf99bf9ff2ab7efd0b2189fa1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GjyOxVImGx3QYF2w5P5o6z1zp3qxhGbS2X9NvHVrCZUc7deaR~yAQmibtQujacykCdD-jKWxgNNLU1dSWmNQWXIFe~trJBTMAXz7DuzQTY-dJ89OfOgVZPz~jD5rJE3H3Naul5aYpY47JXAALxN9mVBsuUYLl5uowGCOYzB-iPruFPXI8EYfw7MIn7Kz1TVikh62aD1AS1dKv74EE4oB2NO80xY9zWVDQa2575nqG6mXlwyKdKIFlRqI0vIEbZiypWPGOsS~U5VnAPB6i6i2~uJGs5L~SBeEDL7-U-w6ZFf3cKHDwivGZ2yDo9PRuk8at4CkRHskK-0y4AChLAzVyQ__" alt="" />
                 <h1 className="font-inter font-[600] mb-[10px]">Create your account</h1>
                 <div className="flex flex-col">
                        <div className="flex items-center justify-center  border-gray-200 border-2">
                            <IoPerson />
                            <input type="firsname" className="block w-full mb-2 p-2" placeholder="First Name" />  
                        </div>
                        <div className="flex items-center justify-center  border-gray-200 border-2">
                            <IoPerson />
                            <input type="lastname" className="block w-full mb-2 p-2" placeholder="Last Nae" />  
                        </div>
                        <div className="flex items-center justify-center  border-gray-200 border-2">
                            < MdOutlineMailOutline className="ml-2" />
                            <input type="email" className="block w-full  p-2" placeholder="Email" />  
                        </div>
                        <div>
                        <input type="password" className="block w-full mb-2 p-2" placeholder="Password" />  
                        </div>
                        <div>
                        <input type="comfirmpassword" className="block w-full mb-2 p-2" placeholder="Comfirm Password" />  
                        </div>
                 </div>
                 <button className="block  w-full bg-[#0034D1] text-white p-2 mb-2 text-center">
                 Create account   
                 </button>
                 <div>----or-----</div>
                 <div className="mb-3 flex gap-[10px]">
                    <div>face</div>
                    <div>google</div>
                    <div>google</div>
                    <div>google</div>
                 </div>
                 <div>Already</div>
              </div>
            </div>
            <div className="bg-blue-100 w-1/2">image</div>
        </div>
);
}


export default SignUp