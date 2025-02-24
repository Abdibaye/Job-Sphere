import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./homepage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

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

                    <h1 className="font-inter font-[1500] mb-[10px]">Log in to your account</h1>
                    <div>
                        <input type="text" className="block w-full mb-2 p-2" placeholder="Username" />
                        <input type="password" className="block w-full mb-2 p-2" placeholder="Password" />
                    </div>
                    <Link to="/home" className="block w-full bg-blue-500 text-white p-2 mb-2 text-center">
                        Login
                    </Link>
                    <div className="text-center">--- or ---</div>
                    <div className="flex justify-center space-x-2 mt-2">
                        <div className="bg-white p-2">Google</div>
                        <div className="bg-white p-2">Facebook</div>
                    </div>
                    <div className="text-center mt-2">Don't have an account? Sign up</div>
                </div>
            </div>
        </div>
    );
}

export default App;