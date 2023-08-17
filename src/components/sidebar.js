import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import Logo from '../assets/images/fz.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
        </Link>
        {/* <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#e8e4da"/>
            </NavLink>
        </nav> */}
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/florence-zhao-1694a2243/">
                    <FontAwesomeIcon icon={faLinkedin} color="#f0ebf7" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/flobythebay">
                    <FontAwesomeIcon icon={faGithub} color="#f0ebf7" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar