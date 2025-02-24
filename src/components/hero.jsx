import Frame from "../assets/frame.png"
import Frame2 from "../assets/person.png"

function Hero() {
    return(
        <div className="flex relative z-0">
        {/* Hero */}
        <div>
          <img src={Frame} alt="Frame" />
        </div>
        <div className="flex absolute top-[69px] right-[50px]">
          <img width={420} src={Frame2} alt="Frame2" />
        </div>
      </div>
    )
}

export default Hero;