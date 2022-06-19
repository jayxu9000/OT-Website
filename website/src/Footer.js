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
                        <h1>Contacts</h1>
                        <h2>testing123@gmail.com</h2>
                        <h2>Mu Gamma Chapter LinkedIn</h2>
                        <h2>Instagram</h2>
                    </div>
                </div>
        </div>

    );
}
 
export default Footer;