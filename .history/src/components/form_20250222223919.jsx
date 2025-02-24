

function Form(){
    return(
        <div className="bg-red-100 h-screen  flex justify-center p-3 ">
            <div className="bg-gray-500 w-1/2 flex justify-center items-center">
              <div className="bg-[#fff] w-1/2 h-fit flex flex-col flex-col justify-center  ">
                <p>Title</p>
                <input type="text" />
                <p>Type</p>
                <input type="text" />
                <p>Salary</p>
                <input type="text" />
              </div>
              <button>next</button>
            </div>
        </div>
    );
}


export default Form