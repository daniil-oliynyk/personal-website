import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './components/LandingPage'
import Main from './components/MainPage'


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Landing/>
          <Main/>
         

        </React.Fragment>
      );
  }
}

export default App;
