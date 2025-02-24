import Navbar from '../components/navbar';
import Search from '../components/search';
import Feed from '../components/feed';
import Saved from '../components/saved';
import Filter from '../components/filter';
import Pagination from '../components/pagination';
import React, { useEffect, useState } from 'react';
import Hero from '../components/hero';


function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [totalPosts, settotalPosts] = useState(1);

  // const api = `https://joblisting-rd8f.onrender.com/api/jobs?limit=${postPerPage}&page=${currentPage}`;
     const api = `https://joblisting-3hjv.onrender.com/api/jobs?limit=${postPerPage}&pages=${currentPage}`;
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(api);
        const data = await result.json();
        setJobs(data.jobs);
        settotalPosts(data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, postPerPage]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  

  return (
    <div className='bg-[#F3F3F3]'>
      <Hero />
      <div className='flex mt-4 justify-between w-[100lvw] h-1/3'>
        <Filter />
        <Feed jobs={jobs} setJobs={setJobs} />
        <Saved jobs={jobs} setJobs={setJobs} />
      </div>
      <Pagination 
        pagination={pagination} 
        totalJobs={totalPosts} 
        postPerPage={postPerPage} 
        jobs={jobs}
      />
    </div>
  );
}

export default HomePage;