const fs = require("fs");

//function to download resume
$("#resume").on(click, download);
function download (){
    fs.writeFile('dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}