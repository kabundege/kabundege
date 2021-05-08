import React from 'react';
import emailjs from 'emailjs-com';
import '../../scss/components/contact.scss';
import { AiOutlineMessage,AiOutlineUser,AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const { Component } = React;

export default class ContactUs extends Component {

    state={
        name:"",
        email:"",
        tel:"",
        message:"",
        loading:false,
    }

    handlerChange = e => {
        const { id,value } = e.target;
        this.setState({ [id]:value })
    } 

    handlerSubmit = async e => {
        e.preventDefault();
        this.setState({ loading:true });
        const { name,message,email,tel } = this.state;
        
        const form = document.createElement('form');

        const namer = await document.createElement('input');
        const mail = await document.createElement('input');
        const phone = await document.createElement('input');
        const msg = await document.createElement('textarea');

        await mail.setAttribute("type","email");
        await namer.setAttribute("type","text");
        await phone.setAttribute("type","hidden");
        
        await msg.setAttribute("name","message");
        await namer.setAttribute("name","user_name");
        await mail.setAttribute("name","user_email");
        await phone.setAttribute("name","contact_number")

        await namer.setAttribute("value",name);
        await mail.setAttribute("value", email);
        msg.value = message;
        phone.value = tel;

        await form.appendChild(namer);
        await form.appendChild(mail);
        await form.appendChild(msg);
        await form.appendChild(phone);

        emailjs.sendForm('service_obimj0r', 'template_56e2slm', form, 'user_XFX124IMCIBDKjJ1A8F9l')
        .then((result) => {
            this.setState({
                name:"",
                email:"",
                tel:"",
                message:"",
                loading:false,
            });
        }, (error) => {
            console.error(error);
            this.setState({ loading:false });
        });
    }

    render(){
        const { name,email,tel,message,loading } = this.state;
        return(
            <div className="contact">
                <div className="parent">
                </div>

                <h3>Contact Us <i className="fas fa-map-marker-alt"></i></h3>

                <form className="contact-form" onSubmit={this.handlerSubmit}>
                    <h4>Let's Talk</h4>
                    <div className="input-field">
                        <AiOutlineUser className="icon" size={20}/>
                        <input type="text" placeholder="Names" id="name" name="user_name" value={name} onChange={this.handlerChange} />
                    </div>
                    <div className="input-field">
                        <HiOutlineMail size={20} className="icon" />
                        <input type="email" placeholder="Email" id="email" name="user_email" value={email} onChange={this.handlerChange} />
                    </div>
                    <div className="input-field">
                        <AiOutlinePhone size={20} className="icon"/>
                        <input type="tel"  id="tel" placeholder="Telephone" value={tel} onChange={this.handlerChange}/>
                    </div>
                    <div className="input-field ">
                        <AiOutlineMessage size={20} className="icon"/>
                        <input type="text" name="user_email" placeholder="Message" id="message" value={message} onChange={this.handlerChange}/>
                    </div>
                    <footer>
                        <span><i className="fas fa-bullhorn"></i> reply in 24hrs</span>
                        <button> send Message { loading ? <i className="fas fa-spinner"></i>: <i className="fas fa-paper-plane"></i> }</button>
                    </footer>
                </form>
            </div>
        )
    }
}
