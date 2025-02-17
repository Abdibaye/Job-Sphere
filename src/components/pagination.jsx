import React, { useState } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function Pagination({ jobs, pagination, totalJobs, postPerPage }) {
  const totalPages = Math.ceil(totalJobs / postPerPage);
  const [activePage, setActivePage] = useState(1);

  

  
  const getPageNumbers = () => {
    const range = 2; 
    let start = Math.max(1, activePage - range);
    let end = Math.min(totalPages, activePage + range);

    
    if (activePage - range < 1) {
      end = Math.min(totalPages, end + (range - (activePage - 1)));
    }
    if (activePage + range > totalPages) {
      start = Math.max(1, start - (range - (totalPages - activePage)));
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageClick = (number) => {
    setActivePage(number);
    pagination(number);
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      const nextPage = activePage + 1;
      setActivePage(nextPage);
      pagination(nextPage);
    }
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      const prevPage = activePage - 1;
      setActivePage(prevPage);
      pagination(prevPage);
    }
  };

  return (
    <div className="pagination flex justify-center gap-2 mb-3">
      <button
        onClick={handlePrevious}
        disabled={activePage === 1}
        className="disabled:opacity-50"
      >
        <FcPrevious />
      </button>
      <div className="flex gap-2">
        {
        getPageNumbers().map((number) => (
          <button
            className={`box-content border-solid size-8 border-[1px] border-sky-500 ${
              activePage === number ? "bg-sky-500 text-white" : ""
            }`}
            key={number}
            onClick={() => {handlePageClick(number)}}
          >
            {number}
          </button>
        ))
        }{          console.log(""+jobs.isBookMarked)}
      </div>
      <button
        onClick={handleNext}
        disabled={activePage === totalPages}
        className="disabled:opacity-50"
      >
        <FcNext />
      </button>
    </div>
  );
}

export default Pagination;