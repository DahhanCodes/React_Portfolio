import React from 'react';

function footer(props) {
    console.log(props)
    //will have to wrap the whole output in a single div, 
    /////as there must be a singel parent.
    //will create single divs to seperate between FE, BE, and FS projects.
    return (
        <footer> 
            <img style="float:right" src="./images/ranbir.jpg"  height="25" width="25"/>

        </footer>
    );
}

export default footer;