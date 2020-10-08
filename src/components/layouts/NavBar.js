import React,{ useState, useEffect} from 'react';
import { Link,NavLink,useLocation } from 'react-router-dom';
import '../../scss/components/navbar.scss';

export default function NavBar() {
    const [ Menu, setMenu ] = useState(true)
    const { width } = window.screen;
    const location = useLocation();

    useEffect(()=>{ if(window.screen.width <= 700)setMenu(false) },[location.pathname])
    return (
        <div className="navbar">
            <div className="logo">
                <h3>C</h3>
                <p>CHRISS</p>
            </div>
            {Menu && <>
            <div className="links">
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/about">
                    <i className="fas fa-user"></i>
                    <p>About</p>
                </NavLink>
                <NavLink to="/skills">
                    <i className="fas fa-cog"></i>
                    <p>skills</p>
                </NavLink>
                <NavLink to="/work">
                <i className="far fa-eye" ></i>
                    <p>My Work</p>
                </NavLink>
                <NavLink to="/contact">
                <i className="fas fa-envelope" ></i>
                    <p>Contact</p>
                </NavLink>
            </div>
            </>}
            <div className="social">
                <Link to="//twitter.com/KabundegeC" target="_blank">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="//www.linkedin.com/in/christophe-kwizera-081123190/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="//github.com/kabundege" target="_blank">
                    <i className="fab fa-github"></i>
                </Link>
                <Link to="//web.facebook.com/christophe.kwizera.79" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
                { width <= 700 ? 
                    !Menu ?
                    <i className="green-text  fas fa-bars" onClick={()=> setMenu(!Menu)}></i>:
                    <i className="green-text  fas fa-times" onClick={()=> setMenu(!Menu)}></i>: null
                }
            </div>
        </div>
    )
}
