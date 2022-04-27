import React from 'react';
import './assets/css/style.css'
import Header from './components/header';
import about from './components/about'
import Footer from './components/footer';
import resume from './components/resume';
import work from './components/work';
import home from './homePage'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
  <Router>
      <Header/>
      <Switch>
        <Route exact path="/"component={home}/>
        <Route exact path="/AboutME"component={about}/>
        <Route exact path="/MyWork"component={work}/>
        <Route exact path="/MyResume"component={resume}/>
      </Switch>
      <Footer/>
</Router>
  )
}

export default App;