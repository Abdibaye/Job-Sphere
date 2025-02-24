import Button from '@mui/material/Button';


function Description() {
    return(
        <div className=" h-screen">
            <div className="mt-[100px] bg-red-200 h-[50px]">sarc</div>
            <div className="flex justify-around p-4">
                <div className="w-[1000px] ">
                    <div className="w-[800px] h-[480px] ml-[100px] mt-[30px] rounded-xl border-gray border-2 bg-white ">
                        <div className="flex   bg-white h-[100px] gap-2">
                            <div className="w-[138px] h-[138px]">
                                <img src="https://s3-alpha-sig.figma.com/img/3bb8/563e/6d2dd4de608d26010214a61c4b364230?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cd57pZAiiIG4muZr2JxObKpuhwCqVNxDMUgvF0pH3sBKklqssW3wuWCa~evChz3LBMfu5vNXx-RcCOy1COyJ-mo7xgoTS0Wo8geZLrTEfNdQs~RkO~C1whmVGjn39aMWGBItZrMj9yOE7rq6EfKjLS901GAHr8mZZjsfH-qT4TsHInzMo8~K2Yo6do6vBzs0vMEjfn0dIqZ7JKu1hbV0YD6gVEaGWsm2nZQDA0gl~t3oElB~9opLR74cOc7PWs3QF3RFLwLPqICBwsWU~CRXb4gtu~b4quYOhmAPSALDVwiSub9K-wz24e96RvaVPuTNLylyYBxZKDbC1-HMFJbofA__" alt="" />
                            </div>
                            <div className="flex flex-col place-content-center w-[800px]">
                                <p className="font-bold">Product Design</p>
                                <p>Amazon</p>
                            </div>
                            <div className='flex place-items-end m-2'>
                                <Button  variant="contained" disableElevation>Apply</Button>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex ml-[25px] flex-col ml-2 w-[500px]'>
                                <div>
                                    <h1 className='font-bold'>Job Type</h1>
                                    <p>Full-time</p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Location</h1>
                                    <p>Addis-Abeba</p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Experience</h1>
                                    <p>5years</p>
                                </div>
                                <div>
                                    <h1 className='font-bold'>Number of</h1>
                                    <h1 className='font-bold'>Applicants:</h1>
                                    <p>40</p>
                                </div>
                            </div>
                            <div className='mx-6'>
                                <h1 className='font-[500]'>Job description</h1>
                                <p>We are seeking a highly skilled and creative Senior UI/UX Designer to join our dynamic team in Lagos. As a Senior UI/UX Designer, you will play a crucial role in designing intuitive and engaging user interfaces and enhancing user experience across various digital platforms. You will collaborate closely with cross-functional teams, including product managers, developers, and stakeholders, to bring innovative ideas to life and ensure a seamless user journey.
                                If you are passionate about creating top-notch digital experiences and have a keen eye for design, we would love to have you on board!
                                </p>
                                <h1 className='font-[500]'>Key Responsibilities</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[30px] mr-[150px] rounded-xl border-gray border-2 bg-white w-[250px]">
                    <div className='text-center font-[600] mt-3'>Related</div>
                  </div>
            </div>
        </div>
    );
}


export default Description;