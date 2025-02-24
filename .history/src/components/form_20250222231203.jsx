

function Form(){
    return(
        <div className=" h-screen font-inter   flex justify-center p-3 ">
            <div className="bg-gray-200 w-1/2 rounded-sm flex flex-col justify-center items-center">
              <div className="bg-[#fff] w-2/3 h-fit flex flex-col justify-center p-6 rounded-tr-lg drop-shadow-md">
                <p className="mb-2">Title</p>
                <input className="mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none" type="text" placeholder="Software Engineer" />
                <p className="mb-2">Type</p>
                <input className="mb-3 mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none" type="text" placeholder="Full-time" />
                <p className="mb-2 ">Salary</p>
                <input className="mb-3 mb-3 h-[35px] border border-gray-300 rounded-tr-lg shadow-sm focus:outline-none" type="text" placeholder="95000" />
              </div>
              <button className="mt-4">Next</button>
            </div>
        </div>
    );
}


export default Form