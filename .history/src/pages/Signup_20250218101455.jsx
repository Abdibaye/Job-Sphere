import React from "react"



function SignUp() {
    return(
        <div className="flex h-screen ">
            <div className="flex items-center justify-center bg-red-100 w-1/2">
              <div className="w-[466px] bg-blue-500">
              <img className="mb-[15px] rounded-[4px]  bg-[#0034D1] h-[80%]  w-[30%] border-blue-500 "
 src="https://s3-alpha-sig.figma.com/img/9533/58bd/8fcfa53cf99bf9ff2ab7efd0b2189fa1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GjyOxVImGx3QYF2w5P5o6z1zp3qxhGbS2X9NvHVrCZUc7deaR~yAQmibtQujacykCdD-jKWxgNNLU1dSWmNQWXIFe~trJBTMAXz7DuzQTY-dJ89OfOgVZPz~jD5rJE3H3Naul5aYpY47JXAALxN9mVBsuUYLl5uowGCOYzB-iPruFPXI8EYfw7MIn7Kz1TVikh62aD1AS1dKv74EE4oB2NO80xY9zWVDQa2575nqG6mXlwyKdKIFlRqI0vIEbZiypWPGOsS~U5VnAPB6i6i2~uJGs5L~SBeEDL7-U-w6ZFf3cKHDwivGZ2yDo9PRuk8at4CkRHskK-0y4AChLAzVyQ__" alt="" />
                 <h1>Create your account</h1>
                 <div className="flex flex-col">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                 </div>
                 <button>Create Acou</button>
                 <div>----or-----</div>
                 <div>
                    <div>face</div>
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