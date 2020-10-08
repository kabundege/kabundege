import React,{ Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../components/Dash/Home';
import About from '../components/Dash/About';
import Skills from '../components/Dash/skills';
import NavBar from '../components/layouts/NavBar';
import Loader from '../components/helpers/loading';

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
               <Route path='/about' component={About}/>
               <Route path='/skills' component={Skills}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    )
  }
}

export default App
