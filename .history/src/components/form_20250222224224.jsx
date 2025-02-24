

function Form(){
    return(
        <div className=" h-screen  flex justify-center p-3 ">
            <div className="bg-gray-500 w-1/2 flex flex-col justify-center items-center">
              <div className="bg-[#fff] w-1/2 h-fit flex flex-col justify-center p-2 ">
                <p>Title</p>
                <input type="text" />
                <p>Type</p>
                <input type="text" />
                <p>Salary</p>
                <input type="text" />
              </div>
              <button>Next</button>
            </div>
        </div>
    );
}


export default Form