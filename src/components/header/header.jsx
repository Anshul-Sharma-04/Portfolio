import './header.css';
import { Link } from 'react-scroll';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const Header = function(){
    return(
        <div className = "header">
            <div id="logo">Chintu !</div>
            <div  className = "header-list">
                <ul>
                    <li><Link to="skills">Skills</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li>Experience</li>
                    <li id="timeline-header"><Link to="timeline">My Timeline</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    
                </ul>            
            </div>
            <div id="theme-toggle">
                <div>
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label for="checkbox" className="label">
                        <Brightness3Icon className="fa-moon"></Brightness3Icon>
                        <WbSunnyIcon className='fa-sun'></WbSunnyIcon>
                        <div className='ball'></div>
                    </label>
                </div>
            </div>

       </div>
    );
}

export default Header;