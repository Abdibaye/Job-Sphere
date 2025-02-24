import React from "react";
import Job from "./job";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Search from "./search";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoIosArrowBack } from "react-icons/io";

export default function Feed({ jobs, setJobs }) {

   const validJobs = Array.isArray(jobs) ? jobs : [];


   const handleBookMark = (id) => {
      const updatedJobs = jobs.map((job) =>
         job.id === id ? { ...job, isBookMarked: !job.isBookMarked } : job
      );
      setJobs(updatedJobs);
   };
   return (
      <>
      <div className="font-inter  mb-4 mt-5 ml-6 md:ml-7 lg:ml-9 w-[75%] h-[45%]">
      <div className="flex items-center justify-center h-12">
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
         {jobs.length > 0 ? (
            jobs.map((job) => (
               <div key={job.id}>
                     <Job
                        logo={job.logo}
                        title={job.title}
                        company={job.company}
                        type={job.type}
                        salary={job.salary}
                        isBookMarked={job.isBookMarked}
                        description = {job.description}
                        handleBookMark={() => handleBookMark(job.id)}
                     />
               </div>
               
            ))
         ) : (
            <div className="text-center mt-4 text-gray-500">Loading jobs...</div>
         )}
      </div>

      </>
   );
}
