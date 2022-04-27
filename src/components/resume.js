import React from 'react';
const fs = require('fs')
const request = require('request');
////got this function from stackoverflow/////////
const download = () => {
    const file = fs.createWriteStream("MoustafaResume.pdf");
    const sendReq = request.get("https://docs.google.com/document/d/10gTTG4DDK2NVZBP60lqHLG4c0ev3F4v1WnoU4bTD94Y/edit?usp=sharing");

    // verify response code
    sendReq.on('response', (response) => {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request errors
    sendReq.on('error', (err) => {
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });
};
//////////////////////////////
function resume() {

    return (
        <div id="Resume" class="container altCont">
            <h2 onClick={download}>Download Resume</h2>
            <div id="about-me" class="container">
                <h3 class="secTitle">
                    About Me
                </h3>
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
                <h3 class="secTitle">
                    Education
                </h3>
                <ul>
                    <li>
                        Highschool diploma from Richmond Hill Highschool (2013-2016)
                    </li>
                    <li>
                        Bachelor of Science (B.Sc.) from McMaster University (2016-2021)
                    </li>
                    <li>
                        WebDevelopment Bootcamp at University of Toronto SCS (in progress)
                    </li>
                    <li>
                        Data Science and Machine Learning (DSML) at MIT IDSS (2021-2022)
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default resume;