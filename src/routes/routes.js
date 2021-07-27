import React,{ useEffect } from 'react'
import Header from '../components/header'
import Contacts from '../pages/contact'
import About from '../pages/about'
import Home from '../pages/home'



const App = () => {

    const mouseHanlder = () => {
        const mouse = document.querySelector('.mouse')
        document.onmousemove = (e) => {
            mouse.style.top = e.pageY + 'px';
            if( window.innerWidth - e.pageX > 20 )
            mouse.style.left = e.pageX + 'px';
        }
    }

    useEffect(()=>{
        mouseHanlder()
    },[])

    return(
        <div className="App bg-gray-50">
            <div className="mouse"></div>
            <div id="home">
                <Header/>
                <Home/>
            </div>
            <About />
            <Contacts/>
        </div>
    )
}

export default App
