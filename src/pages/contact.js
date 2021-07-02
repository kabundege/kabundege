import React,{ useState } from 'react'
import { AiFillPhone, AiFillMessage } from 'react-icons/ai'
import { FaStreetView,FaUserAlt,FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
// import {} from 'react-'

const Contacts = () =>{
    const [ state,setState ] = useState({})
    const { names,phone,message,email } = state;

    const handlerChange = (key,value) => {
        setState({ ...state,[key]:value })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div id="contact" className="flex flex-col">
            <div className="flex justify-between flex-1">
                
                <form className="pl-20 relative" handlerSubmit={handlerSubmit} >
                    <h1 className="font-black text-5xl text-gray-400">Say</h1>
                    <h2 className="font-black ml-3 -mt-2 text-5xl text-gray-900">Hello</h2>
                    <div style={{width:"60%"}} className="absolute h-1/2 border-b-2 border-l-2 border-green-100 bottom-0 bg-green-500 "></div>
                    <section className="mt-10 pl-10 relative" style={{width:"60%"}}>
                        <div className="flex justify-between item-center p-3 px-5 mb-5 rounded-sm shadow-lg bg-gray-900">
                            <FaUserAlt size={20} className="text-green-600" />
                            <input 
                                className="flex-1 text-gray-100 text-lg bg-transparent pl-3 outline-none"
                                value={names}
                                onChange={handlerChange}
                                placeholder="Names"
                                />
                        </div>
                        <div className="flex justify-between item-center p-3 px-5 mb-5 rounded-sm shadow-lg bg-gray-900">
                            <HiMail size={25} className="text-green-600" />
                            <input 
                                className="flex-1 bg-transparent text-gray-100 text-lg pl-3 outline-none"
                                value={email}
                                onChange={handlerChange}
                                placeholder="email"
                                />
                        </div>
                        <div className="flex transform trans justify-between item-center mb-5 p-3 px-5 rounded-sm shadow-lg bg-gray-900">
                            <FaPhoneAlt size={20} className="text-green-600" />
                            <input 
                                className="flex-1 bg-transparent pl-3 text-gray-100 text-lg outline-none"
                                value={names}
                                type="tel"
                                onChange={handlerChange}
                                placeholder="Phone Number"
                                />
                        </div>
                        <div className="flex transform trans justify-between item-center p-3 px-5 rounded-sm shadow-lg bg-gray-900">
                            <AiFillMessage size={20} className="text-green-600" />
                            <textarea 
                                className="flex-1 bg-transparent pl-3 text-gray-100 text-lg outline-none"
                                value={names}
                                maxLength={500}
                                type="tel"
                                onChange={handlerChange}
                                placeholder="Enter Your Message"
                                />
                        </div>
                        <button className="bg-gray-100 p-5 py-2 rounded-sm mt-10">
                            <span className="font-bold text-xl text-gray-600">
                                Send Message
                            </span>
                        </button>
                    </section>
                </form>
                <div className="sideImg relative">
                    <section className="w-full h-full px-2 relative flex flex-col justify-center items-start backdrop-filter backdrop-blur-xl">
                        <div className="contacts flex justify-between shadow-xl rounded-2xl backdrop-filter backdrop-blur-lg px-10 py-5 items-center">
                            <AiFillPhone size={30} color={"green"} />
                            <span className="text-xl ml-5 icon font-semibold text-gray-700">+250784824295</span>
                        </div>
                        <div className="contacts flex justify-between shadow-xl my-10 rounded-2xl backdrop-filter backdrop-blur-lg px-10 py-5 items-center">
                            <HiMail size={30} color={"green"} />
                            <span className="text-xl ml-5 icon font-semibold text-gray-700">Christophekwizera1@gmail.com</span>
                        </div>
                        <div className="contacts flex justify-between shadow-xl rounded-2xl backdrop-filter backdrop-blur-lg px-10 py-5 items-center">
                            <FaStreetView size={30} color={"green"} />
                            <span className="text-xl ml-5 icon font-semibold text-gray-700">kk 798 st</span>
                        </div>
                    </section>
                    <div className=""></div>
                </div>
        
            </div>
            <footer className="flex justify-center items-center p-10">
                <p className="text-gray-400 font-semibold"> &copy; All right  reserved {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Contacts