import React,{ useEffect } from 'react'
import { BiDevices } from 'react-icons/bi'
import { FaCode, FaFigma } from 'react-icons/fa'
import { GiVintageRobot } from 'react-icons/gi'
import { BsArrowRight } from 'react-icons/bs'
import { SiJavascript,SiPython } from 'react-icons/si'

const About = () =>{
    useEffect(() => {
        const tags = document.querySelectorAll('.card')
        const observer =  new IntersectionObserver(entries=>{
            for(const entry of entries){
                if(entry.intersectionRatio){
                    entry.target.style.animation =  "animDown 1s forwards ease-out"
                }else{
                    entry.target.style.animation = ""
                }
            }
        })
        
        for(const tag of tags){
            observer.observe(tag)
        }
    }, [])
    
    const data = [
        {
            title:"Product Design",
            tool: (color) => <FaFigma size={20} color={color} className="absolute top-5 right-5" />,
            icon: (color) => <BiDevices color={color} size={25} className="icon" />,
            current:true
        },
        {
            title:<>Front End <br/> Developer</>,
            tool:(color) => <SiJavascript color={color} size={20} className="absolute top-5 right-5" />,
            icon: (color) => <FaCode color={color} size={25} className="icon" />,
            current:false
        },
        {
            title:<>Machine <br/> learning</>,
            tool:(colors)=> <SiPython color={colors} size={20} className="absolute top-5 right-5" />,
            icon: (color) => <GiVintageRobot color={color} size={25} className="icon" />,
            current:false
        },
    ]
    
    return(
        <div id="about">
            <div className="mt-5 flex justify-end items-end relative">
                <h1 className="font-extrabold text-left capitalize text-4xl transform translate-y-40 -rotate-90 transparent-text">
                    what i Offer
                </h1>
            </div>
            <div className="flex px-10 justify-between h-full">    
                <section className=" flex flex-col justify-center px-10 items-center transform -translate-y-20">
                    <h1 className="font-black text-9xl text-green-700 tracking-tighter mb-10">5+</h1>
                    <h5 className="font-bold text-3xl text-gray-700 capitalize">
                        years <br/> experience <br/> working
                    </h5>
                </section>
                <section className="flex flex-col justify-around ">
                    <h3 className="font-bold text-3xl">
                        Products Design and Developer, specialized <br/>
                        In UI/UX and Machine Learning .
                    </h3>
                    <div className="flex">
                        {
                            React.Children.toArray(
                                data.map( one => 
                                    <div className={`${one.current ? "bg-green-500" : "bg-gray-300"} card relative shadow-md mx-5 w-60 h-60 p-5 flex flex-col justify-end items-start1`}>
                                        { one.icon( one.current ? 'white' : 'rgba(4, 120, 87,1)' ) }
                                        { one.tool( one.current ? '#333' : 'rgba(4, 120, 87,1)' ) }
                                        <h1 className="font-bold mt-5 text-xl">{one.title}</h1>
                                        {
                                            one.current &&
                                            <div className="flex items-end mt-3 hover:justfy-between transition-all">
                                                <p className="mr-3 font-thin">Discover More</p>
                                                <BsArrowRight size={20} opacity={.5} />
                                            </div>
                                        }
                                    </div>
                                )
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About