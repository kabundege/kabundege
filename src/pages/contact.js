import React,{ useState } from 'react'
import { AiFillPhone, AiFillMessage } from 'react-icons/ai'
import { FaStreetView,FaUserAlt,FaPhoneAlt,FaBullhorn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoIosSend } from 'react-icons/io'
import emailjs from 'emailjs-com'
import { MoonLoader } from 'react-spinners'

const Contacts = () =>{
    const [ state,setState ] = useState({})
    const [ loading,setLoader ] = useState(false)
    const { names,tel,message,email } = state;

    const handlerChange = (e) => {
        const { id,value } = e.target;
        setState({ ...state,[id]:value })
    }

    const handlerSubmit = async e => {
        e.preventDefault()

        if(names === "" || message === "" || email === "" || tel === ""){
            return alert("Missing Somthing !! ")
        }

        setLoader(true)
        
        const form = document.createElement('form');

        const namer = document.createElement('input');
        const mail = document.createElement('input');
        const phone = document.createElement('input');
        const msg = document.createElement('textarea');

        mail.setAttribute("type","email");
        namer.setAttribute("type","text");
        phone.setAttribute("type","hidden");
        
        msg.setAttribute("name","message");
        namer.setAttribute("name","user_name");
        mail.setAttribute("name","user_email");
        phone.setAttribute("name","contact_number")

        namer.setAttribute("value",names);
        mail.setAttribute("value", email);
        msg.value = message;
        phone.value = tel;

        form.appendChild(namer);
        form.appendChild(mail);
        form.appendChild(msg);
        form.appendChild(phone);

        emailjs.sendForm('service_obimj0r', 'template_56e2slm', form, 'user_XFX124IMCIBDKjJ1A8F9l')
        .then(() => {
            setState({
                name:"",
                email:"",
                tel:"",
                message:"",
            });
            setLoader(false)
        })
    }

    return(
        <div id="contact" className="flex relative flex-col">
            <div className="flex justify-between flex-1 relative z-10">
                <form className="pl-2 md:pl-20 relative" onSubmit={(e)=>handlerSubmit(e)} >
                    <h1 className="font-black text-5xl text-gray-400">Say</h1>
                    <h2 className="font-black ml-3 -mt-2 text-5xl text-gray-900">Hello</h2>
                    <div style={{height:"60%"}} className="absolute overlay border-b-2 border-l-2 bg-gray-400 border-green-100 bottom-0"></div>
                    <section className="md:mt-10 mt-24 py-6 md:pt-0 pl-0 md:pl-10 relative z-10">
                        <div className="flex justify-between item-center py-3 md:p-3 px-4 md:px-5 mb-3 md:mb-5 trans rounded-sm shadow-xl">
                            <FaUserAlt size={20} className="text-green-600" />
                            <input 
                                className="flex-1 text-gray-900 text-lg bg-transparent font-semibold pl-3 outline-none"
                                value={names}
                                id="names"
                                onChange={handlerChange}
                                placeholder="Names"
                            />
                        </div>
                        <div className="flex justify-between trans item-center md:p-3 py-4 md:px-5 px-2 mb-3 md:mb-5 rounded-sm shadow-xl">
                            <HiMail size={25} className="text-green-600 ml-1" />
                            <input 
                                className="flex-1 bg-transparent text-gray-900 text-lg font-semibold pl-2 outline-none"
                                value={email}
                                id="email"
                                onChange={handlerChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex transform trans justify-between item-center py-4 md:py-3 px-3 md:px-5 mb-3 md:mb-5 rounded-sm shadow-xl">
                            <FaPhoneAlt size={18} className="text-green-600" />
                            <input 
                                className="flex-1 bg-transparent pl-3 text-gray-900 font-semibold text-lg outline-none"
                                value={tel}
                                id="tel"
                                type="tel"
                                onChange={handlerChange}
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex transform trans justify-between item-center py-4 md:py-3 px-3 md:px-5 mb-3 md:mb-5 rounded-sm shadow-xl">
                            <AiFillMessage size={20} className="text-green-600" />
                            <textarea 
                                className="flex-1 bg-transparent pl-3 text-gray-900 font-semibold text-lg outline-none"
                                value={message}
                                maxLength={500}
                                id="message"
                                onChange={handlerChange}
                                placeholder="Enter Your Message"
                                />
                        </div>
                        <div className="flex justify-between items-center mt-20">
                            <div className="flex justify-between items-center">
                                <FaBullhorn size={20} className="text-green-600" />
                                <p className="text-gray-500 font-medium ml-2">Reply in 24hrs</p>
                            </div>
                            {
                                loading ? 
                                    <MoonLoader size={30} color={"white"} />:
                                    <button style={{cursor:"none"}} className="bg-gray-100 px-2 md:px-5 py-3 cursor-pointer  border-r-2 icon flex justify-between items-center border-green-900 rounded-sm transform md:translate-x-20 shadow-xl">
                                        <span className="font-bold text-base md:text-xl text-gray-600">
                                            Send Message
                                        </span>
                                        <IoIosSend size={20} className="text-gray-700 ml-3 mt-1 hover:text-pink-600" />
                                    </button>
                            }
                        </div>
                    </section>
                </form>
                <div className="sideImg relative" style={{flex:.43}}>
                    <section className="w-full h-full px-0 flex relative flex-col justify-center items-start">
                        <div className="flex justify-between px-10 py-5 items-center">
                            <FaStreetView size={30} className={"text-green-500 icon hover:text-pink-600"}  />
                            <span className="text-xl ml-10 icon uppercase font-bold text-gray-900">kk 798 st</span>
                        </div>
                        <div className="flex justify-between px-10 py-5 items-center">
                            <AiFillPhone size={30} className={"text-green-500 icon hover:text-pink-600"} />
                            <span className="text-xl ml-10 icon font-bold text-gray-900">+250784824295</span>
                        </div>
                        <div className="flex justify-between my-1  px-10 py-5 items-center">
                            <HiMail size={30} className={"text-green-500 icon hover:text-pink-600"} />
                            <span className="text-xl ml-10 icon font-bold text-gray-900">Christophekwizera1@gmail.com</span>
                        </div>
                    </section>
                </div>
            </div>
            <div style={{zIndex:0}} className="bg-green-500 w-1/3 h-full absolute right-1 bottom-0"></div>
            <footer className="flex justify-center items-center p-10">
                <p className="text-gray-400 font-semibold"> &copy; All right  reserved {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Contacts