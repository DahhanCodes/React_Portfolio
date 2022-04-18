import React from 'react';

function header(props) {
    console.log(props)
    //will have to wrap the whole output in a single div, 
    /////as there must be a singel parent.
    //will create single divs to seperate between FE, BE, and FS projects.
    return (
        <header>
        <h1>
        Welcome To My Portfolio! 
        </h1>
            <nav>
              
                <ul>
                   
                    <li>
                        
                        <a href="#about-me">About me</a>
                    </li>
                    <li>
                        <a href="#education">Projects</a>
                    </li>
                    <li>
                        <a href="#projects">Contact</a>
                    </li>
                    <li>
                        <a href="#contact-me">Resume</a>
                    </li>
                </ul>
            </nav>   
    </header>
    );
}

export default header;