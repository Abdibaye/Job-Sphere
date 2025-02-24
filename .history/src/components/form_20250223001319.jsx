import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


function Form(){
    return(
        <div className=" h-screen font-inter   flex justify-center p-3 ">
            <div className="bg-gray-200 w-1/2 rounded-sm flex flex-col justify-center items-center">
            <h1 className="m-2">First Form-page</h1>
              <div className="bg-[#fff] w-2/3 h-fit flex flex-col justify-center p-6 rounded-tr-lg drop-shadow-md"> 
                <p className="mb-2">Title</p>
                <input className="mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-sans font-light" type="text" placeholder="Software Engineer" />
                <p className="mb-2">Type</p>
                <input className="mb-3 mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light" type="text" placeholder="Full-time" />
                <p className="mb-2 ">Salary</p>
                <input className="mb-3 mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none font-light" type="text" placeholder="9600" />
              </div>
                <button className="mt-4">Next</button>
            </div>
        </div>
    );
}


export default Form