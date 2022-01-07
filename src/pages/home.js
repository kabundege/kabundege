import React,{ useEffect,useState } from 'react'
import chrissJpg from '../assets/images/chriss.jpg'
import chrissPng from '../assets/images/chriss.png'
import { FiFacebook,FiTwitter,FiLinkedin,FiDribbble,FiInstagram } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub,FaStackOverflow } from 'react-icons/fa'

const { ColorThief } = window;

const Home = () => {
    const [ pallete, setPallete ] = useState([]);
    const [ imgUrl,setUrl ] = useState("")

    const  loadImage = () => {
        const colorThief = new ColorThief();
        const img = new Image()
        img.src = chrissJpg;

        img.onload = e => {
            setUrl(chrissPng)
            setPallete(colorThief.getPalette(img))
        }

    }

    const mouseHanlder = () => {
        const mouse = document.querySelector('.mouse')
        const socials = document.querySelectorAll('.social')
        for(const social of socials ){
            social.addEventListener("mouseover",(e)=>{
                mouse.classList.add('social-grow')
            })
            social.addEventListener("mouseleave",(e)=>{
                mouse.classList.remove('social-grow')
            })
        }
    }

    useEffect(()=>{
        if(!pallete[0]){
            loadImage()
        }
        mouseHanlder()
    },[pallete])

    return (
        <div className="home" >
            <div className="avatar">
                <section className="flex items-end justify-center transform: -translate-x-10">
                    <FiFacebook onClick={()=>window.open('https://web.facebook.com/christophe.kwizera.79')} size={20} className="social font-black" />
                    <FiTwitter onClick={()=>window.open('https://twitter.com/KabundegeC')} size={20} className="social mx-10 font-black" />
                    <FiInstagram onClick={()=>window.open('https://www.instagram.com/kabundege_christophe/')} size={20} className="social" />
                    <FiLinkedin onClick={()=>window.open('https://www.linkedin.com/in/christophe-kwizera-081123190/')} size={20} className="social mx-10 mr-7" />
                    <HiOutlineMail onClick={()=>window.open('mailto:christophekwizera1@gmail.com')} size={20} className="social font-black" />
                </section>
                { imgUrl && <img src={imgUrl} alt="" />}
                <div className="bg-green-500 pl-10"></div>
            </div>
            <div className="socials flex justify-between flex-1">
                <div className="content relative">
                    <strong className="uppercase mb-2 text-gray-900 md:mb-5 mr-auto font-semibold"> [ who i am ] </strong>
                    <h1 className="font-black text-2xl text-gray-900 md:text-4xl capitalize">
                        a human first, <br/>
                        full stack web <br/>
                        developer .
                    </h1>
                </div>
                <div className="medias h-full flex flex-col justify-end">
                    <FiDribbble onClick={()=>window.open('https://dribbble.com/kabundege')}  size={30} className="icon hover:text-green-400" />
                    <FaGithub onClick={()=>window.open('https://github.com/kabundege')} size={30} className="icon my-5 md:my-10"/>
                    <FaStackOverflow onClick={()=>window.open('https://stackoverflow.com/users/13124495/christopher?tab=profile')} size={30} className="icon hover:text-blue-600"/>
                    <span className="my-10 border-r-2 border-gray-700"></span>
                </div>
            </div>
        </div>
    )
}

export default Home
