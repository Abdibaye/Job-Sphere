import Button from '@mui/material/Button';


function Description() {
    return(
        <div className="bg-red-100 h-screen">
            <div className="mt-[100px] bg-red-200 h-[50px]">sarch</div>
            <div className="flex flex justify-around p-4">
                <div className="w-[1000px] bg-blue-100 ">
                    <div className="w-[1000px] h-[480px] bg-blue-100">
                        <div className="flex  bg-white h-[100px] gap-2">
                            <div className="w-[138px] h-[138px]">
                                <img className="" src="https://s3-alpha-sig.figma.com/img/3bb8/563e/6d2dd4de608d26010214a61c4b364230?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cd57pZAiiIG4muZr2JxObKpuhwCqVNxDMUgvF0pH3sBKklqssW3wuWCa~evChz3LBMfu5vNXx-RcCOy1COyJ-mo7xgoTS0Wo8geZLrTEfNdQs~RkO~C1whmVGjn39aMWGBItZrMj9yOE7rq6EfKjLS901GAHr8mZZjsfH-qT4TsHInzMo8~K2Yo6do6vBzs0vMEjfn0dIqZ7JKu1hbV0YD6gVEaGWsm2nZQDA0gl~t3oElB~9opLR74cOc7PWs3QF3RFLwLPqICBwsWU~CRXb4gtu~b4quYOhmAPSALDVwiSub9K-wz24e96RvaVPuTNLylyYBxZKDbC1-HMFJbofA__" alt="" />
                            </div>
                            <div className="w-[800px]">
                                <p className="font-bold">Product Design</p>
                                <p>Amazon</p>
                            </div>
                            <div className='bg-red-100'>
                                <Button  variant="contained" disableElevation>Apply</Button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-green-200 w-[250px]">related</div>
            </div>
        </div>
    );
}


export default Description;