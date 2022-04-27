import React from 'react';
import './assets/css/style.css'
import Header from './components/header';
import Footer from './components/footer';
import resume from './components/resume';
import work from './components/work';
import home from './homePage'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
  <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path="/"component={home}/>
        <Route exact path="/AboutME"component={homePage}/>
        <Route exact path="/MyWork"component={work}/>
        <Route exact path="/MyResume"component={resume}/>
      </Switch>
      <Footer/>
</React.Fragment>
  )
}

export default App;