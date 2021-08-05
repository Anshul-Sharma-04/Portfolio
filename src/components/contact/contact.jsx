import './contact.css';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useState } from 'react';

const Contact = function(){

    const [hoverText, setHoverText] = useState("Contact Me ");

    return(
        <div className = "contact">
            <br></br>
            <h1>{hoverText}<font color="coral" >!</font></h1>

            <div className = "icon-holder">
                 
                    <div onMouseEnter={()=>{setHoverText("Mail Me ")}} onMouseLeave={()=>{setHoverText("Contact Me ")}}><MailOutlineIcon /></div>
                    <div onMouseEnter={()=>{setHoverText("Let's Connect ")}} onMouseLeave={()=>{setHoverText("Contact Me ")}}><LinkedInIcon /></div>
                    <div onMouseEnter={()=>{setHoverText("Let's Share Code ")}} onMouseLeave={()=>{setHoverText("Contact Me ")}}><GitHubIcon /></div>
                    <div onMouseEnter={()=>{setHoverText("Let's MeetUp ")}} onMouseLeave={()=>{setHoverText("Contact Me ")}}><LocationOnIcon /></div>
                    <div onMouseEnter={()=>{setHoverText("Let's Call ")}} onMouseLeave={()=>{setHoverText("Contact Me ")}}><PhoneIcon /></div>
                    
        
            </div>
        
        </div>
    );
}

export default Contact;