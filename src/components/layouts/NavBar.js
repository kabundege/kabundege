import Player from './player';
import React,{useState, useEffect} from 'react';
import '../../scss/components/navbar.scss';
import Avatar from '../../assets/images/avatar.png';
import { Link,NavLink,useHistory,useLocation } from 'react-router-dom';
import { AiFillHome,AiOutlineUser,AiOutlineSend,AiOutlineHome } from "react-icons/ai";
import { IoSpeedometerOutline,IoSpeedometerSharp,IoSendSharp } from "react-icons/io5";
import { HiOutlineBriefcase,HiBriefcase } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
import me from '../../assets/images/avatar.png';

export default function NavBar(props) {
    const [ Menu, setMenu ] = useState(true)
    const { width } = window.screen;
    const location = useLocation();
    const history = useHistory();

    const toggleMenu = () => {
        const nav = document.querySelector('.navbar')
        const closer = document.querySelector('.fa-times')
        if(nav && Menu){
            nav.style.animation = "toLeft .5s ease-out";
            closer.style.animation = "";
            closer.style.animation = "spin .5s ease-in-out"
        }

        setTimeout(()=>setMenu(!Menu),500)
    }

    useEffect(()=>{ if(window.screen.width <= 700)setMenu(false) },[location.pathname])

    return (
        <>
            { width < 800 &&
                <div className="opener">
                    <img src={me} alt="" className="avatar" />
                    {
                        !Menu ?
                        <i className="green-text  fas fa-bars" onClick={()=> toggleMenu()}></i>:
                        <i className="green-text  fas fa-times" style={{animation:"spin .5s ease-out"}} onClick={()=> toggleMenu()}></i>
                    }
                </div>
            }
            {
                Menu &&
                <div className="navbar" >
                    <div className="logo" onClick={()=> history.replace('/')}>
                        <img src={Avatar} alt="" />
                    </div>
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
                    </div>
                    <Player/>
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
                    </div>
                </div>
            }
        </>
    )
}
