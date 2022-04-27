import React from 'react';
import myPic from '../assets/pictures/1622394627802.jpg'
function about() {
  
    
    return (
                <div id="about-me" class="container">
                    <h2 class="secTitle">
                        About Me
                    </h2>
                    <div class="meImage">
                        <img src={myPic} id="selfImage" alt="A picture of Moustafa El Dahhan" />

                        <p>
                            Experienced Ambassador with a demonstrated history of working in the public safety industry. Highly skilled in
                            Microsoft Excel, Management, Sales, Client Relations, and Communication. Strong community and social services professional
                            with a B.Sc. from McMaster University. Well on my way to becoming a full-stack developer and a Machine Learning engineer.
                            I am very eager to explore the world of Machine learning and Biotechnology, specifically cell recognition and regeneration research.
                            I am also interested in public health and safety, disease prevention, and disease control.
                        </p>
                    </div>

                </div>
            )
        }

export default about;