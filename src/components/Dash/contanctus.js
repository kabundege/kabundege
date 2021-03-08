import emailjs from 'emailjs-com';
import React,{ Component } from 'react';
import '../../scss/components/contact.scss';

const { REACT_APP_PASSWORD,REACT_APP_EMAIL } = process.env

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
        this.setState({ loading:true })

        emailjs.sendForm('service_obimj0r', 'template_56e2slm', e.target, 'user_XFX124IMCIBDKjJ1A8F9l')
        .then((result) => {
            this.setState({
                name:"",
                email:"",
                tel:"",
                message:"",
                loading:false,
            });
            console.log("==========================",result.text);
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
                    <div className="input-filed">
                        <label>name</label>
                        <input type="text" id="name" name="user_name" value={name} onChange={this.handlerChange} />
                    </div>
                    <div className="input-filed">
                        <label>email</label>
                        <input type="text" id="email" name="contact_number" value={email} onChange={this.handlerChange} />
                    </div>
                    <div className="input-filed">
                        <label>phone</label>
                        <input type="tel"  id="tel" value={tel} onChange={this.handlerChange}/>
                    </div>
                    <div className="input-filed ">
                        <label>message</label>
                        <input type="text" name="user_email" id="message" value={message} onChange={this.handlerChange}/>
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
