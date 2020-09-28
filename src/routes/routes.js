import React,{ Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from '../components/layouts/NavBar';
import Loader from '../components/helpers/loading';
import Home from '../components/Dash/Home';
import About from '../components/Dash/About';

class App extends Component {
  render(){
    return (
      <AnimatePresence>
        <BrowserRouter>
          <div className="App">
            <NavBar/>
            <Loader/>
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    )
  }
}

export default App
