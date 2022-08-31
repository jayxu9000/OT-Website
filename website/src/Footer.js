import COA from './COA.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Sections">
                <div className="Section1">
                    <div className="Section1_Title">
                        <img src= {COA} alt="" />
                        <h1>Theta Tau</h1>
                    </div>
                    <h2>Mu Gamma Chapter</h2>
                    <h2>University At Buffalo</h2>
                </div>
                <div className="Section2">
                    <h1>General</h1>
                    <a href="https://thetatau.org"><h2>National Theta Tau</h2></a>
                    <h2>Executive Board</h2>
                    <h2>Committee Heads</h2>
                </div>
                <div className="Section3">
                    <h1>Contact</h1>
                    <h2>mgthetatau@gmail.com</h2>
                    <a href="https://www.instagram.com/ub_theta_tau/"><h2>Instagram</h2></a>
                    <a href="https://www.linkedin.com/groups/12533335/"><h2>LinkedIn</h2></a>
                </div>
             </div>
        </div>

    );
}
 
export default Footer;