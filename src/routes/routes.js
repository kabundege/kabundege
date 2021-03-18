import 'dotenv/config';
import React,{ Component,Suspense } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Particles from 'react-particles-js';
import Home from '../components/Dash/Home';
import Work from '../components/Dash/work';
import Nav from '../components/layouts/nav';
import About from '../components/Dash/About';
import Skills from '../components/Dash/skills';
import NavBar from '../components/layouts/NavBar';
import Loader from '../components/helpers/loading';
import ContactUs from '../components/Dash/contanctus';
import NotFound from '../components/helpers/notfound';


class App extends Component {
  componentDidUpdate(){
    fetch("https://cloudflare.com/cdn-cgi/trace")
    .then(res => res.text())
    .then( response => {  
      // console.log(response.split(""))
      const ip = response.split("=")[3].split("ts")[0].trim();
      const location = response.split("=")[9].split("")[0] + response.split("=")[9].split("")[1];
      
      //setting ip to localstorage
      localStorage.setItem("ip",ip)
  
      //getting country with ip
      fetch(`https://restcountries.eu/rest/v2/alpha/${location}`)
      .then(res => res.json())
      .then(data => { 
        const{ name } = data;
        localStorage.setItem("country",name)
        fetch('http://localhost:5000/traffic',{
          method:'POST',
          headers:{
            "contet-type":"application/json"
          },
          body: JSON.stringify({ip,country: name})
        })
      })
      .catch(err=> console.log(err)) 
    })
    .catch(err => console.log(err))
  }
  render(){
    return (
      <AnimatePresence>
        <BrowserRouter>
          <Particles params={{
            		    "particles": {
                      "number": {
                          "value": window.screen.width > 700 ? 30 : 15
                      },
                      "size": {
                          "value": 2
                      }
                  }
            	}} className="particles"/>
          <div className="App">
            <NavBar/>
            <Suspense fallback={<Loader/>}/>
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/work' component={Work}/>
               <Route path='/about' component={About}/>
               <Route path='/skills' component={Skills}/>
               <Route path="/contact" component={ContactUs}/>
               <Route component={NotFound}/>
            </Switch>
            <Nav/>
          </div>
        </BrowserRouter>
      </AnimatePresence>
    )
  }
}

export default App
