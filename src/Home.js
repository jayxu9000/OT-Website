import Home1 from "./Home1.jpg"
import Home2 from "./Home2.jpg"
import Home3 from "./Home3.jpg"
import GE from "./Logos/GE.png"
import Goldman_Sachs from "./Logos/Goldman_Sachs.png"
import Meta from "./Logos/Meta.jpg"
import MT from "./Logos/M&T_Bank.png"
import Eversource from "./Logos/Eversource.jpg"
import GD from "./Logos/GD.png"
import pillars from "./pillars.png"

const Home = () => {
    return ( 
        <div className="home">

            <div className="topPage">

                {/* Title */}
                <div className="title"><h1>Theta Tau <br /> <h2>Professional Co-Ed Engineering Fraternity</h2></h1></div>

                <body>

                    {/* Image Carousel */}
                    <div id="slider">
                        <figure>
                            <img src={Home1} alt=""/>
                            <img src={Home2} alt=""/>
                            <img src={Home3} alt=""/>
                        </figure>
                    </div>

                </body>
            </div>

            <div className="Pillars">
                    <img className="pillar_image" src={pillars} alt="" />
                    <div>
                        <h1>Brotherhood</h1>
                    </div>
            </div>

            <div className="Companies_Section">
                <center>
                    <h2 className="Companies_Intro">Where our members work...</h2>
                </center>
                <div className="Company_Logos">
                    <center>
                        <img className="Regular" src= {GE} alt="" />
                        <img className="Regular"src= {Goldman_Sachs} alt="" />
                        <img className="Regular" src= {Meta} alt="" />
                        <img className="Regular" src= {Eversource} alt="" />
                        <img className="Regular" src= {GD} alt="" />
                        <img className="Wide_Logo" src= {MT} alt="" />
                    </center>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;