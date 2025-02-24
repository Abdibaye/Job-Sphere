import React from "react";
import Job from "./job";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

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
      <Link>
      <div className="font-inter ml-6 md:ml-7 lg:ml-9 w-[93%] h-[45%]">
         {jobs.length > 0 ? (
            jobs.map((job) => (
               <div key={job.id}>
                  <Link to='/description'>
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
                  </Link>
               </div>
               
            ))
         ) : (
            <div className="text-center mt-4 text-gray-500">Loading jobs...</div>
         )}
      </div>
      </Link>
      <Outlet />
      </>
   );
}
