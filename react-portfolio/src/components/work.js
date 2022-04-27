import React from 'react';
import rBuddy from '../assets/pictures/Capture.JPG'
import cQuiz from '../assets/pictures/codingQuiz.JPG'
import mMaestro from '../assets/pictures/marketMaestro.JPG'
import passGen from '../assets/pictures/passwordGenerator.JPG'
import pPoint from '../assets/pictures/Pharmappoint.JPG'
import noteTaker from '../assets/pictures/noteTaker.JPG'
import tpGen from '../assets/pictures/tPGen.JPG'
const bELink1 = "https://github.com/DahhanCodes/ReadMeGenerator.git"
const bELink2 = "https://github.com/DahhanCodes/E_commerce_Back_End.git"
const bELink3 = "https://github.com/DahhanCodes/tech_blog.git"
const bELink4 = "https://github.com/DahhanCodes/Employee-Tracker.git"
const bELink5 = "https://github.com/DahhanCodes/budget-tracker.git"

const feprojects = [
    {
        id: 1,
        name: 'RunBuddy',
        src: rBuddy

    },
    {
        id: 2,
        name: 'Password Generator',
        src: passGen

    },
    {
        id: 4,
        name: 'Coding quiz game',
        src: cQuiz
    },
    {
        id: 5,
        name: 'Market Maestro',
        src: mMaestro
    }
];
const beprojects = [
    {
        id: 1,
        name: 'ReadMe Generator',
        link: bELink1
    },

    {
        id: 2,
        name: 'E-commerce Back End',
        link: bELink2
    },
    {
        id: 3,
        name: 'Tech Blog',
        link: bELink3
    },
    {
        id: 4,
        name: 'Employee Tracker',
        link: bELink4
    }
    ,
    {
        id: 5,
        name: 'Budget Tracker',
        link: bELink5
    }
];
const fsprojects = [
    {
        id: 1,
        name: 'Note Taker',
        src: noteTaker
    },
    {
        id: 2,
        name: 'Pharmappoint',
        src: pPoint
    },
    {
        id: 3,
        name: 'Team Profile Generator',
        src: tpGen
    },

];
function work(props) {
    console.log(props)
    return (
        <div>
            <h3 className='sectionTitle'>Front End Projects</h3>
            <div className='partition flex-row flex-wrap'>
                <ul className="list-group">
                    {{ feprojects }.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <img src={item.src} id={item.id} alt="A picture of project done by Moustafa El Dahhan"  height="70" width="70"/>
                            <h5> {item.name} </h5>
                        </li>
                    ))}
                </ul>
            </div>
            <h3 className='sectionTitle'> Back End Projects</h3>
            <div className='partition flex-row flex-wrap'>
                <ul className="list-group">
                    {{ beprojects }.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <h3 className='sectionTitle'> Full Stack Projects</h3>
            <div className='partition flex-row flex-wrap'>
                <ul className="list-group">
                    {{ fsprojects }.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <img src={item.src} id={item.id} alt="A picture of project done by Moustafa El Dahhan" height="70" width="70" />
                            <h5> {item.name} </h5>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default work;