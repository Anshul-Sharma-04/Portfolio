import './header.css';
import { Link } from 'react-scroll';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Logo from '../../asset/logohtml.svg'

const Header = function(){
    
    const handleTheme = function(e){
        if(e.target.checked)
        {
            document.getElementById('lighttheme').style.display = "block";
            document.getElementById('header').style.backgroundColor = "white";
            document.body.style.overflow = "hidden";
            document.getElementById('header-list').style.display = "none";
        }
        else{
            document.getElementById('lighttheme').style.display = "none";
            document.getElementById('header').style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            document.body.style.overflow = "scroll";
            document.getElementById('header-list').style.display = "block";
        }
    }

    return(
        <div className = "header" id="header">
            <div id="logo" onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" })}}>Chintu !</div>
            <div  className = "header-list" id="header-list">
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
                    <input type="checkbox" className="checkbox" id="checkbox" onClick={(e)=>{ handleTheme(e) }}/>
                    <label htmlFor="checkbox" className="label">
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