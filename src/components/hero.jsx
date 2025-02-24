import Frame from "../assets/frame.png"
import Frame2 from "../assets/person.png"

function Hero() {
    return(
        <div className="flex relative z-0">
        {/* Hero */}
        <div>
          <img src={Frame} alt="Frame" />
        </div>
        <div className="flex flex-col absolute top-[120px] left-[100px] ">
          <div className=" font-bold text-[40px] text-white ">
            <p className="leading-[30px]">Find Your Dream</p>
            <p>Job with Ease</p>
          </div>
          <div className="text-white font-light">
            <p>Search, Apply, and Track Jobs Applications</p>
            <p>All in Ones Place</p>
          </div>
        </div>
        <div className="flex absolute top-[69px] right-[50px]">
          <img width={420} src={Frame2} alt="Frame2" />
        </div>
      </div>
    )
}

export default Hero;