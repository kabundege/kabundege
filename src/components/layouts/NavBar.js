import Player from './player';
import React,{useState, useEffect} from 'react';
import '../../scss/components/navbar.scss';
import Avatar from '../../assets/images/avatar.png';
import { Link,NavLink,useLocation } from 'react-router-dom';
import { AiFillHome,AiOutlineUser,AiOutlineSend,AiOutlineHome } from "react-icons/ai";
import { IoSpeedometerOutline,IoSpeedometerSharp,IoSendSharp } from "react-icons/io5";
import { HiOutlineBriefcase,HiBriefcase } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";

export default function NavBar() {
    const [ Menu, setMenu ] = useState(true)
    const { width } = window.screen;
    const location = useLocation();

    useEffect(()=>{ if(window.screen.width <= 700)setMenu(false) },[location.pathname])
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Avatar} alt="" />
            </div>
            {Menu && <>
            <div className="links">
                <NavLink exact to="/">
                    <AiFillHome size={20} className="active_icon" />
                    <AiOutlineHome size={20} className="icon" />
                    <p>Home</p>
                </NavLink>
                <NavLink to="/about">
                    <AiOutlineUser size={20} className="icon" />
                    <RiUser3Fill size={20} className="active_icon" />
                    <p>About</p>
                </NavLink>
                <NavLink to="/skills">
                    <IoSpeedometerOutline className="icon" size={20} />
                    <IoSpeedometerSharp className="active_icon" size={20}/>
                    <p>skills</p>
                </NavLink>
                <NavLink to="/work">
                    <HiOutlineBriefcase size={20} className="icon" />
                    <HiBriefcase size={20} className="active_icon" />
                    <p>My Work</p>
                </NavLink>
                <NavLink to="/contact">
                    <AiOutlineSend size={20} className="icon" />
                    <IoSendSharp size={20} className="active_icon" />
                    <p>Contact</p>
                </NavLink>
                { width <= 700 && 
                    <i className="green-text  fas fa-times" onClick={()=> setMenu(!Menu)}></i>
                }
            </div>
            </>}
            { window.screen.width > 700 &&  <Player/>}
            <div className="social">
                { window.screen.width <= 700 &&  <Player/>}
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
                { width <= 700 && !Menu ?
                    <i className="green-text  fas fa-bars" onClick={()=> setMenu(!Menu)}></i> : ''
                }
            </div>
        </div>
    )
}
