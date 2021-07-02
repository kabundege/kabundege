
import { useState,useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavHashLink } from 'react-router-hash-link'

const Header = () => {
    const [ showModal,setModal ] = useState(false)

    const toggleMenu = (link) => {
        const menu = document.querySelector('.menu')
        if(!showModal){
            setModal(true)
        }else{
            if(menu){
                menu.style.animation = "toRight .5s ease-out"
                const id = setTimeout(()=>{
                    setModal(false)
                    return () => clearTimeout(id)
                },300)
            }
        }

        if(true){
            const mouse = document.querySelector('.mouse')
            mouse.classList.remove('grow')
        }

    }

    useEffect(()=>{
        const mouse = document.querySelector('.mouse')
        const icons = document.querySelectorAll('.icon')
        for(const icon of icons ){
            icon.addEventListener("mouseover",(e)=>{
                mouse.classList.add('grow')
            })
            icon.addEventListener("mouseleave",(e)=>{
                mouse.classList.remove('grow')
            })
        }
    },[showModal])

    return (
        <nav>
            <div>
                <h1 className="brand font-black">ckk</h1>
            </div>
            {
                showModal ?
                <AiOutlineClose size={30} className="icon" onClick={()=>toggleMenu()} />:
                <HiOutlineMenuAlt4 size={30} className="icon" onClick={()=>toggleMenu()} />
            }
            {
                showModal &&
                <section >
                    <ul className="menu">
                        <li onClick={()=>toggleMenu(true)} className="font-bold icon text-2xl text-gray-700">
                            <NavHashLink to="#home" >
                                Home
                            </NavHashLink>
                        </li>
                        <li onClick={()=>toggleMenu(true)} className="font-bold icon text-2xl text-gray-700">
                            <NavHashLink to="#skills" >
                                Skills
                            </NavHashLink>
                        </li>
                        <li onClick={()=>toggleMenu(true)} className="font-bold icon text-2xl text-gray-700">
                            <NavHashLink to="#work" >
                                Latest Work
                            </NavHashLink>
                        </li>
                        <li onClick={()=>toggleMenu(true)} className="font-bold icon text-2xl text-gray-700">
                            <NavHashLink to="#about" >
                                About
                            </NavHashLink>
                        </li>
                        <li onClick={()=>toggleMenu(true)} className="font-bold icon text-2xl text-gray-700">
                            <NavHashLink to="#contact" >
                                Contacts
                            </NavHashLink>
                        </li>
                    </ul>
                </section>
            }
        </nav>
    )
}

export default Header
