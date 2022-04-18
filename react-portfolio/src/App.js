import React from 'react';
import header from './components/header';
import footer from './components/footer';
import nav from './components/navigation';
import List from './components/List';

const head = {
  id: 1,
  name: 'header'
}

const headnav = [
    {
        id: 1,
        name: 'About Me',
     
      },
      {
        id: 2,
        name: 'My work',
       
      },
      {
        id: 3,
        name: 'Contact Me',
        
      },
      {
        id: 4,
        name: 'Resume',
       
      },
]
const feprojects = [
  {
    id: 1,
    name: 'RunBuddy',
     
  },
  {
    id: 2,
    name: 'DemoPortfolio',
     
  },
  {
    id: 3,
    name: 'Password Generator',
     
  },
  {
    id: 4,
    name: 'Coding quiz game',
     
  },
  {
    id: 5,
    name: 'Crypto Maestro',
     
  }
];
const beprojects = [
    {
      id: 1,
      name: 'ReadMe Generator',
       
    },
    {
      id: 2,
      name: 'Portfolio Generator',
       
    },
    {
      id: 3,
      name: 'Team Profile Generator',
       
    },
    {
      id: 4,
      name: 'E-commerce Back End',
       
    },
    {
      id: 5,
      name: 'Tech Blog',
       
    }
  ];
  const fsprojects = [
    {
      id: 1,
      name: 'Note Taker',
       
    },
    {
      id: 2,
      name: 'Pharmappoint',
       
    },
    {
      id: 3,
      name: 'Team Profile Generator',
       
    },
  
  ];

function App() {
  return (
  <React.Fragment>
      <header head={head}/>
      <nav headnav= {headnav}/>
      <List feprojects={feprojects} />
      <List beprojects = {beprojects}/>
      <List fsprojects = {fsprojects}/>
      <footer />
</React.Fragment>
  )
}

export default App;