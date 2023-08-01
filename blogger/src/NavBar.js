import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                
            </ul>   
        </nav>
        <div className="nav-right">
            <Link to = '/'><button>Log Out</button></Link>
        </div>
        </>
        
    );
}

export default NavBar;