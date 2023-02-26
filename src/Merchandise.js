import oneHundred from './100.JPG'
import seventyFive from './75.JPG'

const Merchandise = () => {
    return (
        <div className="Merchandise">
            <div className="MerchandiseTopPage">
                <center>
                    <h1>Merchandise</h1>
                    <h2>Get your hands on our merchandise!</h2>
                </center>
            </div>
            <div className="merchList">
                <div className="Merch">
                    <img src={oneHundred}></img>
                    <p>$100.00</p>
                </div>
                <div className="Merch">
                    <img src={seventyFive}></img>
                    <p>$175.00</p>
                </div>
            </div>
            
        </div>
    );
}

export default Merchandise;