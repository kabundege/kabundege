import'dotenv/config';
import React,{ Component } from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';
import Loader from '../components/helpers/loading';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Loader/>
          <Switch>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
