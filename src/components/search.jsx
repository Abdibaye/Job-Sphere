import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";




function Search() {
    return (
        <div className="flex w-[97%] justify-end ">
            <Link to="/navbar">
                <div className="flex text-center w-[70px] fixed absolute  left-6 top-[80px]">
                <IoIosArrowBack className="mt-1" > </IoIosArrowBack >
                <p>Back</p>
                </div>
            </Link>
            <div className="flex items-end justify-end h-12">
            <div className="bg-white w-[40%] rounded-[20px] flex h-full w-[500px] border-2 items-center justify-center">
                <IoSearch className="w-[24px] h-[24px] m-2 "></IoSearch>
                <input placeholder="Job title, Keywords, or Company name" className="text-[14px] h-full w-[70%] mr-1 appearance-none bg-transparent border-none w-full focus:outline-none" type="text" />
                <div className="">
                <div className="p-4">
                <Button sx={{
        backgroundColor: '#0034D1',    
        height: "35px"
      }} variant="contained"  disableElevation>Search</Button>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Search