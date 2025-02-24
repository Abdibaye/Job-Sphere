import React from "react"



function SignUp() {
    return(
        <div className="flex h-screen ">
            <div className="bg-red-100 w-1/2">
              <div className="flex flex-col bg-blue-500">
                 <div>logo</div>
                 <h1>title</h1>
                 <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                 </div>
                 <button>Create Acou</button>
                 <div>----or-----</div>
                 <div>
                    <div>face</div>
                    <div>google</div>
                 </div>
                 <div>Already</div>
              </div>
            </div>
            <div className="bg-blue-100 w-1/2">image</div>
        </div>
);
}


export default SignUp