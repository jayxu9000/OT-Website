const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Theta Tau Mu Gamma</h1>
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