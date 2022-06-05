import COA from './COA.png'

const Navbar = () => {
    return (
        <nav className="navbar"> 
        <img src={ COA } alt="" style={{width: '45px', height: 'auto'}}/>
            <h1>Theta Tau 
                <br />
                <h2>Mu Gamma Chapter</h2>
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Rush" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>Rush</a>
                <a href="Brothers">Brothers</a>
            </div>
        </nav>
    );
}
 
export default Navbar;