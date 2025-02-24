import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";




function Search() {
    return (
        <div className="flex items-center justify-center h-10  bg-red-10 mt-4">
            <Link to="/navbar">
                <div className="flex text-center  w-[70px] fixed absolute  left-6">
                <IoIosArrowBack className="mt-1" > </IoIosArrowBack >
                <p>Back</p>
                </div>
            </Link>
            <div className="w-[40%] rounded-[20px] flex h-full border-2 items-center justify-center">
                <IoSearch className="w-[24px] h-[24px] m-2"></IoSearch>
                <input placeholder="Job title, Keywords, or Company name" className="text-[14px] h-full w-[70%] mr-1 appearance-none bg-transparent border-none w-full focus:outline-none" type="text" />
                <div className="">
                <Button variant="contained" disableElevation>Search</Button>
                </div>
            </div>
        </div>
    );
}

export default Search