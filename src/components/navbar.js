import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
                    <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                </ul>
            </nav>
            
        </div>
    );
        
};

export default Navbar
