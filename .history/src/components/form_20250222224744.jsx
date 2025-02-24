

function Form(){
    return(
        <div className=" h-screen  flex justify-center p-3 ">
            <div className="bg-gray-500 w-1/2 flex flex-col justify-center items-center">
              <div className="bg-[#fff] w-2/3 h-fit flex flex-col justify-center p-6 ">
                <p className="mb-3">Title</p>
                <input className="mb-2 h-[30px]" type="text" />
                <p className="mb-3">Type</p>
                <input className="mb-2" type="text" />
                <p className="mb-3">Salary</p>
                <input className="mb-2" type="text" />
              </div>
              <button className="mt-10">Next</button>
            </div>
        </div>
    );
}


export default Form