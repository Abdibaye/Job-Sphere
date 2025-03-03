import React from "react";
import { GoBookmarkFill } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";  

export default function Job({  logo, title, company,type,salary,  isBookMarked, handleBookMark, key, description }) {
    return (
        <div className="p-3 bg-white drop-shadow-md ml-6 mb-4 border-solid border-gray border-2 flex flex-col translate-x-3 translate-y-5 rounded-[20px] h-[250x] w-[90%]">
            <div className="flex">
                <div>
                    <img className="h-[53px] w-[53px]" 
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="ml-2">
                    <Link to="description">
                        <p className="pb-1 gap-5 color text-[32px] font-[570] text-gray-950 dark:text-black">{title}</p>
                    </Link>
                    <p className="font-normal">{company}</p>        
                    <div className="flex gap-2 font-light">
                        <div className="bg-gray-200">{type}</div>
                        <div className="bg-gray-200">Full-Time</div>
                        <div className="bg-gray-200">{salary}</div>
                    </div>
                    <Outlet />
                </div>
                <div className="flex items-start md:ml-auto gap-3">
                    <button onClick={() => handleBookMark(key)}>
                        {isBookMarked ? (
                            <GoBookmarkFill className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" />
                        ) : (
                            <CiBookmark className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" />
                        )}
                    </button>
                    <button>
                        <IoShareSocialOutline className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" />
                    </button>
                </div>
            </div>
            <div>
                <p className="ml-10 pt-2 pl-5">
                {description}             
                   </p>
            </div>
        </div>
    );
}


