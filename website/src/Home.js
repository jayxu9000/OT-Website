import Home1 from "./Home1.jpg"
import Home2 from "./Home2.jpg"
import Home3 from "./Home3.jpg"

const Home = () => {
    return ( 
        <div className="home">

            {/* Title */}
            <div><h1>Theta Tau <br /> <h2>Professional Co-Ed Engineering Fraternity <br/> at University At Buffalo</h2></h1></div>

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
    );
}
 
export default Home;