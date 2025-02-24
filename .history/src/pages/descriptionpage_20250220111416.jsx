import Button from '@mui/material/Button';
// import { CiBookmark,IoShareSocialOutline } from "react-icons/ci";


function Description() {
    return(
        <div className=" h-screen">
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
                            <div className="flex items-start md:ml-auto gap-3">
                            <button >
                               {/* <CiBookmark className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" /> */}
                            </button>
                            <button>
                                {/* <IoShareSocialOutline className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" /> */}
                            </button>
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
                    <div className='text-center font-[600] mt-3 mb-3'>
                        Related
                    </div>
                    <div className="w-[213px] h-[100px] rounded-[10px] border ml-2 border-[1px] mt-2 pb-[16px] pl-[8px] gap-[8px]">
                        <div className='flex mt-3'>
                            <div className="w-[50px] h-[60px]">
                                    <img src="https://s3-alpha-sig.figma.com/img/3bb8/563e/6d2dd4de608d26010214a61c4b364230?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cd57pZAiiIG4muZr2JxObKpuhwCqVNxDMUgvF0pH3sBKklqssW3wuWCa~evChz3LBMfu5vNXx-RcCOy1COyJ-mo7xgoTS0Wo8geZLrTEfNdQs~RkO~C1whmVGjn39aMWGBItZrMj9yOE7rq6EfKjLS901GAHr8mZZjsfH-qT4TsHInzMo8~K2Yo6do6vBzs0vMEjfn0dIqZ7JKu1hbV0YD6gVEaGWsm2nZQDA0gl~t3oElB~9opLR74cOc7PWs3QF3RFLwLPqICBwsWU~CRXb4gtu~b4quYOhmAPSALDVwiSub9K-wz24e96RvaVPuTNLylyYBxZKDbC1-HMFJbofA__" alt="" />
                            </div>
                            <div>
                                <h1 className='font-[460]'>UI/UX Designer</h1>
                                <p className='font-[100]'>Barone LLC.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 ml-8'>
                                    <p className='bg-gray-200 font-[100] text-[14px]'>Remote</p>
                                    <p className='bg-gray-200 font-[100] text-[14px]'>$200- $800</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Description;