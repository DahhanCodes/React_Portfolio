import React from 'react';
import linkLOGO from '../assets/pictures/liLOGO.JPG'
import sofLOGO from '../assets/pictures/sofLogo.JPG'
import hubLOGO from '../assets/pictures/ghLogo.JPG'
const logoLink1 = "https://www.linkedin.com/in/moustafa-el-dahhan-02965a213/"
const logoLink2 = "https://stackoverflow.com/users/17313565/moustafa-el-dahhan"
const logoLink3 = "https://github.com/DahhanCodes"
function footer() {

    return (
        <footer> 
           <a href={logoLink1}>
           <img style="float:right" src={linkLOGO} alt="linkedIn Logo"  height="25" width="25"/>
               </a> 
           <a href={logoLink2}>
               <img style="float:left" src={sofLOGO} alt="StackOverFlow logo"  height="25" width="25"/>
               </a> 
            <a href={logoLink3}>
                <img style="float:center" src={hubLOGO} alt="GitHub Logo"  height="25" width="25"/>
                </a>

        </footer>
    );
}

export default footer;