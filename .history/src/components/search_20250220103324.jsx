import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";



function Search() {
    return (
        <div className="flex bg-red-100 items-center justify-center h-10  mt-4">
            <div className="flex text-center bg-blue-100 w-[70px] fixed left-5">
            <IoIosArrowBack className="mt-1" > </IoIosArrowBack >
            <p>Back</p>
            </div>
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