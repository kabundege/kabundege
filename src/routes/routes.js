import'dotenv/config';
import React,{ Component } from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
