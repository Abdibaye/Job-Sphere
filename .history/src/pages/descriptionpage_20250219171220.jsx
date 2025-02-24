

function Description() {
    return(
        <div className="bg-red-100 h-screen">
            <div className="flex items-center justify-center h-10  mt-4">
            <div className="w-[40%] rounded-[20px] flex h-full border-2 items-center justify-center">
                <IoSearch className="w-[24px] h-[24px] m-2"></IoSearch>
                <input placeholder="Job title, Keywords, or Company name" className="text-[14px] h-full w-[70%] mr-1 appearance-none bg-transparent border-none w-full focus:outline-none" type="text" />
                <div className="">
                <Button variant="contained" disableElevation>Search</Button>
                </div>
            </div>
        </div>
            <div className="flex">
                <div className="w-[1200px] bg-blue-100">
                    <div className="w-[1,000px] h-[400px] bg-blue-100">descript</div>
                </div>
                <div className="bg-green-200 w-[250px]">related</div>
            </div>
        </div>
    );
}


export default Description;