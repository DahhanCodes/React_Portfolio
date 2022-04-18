import React from 'react';
import List from './List';
function nav(props) {
    console.log(props)
    //will have to wrap the whole output in a single div, 
    /////as there must be a singel parent.
    //will create single divs to seperate between FE, BE, and FS projects.
    return (
        <div>
            {props.headNav === 'About Me'(
                <div id="about-me" class="container">
                    <h2 class="secTitle">
                        About Me
                    </h2>
                    <div class="meImage">
                        <img src="images\1622394627802.jpg" id="selfImage" alt="A picture of Moustafa El Dahhan" />

                        <p>
                            Experienced Ambassador with a demonstrated history of working in the public safety industry. Highly skilled in
                            Microsoft Excel, Management, Sales, Client Relations, and Communication. Strong community and social services professional
                            with a B.Sc. from McMaster University. Well on my way to becoming a full-stack developer and a Machine Learning engineer.
                            I am very eager to explore the world of Machine learning and Biotechnology, specifically cell recognition and regeneration research.
                            I am also interested in public health and safety, disease prevention, and disease control.
                        </p>
                    </div>

                </div>
            )}
            {props.headNav === 'My Work'(List)}
            {props.headNav === 'Contact Me'(
                <div id="contact-me" class="container altCont">
                    <h2 class="secTitle">
                        Contact Me
                    </h2>
                    <input id='contactName' placeholder='Enter your name'></input>
                    <input id='contactEmail' placeholder='Enter your email'></input>
                    <input id='contactMessage' placeholder='Enter your message'></input>
                    <button id='sendcontact'> Send</button>
                    <address>
                        LinkedIn: <a href="https://www.linkedin.com/in/moustafa-el-dahhan-02965a213"> Moustafa El Dahhan</a> <br />
                        Email: <a href="mailto:moustafaeldahhan@gmail.com">moustafaeldahhan@gmail.com</a>
                    </address>

                </div>
            )}
            {props.headNav === 'Resume'(
                <div id="Resume" class="container altCont">
                    <div id="about-me" class="container">
                        <h2 class="secTitle">
                            About Me
                        </h2>
                        <div class="meImage">
                            <img src="images\1622394627802.jpg" id="selfImage" alt="A picture of Moustafa El Dahhan" />

                            <p>
                                Experienced Ambassador with a demonstrated history of working in the public safety industry. Highly skilled in
                                Microsoft Excel, Management, Sales, Client Relations, and Communication. Strong community and social services professional
                                with a B.Sc. from McMaster University. Well on my way to becoming a full-stack developer and a Machine Learning engineer.
                                I am very eager to explore the world of Machine learning and Biotechnology, specifically cell recognition and regeneration research.
                                I am also interested in public health and safety, disease prevention, and disease control.
                            </p>
                        </div>

                    </div>
                    <div id="education" class="container altCont">
                        <h2 class="secTitle">
                            Education
                        </h2>
                        <ul>
                            <li>
                                Highschool diploma from Richmond Hill Highschool (2013-2016)
                            </li>
                            <li>
                                Bachelor of Science (B.Sc.) from McMaster University (2016-2021)
                            </li>
                            <li>
                                Coding Bootcamp from University of Toronto SCS (in progress)
                            </li>
                            <li>
                                Data Science and Machine Learning (DSML) from MIT IDSS (2021-2022)
                            </li>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
}

export default nav;