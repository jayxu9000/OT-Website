import COA from './COA.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar"> 
        <img src={ COA } alt="" style={{width: '45px', height: 'auto'}}/>
            <h1>Theta Tau 
                <br />
                <h2>Mu Gamma Chapter | University At Buffalo</h2>
            </h1>
            <div className="links">
                <Link to="/OT-Website">Home</Link>
                <Link to="/Rush" >Rush</Link>
                <Link to="/Brothers">Brothers</Link>
                <Link to="/Merchandise">Merchandise</Link>
                {/**
                <div className='dropdown'>
                    <Link to="/Brothers">Brothers</Link>
                    <div className='dropdown-menu'>
                        <Link to="/Brothers" className="dropdown-select" style={{top: "5px"}}>Actives</Link>
                        <br />
                        <Link to="/Alumni" className="dropdown-select">Alumni</Link>
                        <br />
                        
                    </div>
                </div>
                */}
            </div>
        </nav>
    );
}
 
export default Navbar;