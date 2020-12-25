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
        e.preventDefault()
        const { email,name,tel,message } =this.state;
        this.setState({ loading:true })
        fetch('http://localhost:5000/mail',{
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify({
                        name,
                        message,
                        tel,
                        email,
                        owner_email: REACT_APP_EMAIL, 
                        owner_password: REACT_APP_PASSWORD
                    })
        })
        .then(res => res.json())
        .then(data => this.setState({
                name:"",
                email:"",
                tel:"",
                message:"",
                loading:false,
            })
        ).catch(err =>  this.setState({ loading:false }))
    }

    render(){
        const { name,email,tel,message,loading } = this.state;
        return(
            <div className="contact">
                <div className="parent">
                </div>

                <h3>Contact Us <i className="fas fa-map-marker-alt"></i></h3>

                <form onSubmit={this.handlerSubmit}>
                    <h4>Let's Talk</h4>
                    <div className="input-filed">
                        <label>name</label>
                        <input type="text" id="name" value={name} onChange={this.handlerChange} />
                    </div>
                    <div className="input-filed">
                        <label>email</label>
                        <input type="text" id="email" value={email} onChange={this.handlerChange} />
                    </div>
                    <div className="input-filed">
                        <label>phone</label>
                        <input type="tel"  id="tel" value={tel} onChange={this.handlerChange}/>
                    </div>
                    <div className="input-filed">
                        <label>message</label>
                        <input type="text" id="message" value={message} onChange={this.handlerChange}/>
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
